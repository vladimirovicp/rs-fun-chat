import "./app.scss";
import { NotFound } from "./view/not-found/not-found";
import { Authorization } from "./view/authorization/authorization";
import { About } from "./view/about/about";
import {MainView} from "./view/main/main-view";
import { CustomWebSocket } from "./common/custom-web-socket";
import onChange from "on-change";

class App {
    routes = [
        {path: "#auth", view: Authorization },
        {path: "#about", view: About },
        {path: "#main", view: MainView}
    ];

    stateUser = {
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
    }

    constructor(){  
        window.addEventListener('hashchange', this.route.bind(this));
        this.stateUser = onChange(this.stateUser, this.stateUserHook.bind(this));
        this.ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);
        this.route();
    }

    stateUserHook(path){
      if( path === 'usersActive' || path === 'usersInacrive'){
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView.redrawingSidebar();
        }
      }

      if( path === 'sendUser'){
        if(this.stateUser.sendUser){
          if( this.currentView.constructor.name === 'MainView'){
            this.currentView. isSendUser();

          }
        }
      }

      //Я отправляю сообщение
      if( path === 'mainLastMessage'){
        if(this.stateUser.mainLastMessage){
          if( this.currentView.constructor.name === 'MainView'){
            this.currentView.mainNewMessage(this.stateUser.mainLastMessage.payload.message);
          }
        }
      }

      if (path === 'currentReceivedMessage'){
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView.interlocutorNewMessage(this.stateUser.currentReceivedMessage.payload.message);
        }
      }

      if (path === 'historyWithUser'){
        const currerUser = (this.stateUser.historyWithUser.id).replace("history", "");
        if(currerUser === this.stateUser.sendUser){
          if( this.currentView.constructor.name === 'MainView'){
            this.currentView.updateMessageList(this.stateUser.historyWithUser);
          }
        } else{
          if( this.currentView.constructor.name === 'MainView'){
            this.currentView.updateSidebarMessageNumber(this.stateUser.historyWithUser);
          }
        }

      }

      if (path === 'notificationMessage'){
        if(this.stateUser.notificationMessage !== null){
          if( this.currentView.constructor.name === 'MainView'){
            this.currentView.updateMessageNumber(this.stateUser.notificationMessage);
            //this.currentView.updateMessageNumber(this.currentView.stateUser.notificationMessage);
          }
        }
      }

      if(path === 'msgRead'){
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView.interlocutorStatusMessage(this.stateUser.msgRead);
        }
      }
    }

    route(){
      const locationHash = location.hash;
      if(!locationHash || locationHash ==='#auth'){
        const userObject = sessionStorage.getItem('user');
        const user =  JSON.parse(userObject);

        if(user){
          location.hash = '#main';
        } else{
          location.hash = '#auth';
        }
      }

      const isPage = this.routes.some(r => r.path === location.hash);
      this.ws.connect().then((socket) => {
        if(isPage){
          const view = this.routes.find(r => r.path == location.hash).view;
          this.currentView = new view(socket,this.stateUser);
        }else{
          this.currentView = new NotFound();
        }
        this.currentView.render();
      });
    }
}


new App();