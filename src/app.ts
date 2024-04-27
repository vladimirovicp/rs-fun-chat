import "./app.scss";
import { NotFound } from "./view/not-found/not-found";
import { Authorization } from "./view/authorization/authorization";
import { About } from "./view/about/about";
import { MainView } from "./view/main/main-view";
import { CustomWebSocket } from "./common/custom-web-socket";
import onChange from "on-change";
import {State, DateMessage} from "./helpers/myTypes";
class App {
  routes = [
    {path: "#auth", view: Authorization }, 
    {path: "#about", view: About }, 
    {path: "#main", view: MainView}
  ];
    stateUser: State = {
      login: null,
      password: null,
      isLogined: false,
      usersActive: [],
      usersInacrive: [],
      sendUser: null,
      mainLastMessage: null,
      currentReceivedMessage: null,
      historyWithUser: null,
      notificationMessage : null,
      msgRead: null,
      msgDel: null,
      connection: false,
    };
    ws: CustomWebSocket;
    currentView: About | MainView | NotFound | null;

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.stateUser = onChange(this.stateUser, this.stateUserHook.bind(this));
    this.currentView = null;
    this.ws = new CustomWebSocket("ws://127.0.0.1:4000", this.stateUser);
    this.route();
  }

  stateUserHook(path:string) {
    if (path === "usersActive" || path === "usersInacrive") {
      if (this.currentView && this.currentView.constructor.name === "MainView") {
        if('redrawingSidebar' in this.currentView){
          this.currentView.redrawingSidebar();
        }
      }
    }

    if (path === "sendUser") {
      if (this.stateUser.sendUser) {
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('isSendUser' in this.currentView){
            this.currentView.isSendUser();
          }
        }
      }
    }

    //Я отправляю сообщение
    if (path === "mainLastMessage") {
      if (this.stateUser.mainLastMessage) {
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('mainNewMessage' in this.currentView){
          this.currentView.mainNewMessage(
            this.stateUser.mainLastMessage.payload.message,
          );
        }
        }
      }
    }

    if (path === "currentReceivedMessage") {
      if(this.stateUser.currentReceivedMessage){
        if (this.currentView &&  this.currentView.constructor.name === "MainView") {
          if('interlocutorNewMessage' in this.currentView){
            this.currentView.interlocutorNewMessage(
              this.stateUser.currentReceivedMessage.payload.message,
            );
          }
        }
      }
    }

    if (path === "historyWithUser") {
      const currerUser = this.stateUser.historyWithUser.id.replace(
        "history",
        "",
      );
      if (currerUser === this.stateUser.sendUser) {
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('updateMessageList' in this.currentView){
            this.currentView.updateMessageList(this.stateUser.historyWithUser);
          }
        }
      } else {
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('updateSidebarMessageNumber' in this.currentView){
            this.currentView.updateSidebarMessageNumber(
              this.stateUser.historyWithUser,
            );
          }
        }
      }
    }

    if (path === "notificationMessage") {
      if (this.stateUser.notificationMessage !== null) {
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('updateMessageNumber' in this.currentView){
            this.currentView.updateMessageNumber(
              this.stateUser.notificationMessage,
            );
          }
        }
      }
    }

    if (path === "msgRead") {
      if(this.stateUser.msgRead){
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('interlocutorStatusMessage' in this.currentView){
            this.currentView.interlocutorStatusMessage(this.stateUser.msgRead);
          }
        }
      }
    }

    if (path === "msgDel") {
      if(this.stateUser.msgDel){
        if (this.currentView && this.currentView.constructor.name === "MainView") {
          if('deleteMessage' in this.currentView){
            this.currentView.deleteMessage(this.stateUser.msgDel);
          }
        }
      }
    }
  }

  route() {
    const locationHash = location.hash;
    if (!locationHash || locationHash === "#auth") {
      const userObject = sessionStorage.getItem("user");
      const user = userObject ? JSON.parse(userObject) : 'default';

      if (user) {
        location.hash = "#main";
      } else {
        location.hash = "#auth";
      }
    }

    const isPage = this.routes.some((r) => r.path === location.hash);
    this.ws.connect().then((socket) => {
      if (isPage) {
        const view = this.routes.find((r) => r.path == location.hash)?.view;
        if(view){
          if(socket){
            this.currentView = new view(socket as WebSocket, this.stateUser);
          }
          
        }
        
      } else {
        this.currentView = new NotFound();
      }

      if(this.currentView){
        if('render' in this.currentView){
          this.currentView.render();
        }
      }
    });
  }
}
new App();
