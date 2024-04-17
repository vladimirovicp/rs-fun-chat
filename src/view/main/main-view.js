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

        main.append(new Body(this.ws,this.stateUser).render());
        main.append(new MessageBlock().render());

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

}