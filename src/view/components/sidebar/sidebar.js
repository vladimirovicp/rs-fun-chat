import { AbstractView } from '../../../common/view';
import "./styles.css";

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
            <h4 class='sidebar__header'>Пользователи:</h4>
            <ul class='sidebar__users'>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        `;

        let sidebarUsersList = '';

        for (let i = 0; i < this.stateUser.usersActive.length; i++) {
            sidebarUsersList += `<li>
                <div class="sidebar__user">
                    <div class="sidebar__user-status sidebar__user-active"></div>
                    <div class="sidebar__user-name">${this.stateUser.usersActive[i].login}</div>
                </div>
            </li>`;
          }

          for (let i = 0; i < this.stateUser.usersInacrive.length; i++) {
            sidebarUsersList += `<li>
                <div class="sidebar__user">
                    <div class="sidebar__user-status"></div>
                    <div class="sidebar__user-name">${this.stateUser.usersInacrive[i].login}</div>
                </div>
            </li>`;
          }

        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        sidebarUsers.innerHTML = sidebarUsersList;


        return sidebar;
    }
}