import { AbstractView } from '../../../common/view';
import "./styles.css";


import { fetchingMessageHistoryWithUser } from "../../../helpers/api";

export class Sidebar extends AbstractView{
    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const userObject = sessionStorage.getItem('user');
        const userName = JSON.parse(userObject).login;
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        sidebar.innerHTML = `
            <div class="sidebar__user-current">
                Вы вошли как: <span class="sidebar__user-current-name">${userName}</span></div>
            <div class="search__box">
                <input type="search" class="search__input" placeholder="Найти пользователя ...">
            </div>
            <h4 class='sidebar__header'>Пользователи:</h4>
            <ul class='sidebar__users'>
            </ul>
        `;
        let sidebarUsersList = '';

        console.log('this.stateUser.usersActive',this.stateUser.usersActive);

        for (let i = 0; i < this.stateUser.usersActive.length; i++) {

            //запросить историю для подсчета непрочитаных сообщений
            fetchingMessageHistoryWithUser(this.ws,this.stateUser.usersActive[i].login);

            sidebarUsersList += `<li>
                <div class="sidebar__user">
                    <div class="sidebar__user-status sidebar__user-active"></div>
                    <div class="sidebar__user-name">${this.stateUser.usersActive[i].login}</div>
                    <div class="sidebar__message-number"></div>
                </div>
            </li>`;
          }
          for (let i = 0; i < this.stateUser.usersInacrive.length; i++) {
            sidebarUsersList += `<li>
                <div class="sidebar__user">
                    <div class="sidebar__user-status"></div>
                    <div class="sidebar__user-name">${this.stateUser.usersInacrive[i].login}</div>
                    <div class="sidebar__message-number"></div>
                </div>
            </li>`;
          }
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        sidebarUsers.innerHTML = sidebarUsersList;
        return sidebar;
    }
}