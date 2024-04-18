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
    }

    constructor(){  
        window.addEventListener('hashchange', this.route.bind(this));
        this.stateUser = onChange(this.stateUser, this.stateUserHook.bind(this));
        this.route();
    }

    stateUserHook(path){
      if( path === 'usersActive' || path === 'usersInacrive'){
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView.redrawingSidebar();
        }
      }

      if( path === 'sendUser'){
        console.log('messageToUser');
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView. isSendUser();
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

       const ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);
       ws.connect().then((socket) => {
              if(isPage){
                const view = this.routes.find(r => r.path == location.hash).view;
                this.currentView = new view(socket,this.stateUser);
              }else{
                this.currentView = new NotFound();
              }
              this.currentView.render();
       })
    }
}


new App();