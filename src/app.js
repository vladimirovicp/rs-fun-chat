import "./app.scss";
import { NotFound } from "./view/not-found/not-found";
import { Authorization } from "./view/authorization/authorization";
import { About } from "./view/about/about";
import {MainView} from "./view/main/main-view";
import { CustomWebSocket } from "./common/custom-web-socket";
import { userAuthentication }from "./helpers/api";
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
      users: [],
      usersActive: false,
    }

    constructor(){  
        window.addEventListener('hashchange', this.route.bind(this));
        this.stateUser = onChange(this.stateUser, this.stateUserHook.bind(this));
        //this.ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);
        this.route();
    }

    stateUserHook(path){
      console.log('stateUserHook:', path);
      if( path === 'users'){
        if(this.currentView){
          this.currentView.redrawingSidebar();
        }
      }

      if (path === 'usersActive'){

        console.log('this.stateUser.usersActive', this.stateUser.usersActive);
          if(this.stateUser.usersActive){
            this.stateUser.usersActive = false;
            //userAuthentication(this.ws);
            if(this.currentView){
              this.currentView.redrawingSidebar();
            }
          }
      }
    }


    // waitCustomWebSocket(){
    //     return new Promise((resolve, reject) => {
    //         const ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);;
    //         resolve(ws);
    //     });
    // }


    route(){
      //const ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);

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

      //  this.waitCustomWebSocket().then((ws) => {

      //   if(isPage){
      //     const view = this.routes.find(r => r.path == location.hash).view;
      //     this.currentView = new view(ws,this.stateUser);
      //   }else{
      //     this.currentView = new NotFound();
      //   }
      //   this.currentView.render();
      //  })

/*
       if(isPage){
        // console.log('this.stateUser.login',this.stateUser.login);
        // console.log('this.stateUser.password',this.stateUser.password);
        
            // if(this.stateUser.login && this.stateUser.password){
            //   this.currentView = new MainView(this.ws,this.stateUser);
            // }

              const view = this.routes.find(r => r.path == location.hash).view;
              this.currentView = new view(ws,this.stateUser);

       } else{

        console.log('dffdfdfd');

            this.currentView = new NotFound();
       }
       this.currentView.render();

       */
    }
}


new App();