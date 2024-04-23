import { processingTypes } from '../helpers/control';

export class CustomWebSocket {
    constructor(url,stateUser) {
      this.url = url;
      this.socket = new WebSocket(this.url);
      this.connected = false;
      this.stateUser = stateUser;

      
      this.body = document.querySelector('body');
      this.body.innerHTML = `<div class="connect">
        <div class="connect__info">Соединение подождите 10с</div>
      </div>`;
      this.count = 0;
      
      this.socket.onopen = () => {
        console.log('Соединение установлено');
        this.connected = true;

        this.onOpenCallback();
      };
      
      this.socket.onmessage = (event) => {
        console.log('Получено сообщение: ' + event.data);
        processingTypes(event.data, this.stateUser, this.socket);
      };
      
      this.socket.onclose = () => {
        console.log('Соединение закрыто');
        this.reconnect();
      };
    }
    
    send(message) {
      this.socket.send(message);
    }
    
    close() {
      this.socket.close();
    }
    
    reconnect() {
      console.log('Попытка переподключения...');
      this.count += 1;
      this.body.innerHTML = `<div class="connect">
        <div class="connect__info">Попытка переподключения №${this.count}...</div>
      </div>`;
      this.socket = new WebSocket(this.url);
      
      this.socket.onopen = () => {
        this.count = 0;
        window.location.hash = '#';
        console.log('Соединение восстановлено');
      };
      
      this.socket.onmessage = (event) => {
        console.log('Получено сообщение: ' + event.data);
      };
      
      this.socket.onclose = () => {
        this.reconnect();
      };
    }

    onOpenCallback() {
      // Вызываем resolve для промиса после установления соединения
      if (this.resolve) {
          this.resolve(this.socket);
      }
    }

    connect() {
      return new Promise((resolve, reject) => {
          if (this.connected) {
              resolve(this.socket);
          } else {
              this.resolve = resolve;
              this.reject = reject;
          }
      });
    }

  }
  
  // Использование класса WebSocket
  const ws = new CustomWebSocket('ws://127.0.0.1:4000');