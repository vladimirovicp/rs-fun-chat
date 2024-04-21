import { AbstractView } from '../../common/view';

import { Sidebar } from '../components/sidebar/sidebar';
import { Body } from '../components/body/body';
import { MessageBlock } from '../components/message-block/message-block';
import { userAuthentication, gettingAllAuthenticatedUsers, fetchingMessageHistoryWithUser } from "../../helpers/api";
import ElementCreator from '../../util/element-creator';
import "./styles.css";

export class MainView extends AbstractView{
    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
        const userObject = sessionStorage.getItem('user');
        this.user = JSON.parse(userObject);
    }

    render(){

        if(this.user){
            if(!this.stateUser.isLogined){
                userAuthentication(this.ws); // Аутентификация пользователя
                this.stateUser.isLogined = true;
            }
            gettingAllAuthenticatedUsers(this.ws); //Получение всех аутентифицированных пользователей
        }

        if(!this.user){
            const pageName = document.createElement('div');
            pageName.classList.add('chat__noAuth');
            pageName.innerHTML = `<div class="chat__noAuth-container">
                <div class="chat__noAuth-text">Вы не авторизованы!</div>
                <a class="chat__noAuth-link" href="/">Перейти на страницу авторизации!</a>
            </div> `;
            this.app.innerHTML = '';
            this.app.append(pageName);
            return null;
        }

        const pageName = document.createElement('div');
        pageName.classList.add('chat');

        const sidebar = new Sidebar(this.ws,this.stateUser).render();
        pageName.append(sidebar);
        
        const main = document.createElement('main');
        main.classList.add('main');

        this.BodyClass = new Body(this.ws,this.stateUser);
        main.append(this.BodyClass.render());
        main.append(new MessageBlock(this.ws,this.stateUser).render());

        const footer = new ElementCreator({tag:'div', classNames:['chat__footer']}).getElement();
        footer.innerHTML = `
            <div class="chat__footer-rs"><img src="../img/rs-logo.webp">The Rolling Scopes School</div>
            <div>Git Hub: <a href="https://github.com/vladimirovicp">Vladimirovicp</a></div>
            <div>2024</div>
        `;
        main.append(footer);
        pageName.append(main);

        this.app.innerHTML = '';
        this.app.append(pageName);
    }

    redrawingSidebar(){
        const sidebar = this.app.querySelector('.sidebar');
        if(sidebar){
            const sidebarNew = new Sidebar(this.ws,this.stateUser).render();
            const sidebarStr = sidebarNew.innerHTML;
            sidebar.innerHTML = sidebarStr;

            this.searchUser(sidebar)
            this.clickUser(sidebar,this.stateUser);
        }
    }

    searchUser(sidebar){
        const searchInput = sidebar.querySelector('.search__input');
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();
            Array.from(items).forEach(function(item){
                const nameUser = item.querySelector('.sidebar__user-name').textContent.toLowerCase();
                if (nameUser.includes(searchText)){
                    item.style.display = 'block';
                } else{
                    item.style.display = 'none';
                }
            });
        });
    }

    clickUser(sidebar,stateUser) {
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            const sidebarUser = item.querySelector('.sidebar__user');
            sidebarUser.addEventListener('click', ()=>{
                const sidebarUserName = sidebarUser.querySelector('.sidebar__user-name').textContent;
                stateUser.sendUser = sidebarUserName;
            })
        });
    }

    isSendUser(){
        if(this.stateUser.sendUser){
            const sidebar = this.app.querySelector('.sidebar');
            const sidebarUsers = sidebar.querySelector('.sidebar__users');
            const items = sidebarUsers.getElementsByTagName('li');
            const bodyInfo = this.app.querySelector('.body__info');
            const activeUserName = bodyInfo.querySelector('.body__send-user-name');
            const activeUserStatus = bodyInfo.querySelector('.body__send-user-status');

            Array.from(items).forEach((item) => {
                const nameUser = item.querySelector('.sidebar__user-name').textContent;
                if( this.stateUser.sendUser === nameUser){
                    item.classList.add('active');
                    activeUserName.textContent = nameUser;
                    const sidebarUserStatus = item.querySelector('.sidebar__user-status');
                    if(sidebarUserStatus.classList.contains('sidebar__user-active')){
                        activeUserStatus.innerHTML = `<span class="status-active">В сети</span>`
                    } else{
                        activeUserStatus.innerHTML = `<span>Не в сети</span>`;
                    }
                }else{
                    if(item.classList.contains('active')){
                        item.classList.remove('active');
                    }
                }
            });

            // активный интуп для отправки сообщений
            const userMessage = this.app.querySelector('.userMessage');
            userMessage.removeAttribute('disabled'); 

            //Получение истории сообщений пользователя
            fetchingMessageHistoryWithUser(this.ws,this.stateUser.sendUser);
        }
    }

    //Появление сообщений, которые отправил я!
    mainNewMessage(dateMessage){
        const bodyContainer = this.app.querySelector('.body__container');
        const noneMessage = bodyContainer.querySelector('.none-message');
        if(noneMessage){
            bodyContainer.innerHTML = '';
        }
        const date =  this.formateDate(dateMessage.datetime);
        const statusMessage = dateMessage.status.isReaded ? 'прочитано' : 'доставлено';
        const editMessage = dateMessage.status.isEdited ? 'изменено' : null;

        const bodyChatsSender = this.BodyClass.createChatsSender(dateMessage.text,date,statusMessage,editMessage);
        bodyContainer.innerHTML += bodyChatsSender.getElement().outerHTML;

        // Проверяем, нужно ли прокручивать вниз
        if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
            bodyContainer.scrollTo({
                top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
                behavior: 'smooth'
            });
        }
    }

    //Появления сообщения присланного мне!
    interlocutorNewMessage(dateMessage){

        //let isNewMessage = false;
        const bodyContainer = this.app.querySelector('.body__container');
        const noneMessage = bodyContainer.querySelector('.none-message');
        if(noneMessage){
            bodyContainer.innerHTML = '';
        }
        const date =  this.formateDate(dateMessage.datetime);
        const isNewMessage = bodyContainer.querySelector('.body__chats-not-read');
        console.log(isNewMessage);
        if(!isNewMessage){
            if(!dateMessage.status.isReaded){
                bodyContainer.innerHTML += `<div class="body__chats body__chats-not-read">
                    <span>Новые сообщения</span>
                </div>`;

                //ждем клика для смены статуса
                const mainBox = this.app.querySelector('.main');
                const notReadBox = bodyContainer.querySelector('.body__chats-not-read');
                //const parentElement = notReadBox.parentNode;

                const changeStatusMainFun = this.changeStatusMain;
                function changeStatus(){
                    console.log('changeStatus');//changeStatusMain
                    changeStatusMainFun(); // меняем статусы на моей страничке
                   mainBox.removeEventListener('click', changeStatus);
                }
                mainBox.addEventListener('click', changeStatus);
            }
        }
        const bodyChatsRecipent = this.BodyClass.createChatsRecipent(dateMessage.text,date,this.stateUser.sendUser);
        bodyContainer.innerHTML += bodyChatsRecipent.getElement().outerHTML;

        if(isNewMessage){
            //Прокрутка до непрочитаного сообщения
           const notRead = bodyContainer.querySelector('.body__chats-not-read');
           notRead.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else{
            // Проверяем, нужно ли прокручивать вниз
            if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
                bodyContainer.scrollTo({
                    top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
                    behavior: 'smooth'
                });
            } 
        }
    }

    formateDate(timestamp){
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }

    updateMessageList(message){
        const bodyContainer = this.app.querySelector('.body__container');
        bodyContainer.innerHTML = '';
        const messages = message.payload.messages;

        if(messages.length === 0){
            bodyContainer.innerHTML = `<div class="none-message">Напишите ваше первое сообщение...</div>`;
        } else{
            let isNewMessage = false;
            messages.forEach( item => {
                if( this.stateUser.sendUser === item.from){
                    //отправленные сообщения мной, появится у собеседника
                    this.interlocutorNewMessage(item,isNewMessage);
    
                } else{
                    ////отправленные сообщения мне
                    this.mainNewMessage(item);
                }
            });
        }
    }

    //обновление непрочитанных сообщений
    updateMessageNumber(userSender){
        const sidebarUsers = this.app.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            const nameUser = item.querySelector('.sidebar__user-name').textContent;
            if (nameUser === userSender){
                const sidebarMessageNumber =  item.querySelector('.sidebar__message-number');
                const sidebarMessageNumberIsSpan = sidebarMessageNumber.innerHTML;
                if(sidebarMessageNumberIsSpan){
                    const sidebarMessageNumberSpan = sidebarMessageNumber.querySelector('span');
                    sidebarMessageNumberSpan.textContent = String(Number(sidebarMessageNumberSpan.textContent) + 1);
                } else {
                    sidebarMessageNumber.innerHTML = '<span>1</span>';
                }
            }
        });


    }

    changeStatusMain(){
        console.log('changeStatusMain');

        const bodyContainer = document.querySelector('.body__container');
        const notRead = bodyContainer.querySelector('.body__chats-not-read');

        if(notRead){
            notRead.remove();

            //удалить оповещение у нужного пользователя

            //отправить сообщение, что статус сменился
        }

        

    }

}