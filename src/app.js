import "./app.scss";
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
        this.socket = this.createWebSocket();
        this.route();   
    }

    createWebSocket(){
      const socket = new WebSocket('ws://127.0.0.1:4000');
      
      socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
        setTimeout(() => {
            this.createWebSocket();
        }, 3000);
      });

      return socket;

    }

    async route(){
       const isPage = this.routes.some(r => r.path === location.hash);
       if(isPage){
            const view = this.routes.find(r => r.path == location.hash).view;
            this.currentView = new view(this.socket);
       } else{
            this.currentView = new NotFound();
       }
       this.currentView.render();
    }
}

// socket.onopen = function(e) {
//   console.log("[open] Соединение установлено");
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//   } else {
//     // например, сервер убил процесс или сеть недоступна
//     // обычно в этом случае event.code 1006
//     console.log('[close] Соединение прервано');
//   }
// };

// socket.addEventListener('open', () => {
//   console.log('подключено!');
// })

new App();