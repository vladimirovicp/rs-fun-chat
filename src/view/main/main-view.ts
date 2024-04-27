import { AbstractView } from "../../common/view";

import { Sidebar } from "../components/sidebar/sidebar";
import { Body } from "../components/body/body";
import { MessageBlock } from "../components/message-block/message-block";
import {
  userAuthentication,
  gettingAllAuthenticatedUsers,
  fetchingMessageHistoryWithUser,
  messageReadStatusChange,
  messageDeletion,
} from "../../helpers/api";
import ElementCreator from "../../util/element-creator";
import "./styles.css";
import {State, DateMessage} from "../../helpers/myTypes";


export class MainView extends AbstractView {
  private ws: WebSocket;
  private stateUser:State;
  private user: string;
  private BodyClass: any;

  constructor(ws: WebSocket, stateUser:State) {
    super();
    this.ws = ws;
    this.stateUser = stateUser;
    const userObject = sessionStorage.getItem("user");
    this.user = userObject ? JSON.parse(userObject) : 'default';

    this.BodyClass = null;
  }

  render() {
    if (this.user) {
      if (!this.stateUser.isLogined) {
        userAuthentication(this.ws); // Аутентификация пользователя
        this.stateUser.isLogined = true;
      }
      gettingAllAuthenticatedUsers(this.ws); //Получение всех аутентифицированных пользователей
    }

    if (!this.user) {
      const pageName = document.createElement("div");
      pageName.classList.add("chat__noAuth");
      pageName.innerHTML = `<div class="chat__noAuth-container">
                <div class="chat__noAuth-text">Вы не авторизованы!</div>
                <a class="chat__noAuth-link" href="/rs-fun-chat/">Перейти на страницу авторизации!</a>
            </div> `;
      this.app.innerHTML = "";
      this.app.append(pageName);
      return null;
    }

    const pageName = document.createElement("div");
    pageName.classList.add("chat");

    const sidebar = new Sidebar(this.ws, this.stateUser).render();
    pageName.append(sidebar);

    const main = document.createElement("main");
    main.classList.add("main");

    this.BodyClass = new Body(this.ws, this.stateUser);
    main.append(this.BodyClass.render() as HTMLElement);
    main.append(new MessageBlock(this.ws, this.stateUser).render());

    const footer = new ElementCreator({
      tag: "div",
      classNames: ["chat__footer"],
    }).getElement();

    if(footer){
      footer.innerHTML = `
        <div class="chat__footer-rs"><img src="./img/rs-logo.webp">The Rolling Scopes School</div>
        <div>Git Hub: <a href="https://github.com/vladimirovicp">Vladimirovicp</a></div>
        <div>2024</div>
      `;
      main.append(footer);
    }

    pageName.append(main);

    this.app.innerHTML = "";
    this.app.append(pageName);
  }

  redrawingSidebar() {
    const sidebar = this.app.querySelector(".sidebar") as HTMLElement;
    if (sidebar) {
      const sidebarNew = new Sidebar(this.ws, this.stateUser).render();
      const sidebarStr = sidebarNew.innerHTML;
      sidebar.innerHTML = sidebarStr;

      this.searchUser(sidebar);
      this.clickUser(sidebar, this.stateUser);
    }
  }

  searchUser(sidebar: HTMLElement) {
    const searchInput = sidebar.querySelector(".search__input") as HTMLInputElement;
    const sidebarUsers = sidebar.querySelector(".sidebar__users") as HTMLElement;
    const items = sidebarUsers.getElementsByTagName("li");
    searchInput.addEventListener("input", (e) => {
      const searchText = searchInput.value.toLowerCase();
      Array.from(items).forEach(function (item) {
        
        const myItem = item.querySelector(".sidebar__user-name") as HTMLElement;
        if(myItem){
          const nameUserText = myItem.textContent;
          if(nameUserText){
            const nameUser = nameUserText.toLowerCase();
            if (nameUser.includes(searchText)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        }
      });
    });
  }

  clickUser(sidebar: HTMLElement, stateUser:State) {
    const sidebarUsers = sidebar.querySelector(".sidebar__users")as HTMLElement;
    const items = sidebarUsers.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
      const sidebarUser = item.querySelector(".sidebar__user") as HTMLElement;
      sidebarUser.addEventListener("click", () => {
        const sidebarUserName = (sidebarUser.querySelector(
          ".sidebar__user-name",
        ) as HTMLElement).textContent;
        stateUser.sendUser = sidebarUserName;
      });
    });
  }

  isSendUser() {
    if (this.stateUser.sendUser) {
      const sidebar = this.app.querySelector(".sidebar") as HTMLElement;;
      const sidebarUsers = sidebar.querySelector(".sidebar__users") as HTMLElement;;
      const items = sidebarUsers.getElementsByTagName("li");
      const bodyInfo = this.app.querySelector(".body__info") as HTMLElement;
      const activeUserName = bodyInfo.querySelector(".body__send-user-name") as HTMLElement;
      const activeUserStatus = bodyInfo.querySelector(
        ".body__send-user-status",
      ) as HTMLElement;

      Array.from(items).forEach((item) => {
        const nameUser = (item.querySelector(".sidebar__user-name") as HTMLElement).textContent;
        if (this.stateUser.sendUser === nameUser) {
          item.classList.add("active");
          activeUserName.textContent = nameUser;
          const sidebarUserStatus = item.querySelector(".sidebar__user-status") as HTMLElement;;
          if (sidebarUserStatus.classList.contains("sidebar__user-active")) {
            activeUserStatus.innerHTML = `<span class="status-active">В сети</span>`;
          } else {
            activeUserStatus.innerHTML = `<span>Не в сети</span>`;
          }
        } else {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          }
        }
      });

      // активный интуп для отправки сообщений
      const userMessage = this.app.querySelector(".userMessage") as HTMLInputElement;
      userMessage.removeAttribute("disabled");

      //Получение истории сообщений пользователя
      fetchingMessageHistoryWithUser(this.ws, this.stateUser.sendUser);
    }
  }

  //Появление сообщений, которые отправил я!
  mainNewMessage(dateMessage: DateMessage) {
    const bodyContainer = this.app.querySelector(".body__container") as HTMLElement;;
    const noneMessage = bodyContainer.querySelector(".none-message");
    if (noneMessage) {
      bodyContainer.innerHTML = "";
    }
    const date = this.formateDate(dateMessage.datetime);
    const statusMessage = dateMessage.status.isReaded
      ? "прочитано"
      : "доставлено";
    const editMessage = dateMessage.status.isEdited ? "изменено" : null;

    const bodyChatsSender = this.BodyClass.createChatsSender(
      dateMessage.text,
      date,
      statusMessage,
      editMessage,
      dateMessage.id,
    );

    const bodyChatsSenderBox = bodyChatsSender.getElement() as HTMLElement;

    //const bodyMessageSenderText = bodyChatsSenderBox.querySelector('p')

    bodyChatsSenderBox.addEventListener("contextmenu", (event) => {
      const self = this;
      event.preventDefault();
      const bodyContainer = document.querySelector(".body__container") as HTMLElement;
      const contextmenu = bodyContainer.querySelector(".body__context-menu");

      if (contextmenu) {
        contextmenu.remove();
      }

      bodyChatsSenderBox.innerHTML += `
            <div class="body__context-menu">
                <ul>
                    <li class="message__edit">Изменить</li>
                    <li class="message__delete">Удалить</li>
                </ul>
            </div>`;

      const contextmenuNew = bodyChatsSenderBox.querySelector(
        ".body__context-menu",
      ) as HTMLElement;
      bodyChatsSenderBox.addEventListener("click", (e) => {
        
        

        if (bodyChatsSenderBox.textContent && bodyChatsSenderBox.textContent.trim() === "Удалить") {
          //Удалить
          messageDeletion(self.ws, dateMessage.id);
          bodyChatsSenderBox.remove();
        }
        contextmenuNew.remove();
      });
    });

    bodyContainer.append(bodyChatsSenderBox);

    // Проверяем, нужно ли прокручивать вниз
    if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
      bodyContainer.scrollTo({
        top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
        behavior: "smooth",
      });
    }
  }

  //Появления сообщения присланного мне!
  interlocutorNewMessage(dateMessage: DateMessage) {
    const bodyContainer = this.app.querySelector(".body__container") as HTMLElement;;
    const noneMessage = bodyContainer.querySelector(".none-message");
    if (noneMessage) {
      bodyContainer.innerHTML = "";
    }
    const date = this.formateDate(dateMessage.datetime);
    const isNewMessage = bodyContainer.querySelector(".body__chats-not-read");
    if (!isNewMessage) {
      if (!dateMessage.status.isReaded) {
        bodyContainer.innerHTML += `<div class="body__chats body__chats-not-read">
                    <span>Новые сообщения</span>
                </div>`;

        //ждем клика для смены статуса
        const mainBox = this.app.querySelector(".main") as HTMLElement;
        const notReadBox = bodyContainer.querySelector(".body__chats-not-read");
        const bodyContainerWheel = this.app.querySelector(".body__container") as HTMLElement;

        const changeStatusMainFun = this.changeStatusMain;
        const mainWs = this.ws;
        function changeStatus(e: Event) {
          const el = e.target as HTMLElement;
          if (el.classList.contains("btn")) {
            changeStatusMainFun(mainWs); // меняем статусы на моей страничке
          }
          mainBox.removeEventListener("click", changeStatus);
          bodyContainerWheel.removeEventListener("wheel", changeStatus);
        }

        mainBox.addEventListener("click", changeStatus);
        bodyContainerWheel.addEventListener("wheel", changeStatus);
      }
    }

    const bodyChatsRecipent = this.BodyClass.createChatsRecipent(
      dateMessage.text,
      date,
      this.stateUser.sendUser,
      dateMessage.id,
    );
    bodyContainer.innerHTML += bodyChatsRecipent.getElement().outerHTML;

    if (isNewMessage) {
      //Прокрутка до непрочитаного сообщения
      const notRead = bodyContainer.querySelector(".body__chats-not-read") as HTMLElement;
      notRead.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Проверяем, нужно ли прокручивать вниз
      if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
        bodyContainer.scrollTo({
          top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
          behavior: "smooth",
        });
      }
    }
  }

  formateDate(timestamp: string) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }

  updateMessageList(message: any) {
    const bodyContainer = this.app.querySelector(".body__container") as HTMLElement;
    bodyContainer.innerHTML = "";
    const messages = message.payload.messages;

    if (messages.length === 0) {
      bodyContainer.innerHTML = `<div class="none-message">Напишите ваше первое сообщение...</div>`;
    } else {
      let isNewMessage = false;
      messages.forEach((item:any) => {
        if (this.stateUser.sendUser === item.from) {
          //отправленные сообщения мной, появится у собеседника
          this.interlocutorNewMessage(item);
        } else {
          ////отправленные сообщения мне
          this.mainNewMessage(item);
        }
      });
    }
  }

  //обновление непрочитанных сообщений
  updateMessageNumber(userSender:string) {
    const sidebarUsers = this.app.querySelector(".sidebar__users") as HTMLElement;
    const items = sidebarUsers.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
      const nameUser = (item.querySelector(".sidebar__user-name") as HTMLElement).textContent;
      if (nameUser === userSender) {
        const sidebarMessageNumber = item.querySelector(
          ".sidebar__message-number",
        ) as HTMLElement;
        const sidebarMessageNumberIsSpan = sidebarMessageNumber.innerHTML;
        if (sidebarMessageNumberIsSpan) {
          const sidebarMessageNumberSpan = sidebarMessageNumber.querySelector("span") as HTMLElement;
          sidebarMessageNumberSpan.textContent = String(
            Number(sidebarMessageNumberSpan.textContent) + 1,
          );
        } else {
          sidebarMessageNumber.innerHTML = "<span>1</span>";
        }
      }
    });
  }

  changeStatusMain(ws:WebSocket) {
    const bodyContainer = document.querySelector(".body__container") as HTMLSpanElement;
    const notRead = bodyContainer.querySelector(".body__chats-not-read");

    if (notRead) {
      //удалить оповещение у нужного пользователя
      const sidebarUsers = document.querySelector(".sidebar__users") as HTMLElement;
      const items = sidebarUsers.getElementsByTagName("li");
      Array.from(items).forEach(function (item) {
        if (item.classList.contains("active")) {
          const sidebarMessageNumber = item.querySelector(
            ".sidebar__message-number",
          ) as HTMLElement;
          sidebarMessageNumber.innerHTML = "";
        }
      });

      if (notRead) {
        var elementsAfterReference = [];
        var nextElement = notRead.nextElementSibling;
        while (nextElement) {
          elementsAfterReference.push(nextElement);
          nextElement = nextElement.nextElementSibling;
        }
        elementsAfterReference.forEach((el: any) => {
          messageReadStatusChange(ws, el.dataset.id);
        });
      }

      notRead.remove();
    }
  }

  // при загрузке показывает количество сообщения, которые не прочитаны
  updateSidebarMessageNumber(historyWithUser:{id:string, payload: {messages:[]}}) {
    if (historyWithUser.payload.messages.length > 0) {
      const userObject = sessionStorage.getItem("user");
      const userName = userObject ? JSON.parse(userObject).login : 'default';

      const currerUser = this.stateUser.historyWithUser.id.replace(
        "history",
        "",
      );
      const sidebarUsers = document.querySelector(".sidebar__users") as HTMLElement;
      const items = sidebarUsers.getElementsByTagName("li");
      Array.from(items).forEach(function (item) {
        const sidebarUserNameText = (item.querySelector(
          ".sidebar__user-name",
        ) as HTMLElement).textContent;

        if (sidebarUserNameText === currerUser) {
          let countNotRead = 0;
          historyWithUser.payload.messages.forEach((el:{
            to:string,
            status:{isReaded:boolean}
          }) => {
            if (el.to === userName) {
              if (el.status.isReaded === false) {
                countNotRead += 1;
              }
            }
          });
          if (countNotRead !== 0) {
            const sidebarMessageNumber = item.querySelector(
              ".sidebar__message-number",
            ) as HTMLElement;
            sidebarMessageNumber.innerHTML = `<span>${countNotRead}</span>`;
          }
        }
      });
    }
  }

  interlocutorStatusMessage(data:{
    id: string,
    status: {
      isReaded: boolean,
    }
  }) {
    const id = data.id;
    const isReaded = data.status.isReaded;

    if (isReaded) {
      if (this.stateUser.sendUser) {
        const bodyContainer = this.app.querySelector(".body__container") as HTMLElement;
        const bodyChatsSender = bodyContainer.querySelectorAll(
          ".body__chats-sender",
        );

        bodyChatsSender.forEach((el:any) => {
          if (el.dataset.id === id) {
            const bodyMessageSenderStatus = el.querySelector(
              ".body__messageSender-status",
            );
            bodyMessageSenderStatus.textContent = "прочитано";
          }
        });
      }
    }
  }

  deleteMessage(data:{
    id: string,
    status: {
      isDeleted: boolean,
    }
  }) {
    const id = data.id;
    if (this.stateUser.sendUser) {
      const bodyContainer = this.app.querySelector(".body__container") as HTMLElement;
      const bodyChatsRecipent = bodyContainer.querySelectorAll(
        ".body__chats-recipent",
      );
      bodyChatsRecipent.forEach((el:any) => {
        if (el.dataset.id === id) {
          //найден
          el.remove();
        }
      });
    }
  }
}
