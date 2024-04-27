import { AbstractView } from "../../../common/view";
import "./styles.css";
import {State} from "../../../helpers/myTypes";
import { fetchingMessageHistoryWithUser } from "../../../helpers/api";

export class Sidebar extends AbstractView {
  private ws: WebSocket;
  private stateUser:State;

  constructor(ws: WebSocket, stateUser:State) {
    super();
    this.ws = ws;
    this.stateUser = stateUser;
  }

  render() {
    const userObject = sessionStorage.getItem("user");
    const userName = userObject ? JSON.parse(userObject).login : 'defaul';

    
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
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
    let sidebarUsersList = "";

    for (let i = 0; i < this.stateUser.usersActive.length; i++) {
      //запросить историю для подсчета непрочитаных сообщений
      const currentusersActive =  this.stateUser.usersActive[i].login as String;
      fetchingMessageHistoryWithUser(
        this.ws,
        currentusersActive,
      );

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
    const sidebarUsers = sidebar.querySelector(".sidebar__users") as HTMLElement;
    sidebarUsers.innerHTML = sidebarUsersList;
    return sidebar;
  }
}
