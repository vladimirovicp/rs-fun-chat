import { AbstractView } from '../../common/view';

import { Sidebar } from '../components/sidebar/sidebar';
import { Body } from '../components/body/body';
import { MessageBlock } from '../components/message-block/message-block';
import { userAuthentication, gettingAllAuthenticatedUsers } from "../../helpers/api";
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
                stateUser.sendUser = sidebarUserName.trim();
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
        }
    }

    mainNewMessage(dateMessage){
        console.log('newMessage',dateMessage);

        // text: text,
        // datetime: datetime

        const bodyContainer = this.app.querySelector('.body__container');

        //console.log('Body',this.BodyClass.constructor.name);

        const bodyChatsSender = this.BodyClass.createChatsSender(dateMessage.text,dateMessage.date);

       bodyContainer.innerHTML += bodyChatsSender.getElement().outerHTML;
        
    }

}