import "./app.scss";
import { NotFound } from "./view/not-found/not-found";
import { Authorization } from "./view/authorization/authorization";
import { About } from "./view/about/about";
import {MainView} from "./view/main/main-view";
import { CustomWebSocket } from "./common/custom-web-socket";

import onChange from "on-change";

class App {

    routes = [
        {path: "", view: Authorization },
        {path: "#auth", view: Authorization },
        {path: "#about", view: About },
        {path: "#main", view: MainView}
    ];

    stateUser = {
      login: null,
      password: null,
    }

    constructor(){  
        window.addEventListener('hashchange', this.route.bind(this));
        this.stateUser = onChange(this.stateUser, this.stateUserHook.bind(this));

        this.ws = new CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);
        this.route();   
    }

    stateUserHook(path){
      console.log('stateUserHook:', path);
    }


    async route(){
       const isPage = this.routes.some(r => r.path === location.hash);
       if(isPage){
            const view = this.routes.find(r => r.path == location.hash).view;
            this.currentView = new view(this.ws,this.stateUser);
       } else{
            this.currentView = new NotFound();
       }
       this.currentView.render();
    }
}


new App();