import "./app.css";
import { NotFound } from "./view/not-found/not-found";
import { Authorization } from "./view/authorization/authorization";
import { About } from "./view/about/about";
import {MainView} from "./view/main/main-view";

class App {
    routes = [
        {path: "", view: Authorization },
        {path: "#auth", view: Authorization },
        {path: "#about", view: About },
        {path: "#main", view: MainView}
    ];

    constructor(){
        window.addEventListener('hashchange', this.route.bind(this));
        this.route(); 
    }

    async route(){
       const isPage = this.routes.some(r => r.path === location.hash);
       if(isPage){
            const view = this.routes.find(r => r.path == location.hash).view;
            this.currentView = new view();
       } else{
            this.currentView = new NotFound();
       }
       this.currentView.render();
    }
}

new App();

console.log("123");

// {
//     id: string,
//     type: "USER_LOGOUT",
//     payload: {
//       user: {
//         login: string,
//         password: string,
//       }
//     }
//   }


/*

const user1 = {
    id: '1',
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: 'test',
        password: 'test',
      }
    }
  };


  const ws = new WebSocket('ws://127.0.0.1:4000');

  ws.addEventListener('open', () => {

    //console.log("открылось");

    //console.log(ws.send(JSON.stringify(user1)));

  });
  */