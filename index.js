/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view/about/style.css":
/*!**********************************!*\
  !*** ./src/view/about/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/components/body/styles.css":
/*!*********************************************!*\
  !*** ./src/view/components/body/styles.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/components/message-block/styles.css":
/*!******************************************************!*\
  !*** ./src/view/components/message-block/styles.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/components/sidebar/styles.css":
/*!************************************************!*\
  !*** ./src/view/components/sidebar/styles.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/main/styles.css":
/*!**********************************!*\
  !*** ./src/view/main/styles.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/not-found/styles.css":
/*!***************************************!*\
  !*** ./src/view/not-found/styles.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/authorization/authorization.scss":
/*!***************************************************!*\
  !*** ./src/view/authorization/authorization.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/custom-web-socket.js":
/*!*****************************************!*\
  !*** ./src/common/custom-web-socket.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomWebSocket: () => (/* binding */ CustomWebSocket)
/* harmony export */ });
/* harmony import */ var _helpers_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/control */ "./src/helpers/control.js");


class CustomWebSocket {
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
        (0,_helpers_control__WEBPACK_IMPORTED_MODULE_0__.processingTypes)(event.data, this.stateUser, this.socket);
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

/***/ }),

/***/ "./src/common/view.js":
/*!****************************!*\
  !*** ./src/common/view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractView: () => (/* binding */ AbstractView)
/* harmony export */ });
class AbstractView{
    constructor(){
        this.app = document.querySelector('body');
    }
}

/***/ }),

/***/ "./src/helpers/api.js":
/*!****************************!*\
  !*** ./src/helpers/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchingMessageHistoryWithUser: () => (/* binding */ fetchingMessageHistoryWithUser),
/* harmony export */   gettingAllAuthenticatedUsers: () => (/* binding */ gettingAllAuthenticatedUsers),
/* harmony export */   gettingAllUnauthorizedUsers: () => (/* binding */ gettingAllUnauthorizedUsers),
/* harmony export */   messageDeletion: () => (/* binding */ messageDeletion),
/* harmony export */   messageReadStatusChange: () => (/* binding */ messageReadStatusChange),
/* harmony export */   messageTextEditing: () => (/* binding */ messageTextEditing),
/* harmony export */   notificationMessageDeliveryStatusChange: () => (/* binding */ notificationMessageDeliveryStatusChange),
/* harmony export */   sendingMessageUser: () => (/* binding */ sendingMessageUser),
/* harmony export */   userAuthentication: () => (/* binding */ userAuthentication),
/* harmony export */   userLogout: () => (/* binding */ userLogout)
/* harmony export */ });
//Аутентификация пользователя
const userAuthentication = async(ws) => {
  const userObject = sessionStorage.getItem('user');
  const user =  JSON.parse(userObject);
    const data = {
        id: user.login,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: user.login,
            password: user.password,
          },
        },
      };
    ws.send(JSON.stringify(data));
}

//Выход пользователя из системы
const userLogout = (ws,stateUser) => {
  const userObject = sessionStorage.getItem('user');
  const user =  JSON.parse(userObject);
  const data = {
    id: user.login,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: user.login,
        password: user.password,
      }
    }
  }
  sessionStorage.removeItem('user');
  stateUser.isLogined = false;
  ws.send(JSON.stringify(data));
  window.location.hash = '#auth';
}

//?? Аутентификация пользователя третьей стороной
// Серверное приложение
const thirdPartyUserAuthentication = () => {
  /*
    {
      id: null,
      type: "USER_EXTERNAL_LOGIN",
      payload: {
        user: {
          login: string,
          isLogined: boolean,
        }
      }
    }
  */

  /*
    id - идентификатор запроса, сгенерированный сервером
    login - имя пользователя, вошедшего в систему
    isLogined - текущий статус аутентификации пользователя
  */

}

//?? Выход стороннего пользователя из системы
// Серверное приложение
const thirdPartyUserLogout = () =>{
  /*
    {
      id: null,
      type: "USER_EXTERNAL_LOGOUT",
      payload: {
        user: {
          login: string,
          isLogined: boolean,
        }
      }
    }
  */

    /*
    id - идентификатор запроса, сгенерированный сервером
    login - имя пользователя, вышедшего из приложения
    isLogined - текущий статус аутентификации пользователя
    */


}

//Получение всех аутентифицированных пользователей
const gettingAllAuthenticatedUsers = (ws) =>{
  const data = {
    id: 'allAuthUser',
    type: "USER_ACTIVE",
    payload: null,
  }
  ws.send(JSON.stringify(data));
}

//Получение всех неавторизованных пользователей
const gettingAllUnauthorizedUsers = (ws) => {
  const data = {
    id: 'allUnautUser',
    type: "USER_INACTIVE",
    payload: null,
  }
  ws.send(JSON.stringify(data));
}

//Отправка сообщения пользователю
const sendingMessageUser = (ws,textMessage,toUser) =>{
  const userObject = sessionStorage.getItem('user');
  const user =  JSON.parse(userObject);
    const data = {
      id: user.login,
      type: "MSG_SEND",
      payload: {
        message: {
          to: toUser,
          text: textMessage,
        }
      }
    }
    ws.send(JSON.stringify(data));
    /*
      id - идентификатор запроса
      login - логин пользователя, которому отправляется сообщение
      text - текст сообщения
    */
}

//?? Получение сообщения от пользователя
// Серверное приложение
const receivingMessageFromUser = () => {
  /*
      {
      id: null,
      type: "MSG_SEND",
      payload: {
        message: {
          id: string,
          from: string,
          to: string,
          text: string,
          datetime: number,
          status: {
            isDelivered: boolean,
            isReaded: boolean,
            isEdited: boolean,
          }
        }
      }
    }
  */

    /*
      id - идентификатор запроса, сгенерированный сервером
        message - поле сообщения пользователя, где:
        id - идентификатор сообщения
        from - отправитель сообщения
        to - получатель сообщения
        text - текст сообщения
        datetime - дата и время отправки сообщения
        isDelivered - статус, который указывает, доставлено ли сообщение получателю
        isReaded - статус, который указывает, было ли сообщение прочитано получателем
        isEdited - статус, который указывает, было ли сообщение отредактировано отправителем
    */
}

//Получение истории сообщений пользователя
const fetchingMessageHistoryWithUser = (ws,login) => {
  const data = {
    id: `history${login}`,
    type: "MSG_FROM_USER",
    payload: {
      user: {
        login: login,
      }
    }
  };

  ws.send(JSON.stringify(data));
  /**
   *  id - идентификатор запроса
      login - имя пользователя, от которого запрашивается история сообщений
    */
}

//?? Уведомление об изменении статуса доставки сообщения
// Серверное приложение
const notificationMessageDeliveryStatusChange = () => {
  // {
  //   id: null,
  //   type: "MSG_DELIVER",
  //   payload: {
  //     message: {
  //       id: string,
  //       status: {
  //         isDelivered: boolean,
  //       }
  //     }
  //   }
  // }

  /**
   *  id - идентификатор запроса, сгенерированный сервером
      message - поле сообщения пользователя, где:
      id - идентификатор сообщения
      isDelivered - статус, который указывает, доставлено ли сообщение получателю
   */


}

//Изменение статуса прочтения сообщения
const messageReadStatusChange = (ws,idMessage) => {
    const data = {
      id: `mainMSG_READ`,
      type: "MSG_READ",
      payload: {
        message: {
          id: idMessage,
        }
      }
    };
    ws.send(JSON.stringify(data));

} 

//?? Удаление сообщения
const messageDeletion = () => {

  /**
   * {
        id: string,
        type: "MSG_DELETE"
        payload: {
          message: {
            id: string,
          }
        }
      }
   */


  /**
   * 
   * id - идентификатор запроса
      message - поле сообщения пользователя, где:
      id - идентификатор сообщения
   */

}

//?? Уведомление об удалении сообщения
// Инициатор: Серверное приложение
const notificationMessageDeletion = () => {

}

//Редактирование текста сообщения
const messageTextEditing = () =>{
  /**
   * {
        id: string,
        type: "MSG_EDIT"
        payload: {
          message: {
            id: string,
            text: string
          }
        }
      }
   */

      /**
       * id - идентификатор запроса
            message - поле сообщения пользователя, где:
            id - идентификатор сообщения
            text - текст сообщения
       */
}







/***/ }),

/***/ "./src/helpers/control.js":
/*!********************************!*\
  !*** ./src/helpers/control.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processingTypes: () => (/* binding */ processingTypes)
/* harmony export */ });
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/api */ "./src/helpers/api.js");


const processingTypes = (message,stateUser,ws) =>{
    const messageJson = JSON.parse(message);
    const type = messageJson.type;

    if(type === 'USER_LOGIN'){
      window.location.hash = '#main';
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllAuthenticatedUsers)(ws); // Получение всех аутентифицированных пользователей
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllUnauthorizedUsers)(ws); // Получение всех неавторизованных пользователей
    }

    if(type === 'ERROR'){
      alert(messageJson.payload.error);
    }

    if(type === 'USER_LOGOUT'){
      window.location.hash = '';
    }

    //Аутентификация пользователя третьей стороной
    if(type === 'USER_EXTERNAL_LOGIN'){
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllAuthenticatedUsers)(ws); // Получение всех аутентифицированных пользователей
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllUnauthorizedUsers)(ws); // Получение всех неавторизованных пользователей
    }

    if(type === 'USER_EXTERNAL_LOGOUT'){
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllAuthenticatedUsers)(ws); // Получение всех аутентифицированных пользователей
      (0,_helpers_api__WEBPACK_IMPORTED_MODULE_0__.gettingAllUnauthorizedUsers)(ws); // Получение всех неавторизованных пользователей
    }

    //Получение всех аутентифицированных пользователей
    if(type === 'USER_ACTIVE'){
      const usersList = messageJson.payload.users;
      const currentUserObj = sessionStorage.getItem('user');
      const currentUserName = JSON.parse(currentUserObj).login;
      // Находим индекс объекта в списке
      const indexToDelete = usersList.findIndex(obj => obj.login === currentUserName);
      if (indexToDelete !== -1) {
        usersList.splice(indexToDelete, 1);
      }
      stateUser.usersActive = usersList;
    }

    //Получение всех неавторизованных пользователей
    if(type === 'USER_INACTIVE'){
      stateUser.usersInacrive = messageJson.payload.users;
    }

    //Получение сообщения от пользователя
    if(type === 'MSG_SEND'){
      const from = messageJson.payload.message.from;
      const to = messageJson.payload.message.to;
      const currentUserObj = sessionStorage.getItem('user');
      const currentUserName = JSON.parse(currentUserObj).login;

      const text = messageJson.payload.message.text;
      const datetime = messageJson.payload.message.datetime;

      if(currentUserName === from) {
        // stateUser.mainLastMessage = {
        //   text: text,
        //   datetime: datetime,
        // };
        stateUser.mainLastMessage = messageJson;
      }

      if(currentUserName === to) {
        if(stateUser.sendUser === from){
          // stateUser.currentReceivedMessage={
          //   text: text,
          //   datetime: datetime,
          // };
          stateUser.currentReceivedMessage=messageJson;
        }
          // получатель я от from
          if (stateUser.notificationMessage === from){
            stateUser.notificationMessage = null;
            stateUser.notificationMessage = from;
          } else {
            stateUser.notificationMessage = from;
          }
      }

    }

    //Получение истории сообщений пользователя
    if(type === 'MSG_FROM_USER'){
      stateUser.historyWithUser = messageJson;
    }


    if(type === 'MSG_READ'){
      //сменился статус у сообщения
      stateUser.msgRead = messageJson.payload.message;
    }

    

    
}





/***/ }),

/***/ "./src/helpers/svg.js":
/*!****************************!*\
  !*** ./src/helpers/svg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorizationIco: () => (/* binding */ authorizationIco)
/* harmony export */ });
const authorizationIco = `<svg id="svg-source" height="0" version="1.1"  xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute">
 <g id="man-people-user" data-iconmelon="Streamline Icon Set:de32eb2621491c1a881a9fe846236da1">
    <g id="Expanded">
      <g>
        <g>
          <path  d="M16.028,20c-4.764,0-8.639-4.486-8.639-10s3.875-10,8.639-10c4.763,0,8.638,4.486,8.638,10
				S20.791,20,16.028,20z M16.028,1.333C12,1.333,8.722,5.221,8.722,10s3.277,8.667,7.306,8.667c4.029,0,7.306-3.888,7.306-8.667
				S20.057,1.333,16.028,1.333z"></path>
        </g>
      <g>
         <path  d="M31.988,32H0.012v-4.515c0-1.967,1.245-3.733,3.097-4.395l8.224-2.266v-2.77h1.333v3.785L3.51,24.361
				c-1.275,0.458-2.165,1.72-2.165,3.124v3.182h29.309v-3.182c0-1.404-0.889-2.666-2.213-3.139l-9.107-2.506v-3.758h1.332v2.742
				l8.178,2.251c1.9,0.677,3.145,2.442,3.145,4.409V32z"></path>
       </g>
       <g>
                    <path  d="M21.865,8.812c-0.045,0-0.09-0.001-0.137-0.003c-1.5-0.055-3.25-1.004-4.361-2.287
				C16.59,7.513,15.48,8.15,14.106,8.383c-2.403,0.413-5.152-0.51-5.988-1.321l0.928-0.957c0.403,0.391,2.69,1.329,4.836,0.964
				c1.332-0.226,2.292-0.911,2.854-2.034l0.558-1.114l0.617,1.082c0.738,1.292,2.508,2.425,3.867,2.475
				c0.604,0.016,1.033-0.165,1.307-0.571l1.105,0.745C23.686,8.403,22.863,8.812,21.865,8.812z"></path>
                  </g>
                </g>
              </g>
            </g>
            <g id="lock-locker" data-iconmelon="Streamline Icon Set:5d43c6f45cdbecfd5b8a12bc9e5dd33c">
              <g id="Expanded">
                <g>
                  <g>
                    <circle  cx="16" cy="20" r="1.333"></circle>
                  </g>
          <g>
              <path  d="M16,25.333c-0.369,0-0.667-0.298-0.667-0.666v-4C15.333,20.298,15.631,20,16,20s0.667,0.298,0.667,0.667
				v4C16.667,25.035,16.369,25.333,16,25.333z"></path>
          </g>
          <g>
            <path  d="M28,32H4V12h24V32z M5.333,30.667h21.333V13.333H5.333V30.667z"></path>
        </g>
        <g>
         <path  d="M24,12.667h-1.333V8c0-3.676-2.991-6.667-6.667-6.667c-3.676,0-6.667,2.99-6.667,6.667v4.667H8V8
				c0-4.412,3.588-8,8-8c4.411,0,8,3.588,8,8V12.667z"></path>
           </g>
        </g>
      </g>
   </g>
</svg>`;



/***/ }),

/***/ "./src/util/element-creator.js":
/*!*************************************!*\
  !*** ./src/util/element-creator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementCreator)
/* harmony export */ });
class ElementCreator {
    constructor(params) {
        this.element = null;
        this.createElement(params);
    }

    getElement() {
        return this.element;
    }

    addInnerElement(element) {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    createElement(params) {
        this.element = document.createElement(params.tag);
        this.setCssClasses(params.classNames);
        this.setTextContent(params.textContent);
        this.setCallback(params.callback);
        this.setId(params.id);
        this.setAttr(params.attr);
        this.addData(params.idData);
    }

    setId(id) {
        if(id){
            this.element.setAttribute('id', id);
        }
    }

    setCssClasses(cssClasses = []) {
        cssClasses.map((cssClass) => this.element.classList.add(cssClass));
    }

    setAttr(attr = {}){
        for (let i = 0; i < Object.keys(attr).length; i += 1) {
            const key = Object.keys(attr)[i];
            this.element.setAttribute(key, attr[key]);
          }
    }

    setTextContent(text = '') {
        this.element.textContent = text;
    }

    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }

    addData(idData){
        if(idData){
            this.element.dataset.id = idData;
        }
    }
    
}

/***/ }),

/***/ "./src/view/about/about.js":
/*!*********************************!*\
  !*** ./src/view/about/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/view */ "./src/common/view.js");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/element-creator */ "./src/util/element-creator.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/view/about/style.css");




class About extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
    render(){

        // const main = document.createElement('h1');
        // main.innerHTML = 'About';
        // this.app.innerHTML = '';
        // this.app.append(main);

        const about = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'div', classNames:['about']});
        const container = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'div', classNames:['about__container']});
        const title = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'h1', classNames:['about__title'], textContent: 'Супер чат!'});
        const info = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'p', classNames:['about__info'], textContent: 'Приложение разработано в рамках курса RSSchool JS/FE 2023Q3'});
        const autor =  new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'p', classNames:['about__info'], textContent: 'Автор: vladimirovicp'});
        const bodyBtn = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({
            tag:'button', 
            classNames:['btn','form__btn'], 
            textContent: 'Вернуться назад',
            callback: () =>{
                window.location.hash = '#auth';
            }
        });

        container.addInnerElement(title);
        container.addInnerElement(info);
        container.addInnerElement(autor);
        container.addInnerElement(bodyBtn);

        about.addInnerElement(container);

        this.app.innerHTML = '';
        this.app.append(about.getElement());


    }
}

/***/ }),

/***/ "./src/view/authorization/authorization.js":
/*!*************************************************!*\
  !*** ./src/view/authorization/authorization.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Authorization: () => (/* binding */ Authorization)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/view */ "./src/common/view.js");
/* harmony import */ var _authorization_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.scss */ "./src/view/authorization/authorization.scss");
/* harmony import */ var _helpers_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/svg */ "./src/helpers/svg.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api */ "./src/helpers/api.js");





class Authorization extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
    constructor(ws,stateUser){
        super();
        this.stateUser = stateUser;
        this.ws = ws;
    }

    render(){
        const pageAuth = document.createElement('div');
        pageAuth.classList.add('page-auth');
        pageAuth.innerHTML = `
        <div class='container'>
            <div class="wrapper">
                <form action="#" class="auth__form">
                    <div class="form__user-name">
                        <label class="user" for="name">
                            <svg viewBox="0 0 32 32">
                                <use xlink:href="#man-people-user"></use>
                            </svg>
                        </label>
                        <input 
                            class="user-name" 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="My name is" 
                            required: "required" 
                            minlength: "4" 
                            pattern: "^[A-Z][a-zA-Z\\-]+$"  />
                        <span class="user-error"></span>
                    </div>
                    <div class="form__user-password">
                        <label class="lock" for="password">
                            <svg viewBox="0 0 32 32">
                                <g filter="">
                                    <use xlink:href="#lock-locker"></use>
                                </g>
                            </svg>  
                        </label>
                        <input type="password" name="password" class="user-password" placeholder="My password is"/>
                        <span class="password-error"></span>
                    </div>
                    <input type="submit" value="Sign in" class="sign-in" disabled/>
                </form>
                <a href="#about" class="btn form__btn">about</a>
            </div>
            ${_helpers_svg__WEBPACK_IMPORTED_MODULE_2__.authorizationIco}
        </div`;


        //!!!!!!!!!!!!!! Потом Включи валидацию!!!!
        // добавь <input type="submit" value="Sign in" class="sign-in" disabled />
        this.validateInput(pageAuth);


        const signIn = pageAuth.querySelector('.sign-in');
        signIn.addEventListener('click', (e) => {
            e.preventDefault();
            this.btnClick(pageAuth);
        });

        this.app.innerHTML = '';
        this.app.append(pageAuth);
    }

    btnClick(el){
        const userName = el.querySelector('.user-name');
        const userPas = el.querySelector('.user-password');
        const userNameVal = userName.value;
        const userPasVal = userPas.value;
        sessionStorage.setItem('user', JSON.stringify({login: userNameVal, password: userPasVal}));
        this.stateUser.isLogined = true;
        (0,_helpers_api__WEBPACK_IMPORTED_MODULE_3__.userAuthentication)(this.ws);
    }

    validateInput(pageAuth){
        let nameBool = false;
        let passBool = false;
        const signIn = pageAuth.querySelector('.sign-in');
        const formUserName = pageAuth.querySelector('.form__user-name');
        const userError = formUserName.querySelector('.user-error');
        const userName = formUserName.querySelector('.user-name');
        userName.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value){
                if( value[0] !== value[0].toUpperCase()){
                    userError.innerHTML = 'Первая буква в Имени должно быть заглавной!'; 
                    nameBool= false; 
                    activeSignIn();
                } else{
                    if(value.length < 4){
                        userError.innerHTML = 'Символов в Имени должно быть больше 3!';
                        nameBool=false;
                        activeSignIn();
                    } else{
                        userError.innerHTML = '';
                        nameBool=true;
                        activeSignIn();
                    }
                }
            } else{
                userError.innerHTML = '';
            }

        });

        const formUserPassword =  pageAuth.querySelector('.form__user-password');
        const passwordError = formUserPassword.querySelector('.password-error');
        const userPassword = formUserPassword.querySelector('.user-password');
        userPassword.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value){
                if( value.length < 4 ){
                    console.log(value.length);
                    passwordError.innerHTML = 'Символов в пароле должно быть больше 3!';
                    passBool = false;
                    activeSignIn();
                } else{
                    passwordError.innerHTML = ``;

                    if(!/[0-9]+/.test(value)){
                        passwordError.innerHTML = 'В пароле должна быть хоть одна цифра!';
                    } else{
                        passBool = true;
                        activeSignIn();
                    }
                }
            } else {
                passwordError.innerHTML = '';
            }
        });

        const activeSignIn = () => {
            if (nameBool && passBool){
                signIn.removeAttribute('disabled');

                // document.addEventListener('keydown', (e) =>{
                //     if (e.key === 'Enter'){
                //         if(signIn.disabled){
                //             //this.btnClick();
                //             console.log('Enter');
                //         }
                //     }
                // });

            } else{
                signIn.setAttribute('disabled', 'disabled');
            }
        };
    }
}

/***/ }),

/***/ "./src/view/components/body/body.js":
/*!******************************************!*\
  !*** ./src/view/components/body/body.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Body: () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/view */ "./src/common/view.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/api */ "./src/helpers/api.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/view/components/body/styles.css");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/element-creator */ "./src/util/element-creator.js");





class Body extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView{

    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const container = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['main__container']});
        const bodyHeader = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'header', classNames:['body__header']});
        const bodyBtn = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({
            tag:'button', 
            classNames:['btn','body__btn','body__btn-chat'], 
            textContent: 'Покинуть чат',
            callback: () =>{
                (0,_helpers_api__WEBPACK_IMPORTED_MODULE_1__.userLogout)(this.ws,this.stateUser);
            }
        });

        const nameChat = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__name-chat'], textContent: 'Супер чат!'});
        const aboutBtn = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({
            tag:'button', 
            classNames:['btn','body__btn','body__btn-about'], 
            textContent: 'About',
            callback: () =>{
                window.location.hash = '#about';
            }
        });

        bodyHeader.addInnerElement(nameChat);
        bodyHeader.addInnerElement(aboutBtn);
        bodyHeader.addInnerElement(bodyBtn);
        container.addInnerElement(bodyHeader);


        const bodyInfo = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__info']});
        const sendUserName = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__send-user-name']});
        const sendUserStatus = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__send-user-status']});
        bodyInfo.addInnerElement(sendUserName);
        bodyInfo.addInnerElement(sendUserStatus);
        container.addInnerElement(bodyInfo);

        const bodyContainer = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__container']});
        const noneMessage = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['none-message'],textContent:'Выберите пользователя для отправки сообщения...'});
        bodyContainer.addInnerElement(noneMessage);
        
        container.addInnerElement(bodyContainer);

        return container.getElement();
    }

    createChatsSender(message,date,statusMessage,editMessage,idMessage){
        const bodyChatsSender = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__chats','body__chats-sender'],idData: idMessage});
        const bodyChatsSenderInfo = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames: ['body__chats-info'] });
        const bodyChatsSenderName = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames: ['body__chats-name'], textContent: 'Вы'});
        const bodyChatsSenderDate = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames: ['body__chats-date'], textContent: date});
        bodyChatsSenderInfo.addInnerElement(bodyChatsSenderName);
        bodyChatsSenderInfo.addInnerElement(bodyChatsSenderDate);

        bodyChatsSender.addInnerElement(bodyChatsSenderInfo);
        const bodyChatsSenderMessage = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__messageSender']});
        const bodyChatsSenderMessageP = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'p', textContent: message});
        bodyChatsSenderMessage.addInnerElement(bodyChatsSenderMessageP);
        bodyChatsSender.addInnerElement(bodyChatsSenderMessage);
        const bodyChatsSenderMessageStatuses = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'p', classNames:['body__messageSender-statuses']});
        const editMessageText = editMessage ? editMessage : '';
        const bodyChatsSenderMessageEdit = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames:['body__messageSender-edit'], textContent: editMessageText});
        bodyChatsSenderMessageStatuses.addInnerElement(bodyChatsSenderMessageEdit);
        
        const bodyChatsSenderMessageStatus = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames:['body__messageSender-status'], textContent: statusMessage});
        bodyChatsSenderMessageStatuses.addInnerElement(bodyChatsSenderMessageStatus);

        bodyChatsSender.addInnerElement(bodyChatsSenderMessageStatuses);


        return bodyChatsSender;
    }

    createChatsRecipent(message,date,userRecipent,idMessage){
        const bodyChatsRecipent = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__chats', 'body__chats-recipent'], idData: idMessage});
        const bodyChatsRecipentInfo = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames: ['body__chats-info'] });
        const bodyChatsRecipentName = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames: ['body__chats-name'], textContent: userRecipent});
        const bodyChatsRecipentDate = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'span', classNames: ['body__chats-date'], textContent: date});
        bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentName);
        bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentDate);
        bodyChatsRecipent.addInnerElement(bodyChatsRecipentInfo);
        const bodyChatsRecipentMessage = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'div', classNames:['body__messageRecipent']});
        const bodyChatsRecipentMessageP = new _util_element_creator__WEBPACK_IMPORTED_MODULE_3__["default"]({tag:'p', textContent: message});
        bodyChatsRecipentMessage.addInnerElement(bodyChatsRecipentMessageP);
        bodyChatsRecipent.addInnerElement(bodyChatsRecipentMessage);

        return bodyChatsRecipent;
    }


}

/***/ }),

/***/ "./src/view/components/message-block/message-block.js":
/*!************************************************************!*\
  !*** ./src/view/components/message-block/message-block.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBlock: () => (/* binding */ MessageBlock)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/view */ "./src/common/view.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/view/components/message-block/styles.css");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/element-creator */ "./src/util/element-creator.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/api */ "./src/helpers/api.js");

//import styles from "./styles.module.css";




class MessageBlock extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView{

    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const messageBlock = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"]({tag:'div', classNames:['messageBlock']});
        const form = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"]({tag:'form', classNames:['form']});
        const input = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"]({
            tag:'input', 
            classNames:['userMessage'], 
            attr:{type:"text",disabled: 'disabled'},
        });
        const button = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"]({
            tag:'button', 
            classNames:['btn'], 
            attr:{disabled: 'disabled'},
            textContent: 'Отправить',
        });
        form.addInnerElement(input);
        form.addInnerElement(button);
        messageBlock.addInnerElement(form);
        const messageContainer = messageBlock.getElement();

        this.trackInput(messageContainer);
        this.btnClick(messageContainer);

        
        return messageContainer;
    }

    trackInput(messageContainer){
        const userMessage = messageContainer.querySelector('.userMessage');
        const btn = messageContainer.querySelector('.btn');
        userMessage.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value.length > 0){
                btn.removeAttribute('disabled');
            } else{
                btn.setAttribute('disabled', 'disabled');
            }
        });
    }

    btnClick(messageContainer){
        const userMessage = messageContainer.querySelector('.userMessage');
        const btn = messageContainer.querySelector('.btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const messaage = userMessage.value;
            userMessage.value = '';
            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_3__.sendingMessageUser)(this.ws,messaage,this.stateUser.sendUser);

        });
    }
}

/***/ }),

/***/ "./src/view/components/sidebar/sidebar.js":
/*!************************************************!*\
  !*** ./src/view/components/sidebar/sidebar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/view */ "./src/common/view.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/view/components/sidebar/styles.css");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/api */ "./src/helpers/api.js");






class Sidebar extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView{
    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const userObject = sessionStorage.getItem('user');
        const userName = JSON.parse(userObject).login;
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
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
        let sidebarUsersList = '';

        console.log('this.stateUser.usersActive',this.stateUser.usersActive);

        for (let i = 0; i < this.stateUser.usersActive.length; i++) {

            //запросить историю для подсчета непрочитаных сообщений
            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_2__.fetchingMessageHistoryWithUser)(this.ws,this.stateUser.usersActive[i].login);

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
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        sidebarUsers.innerHTML = sidebarUsersList;
        return sidebar;
    }
}

/***/ }),

/***/ "./src/view/main/main-view.js":
/*!************************************!*\
  !*** ./src/view/main/main-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainView: () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/view */ "./src/common/view.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar/sidebar */ "./src/view/components/sidebar/sidebar.js");
/* harmony import */ var _components_body_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/body/body */ "./src/view/components/body/body.js");
/* harmony import */ var _components_message_block_message_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/message-block/message-block */ "./src/view/components/message-block/message-block.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/api */ "./src/helpers/api.js");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/element-creator */ "./src/util/element-creator.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/view/main/styles.css");









class MainView extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView{
    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
        const userObject = sessionStorage.getItem('user');
        this.user = JSON.parse(userObject);
    }

    render(){

        if(this.user){
            if(!this.stateUser.isLogined){
                (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.userAuthentication)(this.ws); // Аутентификация пользователя
                this.stateUser.isLogined = true;
            }
            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.gettingAllAuthenticatedUsers)(this.ws); //Получение всех аутентифицированных пользователей
        }

        if(!this.user){
            const pageName = document.createElement('div');
            pageName.classList.add('chat__noAuth');
            pageName.innerHTML = `<div class="chat__noAuth-container">
                <div class="chat__noAuth-text">Вы не авторизованы!</div>
                <a class="chat__noAuth-link" href="/rs-fun-chat/">Перейти на страницу авторизации!</a>
            </div> `;
            this.app.innerHTML = '';
            this.app.append(pageName);
            return null;
        }

        const pageName = document.createElement('div');
        pageName.classList.add('chat');

        const sidebar = new _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar(this.ws,this.stateUser).render();
        pageName.append(sidebar);
        
        const main = document.createElement('main');
        main.classList.add('main');

        this.BodyClass = new _components_body_body__WEBPACK_IMPORTED_MODULE_2__.Body(this.ws,this.stateUser);
        main.append(this.BodyClass.render());
        main.append(new _components_message_block_message_block__WEBPACK_IMPORTED_MODULE_3__.MessageBlock(this.ws,this.stateUser).render());

        const footer = new _util_element_creator__WEBPACK_IMPORTED_MODULE_5__["default"]({tag:'div', classNames:['chat__footer']}).getElement();
        footer.innerHTML = `
            <div class="chat__footer-rs"><img src="./img/rs-logo.webp">The Rolling Scopes School</div>
            <div>Git Hub: <a href="https://github.com/vladimirovicp">Vladimirovicp</a></div>
            <div>2024</div>
        `;
        main.append(footer);
        pageName.append(main);

        this.app.innerHTML = '';
        this.app.append(pageName);
    }

    redrawingSidebar(){

        console.log('redrawingSidebar')

        const sidebar = this.app.querySelector('.sidebar');
        if(sidebar){
            const sidebarNew = new _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar(this.ws,this.stateUser).render();

            console.log('sidebarNew',sidebarNew)

            const sidebarStr = sidebarNew.innerHTML;
            sidebar.innerHTML = sidebarStr;

            this.searchUser(sidebar)
            this.clickUser(sidebar,this.stateUser);
        }
    }

    searchUser(sidebar){
        const searchInput = sidebar.querySelector('.search__input');
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();
            Array.from(items).forEach(function(item){
                const nameUser = item.querySelector('.sidebar__user-name').textContent.toLowerCase();
                if (nameUser.includes(searchText)){
                    item.style.display = 'block';
                } else{
                    item.style.display = 'none';
                }
            });
        });
    }

    clickUser(sidebar,stateUser) {
        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            const sidebarUser = item.querySelector('.sidebar__user');
            sidebarUser.addEventListener('click', ()=>{
                const sidebarUserName = sidebarUser.querySelector('.sidebar__user-name').textContent;
                stateUser.sendUser = sidebarUserName;
            })
        });
    }

    isSendUser(){
        if(this.stateUser.sendUser){
            const sidebar = this.app.querySelector('.sidebar');
            const sidebarUsers = sidebar.querySelector('.sidebar__users');
            const items = sidebarUsers.getElementsByTagName('li');
            const bodyInfo = this.app.querySelector('.body__info');
            const activeUserName = bodyInfo.querySelector('.body__send-user-name');
            const activeUserStatus = bodyInfo.querySelector('.body__send-user-status');

            Array.from(items).forEach((item) => {
                const nameUser = item.querySelector('.sidebar__user-name').textContent;
                if( this.stateUser.sendUser === nameUser){
                    item.classList.add('active');
                    activeUserName.textContent = nameUser;
                    const sidebarUserStatus = item.querySelector('.sidebar__user-status');
                    if(sidebarUserStatus.classList.contains('sidebar__user-active')){
                        activeUserStatus.innerHTML = `<span class="status-active">В сети</span>`
                    } else{
                        activeUserStatus.innerHTML = `<span>Не в сети</span>`;
                    }
                }else{
                    if(item.classList.contains('active')){
                        item.classList.remove('active');
                    }
                }
            });

            // активный интуп для отправки сообщений
            const userMessage = this.app.querySelector('.userMessage');
            userMessage.removeAttribute('disabled'); 

            //Получение истории сообщений пользователя
            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.fetchingMessageHistoryWithUser)(this.ws,this.stateUser.sendUser);
        }
    }

    //Появление сообщений, которые отправил я!
    mainNewMessage(dateMessage){
        const bodyContainer = this.app.querySelector('.body__container');
        const noneMessage = bodyContainer.querySelector('.none-message');
        if(noneMessage){
            bodyContainer.innerHTML = '';
        }
        const date =  this.formateDate(dateMessage.datetime);
        const statusMessage = dateMessage.status.isReaded ? 'прочитано' : 'доставлено';
        const editMessage = dateMessage.status.isEdited ? 'изменено' : null;

        const bodyChatsSender = this.BodyClass.createChatsSender(dateMessage.text,date,statusMessage,editMessage,dateMessage.id);
        bodyContainer.innerHTML += bodyChatsSender.getElement().outerHTML;

        // Проверяем, нужно ли прокручивать вниз
        if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
            bodyContainer.scrollTo({
                top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
                behavior: 'smooth'
            });
        }
    }

    //Появления сообщения присланного мне!
    interlocutorNewMessage(dateMessage){

        //let isNewMessage = false;
        const bodyContainer = this.app.querySelector('.body__container');
        const noneMessage = bodyContainer.querySelector('.none-message');
        if(noneMessage){
            bodyContainer.innerHTML = '';
        }
        const date =  this.formateDate(dateMessage.datetime);
        const isNewMessage = bodyContainer.querySelector('.body__chats-not-read');
        if(!isNewMessage){
            if(!dateMessage.status.isReaded){
                bodyContainer.innerHTML += `<div class="body__chats body__chats-not-read">
                    <span>Новые сообщения</span>
                </div>`;

                //ждем клика для смены статуса
                const mainBox = this.app.querySelector('.main');
                const notReadBox = bodyContainer.querySelector('.body__chats-not-read');
                //const parentElement = notReadBox.parentNode;

                const bodyContainerWheel = this.app.querySelector('.body__container');


                const changeStatusMainFun = this.changeStatusMain;
                const mainWs = this.ws;
                function changeStatus(e){
                    const el = e.target;
                    if(el.classList.contains !== 'btn'){
                        changeStatusMainFun(mainWs); // меняем статусы на моей страничке
                    }
                    mainBox.removeEventListener('click', changeStatus);
                    bodyContainerWheel.removeEventListener("wheel", changeStatus);
                }

                mainBox.addEventListener('click', changeStatus);
                bodyContainerWheel.addEventListener("wheel", changeStatus);

            }
        }

        const bodyChatsRecipent = this.BodyClass.createChatsRecipent(dateMessage.text,date,this.stateUser.sendUser,dateMessage.id);
        bodyContainer.innerHTML += bodyChatsRecipent.getElement().outerHTML;

        if(isNewMessage){
            //Прокрутка до непрочитаного сообщения
           const notRead = bodyContainer.querySelector('.body__chats-not-read');
           notRead.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else{
            // Проверяем, нужно ли прокручивать вниз
            if (bodyContainer.scrollHeight > bodyContainer.clientHeight) {
                bodyContainer.scrollTo({
                    top: bodyContainer.scrollHeight - bodyContainer.clientHeight,
                    behavior: 'smooth'
                });
            } 
        }
    }

    formateDate(timestamp){
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }

    updateMessageList(message){
        const bodyContainer = this.app.querySelector('.body__container');
        bodyContainer.innerHTML = '';
        const messages = message.payload.messages;

        if(messages.length === 0){
            bodyContainer.innerHTML = `<div class="none-message">Напишите ваше первое сообщение...</div>`;
        } else{
            let isNewMessage = false;
            messages.forEach( item => {
                if( this.stateUser.sendUser === item.from){
                    //отправленные сообщения мной, появится у собеседника
                    this.interlocutorNewMessage(item,isNewMessage);
    
                } else{
                    ////отправленные сообщения мне
                    this.mainNewMessage(item);
                }
            });
        }
    }

    //обновление непрочитанных сообщений
    updateMessageNumber(userSender){
        const sidebarUsers = this.app.querySelector('.sidebar__users');
        const items = sidebarUsers.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            const nameUser = item.querySelector('.sidebar__user-name').textContent;
            if (nameUser === userSender){
                const sidebarMessageNumber =  item.querySelector('.sidebar__message-number');
                const sidebarMessageNumberIsSpan = sidebarMessageNumber.innerHTML;
                if(sidebarMessageNumberIsSpan){
                    const sidebarMessageNumberSpan = sidebarMessageNumber.querySelector('span');
                    sidebarMessageNumberSpan.textContent = String(Number(sidebarMessageNumberSpan.textContent) + 1);
                } else {
                    sidebarMessageNumber.innerHTML = '<span>1</span>';
                }
            }
        });


    }

    changeStatusMain(ws){
        const bodyContainer = document.querySelector('.body__container');
        const notRead = bodyContainer.querySelector('.body__chats-not-read');

        //sendUser

        if(notRead){
            //удалить оповещение у нужного пользователя
            const sidebarUsers = document.querySelector('.sidebar__users');
            const items = sidebarUsers.getElementsByTagName('li');
            Array.from(items).forEach(function(item){
                if(item.classList.contains('active')){
                    const sidebarMessageNumber = item.querySelector('.sidebar__message-number');
                    sidebarMessageNumber.innerHTML = '';
                }
            });
           
            if(notRead){
                var elementsAfterReference = [];
                var nextElement = notRead.nextElementSibling;
                while (nextElement) {
                    elementsAfterReference.push(nextElement);
                    nextElement = nextElement.nextElementSibling;
                }



                elementsAfterReference.forEach(el =>{
                    (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.messageReadStatusChange)(ws,el.dataset.id);
                })
            
                
            }

            // const bodychatsRecipents =  bodyContainer.querySelectorAll('.body__chats-recipent');
            // bodychatsRecipents.forEach( recipents =>{
            //     messageReadStatusChange(ws,recipents.dataset.id);
            // })

            notRead.remove();
        }
    }

    // при загрузке показывает количество сообщения, которые не прочитаны
    updateSidebarMessageNumber(historyWithUser){

        if (historyWithUser.payload.messages.length > 0){
            const userObject = sessionStorage.getItem('user');
            const userName = JSON.parse(userObject).login;

            const currerUser = (this.stateUser.historyWithUser.id).replace("history", "");
            const sidebarUsers = document.querySelector('.sidebar__users');
            const items = sidebarUsers.getElementsByTagName('li');
            Array.from(items).forEach(function(item){
                const sidebarUserNameText = item.querySelector('.sidebar__user-name').textContent;
                
                if(sidebarUserNameText === currerUser){
                    let countNotRead = 0;
                    historyWithUser.payload.messages.forEach(el =>{
                        if(el.to === userName){
                            if(el.status.isReaded === false){
                                countNotRead +=1;
                            }
                        }
                    });
                    if(countNotRead !==0){
                        const sidebarMessageNumber = item.querySelector('.sidebar__message-number');
                        sidebarMessageNumber.innerHTML = `<span>${countNotRead}</span>`
                    }
                }
            })
        }



    }

    interlocutorStatusMessage(data){
        const id = data.id;
        const isReaded = data.status.isReaded;

        if(isReaded){
            if(this.stateUser.sendUser){
                const bodyContainer = this.app.querySelector('.body__container');
                const bodyChatsSender = bodyContainer.querySelectorAll('.body__chats-sender');
    
                bodyChatsSender.forEach(el =>{
                    if(el.dataset.id === id){
                        const bodyMessageSenderStatus = el.querySelector('.body__messageSender-status');
                        bodyMessageSenderStatus.textContent = 'прочитано';
                    }
                })
            }
        }


        

    }

}

/***/ }),

/***/ "./src/view/not-found/not-found.js":
/*!*****************************************!*\
  !*** ./src/view/not-found/not-found.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFound: () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _common_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/view */ "./src/common/view.js");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/element-creator */ "./src/util/element-creator.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/view/not-found/styles.css");




class NotFound extends _common_view__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
    render(){

        const container = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'div', classNames:['not-fouund__container']});
        const info = new _util_element_creator__WEBPACK_IMPORTED_MODULE_1__["default"]({tag:'div', classNames:['not-fouund__info'], textContent: '404 Not Found'});
        container.addInnerElement(info);

        this.app.innerHTML = '';
        this.app.append(container.getElement());
    }
}

/***/ }),

/***/ "./node_modules/on-change/index.js":
/*!*****************************************!*\
  !*** ./node_modules/on-change/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/constants.js */ "./node_modules/on-change/lib/constants.js");
/* harmony import */ var _lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/is-builtin.js */ "./node_modules/on-change/lib/is-builtin.js");
/* harmony import */ var _lib_path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/path.js */ "./node_modules/on-change/lib/path.js");
/* harmony import */ var _lib_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _lib_is_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");
/* harmony import */ var _lib_is_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/is-iterator.js */ "./node_modules/on-change/lib/is-iterator.js");
/* harmony import */ var _lib_wrap_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/wrap-iterator.js */ "./node_modules/on-change/lib/wrap-iterator.js");
/* harmony import */ var _lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ignore-property.js */ "./node_modules/on-change/lib/ignore-property.js");
/* harmony import */ var _lib_cache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/cache.js */ "./node_modules/on-change/lib/cache.js");
/* harmony import */ var _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/smart-clone/smart-clone.js */ "./node_modules/on-change/lib/smart-clone/smart-clone.js");
/* eslint-disable unicorn/prefer-spread */











const defaultOptions = {
	equals: Object.is,
	isShallow: false,
	pathAsArray: false,
	ignoreSymbols: false,
	ignoreUnderscores: false,
	ignoreDetached: false,
	details: false,
};

const onChange = (object, onChange, options = {}) => {
	options = {
		...defaultOptions,
		...options,
	};

	const proxyTarget = Symbol('ProxyTarget');
	const {equals, isShallow, ignoreDetached, details} = options;
	const cache = new _lib_cache_js__WEBPACK_IMPORTED_MODULE_0__["default"](equals);
	const hasOnValidate = typeof options.onValidate === 'function';
	const smartClone = new _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"](hasOnValidate);

	// eslint-disable-next-line max-params
	const validate = (target, property, value, previous, applyData) => !hasOnValidate
		|| smartClone.isCloning
		|| options.onValidate(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(cache.getPath(target), property), value, previous, applyData) === true;

	const handleChangeOnTarget = (target, property, value, previous) => {
		if (
			!(0,_lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_3__["default"])(cache, options, property)
			&& !(ignoreDetached && cache.isDetached(target, object))
		) {
			handleChange(cache.getPath(target), property, value, previous);
		}
	};

	// eslint-disable-next-line max-params
	const handleChange = (changePath, property, value, previous, applyData) => {
		if (smartClone.isCloning && smartClone.isPartOfClone(changePath)) {
			smartClone.update(changePath, property, previous);
		} else {
			onChange(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(changePath, property), value, previous, applyData);
		}
	};

	const getProxyTarget = value => value
		? (value[proxyTarget] ?? value)
		: value;

	const prepareValue = (value, target, property, basePath) => {
		if (
			(0,_lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_4__.isBuiltinWithoutMutableMethods)(value)
			|| property === 'constructor'
			|| (isShallow && !_lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"].isHandledMethod(target, property))
			|| (0,_lib_ignore_property_js__WEBPACK_IMPORTED_MODULE_3__["default"])(cache, options, property)
			|| cache.isGetInvariant(target, property)
			|| (ignoreDetached && cache.isDetached(target, object))
		) {
			return value;
		}

		if (basePath === undefined) {
			basePath = cache.getPath(target);
		}

		/*
  		Check for circular references.

  		If the value already has a corresponding path/proxy,
		and if the path corresponds to one of the parents,
		then we are on a circular case, where the child is pointing to their parent.
		In this case we return the proxy object with the shortest path.
  		*/
		const childPath = _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(basePath, property);
		const existingPath = cache.getPath(value);

		if (existingPath && isSameObjectTree(childPath, existingPath)) {
			// We are on the same object tree but deeper, so we use the parent path.
			return cache.getProxy(value, existingPath, handler, proxyTarget);
		}

		return cache.getProxy(value, childPath, handler, proxyTarget);
	};

	/*
	Returns true if `childPath` is a subpath of `existingPath`
	(if childPath starts with existingPath). Otherwise, it returns false.

 	It also returns false if the 2 paths are identical.

 	For example:
	- childPath    = group.layers.0.parent.layers.0.value
	- existingPath = group.layers.0.parent
	*/
	const isSameObjectTree = (childPath, existingPath) => {
		if ((0,_lib_is_symbol_js__WEBPACK_IMPORTED_MODULE_5__["default"])(childPath) || childPath.length <= existingPath.length) {
			return false;
		}

		if ((0,_lib_is_array_js__WEBPACK_IMPORTED_MODULE_6__["default"])(existingPath) && existingPath.length === 0) {
			return false;
		}

		const childParts = (0,_lib_is_array_js__WEBPACK_IMPORTED_MODULE_6__["default"])(childPath) ? childPath : childPath.split(_lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.PATH_SEPARATOR);
		const existingParts = (0,_lib_is_array_js__WEBPACK_IMPORTED_MODULE_6__["default"])(existingPath) ? existingPath : existingPath.split(_lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.PATH_SEPARATOR);

		if (childParts.length <= existingParts.length) {
			return false;
		}

		return !(existingParts.some((part, index) => part !== childParts[index]));
	};

	const handler = {
		get(target, property, receiver) {
			if ((0,_lib_is_symbol_js__WEBPACK_IMPORTED_MODULE_5__["default"])(property)) {
				if (property === proxyTarget || property === _lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.TARGET) {
					return target;
				}

				if (
					property === _lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.UNSUBSCRIBE
					&& !cache.isUnsubscribed
					&& cache.getPath(target).length === 0
				) {
					cache.unsubscribe();
					return target;
				}
			}

			const value = (0,_lib_is_builtin_js__WEBPACK_IMPORTED_MODULE_4__.isBuiltinWithMutableMethods)(target)
				? Reflect.get(target, property)
				: Reflect.get(target, property, receiver);

			return prepareValue(value, target, property);
		},

		set(target, property, value, receiver) {
			value = getProxyTarget(value);

			const reflectTarget = target[proxyTarget] ?? target;
			const previous = reflectTarget[property];

			if (equals(previous, value) && property in target) {
				return true;
			}

			const isValid = validate(target, property, value, previous);

			if (
				isValid
				&& cache.setProperty(reflectTarget, property, value, receiver, previous)
			) {
				handleChangeOnTarget(target, property, target[property], previous);

				return true;
			}

			return !isValid;
		},

		defineProperty(target, property, descriptor) {
			if (!cache.isSameDescriptor(descriptor, target, property)) {
				const previous = target[property];

				if (
					validate(target, property, descriptor.value, previous)
					&& cache.defineProperty(target, property, descriptor, previous)
				) {
					handleChangeOnTarget(target, property, descriptor.value, previous);
				}
			}

			return true;
		},

		deleteProperty(target, property) {
			if (!Reflect.has(target, property)) {
				return true;
			}

			const previous = Reflect.get(target, property);
			const isValid = validate(target, property, undefined, previous);

			if (
				isValid
				&& cache.deleteProperty(target, property, previous)
			) {
				handleChangeOnTarget(target, property, undefined, previous);

				return true;
			}

			return !isValid;
		},

		apply(target, thisArg, argumentsList) {
			const thisProxyTarget = thisArg[proxyTarget] ?? thisArg;

			if (cache.isUnsubscribed) {
				return Reflect.apply(target, thisProxyTarget, argumentsList);
			}

			if (
				(details === false
					|| (details !== true && !details.includes(target.name)))
				&& _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"].isHandledType(thisProxyTarget)
			) {
				let applyPath = _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].initial(cache.getPath(target));
				const isHandledMethod = _lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"].isHandledMethod(thisProxyTarget, target.name);

				smartClone.start(thisProxyTarget, applyPath, argumentsList);

				let result = Reflect.apply(
					target,
					smartClone.preferredThisArg(target, thisArg, thisProxyTarget),
					isHandledMethod
						? argumentsList.map(argument => getProxyTarget(argument))
						: argumentsList,
				);

				const isChanged = smartClone.isChanged(thisProxyTarget, equals);
				const previous = smartClone.stop();

				if (_lib_smart_clone_smart_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"].isHandledType(result) && isHandledMethod) {
					if (thisArg instanceof Map && target.name === 'get') {
						applyPath = _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].concat(applyPath, argumentsList[0]);
					}

					result = cache.getProxy(result, applyPath, handler);
				}

				if (isChanged) {
					const applyData = {
						name: target.name,
						args: argumentsList,
						result,
					};
					const changePath = smartClone.isCloning
						? _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].initial(applyPath)
						: applyPath;
					const property = smartClone.isCloning
						? _lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].last(applyPath)
						: '';

					if (validate(_lib_path_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(object, changePath), property, thisProxyTarget, previous, applyData)) {
						handleChange(changePath, property, thisProxyTarget, previous, applyData);
					} else {
						smartClone.undo(thisProxyTarget);
					}
				}

				if (
					(thisArg instanceof Map || thisArg instanceof Set)
					&& (0,_lib_is_iterator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(result)
				) {
					return (0,_lib_wrap_iterator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, target, thisArg, applyPath, prepareValue);
				}

				return result;
			}

			return Reflect.apply(target, thisArg, argumentsList);
		},
	};

	const proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);
	onChange = onChange.bind(proxy);

	if (hasOnValidate) {
		options.onValidate = options.onValidate.bind(proxy);
	}

	return proxy;
};

onChange.target = proxy => proxy?.[_lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.TARGET] ?? proxy;
onChange.unsubscribe = proxy => proxy?.[_lib_constants_js__WEBPACK_IMPORTED_MODULE_7__.UNSUBSCRIBE] ?? proxy;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onChange);


/***/ }),

/***/ "./node_modules/on-change/lib/cache.js":
/*!*********************************************!*\
  !*** ./node_modules/on-change/lib/cache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cache)
/* harmony export */ });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/on-change/lib/path.js");


/**
@class Cache
@private
*/
class Cache {
	constructor(equals) {
		this._equals = equals;
		this._proxyCache = new WeakMap();
		this._pathCache = new WeakMap();
		this.isUnsubscribed = false;
	}

	_getDescriptorCache() {
		if (this._descriptorCache === undefined) {
			this._descriptorCache = new WeakMap();
		}

		return this._descriptorCache;
	}

	_getProperties(target) {
		const descriptorCache = this._getDescriptorCache();
		let properties = descriptorCache.get(target);

		if (properties === undefined) {
			properties = {};
			descriptorCache.set(target, properties);
		}

		return properties;
	}

	_getOwnPropertyDescriptor(target, property) {
		if (this.isUnsubscribed) {
			return Reflect.getOwnPropertyDescriptor(target, property);
		}

		const properties = this._getProperties(target);
		let descriptor = properties[property];

		if (descriptor === undefined) {
			descriptor = Reflect.getOwnPropertyDescriptor(target, property);
			properties[property] = descriptor;
		}

		return descriptor;
	}

	getProxy(target, path, handler, proxyTarget) {
		if (this.isUnsubscribed) {
			return target;
		}

		const reflectTarget = target[proxyTarget];
		const source = reflectTarget ?? target;

		this._pathCache.set(source, path);

		let proxy = this._proxyCache.get(source);

		if (proxy === undefined) {
			proxy = reflectTarget === undefined
				? new Proxy(target, handler)
				: target;

			this._proxyCache.set(source, proxy);
		}

		return proxy;
	}

	getPath(target) {
		return this.isUnsubscribed ? undefined : this._pathCache.get(target);
	}

	isDetached(target, object) {
		return !Object.is(target, _path_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(object, this.getPath(target)));
	}

	defineProperty(target, property, descriptor) {
		if (!Reflect.defineProperty(target, property, descriptor)) {
			return false;
		}

		if (!this.isUnsubscribed) {
			this._getProperties(target)[property] = descriptor;
		}

		return true;
	}

	setProperty(target, property, value, receiver, previous) { // eslint-disable-line max-params
		if (!this._equals(previous, value) || !(property in target)) {
			const descriptor = this._getOwnPropertyDescriptor(target, property);

			if (descriptor !== undefined && 'set' in descriptor) {
				return Reflect.set(target, property, value, receiver);
			}

			return Reflect.set(target, property, value);
		}

		return true;
	}

	deleteProperty(target, property, previous) {
		if (Reflect.deleteProperty(target, property)) {
			if (!this.isUnsubscribed) {
				const properties = this._getDescriptorCache().get(target);

				if (properties) {
					delete properties[property];
					this._pathCache.delete(previous);
				}
			}

			return true;
		}

		return false;
	}

	isSameDescriptor(a, target, property) {
		const b = this._getOwnPropertyDescriptor(target, property);

		return a !== undefined
			&& b !== undefined
			&& Object.is(a.value, b.value)
			&& (a.writable || false) === (b.writable || false)
			&& (a.enumerable || false) === (b.enumerable || false)
			&& (a.configurable || false) === (b.configurable || false)
			&& a.get === b.get
			&& a.set === b.set;
	}

	isGetInvariant(target, property) {
		const descriptor = this._getOwnPropertyDescriptor(target, property);

		return descriptor !== undefined
			&& descriptor.configurable !== true
			&& descriptor.writable !== true;
	}

	unsubscribe() {
		this._descriptorCache = null;
		this._pathCache = null;
		this._proxyCache = null;
		this.isUnsubscribed = true;
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PATH_SEPARATOR: () => (/* binding */ PATH_SEPARATOR),
/* harmony export */   TARGET: () => (/* binding */ TARGET),
/* harmony export */   UNSUBSCRIBE: () => (/* binding */ UNSUBSCRIBE)
/* harmony export */ });
const PATH_SEPARATOR = '.';
const TARGET = Symbol('target');
const UNSUBSCRIBE = Symbol('unsubscribe');


/***/ }),

/***/ "./node_modules/on-change/lib/ignore-property.js":
/*!*******************************************************!*\
  !*** ./node_modules/on-change/lib/ignore-property.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ignoreProperty)
/* harmony export */ });
/* harmony import */ var _is_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");


function ignoreProperty(cache, options, property) {
	return cache.isUnsubscribed
		|| (options.ignoreSymbols && (0,_is_symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(property))
		|| (options.ignoreUnderscores && property.charAt(0) === '_')
		|| ('ignoreKeys' in options && options.ignoreKeys.includes(property));
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-array.js":
/*!************************************************!*\
  !*** ./node_modules/on-change/lib/is-array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array.isArray);


/***/ }),

/***/ "./node_modules/on-change/lib/is-builtin.js":
/*!**************************************************!*\
  !*** ./node_modules/on-change/lib/is-builtin.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBuiltinWithMutableMethods: () => (/* binding */ isBuiltinWithMutableMethods),
/* harmony export */   isBuiltinWithoutMutableMethods: () => (/* binding */ isBuiltinWithoutMutableMethods)
/* harmony export */ });
function isBuiltinWithMutableMethods(value) {
	return value instanceof Date
		|| value instanceof Set
		|| value instanceof Map
		|| value instanceof WeakSet
		|| value instanceof WeakMap
		|| ArrayBuffer.isView(value);
}

function isBuiltinWithoutMutableMethods(value) {
	return (typeof value === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp;
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-iterator.js":
/*!***************************************************!*\
  !*** ./node_modules/on-change/lib/is-iterator.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isIterator)
/* harmony export */ });
function isIterator(value) {
	return typeof value === 'object' && typeof value.next === 'function';
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-object.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-object.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(value) {
	return toString.call(value) === '[object Object]';
}


/***/ }),

/***/ "./node_modules/on-change/lib/is-symbol.js":
/*!*************************************************!*\
  !*** ./node_modules/on-change/lib/is-symbol.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSymbol)
/* harmony export */ });
function isSymbol(value) {
	return typeof value === 'symbol';
}


/***/ }),

/***/ "./node_modules/on-change/lib/path.js":
/*!********************************************!*\
  !*** ./node_modules/on-change/lib/path.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/on-change/lib/constants.js");
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-symbol.js */ "./node_modules/on-change/lib/is-symbol.js");




const path = {
	after(path, subPath) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			return path.slice(subPath.length);
		}

		if (subPath === '') {
			return path;
		}

		return path.slice(subPath.length + 1);
	},
	concat(path, key) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			path = [...path];

			if (key) {
				path.push(key);
			}

			return path;
		}

		if (key && key.toString !== undefined) {
			if (path !== '') {
				path += _constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR;
			}

			if ((0,_is_symbol_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
				return path + key.toString();
			}

			return path + key;
		}

		return path;
	},
	initial(path) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			return path.slice(0, -1);
		}

		if (path === '') {
			return path;
		}

		const index = path.lastIndexOf(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR);

		if (index === -1) {
			return '';
		}

		return path.slice(0, index);
	},
	last(path) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			return path.at(-1) ?? '';
		}

		if (path === '') {
			return path;
		}

		const index = path.lastIndexOf(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR);

		if (index === -1) {
			return path;
		}

		return path.slice(index + 1);
	},
	walk(path, callback) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			for (const key of path) {
				callback(key);
			}
		} else if (path !== '') {
			let position = 0;
			let index = path.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR);

			if (index === -1) {
				callback(path);
			} else {
				while (position < path.length) {
					if (index === -1) {
						index = path.length;
					}

					callback(path.slice(position, index));

					position = index + 1;
					index = path.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR, position);
				}
			}
		}
	},
	get(object, path) {
		this.walk(path, key => {
			if (object) {
				object = object[key];
			}
		});

		return object;
	},
	isSubPath(path, subPath) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			if (path.length < subPath.length) {
				return false;
			}

			// eslint-disable-next-line unicorn/no-for-loop
			for (let i = 0; i < subPath.length; i++) {
				if (path[i] !== subPath[i]) {
					return false;
				}
			}

			return true;
		}

		if (path.length < subPath.length) {
			return false;
		}

		if (path === subPath) {
			return true;
		}

		if (path.startsWith(subPath)) {
			return path[subPath.length] === _constants_js__WEBPACK_IMPORTED_MODULE_1__.PATH_SEPARATOR;
		}

		return false;
	},
	isRootPath(path) {
		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
			return path.length === 0;
		}

		return path === '';
	},
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-array.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneArray)
/* harmony export */ });
/* harmony import */ var _methods_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/array.js */ "./node_modules/on-change/lib/smart-clone/methods/array.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneArray extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static isHandledMethod(name) {
		return _methods_array_js__WEBPACK_IMPORTED_MODULE_1__.HANDLED_ARRAY_METHODS.has(name);
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-date.js":
/*!********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-date.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneDate)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneDate extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	undo(object) {
		object.setTime(this.clone.getTime());
	}

	isChanged(value, equals) {
		return !equals(this.clone.valueOf(), value.valueOf());
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneMap)
/* harmony export */ });
/* harmony import */ var _methods_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/map.js */ "./node_modules/on-change/lib/smart-clone/methods/map.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneMap extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static isHandledMethod(name) {
		return _methods_map_js__WEBPACK_IMPORTED_MODULE_1__.HANDLED_MAP_METHODS.has(name);
	}

	undo(object) {
		for (const [key, value] of this.clone.entries()) {
			object.set(key, value);
		}

		for (const key of object.keys()) {
			if (!this.clone.has(key)) {
				object.delete(key);
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js":
/*!**********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-object.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneObject)
/* harmony export */ });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../path.js */ "./node_modules/on-change/lib/path.js");
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../is-object.js */ "./node_modules/on-change/lib/is-object.js");
/* harmony import */ var _methods_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../methods/array.js */ "./node_modules/on-change/lib/smart-clone/methods/array.js");
/* harmony import */ var _methods_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../methods/set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");
/* harmony import */ var _methods_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../methods/map.js */ "./node_modules/on-change/lib/smart-clone/methods/map.js");
/* harmony import */ var _methods_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/object.js */ "./node_modules/on-change/lib/smart-clone/methods/object.js");








class CloneObject {
	constructor(value, path, argumentsList, hasOnValidate) {
		this._path = path;
		this._isChanged = false;
		this._clonedCache = new Set();
		this._hasOnValidate = hasOnValidate;
		this._changes = hasOnValidate ? [] : null;

		this.clone = path === undefined ? value : this._shallowClone(value);
	}

	static isHandledMethod(name) {
		return _methods_object_js__WEBPACK_IMPORTED_MODULE_0__.IMMUTABLE_OBJECT_METHODS.has(name);
	}

	_shallowClone(value) {
		let clone = value;

		if ((0,_is_object_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
			clone = {...value};
		} else if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || ArrayBuffer.isView(value)) {
			clone = [...value];
		} else if (value instanceof Date) {
			clone = new Date(value);
		} else if (value instanceof Set) {
			clone = new Set([...value].map(item => this._shallowClone(item)));
		} else if (value instanceof Map) {
			clone = new Map();

			for (const [key, item] of value.entries()) {
				clone.set(key, this._shallowClone(item));
			}
		}

		this._clonedCache.add(clone);

		return clone;
	}

	preferredThisArg(isHandledMethod, name, thisArgument, thisProxyTarget) {
		if (isHandledMethod) {
			if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_2__["default"])(thisProxyTarget)) {
				this._onIsChanged = _methods_array_js__WEBPACK_IMPORTED_MODULE_3__.MUTABLE_ARRAY_METHODS[name];
			} else if (thisProxyTarget instanceof Set) {
				this._onIsChanged = _methods_set_js__WEBPACK_IMPORTED_MODULE_4__.MUTABLE_SET_METHODS[name];
			} else if (thisProxyTarget instanceof Map) {
				this._onIsChanged = _methods_map_js__WEBPACK_IMPORTED_MODULE_5__.MUTABLE_MAP_METHODS[name];
			}

			return thisProxyTarget;
		}

		return thisArgument;
	}

	update(fullPath, property, value) {
		const changePath = _path_js__WEBPACK_IMPORTED_MODULE_6__["default"].after(fullPath, this._path);

		if (property !== 'length') {
			let object = this.clone;

			_path_js__WEBPACK_IMPORTED_MODULE_6__["default"].walk(changePath, key => {
				if (object?.[key]) {
					if (!this._clonedCache.has(object[key])) {
						object[key] = this._shallowClone(object[key]);
					}

					object = object[key];
				}
			});

			if (this._hasOnValidate) {
				this._changes.push({
					path: changePath,
					property,
					previous: value,
				});
			}

			if (object?.[property]) {
				object[property] = value;
			}
		}

		this._isChanged = true;
	}

	undo(object) {
		let change;

		for (let index = this._changes.length - 1; index !== -1; index--) {
			change = this._changes[index];

			_path_js__WEBPACK_IMPORTED_MODULE_6__["default"].get(object, change.path)[change.property] = change.previous;
		}
	}

	isChanged(value) {
		return this._onIsChanged === undefined
			? this._isChanged
			: this._onIsChanged(this.clone, value);
	}

	isPathApplicable(changePath) {
		return _path_js__WEBPACK_IMPORTED_MODULE_6__["default"].isRootPath(this._path) || _path_js__WEBPACK_IMPORTED_MODULE_6__["default"].isSubPath(changePath, this._path);
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-set.js":
/*!*******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-set.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneSet)
/* harmony export */ });
/* harmony import */ var _methods_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");



class CloneSet extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static isHandledMethod(name) {
		return _methods_set_js__WEBPACK_IMPORTED_MODULE_1__.HANDLED_SET_METHODS.has(name);
	}

	undo(object) {
		for (const value of this.clone) {
			object.add(value);
		}

		for (const value of object) {
			if (!this.clone.has(value)) {
				object.delete(value);
			}
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneWeakMap)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneWeakMap extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(value, path, argumentsList, hasOnValidate) {
		super(undefined, path, argumentsList, hasOnValidate);

		this._weakKey = argumentsList[0];
		this._weakHas = value.has(this._weakKey);
		this._weakValue = value.get(this._weakKey);
	}

	isChanged(value) {
		return this._weakValue !== value.get(this._weakKey);
	}

	undo(object) {
		const weakHas = object.has(this._weakKey);

		if (this._weakHas && !weakHas) {
			object.set(this._weakKey, this._weakValue);
		} else if (!this._weakHas && weakHas) {
			object.delete(this._weakKey);
		} else if (this._weakValue !== object.get(this._weakKey)) {
			object.set(this._weakKey, this._weakValue);
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneWeakSet)
/* harmony export */ });
/* harmony import */ var _clone_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");


class CloneWeakSet extends _clone_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(value, path, argumentsList, hasOnValidate) {
		super(undefined, path, argumentsList, hasOnValidate);

		this._argument1 = argumentsList[0];
		this._weakValue = value.has(this._argument1);
	}

	isChanged(value) {
		return this._weakValue !== value.has(this._argument1);
	}

	undo(object) {
		if (this._weakValue && !object.has(this._argument1)) {
			object.add(this._argument1);
		} else {
			object.delete(this._argument1);
		}
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js":
/*!***********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffArrays)
/* harmony export */ });
function isDiffArrays(clone, value) {
	return clone.length !== value.length || clone.some((item, index) => value[index] !== item);
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js":
/*!************************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffCertain)
/* harmony export */ });
function isDiffCertain() {
	return true;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffMaps)
/* harmony export */ });
function isDiffMaps(clone, value) {
	if (clone.size !== value.size) {
		return true;
	}

	let bValue;
	for (const [key, aValue] of clone) {
		bValue = value.get(key);

		if (bValue !== aValue || (bValue === undefined && !value.has(key))) {
			return true;
		}
	}

	return false;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDiffSets)
/* harmony export */ });
function isDiffSets(clone, value) {
	if (clone.size !== value.size) {
		return true;
	}

	for (const element of clone) {
		if (!value.has(element)) {
			return true;
		}
	}

	return false;
}


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HANDLED_ARRAY_METHODS: () => (/* binding */ HANDLED_ARRAY_METHODS),
/* harmony export */   MUTABLE_ARRAY_METHODS: () => (/* binding */ MUTABLE_ARRAY_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff/is-diff-certain.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-certain.js");
/* harmony import */ var _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diff/is-diff-arrays.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-arrays.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ "./node_modules/on-change/lib/smart-clone/methods/object.js");




const IMMUTABLE_ARRAY_METHODS = new Set([
	'concat',
	'includes',
	'indexOf',
	'join',
	'keys',
	'lastIndexOf',
]);

const MUTABLE_ARRAY_METHODS = {
	push: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	pop: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	shift: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	unshift: _diff_is_diff_certain_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	copyWithin: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	reverse: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	sort: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	splice: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	flat: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	fill: _diff_is_diff_arrays_js__WEBPACK_IMPORTED_MODULE_1__["default"],
};

const HANDLED_ARRAY_METHODS = new Set([
	..._object_js__WEBPACK_IMPORTED_MODULE_2__.IMMUTABLE_OBJECT_METHODS,
	...IMMUTABLE_ARRAY_METHODS,
	...Object.keys(MUTABLE_ARRAY_METHODS),
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HANDLED_MAP_METHODS: () => (/* binding */ HANDLED_MAP_METHODS),
/* harmony export */   MUTABLE_MAP_METHODS: () => (/* binding */ MUTABLE_MAP_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diff/is-diff-maps.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-maps.js");
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.js */ "./node_modules/on-change/lib/smart-clone/methods/set.js");



const IMMUTABLE_MAP_METHODS = new Set([..._set_js__WEBPACK_IMPORTED_MODULE_0__.IMMUTABLE_SET_METHODS, 'get']);

const MUTABLE_MAP_METHODS = {
	set: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	clear: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	delete: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	forEach: _diff_is_diff_maps_js__WEBPACK_IMPORTED_MODULE_1__["default"],
};

const HANDLED_MAP_METHODS = new Set([
	...IMMUTABLE_MAP_METHODS,
	...Object.keys(MUTABLE_MAP_METHODS),
	..._set_js__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_ITERATOR_METHODS,
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/object.js":
/*!******************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/object.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMMUTABLE_OBJECT_METHODS: () => (/* binding */ IMMUTABLE_OBJECT_METHODS)
/* harmony export */ });
const IMMUTABLE_OBJECT_METHODS = new Set([
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'toLocaleString',
	'toString',
	'valueOf',
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/methods/set.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/methods/set.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLLECTION_ITERATOR_METHODS: () => (/* binding */ COLLECTION_ITERATOR_METHODS),
/* harmony export */   HANDLED_SET_METHODS: () => (/* binding */ HANDLED_SET_METHODS),
/* harmony export */   IMMUTABLE_SET_METHODS: () => (/* binding */ IMMUTABLE_SET_METHODS),
/* harmony export */   MUTABLE_SET_METHODS: () => (/* binding */ MUTABLE_SET_METHODS)
/* harmony export */ });
/* harmony import */ var _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff/is-diff-sets.js */ "./node_modules/on-change/lib/smart-clone/diff/is-diff-sets.js");


const COLLECTION_ITERATOR_METHODS = [
	'keys',
	'values',
	'entries',
];

const IMMUTABLE_SET_METHODS = new Set([
	'has',
	'toString',
]);

const MUTABLE_SET_METHODS = {
	add: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	clear: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	delete: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
	forEach: _diff_is_diff_sets_js__WEBPACK_IMPORTED_MODULE_0__["default"],
};

const HANDLED_SET_METHODS = new Set([
	...IMMUTABLE_SET_METHODS,
	...Object.keys(MUTABLE_SET_METHODS),
	...COLLECTION_ITERATOR_METHODS,
]);


/***/ }),

/***/ "./node_modules/on-change/lib/smart-clone/smart-clone.js":
/*!***************************************************************!*\
  !*** ./node_modules/on-change/lib/smart-clone/smart-clone.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartClone)
/* harmony export */ });
/* harmony import */ var _is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-array.js */ "./node_modules/on-change/lib/is-array.js");
/* harmony import */ var _is_builtin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is-builtin.js */ "./node_modules/on-change/lib/is-builtin.js");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is-object.js */ "./node_modules/on-change/lib/is-object.js");
/* harmony import */ var _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone/clone-object.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-object.js");
/* harmony import */ var _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clone/clone-array.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-array.js");
/* harmony import */ var _clone_clone_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clone/clone-date.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-date.js");
/* harmony import */ var _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone/clone-set.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-set.js");
/* harmony import */ var _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clone/clone-map.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-map.js");
/* harmony import */ var _clone_clone_weakset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clone/clone-weakset.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-weakset.js");
/* harmony import */ var _clone_clone_weakmap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clone/clone-weakmap.js */ "./node_modules/on-change/lib/smart-clone/clone/clone-weakmap.js");











class SmartClone {
	constructor(hasOnValidate) {
		this._stack = [];
		this._hasOnValidate = hasOnValidate;
	}

	static isHandledType(value) {
		return (0,_is_object_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)
			|| (0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
			|| (0,_is_builtin_js__WEBPACK_IMPORTED_MODULE_2__.isBuiltinWithMutableMethods)(value);
	}

	static isHandledMethod(target, name) {
		if ((0,_is_object_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) {
			return _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__["default"].isHandledMethod(name);
		}

		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) {
			return _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__["default"].isHandledMethod(name);
		}

		if (target instanceof Set) {
			return _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_5__["default"].isHandledMethod(name);
		}

		if (target instanceof Map) {
			return _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_6__["default"].isHandledMethod(name);
		}

		return (0,_is_builtin_js__WEBPACK_IMPORTED_MODULE_2__.isBuiltinWithMutableMethods)(target);
	}

	get isCloning() {
		return this._stack.length > 0;
	}

	start(value, path, argumentsList) {
		let CloneClass = _clone_clone_object_js__WEBPACK_IMPORTED_MODULE_3__["default"];

		if ((0,_is_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
			CloneClass = _clone_clone_array_js__WEBPACK_IMPORTED_MODULE_4__["default"];
		} else if (value instanceof Date) {
			CloneClass = _clone_clone_date_js__WEBPACK_IMPORTED_MODULE_7__["default"];
		} else if (value instanceof Set) {
			CloneClass = _clone_clone_set_js__WEBPACK_IMPORTED_MODULE_5__["default"];
		} else if (value instanceof Map) {
			CloneClass = _clone_clone_map_js__WEBPACK_IMPORTED_MODULE_6__["default"];
		} else if (value instanceof WeakSet) {
			CloneClass = _clone_clone_weakset_js__WEBPACK_IMPORTED_MODULE_8__["default"];
		} else if (value instanceof WeakMap) {
			CloneClass = _clone_clone_weakmap_js__WEBPACK_IMPORTED_MODULE_9__["default"];
		}

		this._stack.push(new CloneClass(value, path, argumentsList, this._hasOnValidate));
	}

	update(fullPath, property, value) {
		this._stack.at(-1).update(fullPath, property, value);
	}

	preferredThisArg(target, thisArgument, thisProxyTarget) {
		const {name} = target;
		const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);

		return this._stack.at(-1)
			.preferredThisArg(isHandledMethod, name, thisArgument, thisProxyTarget);
	}

	isChanged(isMutable, value, equals) {
		return this._stack.at(-1).isChanged(isMutable, value, equals);
	}

	isPartOfClone(changePath) {
		return this._stack.at(-1).isPathApplicable(changePath);
	}

	undo(object) {
		if (this._previousClone !== undefined) {
			this._previousClone.undo(object);
		}
	}

	stop() {
		this._previousClone = this._stack.pop();

		return this._previousClone.clone;
	}
}


/***/ }),

/***/ "./node_modules/on-change/lib/wrap-iterator.js":
/*!*****************************************************!*\
  !*** ./node_modules/on-change/lib/wrap-iterator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapIterator)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/on-change/lib/constants.js");


// eslint-disable-next-line max-params
function wrapIterator(iterator, target, thisArgument, applyPath, prepareValue) {
	const originalNext = iterator.next;

	if (target.name === 'entries') {
		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value[0] = prepareValue(
					result.value[0],
					target,
					result.value[0],
					applyPath,
				);
				result.value[1] = prepareValue(
					result.value[1],
					target,
					result.value[0],
					applyPath,
				);
			}

			return result;
		};
	} else if (target.name === 'values') {
		const keyIterator = thisArgument[_constants_js__WEBPACK_IMPORTED_MODULE_0__.TARGET].keys();

		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value = prepareValue(
					result.value,
					target,
					keyIterator.next().value,
					applyPath,
				);
			}

			return result;
		};
	} else {
		iterator.next = function () {
			const result = originalNext.call(this);

			if (result.done === false) {
				result.value = prepareValue(
					result.value,
					target,
					result.value,
					applyPath,
				);
			}

			return result;
		};
	}

	return iterator;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _view_not_found_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/not-found/not-found */ "./src/view/not-found/not-found.js");
/* harmony import */ var _view_authorization_authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/authorization/authorization */ "./src/view/authorization/authorization.js");
/* harmony import */ var _view_about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/about/about */ "./src/view/about/about.js");
/* harmony import */ var _view_main_main_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/main/main-view */ "./src/view/main/main-view.js");
/* harmony import */ var _common_custom_web_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/custom-web-socket */ "./src/common/custom-web-socket.js");
/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! on-change */ "./node_modules/on-change/index.js");








class App {
    routes = [
        {path: "#auth", view: _view_authorization_authorization__WEBPACK_IMPORTED_MODULE_2__.Authorization },
        {path: "#about", view: _view_about_about__WEBPACK_IMPORTED_MODULE_3__.About },
        {path: "#main", view: _view_main_main_view__WEBPACK_IMPORTED_MODULE_4__.MainView}
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
      connection: false,
    }

    constructor(){  
        window.addEventListener('hashchange', this.route.bind(this));
        this.stateUser = (0,on_change__WEBPACK_IMPORTED_MODULE_6__["default"])(this.stateUser, this.stateUserHook.bind(this));
        this.ws = new _common_custom_web_socket__WEBPACK_IMPORTED_MODULE_5__.CustomWebSocket('ws://127.0.0.1:4000',this.stateUser);
        this.route();
    }

    stateUserHook(path){
      if( path === 'usersActive' || path === 'usersInacrive'){
        console.log('----usersActive---usersInacrive', this.currentView.constructor.name);
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

      if(path === 'connection'){
         
        console.log('connection', this.stateUser.connection)

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
          this.currentView = new _view_not_found_not_found__WEBPACK_IMPORTED_MODULE_1__.NotFound();
        }
        this.currentView.render();
      });
    }
}


new App();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUQ7QUFDckQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFdBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RGTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNSMkY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUE0QixNQUFNO0FBQ3hDLE1BQU0seUVBQTJCLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBNEIsTUFBTTtBQUN4QyxNQUFNLHlFQUEyQixNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQTRCLE1BQU07QUFDeEMsTUFBTSx5RUFBMkIsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLCtEQUFRO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hYm91dC9zdHlsZS5jc3M/OTUyMyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvYm9keS9zdHlsZXMuY3NzPzdmOGIiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL21lc3NhZ2UtYmxvY2svc3R5bGVzLmNzcz9lZmIxIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3N0eWxlcy5jc3M/YzQ5YSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L21haW4vc3R5bGVzLmNzcz8yZjJhIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvbm90LWZvdW5kL3N0eWxlcy5jc3M/NDc5MiIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9hcHAuc2Nzcz8yNzcyIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLnNjc3M/YmQwOSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9jb21tb24vY3VzdG9tLXdlYi1zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvY29tbW9uL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9jb250cm9sLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL2hlbHBlcnMvc3ZnLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3V0aWwvZWxlbWVudC1jcmVhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvbWVzc2FnZS1ibG9jay9tZXNzYWdlLWJsb2NrLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9tYWluL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L25vdC1mb3VuZC9ub3QtZm91bmQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pZ25vcmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLWJ1aWx0aW4uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3BhdGguanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2Nsb25lL2Nsb25lLWRhdGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1zZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS13ZWFrbWFwLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtd2Vha3NldC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1hcnJheXMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9kaWZmL2lzLWRpZmYtY2VydGFpbi5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1tYXBzLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvZGlmZi9pcy1kaWZmLXNldHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL2FycmF5LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvbWV0aG9kcy9tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL21ldGhvZHMvc2V0LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvc21hcnQtY2xvbmUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi93cmFwLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHByb2Nlc3NpbmdUeXBlcyB9IGZyb20gJy4uL2hlbHBlcnMvY29udHJvbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2ViU29ja2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCxzdGF0ZVVzZXIpIHtcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29ubmVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25uZWN0X19pbmZvXCI+0KHQvtC10LTQuNC90LXQvdC40LUg0L/QvtC00L7QttC00LjRgtC1IDEw0YE8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L7QtdC00LjQvdC10L3QuNC1INGD0YHRgtCw0L3QvtCy0LvQtdC90L4nKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub25PcGVuQ2FsbGJhY2soKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQn9C+0LvRg9GH0LXQvdC+INGB0L7QvtCx0YnQtdC90LjQtTogJyArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIHByb2Nlc3NpbmdUeXBlcyhldmVudC5kYXRhLCB0aGlzLnN0YXRlVXNlciwgdGhpcy5zb2NrZXQpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZW5kKG1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlY29ubmVjdCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ9Cf0L7Qv9GL0YLQutCwINC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjy4uLicpO1xyXG4gICAgICB0aGlzLmNvdW50ICs9IDE7XHJcbiAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbm5lY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29ubmVjdF9faW5mb1wiPtCf0L7Qv9GL0YLQutCwINC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjyDihJYke3RoaXMuY291bnR9Li4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L7QtdC00LjQvdC10L3QuNC1INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC+Jyk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0J/QvtC70YPRh9C10L3QviDRgdC+0L7QsdGJ0LXQvdC40LU6ICcgKyBldmVudC5kYXRhKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5DYWxsYmFjaygpIHtcclxuICAgICAgLy8g0JLRi9C30YvQstCw0LXQvCByZXNvbHZlINC00LvRjyDQv9GA0L7QvNC40YHQsCDQv9C+0YHQu9C1INGD0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDRgdC+0LXQtNC40L3QtdC90LjRj1xyXG4gICAgICBpZiAodGhpcy5yZXNvbHZlKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc29sdmUodGhpcy5zb2NrZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zb2NrZXQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIC8vINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC60LvQsNGB0YHQsCBXZWJTb2NrZXRcclxuICBjb25zdCB3cyA9IG5ldyBDdXN0b21XZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjQwMDAnKTsiLCJleHBvcnQgY2xhc3MgQWJzdHJhY3RWaWV3e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIH1cclxufSIsIi8v0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgdXNlckF1dGhlbnRpY2F0aW9uID0gYXN5bmMod3MpID0+IHtcclxuICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gIGNvbnN0IHVzZXIgPSAgSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgaWQ6IHVzZXIubG9naW4sXHJcbiAgICAgICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuLy/QktGL0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC3INGB0LjRgdGC0LXQvNGLXHJcbmNvbnN0IHVzZXJMb2dvdXQgPSAod3Msc3RhdGVVc2VyKSA9PiB7XHJcbiAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICBjb25zdCB1c2VyID0gIEpTT04ucGFyc2UodXNlck9iamVjdCk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiB1c2VyLmxvZ2luLFxyXG4gICAgdHlwZTogXCJVU0VSX0xPR09VVFwiLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gIHN0YXRlVXNlci5pc0xvZ2luZWQgPSBmYWxzZTtcclxuICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjYXV0aCc7XHJcbn1cclxuXHJcbi8vPz8g0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0YLRgNC10YLRjNC10Lkg0YHRgtC+0YDQvtC90L7QuVxyXG4vLyDQodC10YDQstC10YDQvdC+0LUg0L/RgNC40LvQvtC20LXQvdC40LVcclxuY29uc3QgdGhpcmRQYXJ0eVVzZXJBdXRoZW50aWNhdGlvbiA9ICgpID0+IHtcclxuICAvKlxyXG4gICAge1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgdHlwZTogXCJVU0VSX0VYVEVSTkFMX0xPR0lOXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBsb2dpbjogc3RyaW5nLFxyXG4gICAgICAgICAgaXNMb2dpbmVkOiBib29sZWFuLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gIC8qXHJcbiAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0YHQtdGA0LLQtdGA0L7QvFxyXG4gICAgbG9naW4gLSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQstC+0YjQtdC00YjQtdCz0L4g0LIg0YHQuNGB0YLQtdC80YNcclxuICAgIGlzTG9naW5lZCAtINGC0LXQutGD0YnQuNC5INGB0YLQsNGC0YPRgSDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICovXHJcblxyXG59XHJcblxyXG4vLz8/INCS0YvRhdC+0LQg0YHRgtC+0YDQvtC90L3QtdCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40Lcg0YHQuNGB0YLQtdC80YtcclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IHRoaXJkUGFydHlVc2VyTG9nb3V0ID0gKCkgPT57XHJcbiAgLypcclxuICAgIHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwiVVNFUl9FWFRFUk5BTF9MT0dPVVRcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGxvZ2luOiBzdHJpbmcsXHJcbiAgICAgICAgICBpc0xvZ2luZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiAgICAvKlxyXG4gICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsCwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5INGB0LXRgNCy0LXRgNC+0LxcclxuICAgIGxvZ2luIC0g0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LLRi9GI0LXQtNGI0LXQs9C+INC40Lcg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuICAgIGlzTG9naW5lZCAtINGC0LXQutGD0YnQuNC5INGB0YLQsNGC0YPRgSDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgKi9cclxuXHJcblxyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQsNGD0YLQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG5jb25zdCBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzID0gKHdzKSA9PntcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgaWQ6ICdhbGxBdXRoVXNlcicsXHJcbiAgICB0eXBlOiBcIlVTRVJfQUNUSVZFXCIsXHJcbiAgICBwYXlsb2FkOiBudWxsLFxyXG4gIH1cclxuICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuY29uc3QgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzID0gKHdzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiAnYWxsVW5hdXRVc2VyJyxcclxuICAgIHR5cGU6IFwiVVNFUl9JTkFDVElWRVwiLFxyXG4gICAgcGF5bG9hZDogbnVsbCxcclxuICB9XHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuXHJcbi8v0J7RgtC/0YDQsNCy0LrQsCDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GOXHJcbmNvbnN0IHNlbmRpbmdNZXNzYWdlVXNlciA9ICh3cyx0ZXh0TWVzc2FnZSx0b1VzZXIpID0+e1xyXG4gIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgY29uc3QgdXNlciA9ICBKU09OLnBhcnNlKHVzZXJPYmplY3QpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQ6IHVzZXIubG9naW4sXHJcbiAgICAgIHR5cGU6IFwiTVNHX1NFTkRcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIHRvOiB0b1VzZXIsXHJcbiAgICAgICAgICB0ZXh0OiB0ZXh0TWVzc2FnZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgLypcclxuICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICBsb2dpbiAtINC70L7Qs9C40L0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQutC+0YLQvtGA0L7QvNGDINC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjyDRgdC+0L7QsdGJ0LXQvdC40LVcclxuICAgICAgdGV4dCAtINGC0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAqL1xyXG59XHJcblxyXG4vLz8/INCf0L7Qu9GD0YfQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IHJlY2VpdmluZ01lc3NhZ2VGcm9tVXNlciA9ICgpID0+IHtcclxuICAvKlxyXG4gICAgICB7XHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICB0eXBlOiBcIk1TR19TRU5EXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgZnJvbTogc3RyaW5nLFxyXG4gICAgICAgICAgdG86IHN0cmluZyxcclxuICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgIGRhdGV0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgaXNEZWxpdmVyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIGlzUmVhZGVkOiBib29sZWFuLFxyXG4gICAgICAgICAgICBpc0VkaXRlZDogYm9vbGVhbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAqL1xyXG5cclxuICAgIC8qXHJcbiAgICAgIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LAsINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvQuSDRgdC10YDQstC10YDQvtC8XHJcbiAgICAgICAgbWVzc2FnZSAtINC/0L7Qu9C1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCz0LTQtTpcclxuICAgICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGZyb20gLSDQvtGC0L/RgNCw0LLQuNGC0LXQu9GMINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIHRvIC0g0L/QvtC70YPRh9Cw0YLQtdC70Ywg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgdGV4dCAtINGC0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgZGF0ZXRpbWUgLSDQtNCw0YLQsCDQuCDQstGA0LXQvNGPINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgaXNEZWxpdmVyZWQgLSDRgdGC0LDRgtGD0YEsINC60L7RgtC+0YDRi9C5INGD0LrQsNC30YvQstCw0LXRgiwg0LTQvtGB0YLQsNCy0LvQtdC90L4g0LvQuCDRgdC+0L7QsdGJ0LXQvdC40LUg0L/QvtC70YPRh9Cw0YLQtdC70Y5cclxuICAgICAgICBpc1JlYWRlZCAtINGB0YLQsNGC0YPRgSwg0LrQvtGC0L7RgNGL0Lkg0YPQutCw0LfRi9Cy0LDQtdGCLCDQsdGL0LvQviDQu9C4INGB0L7QvtCx0YnQtdC90LjQtSDQv9GA0L7Rh9C40YLQsNC90L4g0L/QvtC70YPRh9Cw0YLQtdC70LXQvFxyXG4gICAgICAgIGlzRWRpdGVkIC0g0YHRgtCw0YLRg9GBLCDQutC+0YLQvtGA0YvQuSDRg9C60LDQt9GL0LLQsNC10YIsINCx0YvQu9C+INC70Lgg0YHQvtC+0LHRidC10L3QuNC1INC+0YLRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QviDQvtGC0L/RgNCw0LLQuNGC0LXQu9C10LxcclxuICAgICovXHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC40YHRgtC+0YDQuNC4INGB0L7QvtCx0YnQtdC90LjQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyID0gKHdzLGxvZ2luKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiBgaGlzdG9yeSR7bG9naW59YCxcclxuICAgIHR5cGU6IFwiTVNHX0ZST01fVVNFUlwiLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbG9naW46IGxvZ2luLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgLyoqXHJcbiAgICogIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LBcclxuICAgICAgbG9naW4gLSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQvtGCINC60L7RgtC+0YDQvtCz0L4g0LfQsNC/0YDQsNGI0LjQstCw0LXRgtGB0Y8g0LjRgdGC0L7RgNC40Y8g0YHQvtC+0LHRidC10L3QuNC5XHJcbiAgICAqL1xyXG59XHJcblxyXG4vLz8/INCj0LLQtdC00L7QvNC70LXQvdC40LUg0L7QsSDQuNC30LzQtdC90LXQvdC40Lgg0YHRgtCw0YLRg9GB0LAg0LTQvtGB0YLQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxpdmVyeVN0YXR1c0NoYW5nZSA9ICgpID0+IHtcclxuICAvLyB7XHJcbiAgLy8gICBpZDogbnVsbCxcclxuICAvLyAgIHR5cGU6IFwiTVNHX0RFTElWRVJcIixcclxuICAvLyAgIHBheWxvYWQ6IHtcclxuICAvLyAgICAgbWVzc2FnZToge1xyXG4gIC8vICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgLy8gICAgICAgc3RhdHVzOiB7XHJcbiAgLy8gICAgICAgICBpc0RlbGl2ZXJlZDogYm9vbGVhbixcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0YHQtdGA0LLQtdGA0L7QvFxyXG4gICAgICBtZXNzYWdlIC0g0L/QvtC70LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LPQtNC1OlxyXG4gICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICBpc0RlbGl2ZXJlZCAtINGB0YLQsNGC0YPRgSwg0LrQvtGC0L7RgNGL0Lkg0YPQutCw0LfRi9Cy0LDQtdGCLCDQtNC+0YHRgtCw0LLQu9C10L3QviDQu9C4INGB0L7QvtCx0YnQtdC90LjQtSDQv9C+0LvRg9GH0LDRgtC10LvRjlxyXG4gICAqL1xyXG5cclxuXHJcbn1cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLQsNGC0YPRgdCwINC/0YDQvtGH0YLQtdC90LjRjyDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuY29uc3QgbWVzc2FnZVJlYWRTdGF0dXNDaGFuZ2UgPSAod3MsaWRNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZDogYG1haW5NU0dfUkVBRGAsXHJcbiAgICAgIHR5cGU6IFwiTVNHX1JFQURcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIGlkOiBpZE1lc3NhZ2UsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG59IFxyXG5cclxuLy8/PyDQo9C00LDQu9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjRj1xyXG5jb25zdCBtZXNzYWdlRGVsZXRpb24gPSAoKSA9PiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IFwiTVNHX0RFTEVURVwiXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAqL1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICBtZXNzYWdlIC0g0L/QvtC70LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LPQtNC1OlxyXG4gICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAqL1xyXG5cclxufVxyXG5cclxuLy8/PyDQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+0LEg0YPQtNCw0LvQtdC90LjQuCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuLy8g0JjQvdC40YbQuNCw0YLQvtGAOiDQodC10YDQstC10YDQvdC+0LUg0L/RgNC40LvQvtC20LXQvdC40LVcclxuY29uc3Qgbm90aWZpY2F0aW9uTWVzc2FnZURlbGV0aW9uID0gKCkgPT4ge1xyXG5cclxufVxyXG5cclxuLy/QoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INGC0LXQutGB0YLQsCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuY29uc3QgbWVzc2FnZVRleHRFZGl0aW5nID0gKCkgPT57XHJcbiAgLyoqXHJcbiAgICoge1xyXG4gICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogXCJNU0dfRURJVFwiXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgKi9cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwXHJcbiAgICAgICAgICAgIG1lc3NhZ2UgLSDQv9C+0LvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQs9C00LU6XHJcbiAgICAgICAgICAgIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgICAgIHRleHQgLSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgKi9cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFxyXG4gIHVzZXJBdXRoZW50aWNhdGlvbixcclxuICB1c2VyTG9nb3V0LFxyXG4gIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMsXHJcbiAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzLFxyXG4gIHNlbmRpbmdNZXNzYWdlVXNlcixcclxuICBmZXRjaGluZ01lc3NhZ2VIaXN0b3J5V2l0aFVzZXIsXHJcbiAgbm90aWZpY2F0aW9uTWVzc2FnZURlbGl2ZXJ5U3RhdHVzQ2hhbmdlLFxyXG4gIG1lc3NhZ2VSZWFkU3RhdHVzQ2hhbmdlLFxyXG4gIG1lc3NhZ2VEZWxldGlvbixcclxuICBtZXNzYWdlVGV4dEVkaXRpbmcsXHJcbiB9OyIsImltcG9ydCB7IGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMsIGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2VycyB9IGZyb20gJy4uL2hlbHBlcnMvYXBpJztcclxuXHJcbmNvbnN0IHByb2Nlc3NpbmdUeXBlcyA9IChtZXNzYWdlLHN0YXRlVXNlcix3cykgPT57XHJcbiAgICBjb25zdCBtZXNzYWdlSnNvbiA9IEpTT04ucGFyc2UobWVzc2FnZSk7XHJcbiAgICBjb25zdCB0eXBlID0gbWVzc2FnZUpzb24udHlwZTtcclxuXHJcbiAgICBpZih0eXBlID09PSAnVVNFUl9MT0dJTicpe1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XHJcbiAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ0VSUk9SJyl7XHJcbiAgICAgIGFsZXJ0KG1lc3NhZ2VKc29uLnBheWxvYWQuZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0xPR09VVCcpe1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0YLRgNC10YLRjNC10Lkg0YHRgtC+0YDQvtC90L7QuVxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfRVhURVJOQUxfTE9HSU4nKXtcclxuICAgICAgZ2V0dGluZ0FsbEF1dGhlbnRpY2F0ZWRVc2Vycyh3cyk7IC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQsNGD0YLQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgICBnZXR0aW5nQWxsVW5hdXRob3JpemVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlID09PSAnVVNFUl9FWFRFUk5BTF9MT0dPVVQnKXtcclxuICAgICAgZ2V0dGluZ0FsbEF1dGhlbnRpY2F0ZWRVc2Vycyh3cyk7IC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQsNGD0YLQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgICBnZXR0aW5nQWxsVW5hdXRob3JpemVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQsNGD0YLQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfQUNUSVZFJyl7XHJcbiAgICAgIGNvbnN0IHVzZXJzTGlzdCA9IG1lc3NhZ2VKc29uLnBheWxvYWQudXNlcnM7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVc2VyT2JqID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck5hbWUgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VyT2JqKS5sb2dpbjtcclxuICAgICAgLy8g0J3QsNGF0L7QtNC40Lwg0LjQvdC00LXQutGBINC+0LHRitC10LrRgtCwINCyINGB0L/QuNGB0LrQtVxyXG4gICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gdXNlcnNMaXN0LmZpbmRJbmRleChvYmogPT4gb2JqLmxvZ2luID09PSBjdXJyZW50VXNlck5hbWUpO1xyXG4gICAgICBpZiAoaW5kZXhUb0RlbGV0ZSAhPT0gLTEpIHtcclxuICAgICAgICB1c2Vyc0xpc3Quc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlVXNlci51c2Vyc0FjdGl2ZSA9IHVzZXJzTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQvdC10LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfSU5BQ1RJVkUnKXtcclxuICAgICAgc3RhdGVVc2VyLnVzZXJzSW5hY3JpdmUgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLnVzZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0J/QvtC70YPRh9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjRjyDQvtGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgaWYodHlwZSA9PT0gJ01TR19TRU5EJyl7XHJcbiAgICAgIGNvbnN0IGZyb20gPSBtZXNzYWdlSnNvbi5wYXlsb2FkLm1lc3NhZ2UuZnJvbTtcclxuICAgICAgY29uc3QgdG8gPSBtZXNzYWdlSnNvbi5wYXlsb2FkLm1lc3NhZ2UudG87XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVc2VyT2JqID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck5hbWUgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VyT2JqKS5sb2dpbjtcclxuXHJcbiAgICAgIGNvbnN0IHRleHQgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLm1lc3NhZ2UudGV4dDtcclxuICAgICAgY29uc3QgZGF0ZXRpbWUgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLm1lc3NhZ2UuZGF0ZXRpbWU7XHJcblxyXG4gICAgICBpZihjdXJyZW50VXNlck5hbWUgPT09IGZyb20pIHtcclxuICAgICAgICAvLyBzdGF0ZVVzZXIubWFpbkxhc3RNZXNzYWdlID0ge1xyXG4gICAgICAgIC8vICAgdGV4dDogdGV4dCxcclxuICAgICAgICAvLyAgIGRhdGV0aW1lOiBkYXRldGltZSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIHN0YXRlVXNlci5tYWluTGFzdE1lc3NhZ2UgPSBtZXNzYWdlSnNvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoY3VycmVudFVzZXJOYW1lID09PSB0bykge1xyXG4gICAgICAgIGlmKHN0YXRlVXNlci5zZW5kVXNlciA9PT0gZnJvbSl7XHJcbiAgICAgICAgICAvLyBzdGF0ZVVzZXIuY3VycmVudFJlY2VpdmVkTWVzc2FnZT17XHJcbiAgICAgICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAvLyAgIGRhdGV0aW1lOiBkYXRldGltZSxcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICBzdGF0ZVVzZXIuY3VycmVudFJlY2VpdmVkTWVzc2FnZT1tZXNzYWdlSnNvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAvLyDQv9C+0LvRg9GH0LDRgtC10LvRjCDRjyDQvtGCIGZyb21cclxuICAgICAgICAgIGlmIChzdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSA9PT0gZnJvbSl7XHJcbiAgICAgICAgICAgIHN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBmcm9tO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBmcm9tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v0J/QvtC70YPRh9C10L3QuNC1INC40YHRgtC+0YDQuNC4INGB0L7QvtCx0YnQtdC90LjQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGlmKHR5cGUgPT09ICdNU0dfRlJPTV9VU0VSJyl7XHJcbiAgICAgIHN0YXRlVXNlci5oaXN0b3J5V2l0aFVzZXIgPSBtZXNzYWdlSnNvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ01TR19SRUFEJyl7XHJcbiAgICAgIC8v0YHQvNC10L3QuNC70YHRjyDRgdGC0LDRgtGD0YEg0YMg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgIHN0YXRlVXNlci5tc2dSZWFkID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHByb2Nlc3NpbmdUeXBlcyB9OyIsImNvbnN0IGF1dGhvcml6YXRpb25JY28gPSBgPHN2ZyBpZD1cInN2Zy1zb3VyY2VcIiBoZWlnaHQ9XCIwXCIgdmVyc2lvbj1cIjEuMVwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlXCI+XHJcbiA8ZyBpZD1cIm1hbi1wZW9wbGUtdXNlclwiIGRhdGEtaWNvbm1lbG9uPVwiU3RyZWFtbGluZSBJY29uIFNldDpkZTMyZWIyNjIxNDkxYzFhODgxYTlmZTg0NjIzNmRhMVwiPlxyXG4gICAgPGcgaWQ9XCJFeHBhbmRlZFwiPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxwYXRoICBkPVwiTTE2LjAyOCwyMGMtNC43NjQsMC04LjYzOS00LjQ4Ni04LjYzOS0xMHMzLjg3NS0xMCw4LjYzOS0xMGM0Ljc2MywwLDguNjM4LDQuNDg2LDguNjM4LDEwXHJcblx0XHRcdFx0UzIwLjc5MSwyMCwxNi4wMjgsMjB6IE0xNi4wMjgsMS4zMzNDMTIsMS4zMzMsOC43MjIsNS4yMjEsOC43MjIsMTBzMy4yNzcsOC42NjcsNy4zMDYsOC42NjdjNC4wMjksMCw3LjMwNi0zLjg4OCw3LjMwNi04LjY2N1xyXG5cdFx0XHRcdFMyMC4wNTcsMS4zMzMsMTYuMDI4LDEuMzMzelwiPjwvcGF0aD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgICA8cGF0aCAgZD1cIk0zMS45ODgsMzJIMC4wMTJ2LTQuNTE1YzAtMS45NjcsMS4yNDUtMy43MzMsMy4wOTctNC4zOTVsOC4yMjQtMi4yNjZ2LTIuNzdoMS4zMzN2My43ODVMMy41MSwyNC4zNjFcclxuXHRcdFx0XHRjLTEuMjc1LDAuNDU4LTIuMTY1LDEuNzItMi4xNjUsMy4xMjR2My4xODJoMjkuMzA5di0zLjE4MmMwLTEuNDA0LTAuODg5LTIuNjY2LTIuMjEzLTMuMTM5bC05LjEwNy0yLjUwNnYtMy43NThoMS4zMzJ2Mi43NDJcclxuXHRcdFx0XHRsOC4xNzgsMi4yNTFjMS45LDAuNjc3LDMuMTQ1LDIuNDQyLDMuMTQ1LDQuNDA5VjMyelwiPjwvcGF0aD5cclxuICAgICAgIDwvZz5cclxuICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoICBkPVwiTTIxLjg2NSw4LjgxMmMtMC4wNDUsMC0wLjA5LTAuMDAxLTAuMTM3LTAuMDAzYy0xLjUtMC4wNTUtMy4yNS0xLjAwNC00LjM2MS0yLjI4N1xyXG5cdFx0XHRcdEMxNi41OSw3LjUxMywxNS40OCw4LjE1LDE0LjEwNiw4LjM4M2MtMi40MDMsMC40MTMtNS4xNTItMC41MS01Ljk4OC0xLjMyMWwwLjkyOC0wLjk1N2MwLjQwMywwLjM5MSwyLjY5LDEuMzI5LDQuODM2LDAuOTY0XHJcblx0XHRcdFx0YzEuMzMyLTAuMjI2LDIuMjkyLTAuOTExLDIuODU0LTIuMDM0bDAuNTU4LTEuMTE0bDAuNjE3LDEuMDgyYzAuNzM4LDEuMjkyLDIuNTA4LDIuNDI1LDMuODY3LDIuNDc1XHJcblx0XHRcdFx0YzAuNjA0LDAuMDE2LDEuMDMzLTAuMTY1LDEuMzA3LTAuNTcxbDEuMTA1LDAuNzQ1QzIzLjY4Niw4LjQwMywyMi44NjMsOC44MTIsMjEuODY1LDguODEyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cImxvY2stbG9ja2VyXCIgZGF0YS1pY29ubWVsb249XCJTdHJlYW1saW5lIEljb24gU2V0OjVkNDNjNmY0NWNkYmVjZmQ1YjhhMTJiYzllNWRkMzNjXCI+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJFeHBhbmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgIGN4PVwiMTZcIiBjeT1cIjIwXCIgcj1cIjEuMzMzXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgIDxwYXRoICBkPVwiTTE2LDI1LjMzM2MtMC4zNjksMC0wLjY2Ny0wLjI5OC0wLjY2Ny0wLjY2NnYtNEMxNS4zMzMsMjAuMjk4LDE1LjYzMSwyMCwxNiwyMHMwLjY2NywwLjI5OCwwLjY2NywwLjY2N1xyXG5cdFx0XHRcdHY0QzE2LjY2NywyNS4wMzUsMTYuMzY5LDI1LjMzMywxNiwyNS4zMzN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoICBkPVwiTTI4LDMySDRWMTJoMjRWMzJ6IE01LjMzMywzMC42NjdoMjEuMzMzVjEzLjMzM0g1LjMzM1YzMC42Njd6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgPHBhdGggIGQ9XCJNMjQsMTIuNjY3aC0xLjMzM1Y4YzAtMy42NzYtMi45OTEtNi42NjctNi42NjctNi42NjdjLTMuNjc2LDAtNi42NjcsMi45OS02LjY2Nyw2LjY2N3Y0LjY2N0g4VjhcclxuXHRcdFx0XHRjMC00LjQxMiwzLjU4OC04LDgtOGM0LjQxMSwwLDgsMy41ODgsOCw4VjEyLjY2N3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICA8L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5leHBvcnQgeyBhdXRob3JpemF0aW9uSWNvIH07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudENyZWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW5uZXJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRDcmVhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudC5nZXRFbGVtZW50KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnKTtcclxuICAgICAgICB0aGlzLnNldENzc0NsYXNzZXMocGFyYW1zLmNsYXNzTmFtZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0VGV4dENvbnRlbnQocGFyYW1zLnRleHRDb250ZW50KTtcclxuICAgICAgICB0aGlzLnNldENhbGxiYWNrKHBhcmFtcy5jYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5zZXRJZChwYXJhbXMuaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cihwYXJhbXMuYXR0cik7XHJcbiAgICAgICAgdGhpcy5hZGREYXRhKHBhcmFtcy5pZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElkKGlkKSB7XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3NzQ2xhc3Nlcyhjc3NDbGFzc2VzID0gW10pIHtcclxuICAgICAgICBjc3NDbGFzc2VzLm1hcCgoY3NzQ2xhc3MpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0cihhdHRyID0ge30pe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoYXR0cikubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoYXR0cilbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHRDb250ZW50KHRleHQgPSAnJykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGF0YShpZERhdGEpe1xyXG4gICAgICAgIGlmKGlkRGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kYXRhc2V0LmlkID0gaWREYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dCBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgLy8gbWFpbi5pbm5lckhUTUwgPSAnQWJvdXQnO1xyXG4gICAgICAgIC8vIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vIHRoaXMuYXBwLmFwcGVuZChtYWluKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWJvdXQgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2Fib3V0J119KTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2Fib3V0X19jb250YWluZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2gxJywgY2xhc3NOYW1lczpbJ2Fib3V0X190aXRsZSddLCB0ZXh0Q29udGVudDogJ9Ch0YPQv9C10YAg0YfQsNGCISd9KTtcclxuICAgICAgICBjb25zdCBpbmZvID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3AnLCBjbGFzc05hbWVzOlsnYWJvdXRfX2luZm8nXSwgdGV4dENvbnRlbnQ6ICfQn9GA0LjQu9C+0LbQtdC90LjQtSDRgNCw0LfRgNCw0LHQvtGC0LDQvdC+INCyINGA0LDQvNC60LDRhSDQutGD0YDRgdCwIFJTU2Nob29sIEpTL0ZFIDIwMjNRMyd9KTtcclxuICAgICAgICBjb25zdCBhdXRvciA9ICBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzoncCcsIGNsYXNzTmFtZXM6WydhYm91dF9faW5mbyddLCB0ZXh0Q29udGVudDogJ9CQ0LLRgtC+0YA6IHZsYWRpbWlyb3ZpY3AnfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUJ0biA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzonYnV0dG9uJywgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6WydidG4nLCdmb3JtX19idG4nXSwgXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAn0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjYXV0aCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudCh0aXRsZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChpbmZvKTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGF1dG9yKTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlCdG4pO1xyXG5cclxuICAgICAgICBhYm91dC5hZGRJbm5lckVsZW1lbnQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5hcHAuYXBwZW5kKGFib3V0LmdldEVsZW1lbnQoKSk7XHJcblxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3JztcclxuaW1wb3J0ICcuL2F1dGhvcml6YXRpb24uc2Nzcyc7XHJcbmltcG9ydCB7IGF1dGhvcml6YXRpb25JY28gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N2Zyc7XHJcbmltcG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHdzLHN0YXRlVXNlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlVXNlciA9IHN0YXRlVXNlcjtcclxuICAgICAgICB0aGlzLndzID0gd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgcGFnZUF1dGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwYWdlQXV0aC5jbGFzc0xpc3QuYWRkKCdwYWdlLWF1dGgnKTtcclxuICAgICAgICBwYWdlQXV0aC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cImF1dGhfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fdXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVzZXJcIiBmb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbWFuLXBlb3BsZS11c2VyXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1c2VyLW5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IG5hbWUgaXNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IFwiNFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCJeW0EtWl1bYS16QS1aXFxcXC1dKyRcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyLWVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX191c2VyLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxvY2tcIiBmb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsdGVyPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNsb2NrLWxvY2tlclwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzcz1cInVzZXItcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk15IHBhc3N3b3JkIGlzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhc3N3b3JkLWVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduIGluXCIgY2xhc3M9XCJzaWduLWluXCIgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIGNsYXNzPVwiYnRuIGZvcm1fX2J0blwiPmFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgJHthdXRob3JpemF0aW9uSWNvfVxyXG4gICAgICAgIDwvZGl2YDtcclxuXHJcblxyXG4gICAgICAgIC8vISEhISEhISEhISEhISEg0J/QvtGC0L7QvCDQktC60LvRjtGH0Lgg0LLQsNC70LjQtNCw0YbQuNGOISEhIVxyXG4gICAgICAgIC8vINC00L7QsdCw0LLRjCA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2lnbiBpblwiIGNsYXNzPVwic2lnbi1pblwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KHBhZ2VBdXRoKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHNpZ25JbiA9IHBhZ2VBdXRoLnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluJyk7XHJcbiAgICAgICAgc2lnbkluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkNsaWNrKHBhZ2VBdXRoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5hcHAuYXBwZW5kKHBhZ2VBdXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5DbGljayhlbCl7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBlbC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclBhcyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVWYWwgPSB1c2VyTmFtZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB1c2VyUGFzVmFsID0gdXNlclBhcy52YWx1ZTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoe2xvZ2luOiB1c2VyTmFtZVZhbCwgcGFzc3dvcmQ6IHVzZXJQYXNWYWx9KSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIuaXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB1c2VyQXV0aGVudGljYXRpb24odGhpcy53cyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVJbnB1dChwYWdlQXV0aCl7XHJcbiAgICAgICAgbGV0IG5hbWVCb29sID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBhc3NCb29sID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc2lnbkluID0gcGFnZUF1dGgucXVlcnlTZWxlY3RvcignLnNpZ24taW4nKTtcclxuICAgICAgICBjb25zdCBmb3JtVXNlck5hbWUgPSBwYWdlQXV0aC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdXNlci1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckVycm9yID0gZm9ybVVzZXJOYW1lLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBmb3JtVXNlck5hbWUucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG4gICAgICAgIHVzZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlWzBdICE9PSB2YWx1ZVswXS50b1VwcGVyQ2FzZSgpKXtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRXJyb3IuaW5uZXJIVE1MID0gJ9Cf0LXRgNCy0LDRjyDQsdGD0LrQstCwINCyINCY0LzQtdC90Lgg0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQs9C70LDQstC90L7QuSEnOyBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lQm9vbD0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25JbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyRXJyb3IuaW5uZXJIVE1MID0gJ9Ch0LjQvNCy0L7Qu9C+0LIg0LIg0JjQvNC10L3QuCDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LHQvtC70YzRiNC1IDMhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUJvb2w9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25JbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQm9vbD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHVzZXJFcnJvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybVVzZXJQYXNzd29yZCA9ICBwYWdlQXV0aC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdXNlci1wYXNzd29yZCcpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSBmb3JtVXNlclBhc3N3b3JkLnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1lcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IGZvcm1Vc2VyUGFzc3dvcmQucXVlcnlTZWxlY3RvcignLnVzZXItcGFzc3dvcmQnKTtcclxuICAgICAgICB1c2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZiggdmFsdWUubGVuZ3RoIDwgNCApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAn0KHQuNC80LLQvtC70L7QsiDQsiDQv9Cw0YDQvtC70LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINCx0L7Qu9GM0YjQtSAzISc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc0Jvb2wgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduSW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9IGBgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighL1swLTldKy8udGVzdCh2YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICfQkiDQv9Cw0YDQvtC70LUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGF0L7RgtGMINC+0LTQvdCwINGG0LjRhNGA0LAhJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NCb29sID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVTaWduSW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lQm9vbCAmJiBwYXNzQm9vbCl7XHJcbiAgICAgICAgICAgICAgICBzaWduSW4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT57XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYoc2lnbkluLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vdGhpcy5idG5DbGljaygpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0VudGVyJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHNpZ25Jbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5pbXBvcnQgeyB1c2VyTG9nb3V0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hcGknO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5IGV4dGVuZHMgQWJzdHJhY3RWaWV3e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdzLHN0YXRlVXNlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndzID0gd3M7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIgPSBzdGF0ZVVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6WydtYWluX19jb250YWluZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlIZWFkZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonaGVhZGVyJywgY2xhc3NOYW1lczpbJ2JvZHlfX2hlYWRlciddfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUJ0biA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzonYnV0dG9uJywgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6WydidG4nLCdib2R5X19idG4nLCdib2R5X19idG4tY2hhdCddLCBcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICfQn9C+0LrQuNC90YPRgtGMINGH0LDRgicsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PntcclxuICAgICAgICAgICAgICAgIHVzZXJMb2dvdXQodGhpcy53cyx0aGlzLnN0YXRlVXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUNoYXQgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX25hbWUtY2hhdCddLCB0ZXh0Q29udGVudDogJ9Ch0YPQv9C10YAg0YfQsNGCISd9KTtcclxuICAgICAgICBjb25zdCBhYm91dEJ0biA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzonYnV0dG9uJywgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6WydidG4nLCdib2R5X19idG4nLCdib2R5X19idG4tYWJvdXQnXSwgXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQWJvdXQnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT57XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjYWJvdXQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJvZHlIZWFkZXIuYWRkSW5uZXJFbGVtZW50KG5hbWVDaGF0KTtcclxuICAgICAgICBib2R5SGVhZGVyLmFkZElubmVyRWxlbWVudChhYm91dEJ0bik7XHJcbiAgICAgICAgYm9keUhlYWRlci5hZGRJbm5lckVsZW1lbnQoYm9keUJ0bik7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChib2R5SGVhZGVyKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlJbmZvID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19pbmZvJ119KTtcclxuICAgICAgICBjb25zdCBzZW5kVXNlck5hbWUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX3NlbmQtdXNlci1uYW1lJ119KTtcclxuICAgICAgICBjb25zdCBzZW5kVXNlclN0YXR1cyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fc2VuZC11c2VyLXN0YXR1cyddfSk7XHJcbiAgICAgICAgYm9keUluZm8uYWRkSW5uZXJFbGVtZW50KHNlbmRVc2VyTmFtZSk7XHJcbiAgICAgICAgYm9keUluZm8uYWRkSW5uZXJFbGVtZW50KHNlbmRVc2VyU3RhdHVzKTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlJbmZvKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fY29udGFpbmVyJ119KTtcclxuICAgICAgICBjb25zdCBub25lTWVzc2FnZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnbm9uZS1tZXNzYWdlJ10sdGV4dENvbnRlbnQ6J9CS0YvQsdC10YDQuNGC0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRjy4uLid9KTtcclxuICAgICAgICBib2R5Q29udGFpbmVyLmFkZElubmVyRWxlbWVudChub25lTWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChib2R5Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5nZXRFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hhdHNTZW5kZXIobWVzc2FnZSxkYXRlLHN0YXR1c01lc3NhZ2UsZWRpdE1lc3NhZ2UsaWRNZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX2NoYXRzJywnYm9keV9fY2hhdHMtc2VuZGVyJ10saWREYXRhOiBpZE1lc3NhZ2V9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJJbmZvID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtaW5mbyddIH0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck5hbWUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtbmFtZSddLCB0ZXh0Q29udGVudDogJ9CS0YsnfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyRGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1kYXRlJ10sIHRleHRDb250ZW50OiBkYXRlfSk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVySW5mby5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTmFtZSk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVySW5mby5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyRGF0ZSk7XHJcblxyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlci5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVySW5mbyk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTWVzc2FnZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fbWVzc2FnZVNlbmRlciddfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTWVzc2FnZVAgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzoncCcsIHRleHRDb250ZW50OiBtZXNzYWdlfSk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyTWVzc2FnZS5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTWVzc2FnZVApO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlci5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1c2VzID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3AnLCBjbGFzc05hbWVzOlsnYm9keV9fbWVzc2FnZVNlbmRlci1zdGF0dXNlcyddfSk7XHJcbiAgICAgICAgY29uc3QgZWRpdE1lc3NhZ2VUZXh0ID0gZWRpdE1lc3NhZ2UgPyBlZGl0TWVzc2FnZSA6ICcnO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VFZGl0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOlsnYm9keV9fbWVzc2FnZVNlbmRlci1lZGl0J10sIHRleHRDb250ZW50OiBlZGl0TWVzc2FnZVRleHR9KTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzZXMuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VFZGl0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOlsnYm9keV9fbWVzc2FnZVNlbmRlci1zdGF0dXMnXSwgdGV4dENvbnRlbnQ6IHN0YXR1c01lc3NhZ2V9KTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzZXMuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXMpO1xyXG5cclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXNlcyk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gYm9keUNoYXRzU2VuZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoYXRzUmVjaXBlbnQobWVzc2FnZSxkYXRlLHVzZXJSZWNpcGVudCxpZE1lc3NhZ2Upe1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19jaGF0cycsICdib2R5X19jaGF0cy1yZWNpcGVudCddLCBpZERhdGE6IGlkTWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50SW5mbyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLWluZm8nXSB9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudE5hbWUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtbmFtZSddLCB0ZXh0Q29udGVudDogdXNlclJlY2lwZW50fSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnREYXRlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLWRhdGUnXSwgdGV4dENvbnRlbnQ6IGRhdGV9KTtcclxuICAgICAgICBib2R5Q2hhdHNSZWNpcGVudEluZm8uYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1JlY2lwZW50TmFtZSk7XHJcbiAgICAgICAgYm9keUNoYXRzUmVjaXBlbnRJbmZvLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNSZWNpcGVudERhdGUpO1xyXG4gICAgICAgIGJvZHlDaGF0c1JlY2lwZW50LmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNSZWNpcGVudEluZm8pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50TWVzc2FnZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fbWVzc2FnZVJlY2lwZW50J119KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudE1lc3NhZ2VQID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3AnLCB0ZXh0Q29udGVudDogbWVzc2FnZX0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1JlY2lwZW50TWVzc2FnZS5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzUmVjaXBlbnRNZXNzYWdlUCk7XHJcbiAgICAgICAgYm9keUNoYXRzUmVjaXBlbnQuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1JlY2lwZW50TWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBib2R5Q2hhdHNSZWNpcGVudDtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi8uLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcic7XHJcbmltcG9ydCB7IHNlbmRpbmdNZXNzYWdlVXNlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQmxvY2sgZXh0ZW5kcyBBYnN0cmFjdFZpZXd7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod3Msc3RhdGVVc2VyKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud3MgPSB3cztcclxuICAgICAgICB0aGlzLnN0YXRlVXNlciA9IHN0YXRlVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBtZXNzYWdlQmxvY2sgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ21lc3NhZ2VCbG9jayddfSk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidmb3JtJywgY2xhc3NOYW1lczpbJ2Zvcm0nXX0pO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOidpbnB1dCcsIFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOlsndXNlck1lc3NhZ2UnXSwgXHJcbiAgICAgICAgICAgIGF0dHI6e3R5cGU6XCJ0ZXh0XCIsZGlzYWJsZWQ6ICdkaXNhYmxlZCd9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzonYnV0dG9uJywgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6WydidG4nXSwgXHJcbiAgICAgICAgICAgIGF0dHI6e2Rpc2FibGVkOiAnZGlzYWJsZWQnfSxcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICfQntGC0L/RgNCw0LLQuNGC0YwnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcm0uYWRkSW5uZXJFbGVtZW50KGlucHV0KTtcclxuICAgICAgICBmb3JtLmFkZElubmVyRWxlbWVudChidXR0b24pO1xyXG4gICAgICAgIG1lc3NhZ2VCbG9jay5hZGRJbm5lckVsZW1lbnQoZm9ybSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IG1lc3NhZ2VCbG9jay5nZXRFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhY2tJbnB1dChtZXNzYWdlQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmJ0bkNsaWNrKG1lc3NhZ2VDb250YWluZXIpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbWVzc2FnZUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja0lucHV0KG1lc3NhZ2VDb250YWluZXIpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gbWVzc2FnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudXNlck1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBidG4gPSBtZXNzYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuICAgICAgICB1c2VyTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKG1lc3NhZ2VDb250YWluZXIpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gbWVzc2FnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudXNlck1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBidG4gPSBtZXNzYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhYWdlID0gdXNlck1lc3NhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHVzZXJNZXNzYWdlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHNlbmRpbmdNZXNzYWdlVXNlcih0aGlzLndzLG1lc3NhYWdlLHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlldyc7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IGZldGNoaW5nTWVzc2FnZUhpc3RvcnlXaXRoVXNlciB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBBYnN0cmFjdFZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBKU09OLnBhcnNlKHVzZXJPYmplY3QpLmxvZ2luO1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXItY3VycmVudFwiPlxyXG4gICAgICAgICAgICAgICAg0JLRiyDQstC+0YjQu9C4INC60LDQujogPHNwYW4gY2xhc3M9XCJzaWRlYmFyX191c2VyLWN1cnJlbnQtbmFtZVwiPiR7dXNlck5hbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoX19ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3M9XCJzZWFyY2hfX2lucHV0XCIgcGxhY2Vob2xkZXI9XCLQndCw0LnRgtC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAuLi5cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz0nc2lkZWJhcl9faGVhZGVyJz7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg6PC9oND5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPSdzaWRlYmFyX191c2Vycyc+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgc2lkZWJhclVzZXJzTGlzdCA9ICcnO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5zdGF0ZVVzZXIudXNlcnNBY3RpdmUnLHRoaXMuc3RhdGVVc2VyLnVzZXJzQWN0aXZlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlVXNlci51c2Vyc0FjdGl2ZS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy/Qt9Cw0L/RgNC+0YHQuNGC0Ywg0LjRgdGC0L7RgNC40Y4g0LTQu9GPINC/0L7QtNGB0YfQtdGC0LAg0L3QtdC/0YDQvtGH0LjRgtCw0L3Ri9GFINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gICAgICAgICAgICBmZXRjaGluZ01lc3NhZ2VIaXN0b3J5V2l0aFVzZXIodGhpcy53cyx0aGlzLnN0YXRlVXNlci51c2Vyc0FjdGl2ZVtpXS5sb2dpbik7XHJcblxyXG4gICAgICAgICAgICBzaWRlYmFyVXNlcnNMaXN0ICs9IGA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyLXN0YXR1cyBzaWRlYmFyX191c2VyLWFjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyLW5hbWVcIj4ke3RoaXMuc3RhdGVVc2VyLnVzZXJzQWN0aXZlW2ldLmxvZ2lufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19tZXNzYWdlLW51bWJlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZVVzZXIudXNlcnNJbmFjcml2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzaWRlYmFyVXNlcnNMaXN0ICs9IGA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyLW5hbWVcIj4ke3RoaXMuc3RhdGVVc2VyLnVzZXJzSW5hY3JpdmVbaV0ubG9naW59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX21lc3NhZ2UtbnVtYmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgc2lkZWJhclVzZXJzLmlubmVySFRNTCA9IHNpZGViYXJVc2Vyc0xpc3Q7XHJcbiAgICAgICAgcmV0dXJuIHNpZGViYXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi9jb21tb24vdmlldyc7XHJcblxyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXInO1xyXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9ib2R5L2JvZHknO1xyXG5pbXBvcnQgeyBNZXNzYWdlQmxvY2sgfSBmcm9tICcuLi9jb21wb25lbnRzL21lc3NhZ2UtYmxvY2svbWVzc2FnZS1ibG9jayc7XHJcbmltcG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvbiwgZ2V0dGluZ0FsbEF1dGhlbnRpY2F0ZWRVc2VycywgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyLCBtZXNzYWdlUmVhZFN0YXR1c0NoYW5nZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaVwiO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEFic3RyYWN0Vmlld3tcclxuICAgIGNvbnN0cnVjdG9yKHdzLHN0YXRlVXNlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndzID0gd3M7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIgPSBzdGF0ZVVzZXI7XHJcbiAgICAgICAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKHVzZXJPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnVzZXIpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZVVzZXIuaXNMb2dpbmVkKXtcclxuICAgICAgICAgICAgICAgIHVzZXJBdXRoZW50aWNhdGlvbih0aGlzLndzKTsgLy8g0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVVc2VyLmlzTG9naW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2V0dGluZ0FsbEF1dGhlbnRpY2F0ZWRVc2Vycyh0aGlzLndzKTsgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnVzZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBwYWdlTmFtZS5jbGFzc0xpc3QuYWRkKCdjaGF0X19ub0F1dGgnKTtcclxuICAgICAgICAgICAgcGFnZU5hbWUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjaGF0X19ub0F1dGgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdF9fbm9BdXRoLXRleHRcIj7QktGLINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvdGLITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjaGF0X19ub0F1dGgtbGlua1wiIGhyZWY9XCIvcnMtZnVuLWNoYXQvXCI+0J/QtdGA0LXQudGC0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtGDINCw0LLRgtC+0YDQuNC30LDRhtC40LghPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj4gYDtcclxuICAgICAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmFwcGVuZChwYWdlTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwYWdlTmFtZS5jbGFzc0xpc3QuYWRkKCdjaGF0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBuZXcgU2lkZWJhcih0aGlzLndzLHRoaXMuc3RhdGVVc2VyKS5yZW5kZXIoKTtcclxuICAgICAgICBwYWdlTmFtZS5hcHBlbmQoc2lkZWJhcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5Cb2R5Q2xhc3MgPSBuZXcgQm9keSh0aGlzLndzLHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICBtYWluLmFwcGVuZCh0aGlzLkJvZHlDbGFzcy5yZW5kZXIoKSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQobmV3IE1lc3NhZ2VCbG9jayh0aGlzLndzLHRoaXMuc3RhdGVVc2VyKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnY2hhdF9fZm9vdGVyJ119KS5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfX2Zvb3Rlci1yc1wiPjxpbWcgc3JjPVwiLi9pbWcvcnMtbG9nby53ZWJwXCI+VGhlIFJvbGxpbmcgU2NvcGVzIFNjaG9vbDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PkdpdCBIdWI6IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZGltaXJvdmljcFwiPlZsYWRpbWlyb3ZpY3A8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+MjAyNDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQoZm9vdGVyKTtcclxuICAgICAgICBwYWdlTmFtZS5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZChwYWdlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVkcmF3aW5nU2lkZWJhcigpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncmVkcmF3aW5nU2lkZWJhcicpXHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgICAgIGlmKHNpZGViYXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyTmV3ID0gbmV3IFNpZGViYXIodGhpcy53cyx0aGlzLnN0YXRlVXNlcikucmVuZGVyKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZWJhck5ldycsc2lkZWJhck5ldylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJTdHIgPSBzaWRlYmFyTmV3LmlubmVySFRNTDtcclxuICAgICAgICAgICAgc2lkZWJhci5pbm5lckhUTUwgPSBzaWRlYmFyU3RyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hVc2VyKHNpZGViYXIpXHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tVc2VyKHNpZGViYXIsdGhpcy5zdGF0ZVVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyKHNpZGViYXIpe1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVVc2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1uYW1lJykudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lVXNlci5pbmNsdWRlcyhzZWFyY2hUZXh0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrVXNlcihzaWRlYmFyLHN0YXRlVXNlcikge1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclVzZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyJyk7XHJcbiAgICAgICAgICAgIHNpZGViYXJVc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VyTmFtZSA9IHNpZGViYXJVc2VyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIHN0YXRlVXNlci5zZW5kVXNlciA9IHNpZGViYXJVc2VyTmFtZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NlbmRVc2VyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcnMnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHlJbmZvID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2luZm8nKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlVXNlck5hbWUgPSBib2R5SW5mby5xdWVyeVNlbGVjdG9yKCcuYm9keV9fc2VuZC11c2VyLW5hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlVXNlclN0YXR1cyA9IGJvZHlJbmZvLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19zZW5kLXVzZXItc3RhdHVzJyk7XHJcblxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lVXNlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItbmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyID09PSBuYW1lVXNlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyTmFtZS50ZXh0Q29udGVudCA9IG5hbWVVc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VyU3RhdHVzID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1zdGF0dXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzaWRlYmFyVXNlclN0YXR1cy5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfX3VzZXItYWN0aXZlJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyU3RhdHVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInN0YXR1cy1hY3RpdmVcIj7QkiDRgdC10YLQuDwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVVc2VyU3RhdHVzLmlubmVySFRNTCA9IGA8c3Bhbj7QndC1INCyINGB0LXRgtC4PC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0LDQutGC0LjQstC90YvQuSDQuNC90YLRg9C/INC00LvRjyDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjQuVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy51c2VyTWVzc2FnZScpO1xyXG4gICAgICAgICAgICB1c2VyTWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IFxyXG5cclxuICAgICAgICAgICAgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LjRgdGC0L7RgNC40Lgg0YHQvtC+0LHRidC10L3QuNC5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICAgICAgICBmZXRjaGluZ01lc3NhZ2VIaXN0b3J5V2l0aFVzZXIodGhpcy53cyx0aGlzLnN0YXRlVXNlci5zZW5kVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v0J/QvtGP0LLQu9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjQuSwg0LrQvtGC0L7RgNGL0LUg0L7RgtC/0YDQsNCy0LjQuyDRjyFcclxuICAgIG1haW5OZXdNZXNzYWdlKGRhdGVNZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IG5vbmVNZXNzYWdlID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubm9uZS1tZXNzYWdlJyk7XHJcbiAgICAgICAgaWYobm9uZU1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gIHRoaXMuZm9ybWF0ZURhdGUoZGF0ZU1lc3NhZ2UuZGF0ZXRpbWUpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBkYXRlTWVzc2FnZS5zdGF0dXMuaXNSZWFkZWQgPyAn0L/RgNC+0YfQuNGC0LDQvdC+JyA6ICfQtNC+0YHRgtCw0LLQu9C10L3Qvic7XHJcbiAgICAgICAgY29uc3QgZWRpdE1lc3NhZ2UgPSBkYXRlTWVzc2FnZS5zdGF0dXMuaXNFZGl0ZWQgPyAn0LjQt9C80LXQvdC10L3QvicgOiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXIgPSB0aGlzLkJvZHlDbGFzcy5jcmVhdGVDaGF0c1NlbmRlcihkYXRlTWVzc2FnZS50ZXh0LGRhdGUsc3RhdHVzTWVzc2FnZSxlZGl0TWVzc2FnZSxkYXRlTWVzc2FnZS5pZCk7XHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYm9keUNoYXRzU2VuZGVyLmdldEVsZW1lbnQoKS5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L3Rg9C20L3QviDQu9C4INC/0YDQvtC60YDRg9GH0LjQstCw0YLRjCDQstC90LjQt1xyXG4gICAgICAgIGlmIChib2R5Q29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGJvZHlDb250YWluZXIuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGJvZHlDb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBib2R5Q29udGFpbmVyLnNjcm9sbEhlaWdodCAtIGJvZHlDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Rj9Cy0LvQtdC90LjRjyDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/RgNC40YHQu9Cw0L3QvdC+0LPQviDQvNC90LUhXHJcbiAgICBpbnRlcmxvY3V0b3JOZXdNZXNzYWdlKGRhdGVNZXNzYWdlKXtcclxuXHJcbiAgICAgICAgLy9sZXQgaXNOZXdNZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBub25lTWVzc2FnZSA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5vbmUtbWVzc2FnZScpO1xyXG4gICAgICAgIGlmKG5vbmVNZXNzYWdlKXtcclxuICAgICAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICB0aGlzLmZvcm1hdGVEYXRlKGRhdGVNZXNzYWdlLmRhdGV0aW1lKTtcclxuICAgICAgICBjb25zdCBpc05ld01lc3NhZ2UgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jaGF0cy1ub3QtcmVhZCcpO1xyXG4gICAgICAgIGlmKCFpc05ld01lc3NhZ2Upe1xyXG4gICAgICAgICAgICBpZighZGF0ZU1lc3NhZ2Uuc3RhdHVzLmlzUmVhZGVkKXtcclxuICAgICAgICAgICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiYm9keV9fY2hhdHMgYm9keV9fY2hhdHMtbm90LXJlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndC+0LLRi9C1INGB0L7QvtCx0YnQtdC90LjRjzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/QttC00LXQvCDQutC70LjQutCwINC00LvRjyDRgdC80LXQvdGLINGB0YLQsNGC0YPRgdCwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluQm94ID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdFJlYWRCb3ggPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jaGF0cy1ub3QtcmVhZCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBwYXJlbnRFbGVtZW50ID0gbm90UmVhZEJveC5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlDb250YWluZXJXaGVlbCA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlU3RhdHVzTWFpbkZ1biA9IHRoaXMuY2hhbmdlU3RhdHVzTWFpbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5XcyA9IHRoaXMud3M7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMgIT09ICdidG4nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3RhdHVzTWFpbkZ1bihtYWluV3MpOyAvLyDQvNC10L3Rj9C10Lwg0YHRgtCw0YLRg9GB0Ysg0L3QsCDQvNC+0LXQuSDRgdGC0YDQsNC90LjRh9C60LVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lcldoZWVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1haW5Cb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lcldoZWVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBjaGFuZ2VTdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnQgPSB0aGlzLkJvZHlDbGFzcy5jcmVhdGVDaGF0c1JlY2lwZW50KGRhdGVNZXNzYWdlLnRleHQsZGF0ZSx0aGlzLnN0YXRlVXNlci5zZW5kVXNlcixkYXRlTWVzc2FnZS5pZCk7XHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYm9keUNoYXRzUmVjaXBlbnQuZ2V0RWxlbWVudCgpLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgaWYoaXNOZXdNZXNzYWdlKXtcclxuICAgICAgICAgICAgLy/Qn9GA0L7QutGA0YPRgtC60LAg0LTQviDQvdC10L/RgNC+0YfQuNGC0LDQvdC+0LPQviDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICAgICBjb25zdCBub3RSZWFkID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY2hhdHMtbm90LXJlYWQnKTtcclxuICAgICAgICAgICBub3RSZWFkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L3Rg9C20L3QviDQu9C4INC/0YDQvtC60YDRg9GH0LjQstCw0YLRjCDQstC90LjQt1xyXG4gICAgICAgICAgICBpZiAoYm9keUNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBib2R5Q29udGFpbmVyLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBib2R5Q29udGFpbmVyLnNjcm9sbEhlaWdodCAtIGJvZHlDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdGVEYXRlKHRpbWVzdGFtcCl7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0sICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWVzc2FnZUxpc3QobWVzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gbWVzc2FnZS5wYXlsb2FkLm1lc3NhZ2VzO1xyXG5cclxuICAgICAgICBpZihtZXNzYWdlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibm9uZS1tZXNzYWdlXCI+0J3QsNC/0LjRiNC40YLQtSDQstCw0YjQtSDQv9C10YDQstC+0LUg0YHQvtC+0LHRidC10L3QuNC1Li4uPC9kaXY+YDtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpc05ld01lc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIgPT09IGl0ZW0uZnJvbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/QvtGC0L/RgNCw0LLQu9C10L3QvdGL0LUg0YHQvtC+0LHRidC10L3QuNGPINC80L3QvtC5LCDQv9C+0Y/QstC40YLRgdGPINGDINGB0L7QsdC10YHQtdC00L3QuNC60LBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybG9jdXRvck5ld01lc3NhZ2UoaXRlbSxpc05ld01lc3NhZ2UpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vL9C+0YLQv9GA0LDQstC70LXQvdC90YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0LzQvdC1XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluTmV3TWVzc2FnZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v0L7QsdC90L7QstC70LXQvdC40LUg0L3QtdC/0YDQvtGH0LjRgtCw0L3QvdGL0YUg0YHQvtC+0LHRidC10L3QuNC5XHJcbiAgICB1cGRhdGVNZXNzYWdlTnVtYmVyKHVzZXJTZW5kZXIpe1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVVc2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChuYW1lVXNlciA9PT0gdXNlclNlbmRlcil7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyTWVzc2FnZU51bWJlciA9ICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19tZXNzYWdlLW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhck1lc3NhZ2VOdW1iZXJJc1NwYW4gPSBzaWRlYmFyTWVzc2FnZU51bWJlci5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBpZihzaWRlYmFyTWVzc2FnZU51bWJlcklzU3Bhbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhck1lc3NhZ2VOdW1iZXJTcGFuID0gc2lkZWJhck1lc3NhZ2VOdW1iZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXJNZXNzYWdlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9IFN0cmluZyhOdW1iZXIoc2lkZWJhck1lc3NhZ2VOdW1iZXJTcGFuLnRleHRDb250ZW50KSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyTWVzc2FnZU51bWJlci5pbm5lckhUTUwgPSAnPHNwYW4+MTwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0dXNNYWluKHdzKXtcclxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IG5vdFJlYWQgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jaGF0cy1ub3QtcmVhZCcpO1xyXG5cclxuICAgICAgICAvL3NlbmRVc2VyXHJcblxyXG4gICAgICAgIGlmKG5vdFJlYWQpe1xyXG4gICAgICAgICAgICAvL9GD0LTQsNC70LjRgtGMINC+0L/QvtCy0LXRidC10L3QuNC1INGDINC90YPQttC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcnMnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJNZXNzYWdlTnVtYmVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fbWVzc2FnZS1udW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyTWVzc2FnZU51bWJlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKG5vdFJlYWQpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzQWZ0ZXJSZWZlcmVuY2UgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5vdFJlYWQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNBZnRlclJlZmVyZW5jZS5wdXNoKG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RWxlbWVudCA9IG5leHRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzQWZ0ZXJSZWZlcmVuY2UuZm9yRWFjaChlbCA9PntcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUmVhZFN0YXR1c0NoYW5nZSh3cyxlbC5kYXRhc2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGJvZHljaGF0c1JlY2lwZW50cyA9ICBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2R5X19jaGF0cy1yZWNpcGVudCcpO1xyXG4gICAgICAgICAgICAvLyBib2R5Y2hhdHNSZWNpcGVudHMuZm9yRWFjaCggcmVjaXBlbnRzID0+e1xyXG4gICAgICAgICAgICAvLyAgICAgbWVzc2FnZVJlYWRTdGF0dXNDaGFuZ2Uod3MscmVjaXBlbnRzLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgbm90UmVhZC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0L/QvtC60LDQt9GL0LLQsNC10YIg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQvtC+0LHRidC10L3QuNGPLCDQutC+0YLQvtGA0YvQtSDQvdC1INC/0YDQvtGH0LjRgtCw0L3Ri1xyXG4gICAgdXBkYXRlU2lkZWJhck1lc3NhZ2VOdW1iZXIoaGlzdG9yeVdpdGhVc2VyKXtcclxuXHJcbiAgICAgICAgaWYgKGhpc3RvcnlXaXRoVXNlci5wYXlsb2FkLm1lc3NhZ2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IEpTT04ucGFyc2UodXNlck9iamVjdCkubG9naW47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZXJVc2VyID0gKHRoaXMuc3RhdGVVc2VyLmhpc3RvcnlXaXRoVXNlci5pZCkucmVwbGFjZShcImhpc3RvcnlcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHNpZGViYXJVc2Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VyTmFtZVRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoc2lkZWJhclVzZXJOYW1lVGV4dCA9PT0gY3VycmVyVXNlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50Tm90UmVhZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeVdpdGhVc2VyLnBheWxvYWQubWVzc2FnZXMuZm9yRWFjaChlbCA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWwudG8gPT09IHVzZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsLnN0YXR1cy5pc1JlYWRlZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Tm90UmVhZCArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb3VudE5vdFJlYWQgIT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJNZXNzYWdlTnVtYmVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fbWVzc2FnZS1udW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhck1lc3NhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYDxzcGFuPiR7Y291bnROb3RSZWFkfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmxvY3V0b3JTdGF0dXNNZXNzYWdlKGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gZGF0YS5pZDtcclxuICAgICAgICBjb25zdCBpc1JlYWRlZCA9IGRhdGEuc3RhdHVzLmlzUmVhZGVkO1xyXG5cclxuICAgICAgICBpZihpc1JlYWRlZCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXIgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2R5X19jaGF0cy1zZW5kZXInKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYm9keUNoYXRzU2VuZGVyLmZvckVhY2goZWwgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWwuZGF0YXNldC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5TWVzc2FnZVNlbmRlclN0YXR1cyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19tZXNzYWdlU2VuZGVyLXN0YXR1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5TWVzc2FnZVNlbmRlclN0YXR1cy50ZXh0Q29udGVudCA9ICfQv9GA0L7Rh9C40YLQsNC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydub3QtZm91dW5kX19jb250YWluZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ25vdC1mb3V1bmRfX2luZm8nXSwgdGV4dENvbnRlbnQ6ICc0MDQgTm90IEZvdW5kJ30pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoaW5mbyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZChjb250YWluZXIuZ2V0RWxlbWVudCgpKTtcclxuICAgIH1cclxufSIsIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vcHJlZmVyLXNwcmVhZCAqL1xuaW1wb3J0IHtUQVJHRVQsIFVOU1VCU0NSSUJFLCBQQVRIX1NFUEFSQVRPUn0gZnJvbSAnLi9saWIvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7aXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzLCBpc0J1aWx0aW5XaXRob3V0TXV0YWJsZU1ldGhvZHN9IGZyb20gJy4vbGliL2lzLWJ1aWx0aW4uanMnO1xuaW1wb3J0IHBhdGggZnJvbSAnLi9saWIvcGF0aC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2xpYi9pcy1hcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9saWIvaXMtc3ltYm9sLmpzJztcbmltcG9ydCBpc0l0ZXJhdG9yIGZyb20gJy4vbGliL2lzLWl0ZXJhdG9yLmpzJztcbmltcG9ydCB3cmFwSXRlcmF0b3IgZnJvbSAnLi9saWIvd3JhcC1pdGVyYXRvci5qcyc7XG5pbXBvcnQgaWdub3JlUHJvcGVydHkgZnJvbSAnLi9saWIvaWdub3JlLXByb3BlcnR5LmpzJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2xpYi9jYWNoZS5qcyc7XG5pbXBvcnQgU21hcnRDbG9uZSBmcm9tICcuL2xpYi9zbWFydC1jbG9uZS9zbWFydC1jbG9uZS5qcyc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRlcXVhbHM6IE9iamVjdC5pcyxcblx0aXNTaGFsbG93OiBmYWxzZSxcblx0cGF0aEFzQXJyYXk6IGZhbHNlLFxuXHRpZ25vcmVTeW1ib2xzOiBmYWxzZSxcblx0aWdub3JlVW5kZXJzY29yZXM6IGZhbHNlLFxuXHRpZ25vcmVEZXRhY2hlZDogZmFsc2UsXG5cdGRldGFpbHM6IGZhbHNlLFxufTtcblxuY29uc3Qgb25DaGFuZ2UgPSAob2JqZWN0LCBvbkNoYW5nZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0Li4uZGVmYXVsdE9wdGlvbnMsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRjb25zdCBwcm94eVRhcmdldCA9IFN5bWJvbCgnUHJveHlUYXJnZXQnKTtcblx0Y29uc3Qge2VxdWFscywgaXNTaGFsbG93LCBpZ25vcmVEZXRhY2hlZCwgZGV0YWlsc30gPSBvcHRpb25zO1xuXHRjb25zdCBjYWNoZSA9IG5ldyBDYWNoZShlcXVhbHMpO1xuXHRjb25zdCBoYXNPblZhbGlkYXRlID0gdHlwZW9mIG9wdGlvbnMub25WYWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJztcblx0Y29uc3Qgc21hcnRDbG9uZSA9IG5ldyBTbWFydENsb25lKGhhc09uVmFsaWRhdGUpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdGNvbnN0IHZhbGlkYXRlID0gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKSA9PiAhaGFzT25WYWxpZGF0ZVxuXHRcdHx8IHNtYXJ0Q2xvbmUuaXNDbG9uaW5nXG5cdFx0fHwgb3B0aW9ucy5vblZhbGlkYXRlKHBhdGguY29uY2F0KGNhY2hlLmdldFBhdGgodGFyZ2V0KSwgcHJvcGVydHkpLCB2YWx1ZSwgcHJldmlvdXMsIGFwcGx5RGF0YSkgPT09IHRydWU7XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlT25UYXJnZXQgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0IWlnbm9yZVByb3BlcnR5KGNhY2hlLCBvcHRpb25zLCBwcm9wZXJ0eSlcblx0XHRcdCYmICEoaWdub3JlRGV0YWNoZWQgJiYgY2FjaGUuaXNEZXRhY2hlZCh0YXJnZXQsIG9iamVjdCkpXG5cdFx0KSB7XG5cdFx0XHRoYW5kbGVDaGFuZ2UoY2FjaGUuZ2V0UGF0aCh0YXJnZXQpLCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGNoYW5nZVBhdGgsIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMsIGFwcGx5RGF0YSkgPT4ge1xuXHRcdGlmIChzbWFydENsb25lLmlzQ2xvbmluZyAmJiBzbWFydENsb25lLmlzUGFydE9mQ2xvbmUoY2hhbmdlUGF0aCkpIHtcblx0XHRcdHNtYXJ0Q2xvbmUudXBkYXRlKGNoYW5nZVBhdGgsIHByb3BlcnR5LCBwcmV2aW91cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9uQ2hhbmdlKHBhdGguY29uY2F0KGNoYW5nZVBhdGgsIHByb3BlcnR5KSwgdmFsdWUsIHByZXZpb3VzLCBhcHBseURhdGEpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBnZXRQcm94eVRhcmdldCA9IHZhbHVlID0+IHZhbHVlXG5cdFx0PyAodmFsdWVbcHJveHlUYXJnZXRdID8/IHZhbHVlKVxuXHRcdDogdmFsdWU7XG5cblx0Y29uc3QgcHJlcGFyZVZhbHVlID0gKHZhbHVlLCB0YXJnZXQsIHByb3BlcnR5LCBiYXNlUGF0aCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGlzQnVpbHRpbldpdGhvdXRNdXRhYmxlTWV0aG9kcyh2YWx1ZSlcblx0XHRcdHx8IHByb3BlcnR5ID09PSAnY29uc3RydWN0b3InXG5cdFx0XHR8fCAoaXNTaGFsbG93ICYmICFTbWFydENsb25lLmlzSGFuZGxlZE1ldGhvZCh0YXJnZXQsIHByb3BlcnR5KSlcblx0XHRcdHx8IGlnbm9yZVByb3BlcnR5KGNhY2hlLCBvcHRpb25zLCBwcm9wZXJ0eSlcblx0XHRcdHx8IGNhY2hlLmlzR2V0SW52YXJpYW50KHRhcmdldCwgcHJvcGVydHkpXG5cdFx0XHR8fCAoaWdub3JlRGV0YWNoZWQgJiYgY2FjaGUuaXNEZXRhY2hlZCh0YXJnZXQsIG9iamVjdCkpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKGJhc2VQYXRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGJhc2VQYXRoID0gY2FjaGUuZ2V0UGF0aCh0YXJnZXQpO1xuXHRcdH1cblxuXHRcdC8qXG4gIFx0XHRDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcy5cblxuICBcdFx0SWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIGEgY29ycmVzcG9uZGluZyBwYXRoL3Byb3h5LFxuXHRcdGFuZCBpZiB0aGUgcGF0aCBjb3JyZXNwb25kcyB0byBvbmUgb2YgdGhlIHBhcmVudHMsXG5cdFx0dGhlbiB3ZSBhcmUgb24gYSBjaXJjdWxhciBjYXNlLCB3aGVyZSB0aGUgY2hpbGQgaXMgcG9pbnRpbmcgdG8gdGhlaXIgcGFyZW50LlxuXHRcdEluIHRoaXMgY2FzZSB3ZSByZXR1cm4gdGhlIHByb3h5IG9iamVjdCB3aXRoIHRoZSBzaG9ydGVzdCBwYXRoLlxuICBcdFx0Ki9cblx0XHRjb25zdCBjaGlsZFBhdGggPSBwYXRoLmNvbmNhdChiYXNlUGF0aCwgcHJvcGVydHkpO1xuXHRcdGNvbnN0IGV4aXN0aW5nUGF0aCA9IGNhY2hlLmdldFBhdGgodmFsdWUpO1xuXG5cdFx0aWYgKGV4aXN0aW5nUGF0aCAmJiBpc1NhbWVPYmplY3RUcmVlKGNoaWxkUGF0aCwgZXhpc3RpbmdQYXRoKSkge1xuXHRcdFx0Ly8gV2UgYXJlIG9uIHRoZSBzYW1lIG9iamVjdCB0cmVlIGJ1dCBkZWVwZXIsIHNvIHdlIHVzZSB0aGUgcGFyZW50IHBhdGguXG5cdFx0XHRyZXR1cm4gY2FjaGUuZ2V0UHJveHkodmFsdWUsIGV4aXN0aW5nUGF0aCwgaGFuZGxlciwgcHJveHlUYXJnZXQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYWNoZS5nZXRQcm94eSh2YWx1ZSwgY2hpbGRQYXRoLCBoYW5kbGVyLCBwcm94eVRhcmdldCk7XG5cdH07XG5cblx0Lypcblx0UmV0dXJucyB0cnVlIGlmIGBjaGlsZFBhdGhgIGlzIGEgc3VicGF0aCBvZiBgZXhpc3RpbmdQYXRoYFxuXHQoaWYgY2hpbGRQYXRoIHN0YXJ0cyB3aXRoIGV4aXN0aW5nUGF0aCkuIE90aGVyd2lzZSwgaXQgcmV0dXJucyBmYWxzZS5cblxuIFx0SXQgYWxzbyByZXR1cm5zIGZhbHNlIGlmIHRoZSAyIHBhdGhzIGFyZSBpZGVudGljYWwuXG5cbiBcdEZvciBleGFtcGxlOlxuXHQtIGNoaWxkUGF0aCAgICA9IGdyb3VwLmxheWVycy4wLnBhcmVudC5sYXllcnMuMC52YWx1ZVxuXHQtIGV4aXN0aW5nUGF0aCA9IGdyb3VwLmxheWVycy4wLnBhcmVudFxuXHQqL1xuXHRjb25zdCBpc1NhbWVPYmplY3RUcmVlID0gKGNoaWxkUGF0aCwgZXhpc3RpbmdQYXRoKSA9PiB7XG5cdFx0aWYgKGlzU3ltYm9sKGNoaWxkUGF0aCkgfHwgY2hpbGRQYXRoLmxlbmd0aCA8PSBleGlzdGluZ1BhdGgubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJyYXkoZXhpc3RpbmdQYXRoKSAmJiBleGlzdGluZ1BhdGgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hpbGRQYXJ0cyA9IGlzQXJyYXkoY2hpbGRQYXRoKSA/IGNoaWxkUGF0aCA6IGNoaWxkUGF0aC5zcGxpdChQQVRIX1NFUEFSQVRPUik7XG5cdFx0Y29uc3QgZXhpc3RpbmdQYXJ0cyA9IGlzQXJyYXkoZXhpc3RpbmdQYXRoKSA/IGV4aXN0aW5nUGF0aCA6IGV4aXN0aW5nUGF0aC5zcGxpdChQQVRIX1NFUEFSQVRPUik7XG5cblx0XHRpZiAoY2hpbGRQYXJ0cy5sZW5ndGggPD0gZXhpc3RpbmdQYXJ0cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIShleGlzdGluZ1BhcnRzLnNvbWUoKHBhcnQsIGluZGV4KSA9PiBwYXJ0ICE9PSBjaGlsZFBhcnRzW2luZGV4XSkpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZXIgPSB7XG5cdFx0Z2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG5cdFx0XHRpZiAoaXNTeW1ib2wocHJvcGVydHkpKSB7XG5cdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gcHJveHlUYXJnZXQgfHwgcHJvcGVydHkgPT09IFRBUkdFVCkge1xuXHRcdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cHJvcGVydHkgPT09IFVOU1VCU0NSSUJFXG5cdFx0XHRcdFx0JiYgIWNhY2hlLmlzVW5zdWJzY3JpYmVkXG5cdFx0XHRcdFx0JiYgY2FjaGUuZ2V0UGF0aCh0YXJnZXQpLmxlbmd0aCA9PT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjYWNoZS51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModGFyZ2V0KVxuXHRcdFx0XHQ/IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHkpXG5cdFx0XHRcdDogUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuXG5cdFx0XHRyZXR1cm4gcHJlcGFyZVZhbHVlKHZhbHVlLCB0YXJnZXQsIHByb3BlcnR5KTtcblx0XHR9LFxuXG5cdFx0c2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuXHRcdFx0dmFsdWUgPSBnZXRQcm94eVRhcmdldCh2YWx1ZSk7XG5cblx0XHRcdGNvbnN0IHJlZmxlY3RUYXJnZXQgPSB0YXJnZXRbcHJveHlUYXJnZXRdID8/IHRhcmdldDtcblx0XHRcdGNvbnN0IHByZXZpb3VzID0gcmVmbGVjdFRhcmdldFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlcXVhbHMocHJldmlvdXMsIHZhbHVlKSAmJiBwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGlzVmFsaWRcblx0XHRcdFx0JiYgY2FjaGUuc2V0UHJvcGVydHkocmVmbGVjdFRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgcHJldmlvdXMpXG5cdFx0XHQpIHtcblx0XHRcdFx0aGFuZGxlQ2hhbmdlT25UYXJnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdGFyZ2V0W3Byb3BlcnR5XSwgcHJldmlvdXMpO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gIWlzVmFsaWQ7XG5cdFx0fSxcblxuXHRcdGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcblx0XHRcdGlmICghY2FjaGUuaXNTYW1lRGVzY3JpcHRvcihkZXNjcmlwdG9yLCB0YXJnZXQsIHByb3BlcnR5KSkge1xuXHRcdFx0XHRjb25zdCBwcmV2aW91cyA9IHRhcmdldFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbGlkYXRlKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IudmFsdWUsIHByZXZpb3VzKVxuXHRcdFx0XHRcdCYmIGNhY2hlLmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IsIHByZXZpb3VzKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRoYW5kbGVDaGFuZ2VPblRhcmdldCh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLnZhbHVlLCBwcmV2aW91cyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRcdGlmICghUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHByZXZpb3VzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cdFx0XHRjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGUodGFyZ2V0LCBwcm9wZXJ0eSwgdW5kZWZpbmVkLCBwcmV2aW91cyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0aXNWYWxpZFxuXHRcdFx0XHQmJiBjYWNoZS5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBwcmV2aW91cylcblx0XHRcdCkge1xuXHRcdFx0XHRoYW5kbGVDaGFuZ2VPblRhcmdldCh0YXJnZXQsIHByb3BlcnR5LCB1bmRlZmluZWQsIHByZXZpb3VzKTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICFpc1ZhbGlkO1xuXHRcdH0sXG5cblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpIHtcblx0XHRcdGNvbnN0IHRoaXNQcm94eVRhcmdldCA9IHRoaXNBcmdbcHJveHlUYXJnZXRdID8/IHRoaXNBcmc7XG5cblx0XHRcdGlmIChjYWNoZS5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNQcm94eVRhcmdldCwgYXJndW1lbnRzTGlzdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0KGRldGFpbHMgPT09IGZhbHNlXG5cdFx0XHRcdFx0fHwgKGRldGFpbHMgIT09IHRydWUgJiYgIWRldGFpbHMuaW5jbHVkZXModGFyZ2V0Lm5hbWUpKSlcblx0XHRcdFx0JiYgU21hcnRDbG9uZS5pc0hhbmRsZWRUeXBlKHRoaXNQcm94eVRhcmdldClcblx0XHRcdCkge1xuXHRcdFx0XHRsZXQgYXBwbHlQYXRoID0gcGF0aC5pbml0aWFsKGNhY2hlLmdldFBhdGgodGFyZ2V0KSk7XG5cdFx0XHRcdGNvbnN0IGlzSGFuZGxlZE1ldGhvZCA9IFNtYXJ0Q2xvbmUuaXNIYW5kbGVkTWV0aG9kKHRoaXNQcm94eVRhcmdldCwgdGFyZ2V0Lm5hbWUpO1xuXG5cdFx0XHRcdHNtYXJ0Q2xvbmUuc3RhcnQodGhpc1Byb3h5VGFyZ2V0LCBhcHBseVBhdGgsIGFyZ3VtZW50c0xpc3QpO1xuXG5cdFx0XHRcdGxldCByZXN1bHQgPSBSZWZsZWN0LmFwcGx5KFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRzbWFydENsb25lLnByZWZlcnJlZFRoaXNBcmcodGFyZ2V0LCB0aGlzQXJnLCB0aGlzUHJveHlUYXJnZXQpLFxuXHRcdFx0XHRcdGlzSGFuZGxlZE1ldGhvZFxuXHRcdFx0XHRcdFx0PyBhcmd1bWVudHNMaXN0Lm1hcChhcmd1bWVudCA9PiBnZXRQcm94eVRhcmdldChhcmd1bWVudCkpXG5cdFx0XHRcdFx0XHQ6IGFyZ3VtZW50c0xpc3QsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Y29uc3QgaXNDaGFuZ2VkID0gc21hcnRDbG9uZS5pc0NoYW5nZWQodGhpc1Byb3h5VGFyZ2V0LCBlcXVhbHMpO1xuXHRcdFx0XHRjb25zdCBwcmV2aW91cyA9IHNtYXJ0Q2xvbmUuc3RvcCgpO1xuXG5cdFx0XHRcdGlmIChTbWFydENsb25lLmlzSGFuZGxlZFR5cGUocmVzdWx0KSAmJiBpc0hhbmRsZWRNZXRob2QpIHtcblx0XHRcdFx0XHRpZiAodGhpc0FyZyBpbnN0YW5jZW9mIE1hcCAmJiB0YXJnZXQubmFtZSA9PT0gJ2dldCcpIHtcblx0XHRcdFx0XHRcdGFwcGx5UGF0aCA9IHBhdGguY29uY2F0KGFwcGx5UGF0aCwgYXJndW1lbnRzTGlzdFswXSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzdWx0ID0gY2FjaGUuZ2V0UHJveHkocmVzdWx0LCBhcHBseVBhdGgsIGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzQ2hhbmdlZCkge1xuXHRcdFx0XHRcdGNvbnN0IGFwcGx5RGF0YSA9IHtcblx0XHRcdFx0XHRcdG5hbWU6IHRhcmdldC5uYW1lLFxuXHRcdFx0XHRcdFx0YXJnczogYXJndW1lbnRzTGlzdCxcblx0XHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNvbnN0IGNoYW5nZVBhdGggPSBzbWFydENsb25lLmlzQ2xvbmluZ1xuXHRcdFx0XHRcdFx0PyBwYXRoLmluaXRpYWwoYXBwbHlQYXRoKVxuXHRcdFx0XHRcdFx0OiBhcHBseVBhdGg7XG5cdFx0XHRcdFx0Y29uc3QgcHJvcGVydHkgPSBzbWFydENsb25lLmlzQ2xvbmluZ1xuXHRcdFx0XHRcdFx0PyBwYXRoLmxhc3QoYXBwbHlQYXRoKVxuXHRcdFx0XHRcdFx0OiAnJztcblxuXHRcdFx0XHRcdGlmICh2YWxpZGF0ZShwYXRoLmdldChvYmplY3QsIGNoYW5nZVBhdGgpLCBwcm9wZXJ0eSwgdGhpc1Byb3h5VGFyZ2V0LCBwcmV2aW91cywgYXBwbHlEYXRhKSkge1xuXHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlKGNoYW5nZVBhdGgsIHByb3BlcnR5LCB0aGlzUHJveHlUYXJnZXQsIHByZXZpb3VzLCBhcHBseURhdGEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzbWFydENsb25lLnVuZG8odGhpc1Byb3h5VGFyZ2V0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KHRoaXNBcmcgaW5zdGFuY2VvZiBNYXAgfHwgdGhpc0FyZyBpbnN0YW5jZW9mIFNldClcblx0XHRcdFx0XHQmJiBpc0l0ZXJhdG9yKHJlc3VsdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdyYXBJdGVyYXRvcihyZXN1bHQsIHRhcmdldCwgdGhpc0FyZywgYXBwbHlQYXRoLCBwcmVwYXJlVmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmd1bWVudHNMaXN0KTtcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByb3h5ID0gY2FjaGUuZ2V0UHJveHkob2JqZWN0LCBvcHRpb25zLnBhdGhBc0FycmF5ID8gW10gOiAnJywgaGFuZGxlcik7XG5cdG9uQ2hhbmdlID0gb25DaGFuZ2UuYmluZChwcm94eSk7XG5cblx0aWYgKGhhc09uVmFsaWRhdGUpIHtcblx0XHRvcHRpb25zLm9uVmFsaWRhdGUgPSBvcHRpb25zLm9uVmFsaWRhdGUuYmluZChwcm94eSk7XG5cdH1cblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5vbkNoYW5nZS50YXJnZXQgPSBwcm94eSA9PiBwcm94eT8uW1RBUkdFVF0gPz8gcHJveHk7XG5vbkNoYW5nZS51bnN1YnNjcmliZSA9IHByb3h5ID0+IHByb3h5Py5bVU5TVUJTQ1JJQkVdID8/IHByb3h5O1xuXG5leHBvcnQgZGVmYXVsdCBvbkNoYW5nZTtcbiIsImltcG9ydCBwYXRoIGZyb20gJy4vcGF0aC5qcyc7XG5cbi8qKlxuQGNsYXNzIENhY2hlXG5AcHJpdmF0ZVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcblx0Y29uc3RydWN0b3IoZXF1YWxzKSB7XG5cdFx0dGhpcy5fZXF1YWxzID0gZXF1YWxzO1xuXHRcdHRoaXMuX3Byb3h5Q2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXHRcdHRoaXMuX3BhdGhDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cdFx0dGhpcy5pc1Vuc3Vic2NyaWJlZCA9IGZhbHNlO1xuXHR9XG5cblx0X2dldERlc2NyaXB0b3JDYWNoZSgpIHtcblx0XHRpZiAodGhpcy5fZGVzY3JpcHRvckNhY2hlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2Rlc2NyaXB0b3JDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2Rlc2NyaXB0b3JDYWNoZTtcblx0fVxuXG5cdF9nZXRQcm9wZXJ0aWVzKHRhcmdldCkge1xuXHRcdGNvbnN0IGRlc2NyaXB0b3JDYWNoZSA9IHRoaXMuX2dldERlc2NyaXB0b3JDYWNoZSgpO1xuXHRcdGxldCBwcm9wZXJ0aWVzID0gZGVzY3JpcHRvckNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0aWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cHJvcGVydGllcyA9IHt9O1xuXHRcdFx0ZGVzY3JpcHRvckNhY2hlLnNldCh0YXJnZXQsIHByb3BlcnRpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wZXJ0aWVzO1xuXHR9XG5cblx0X2dldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0aWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblx0XHR9XG5cblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5fZ2V0UHJvcGVydGllcyh0YXJnZXQpO1xuXHRcdGxldCBkZXNjcmlwdG9yID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG5cblx0XHRpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cdFx0XHRwcm9wZXJ0aWVzW3Byb3BlcnR5XSA9IGRlc2NyaXB0b3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlc2NyaXB0b3I7XG5cdH1cblxuXHRnZXRQcm94eSh0YXJnZXQsIHBhdGgsIGhhbmRsZXIsIHByb3h5VGFyZ2V0KSB7XG5cdFx0aWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVmbGVjdFRhcmdldCA9IHRhcmdldFtwcm94eVRhcmdldF07XG5cdFx0Y29uc3Qgc291cmNlID0gcmVmbGVjdFRhcmdldCA/PyB0YXJnZXQ7XG5cblx0XHR0aGlzLl9wYXRoQ2FjaGUuc2V0KHNvdXJjZSwgcGF0aCk7XG5cblx0XHRsZXQgcHJveHkgPSB0aGlzLl9wcm94eUNhY2hlLmdldChzb3VyY2UpO1xuXG5cdFx0aWYgKHByb3h5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHByb3h5ID0gcmVmbGVjdFRhcmdldCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcilcblx0XHRcdFx0OiB0YXJnZXQ7XG5cblx0XHRcdHRoaXMuX3Byb3h5Q2FjaGUuc2V0KHNvdXJjZSwgcHJveHkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm94eTtcblx0fVxuXG5cdGdldFBhdGgodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNVbnN1YnNjcmliZWQgPyB1bmRlZmluZWQgOiB0aGlzLl9wYXRoQ2FjaGUuZ2V0KHRhcmdldCk7XG5cdH1cblxuXHRpc0RldGFjaGVkKHRhcmdldCwgb2JqZWN0KSB7XG5cdFx0cmV0dXJuICFPYmplY3QuaXModGFyZ2V0LCBwYXRoLmdldChvYmplY3QsIHRoaXMuZ2V0UGF0aCh0YXJnZXQpKSk7XG5cdH1cblxuXHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG5cdFx0aWYgKCFSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHR0aGlzLl9nZXRQcm9wZXJ0aWVzKHRhcmdldClbcHJvcGVydHldID0gZGVzY3JpcHRvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHNldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgcHJldmlvdXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtcGFyYW1zXG5cdFx0aWYgKCF0aGlzLl9lcXVhbHMocHJldmlvdXMsIHZhbHVlKSB8fCAhKHByb3BlcnR5IGluIHRhcmdldCkpIHtcblx0XHRcdGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQgJiYgJ3NldCcgaW4gZGVzY3JpcHRvcikge1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHByZXZpb3VzKSB7XG5cdFx0aWYgKFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkpIHtcblx0XHRcdGlmICghdGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5fZ2V0RGVzY3JpcHRvckNhY2hlKCkuZ2V0KHRhcmdldCk7XG5cblx0XHRcdFx0aWYgKHByb3BlcnRpZXMpIHtcblx0XHRcdFx0XHRkZWxldGUgcHJvcGVydGllc1twcm9wZXJ0eV07XG5cdFx0XHRcdFx0dGhpcy5fcGF0aENhY2hlLmRlbGV0ZShwcmV2aW91cyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNTYW1lRGVzY3JpcHRvcihhLCB0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0Y29uc3QgYiA9IHRoaXMuX2dldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblxuXHRcdHJldHVybiBhICE9PSB1bmRlZmluZWRcblx0XHRcdCYmIGIgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgT2JqZWN0LmlzKGEudmFsdWUsIGIudmFsdWUpXG5cdFx0XHQmJiAoYS53cml0YWJsZSB8fCBmYWxzZSkgPT09IChiLndyaXRhYmxlIHx8IGZhbHNlKVxuXHRcdFx0JiYgKGEuZW51bWVyYWJsZSB8fCBmYWxzZSkgPT09IChiLmVudW1lcmFibGUgfHwgZmFsc2UpXG5cdFx0XHQmJiAoYS5jb25maWd1cmFibGUgfHwgZmFsc2UpID09PSAoYi5jb25maWd1cmFibGUgfHwgZmFsc2UpXG5cdFx0XHQmJiBhLmdldCA9PT0gYi5nZXRcblx0XHRcdCYmIGEuc2V0ID09PSBiLnNldDtcblx0fVxuXG5cdGlzR2V0SW52YXJpYW50KHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5fZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXG5cdFx0cmV0dXJuIGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgZGVzY3JpcHRvci5jb25maWd1cmFibGUgIT09IHRydWVcblx0XHRcdCYmIGRlc2NyaXB0b3Iud3JpdGFibGUgIT09IHRydWU7XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpIHtcblx0XHR0aGlzLl9kZXNjcmlwdG9yQ2FjaGUgPSBudWxsO1xuXHRcdHRoaXMuX3BhdGhDYWNoZSA9IG51bGw7XG5cdFx0dGhpcy5fcHJveHlDYWNoZSA9IG51bGw7XG5cdFx0dGhpcy5pc1Vuc3Vic2NyaWJlZCA9IHRydWU7XG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBQQVRIX1NFUEFSQVRPUiA9ICcuJztcbmV4cG9ydCBjb25zdCBUQVJHRVQgPSBTeW1ib2woJ3RhcmdldCcpO1xuZXhwb3J0IGNvbnN0IFVOU1VCU0NSSUJFID0gU3ltYm9sKCd1bnN1YnNjcmliZScpO1xuIiwiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXMtc3ltYm9sLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWdub3JlUHJvcGVydHkoY2FjaGUsIG9wdGlvbnMsIHByb3BlcnR5KSB7XG5cdHJldHVybiBjYWNoZS5pc1Vuc3Vic2NyaWJlZFxuXHRcdHx8IChvcHRpb25zLmlnbm9yZVN5bWJvbHMgJiYgaXNTeW1ib2wocHJvcGVydHkpKVxuXHRcdHx8IChvcHRpb25zLmlnbm9yZVVuZGVyc2NvcmVzICYmIHByb3BlcnR5LmNoYXJBdCgwKSA9PT0gJ18nKVxuXHRcdHx8ICgnaWdub3JlS2V5cycgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmlnbm9yZUtleXMuaW5jbHVkZXMocHJvcGVydHkpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXk7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGVcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFNldFxuXHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwXG5cdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBXZWFrU2V0XG5cdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBXZWFrTWFwXG5cdFx0fHwgQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbHRpbldpdGhvdXRNdXRhYmxlTWV0aG9kcyh2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA9PT0gbnVsbCA6IHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0ZXJhdG9yKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5uZXh0ID09PSAnZnVuY3Rpb24nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnO1xufVxuIiwiaW1wb3J0IHtQQVRIX1NFUEFSQVRPUn0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pcy1hcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pcy1zeW1ib2wuanMnO1xuXG5jb25zdCBwYXRoID0ge1xuXHRhZnRlcihwYXRoLCBzdWJQYXRoKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdHJldHVybiBwYXRoLnNsaWNlKHN1YlBhdGgubGVuZ3RoKTtcblx0XHR9XG5cblx0XHRpZiAoc3ViUGF0aCA9PT0gJycpIHtcblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoLnNsaWNlKHN1YlBhdGgubGVuZ3RoICsgMSk7XG5cdH0sXG5cdGNvbmNhdChwYXRoLCBrZXkpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cGF0aCA9IFsuLi5wYXRoXTtcblxuXHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRwYXRoLnB1c2goa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSAmJiBrZXkudG9TdHJpbmcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHBhdGggIT09ICcnKSB7XG5cdFx0XHRcdHBhdGggKz0gUEFUSF9TRVBBUkFUT1I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc1N5bWJvbChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBwYXRoICsga2V5LnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwYXRoICsga2V5O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9LFxuXHRpbml0aWFsKHBhdGgpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aC5zbGljZSgwLCBpbmRleCk7XG5cdH0sXG5cdGxhc3QocGF0aCkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aC5hdCgtMSkgPz8gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHBhdGggPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoUEFUSF9TRVBBUkFUT1IpO1xuXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGguc2xpY2UoaW5kZXggKyAxKTtcblx0fSxcblx0d2FsayhwYXRoLCBjYWxsYmFjaykge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBwYXRoKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGtleSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChwYXRoICE9PSAnJykge1xuXHRcdFx0bGV0IHBvc2l0aW9uID0gMDtcblx0XHRcdGxldCBpbmRleCA9IHBhdGguaW5kZXhPZihQQVRIX1NFUEFSQVRPUik7XG5cblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0Y2FsbGJhY2socGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAocG9zaXRpb24gPCBwYXRoLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gcGF0aC5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FsbGJhY2socGF0aC5zbGljZShwb3NpdGlvbiwgaW5kZXgpKTtcblxuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdGluZGV4ID0gcGF0aC5pbmRleE9mKFBBVEhfU0VQQVJBVE9SLCBwb3NpdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGdldChvYmplY3QsIHBhdGgpIHtcblx0XHR0aGlzLndhbGsocGF0aCwga2V5ID0+IHtcblx0XHRcdGlmIChvYmplY3QpIHtcblx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9LFxuXHRpc1N1YlBhdGgocGF0aCwgc3ViUGF0aCkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRpZiAocGF0aC5sZW5ndGggPCBzdWJQYXRoLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWZvci1sb29wXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1YlBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHBhdGhbaV0gIT09IHN1YlBhdGhbaV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhdGgubGVuZ3RoIDwgc3ViUGF0aC5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAocGF0aCA9PT0gc3ViUGF0aCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhdGguc3RhcnRzV2l0aChzdWJQYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGhbc3ViUGF0aC5sZW5ndGhdID09PSBQQVRIX1NFUEFSQVRPUjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzUm9vdFBhdGgocGF0aCkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aC5sZW5ndGggPT09IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGggPT09ICcnO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aDtcbiIsImltcG9ydCB7SEFORExFRF9BUlJBWV9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL2FycmF5LmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lQXJyYXkgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QobmFtZSkge1xuXHRcdHJldHVybiBIQU5ETEVEX0FSUkFZX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZURhdGUgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0b2JqZWN0LnNldFRpbWUodGhpcy5jbG9uZS5nZXRUaW1lKCkpO1xuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlLCBlcXVhbHMpIHtcblx0XHRyZXR1cm4gIWVxdWFscyh0aGlzLmNsb25lLnZhbHVlT2YoKSwgdmFsdWUudmFsdWVPZigpKTtcblx0fVxufVxuIiwiaW1wb3J0IHtIQU5ETEVEX01BUF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL21hcC5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZU1hcCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIEhBTkRMRURfTUFQX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLmNsb25lLmVudHJpZXMoKSkge1xuXHRcdFx0b2JqZWN0LnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGtleSBvZiBvYmplY3Qua2V5cygpKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2xvbmUuaGFzKGtleSkpIHtcblx0XHRcdFx0b2JqZWN0LmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHBhdGggZnJvbSAnLi4vLi4vcGF0aC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuLi8uLi9pcy1hcnJheS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vLi4vaXMtb2JqZWN0LmpzJztcbmltcG9ydCB7TVVUQUJMRV9BUlJBWV9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL2FycmF5LmpzJztcbmltcG9ydCB7TVVUQUJMRV9TRVRfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9zZXQuanMnO1xuaW1wb3J0IHtNVVRBQkxFX01BUF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL21hcC5qcyc7XG5pbXBvcnQge0lNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKSB7XG5cdFx0dGhpcy5fcGF0aCA9IHBhdGg7XG5cdFx0dGhpcy5faXNDaGFuZ2VkID0gZmFsc2U7XG5cdFx0dGhpcy5fY2xvbmVkQ2FjaGUgPSBuZXcgU2V0KCk7XG5cdFx0dGhpcy5faGFzT25WYWxpZGF0ZSA9IGhhc09uVmFsaWRhdGU7XG5cdFx0dGhpcy5fY2hhbmdlcyA9IGhhc09uVmFsaWRhdGUgPyBbXSA6IG51bGw7XG5cblx0XHR0aGlzLmNsb25lID0gcGF0aCA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLl9zaGFsbG93Q2xvbmUodmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIElNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EUy5oYXMobmFtZSk7XG5cdH1cblxuXHRfc2hhbGxvd0Nsb25lKHZhbHVlKSB7XG5cdFx0bGV0IGNsb25lID0gdmFsdWU7XG5cblx0XHRpZiAoaXNPYmplY3QodmFsdWUpKSB7XG5cdFx0XHRjbG9uZSA9IHsuLi52YWx1ZX07XG5cdFx0fSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG5cdFx0XHRjbG9uZSA9IFsuLi52YWx1ZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdGNsb25lID0gbmV3IERhdGUodmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdGNsb25lID0gbmV3IFNldChbLi4udmFsdWVdLm1hcChpdGVtID0+IHRoaXMuX3NoYWxsb3dDbG9uZShpdGVtKSkpO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdGNsb25lID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIHZhbHVlLmVudHJpZXMoKSkge1xuXHRcdFx0XHRjbG9uZS5zZXQoa2V5LCB0aGlzLl9zaGFsbG93Q2xvbmUoaXRlbSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX2Nsb25lZENhY2hlLmFkZChjbG9uZSk7XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH1cblxuXHRwcmVmZXJyZWRUaGlzQXJnKGlzSGFuZGxlZE1ldGhvZCwgbmFtZSwgdGhpc0FyZ3VtZW50LCB0aGlzUHJveHlUYXJnZXQpIHtcblx0XHRpZiAoaXNIYW5kbGVkTWV0aG9kKSB7XG5cdFx0XHRpZiAoaXNBcnJheSh0aGlzUHJveHlUYXJnZXQpKSB7XG5cdFx0XHRcdHRoaXMuX29uSXNDaGFuZ2VkID0gTVVUQUJMRV9BUlJBWV9NRVRIT0RTW25hbWVdO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzUHJveHlUYXJnZXQgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdFx0dGhpcy5fb25Jc0NoYW5nZWQgPSBNVVRBQkxFX1NFVF9NRVRIT0RTW25hbWVdO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzUHJveHlUYXJnZXQgaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdFx0dGhpcy5fb25Jc0NoYW5nZWQgPSBNVVRBQkxFX01BUF9NRVRIT0RTW25hbWVdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1Byb3h5VGFyZ2V0O1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzQXJndW1lbnQ7XG5cdH1cblxuXHR1cGRhdGUoZnVsbFBhdGgsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdGNvbnN0IGNoYW5nZVBhdGggPSBwYXRoLmFmdGVyKGZ1bGxQYXRoLCB0aGlzLl9wYXRoKTtcblxuXHRcdGlmIChwcm9wZXJ0eSAhPT0gJ2xlbmd0aCcpIHtcblx0XHRcdGxldCBvYmplY3QgPSB0aGlzLmNsb25lO1xuXG5cdFx0XHRwYXRoLndhbGsoY2hhbmdlUGF0aCwga2V5ID0+IHtcblx0XHRcdFx0aWYgKG9iamVjdD8uW2tleV0pIHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuX2Nsb25lZENhY2hlLmhhcyhvYmplY3Rba2V5XSkpIHtcblx0XHRcdFx0XHRcdG9iamVjdFtrZXldID0gdGhpcy5fc2hhbGxvd0Nsb25lKG9iamVjdFtrZXldKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvYmplY3QgPSBvYmplY3Rba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh0aGlzLl9oYXNPblZhbGlkYXRlKSB7XG5cdFx0XHRcdHRoaXMuX2NoYW5nZXMucHVzaCh7XG5cdFx0XHRcdFx0cGF0aDogY2hhbmdlUGF0aCxcblx0XHRcdFx0XHRwcm9wZXJ0eSxcblx0XHRcdFx0XHRwcmV2aW91czogdmFsdWUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqZWN0Py5bcHJvcGVydHldKSB7XG5cdFx0XHRcdG9iamVjdFtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9pc0NoYW5nZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRsZXQgY2hhbmdlO1xuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSB0aGlzLl9jaGFuZ2VzLmxlbmd0aCAtIDE7IGluZGV4ICE9PSAtMTsgaW5kZXgtLSkge1xuXHRcdFx0Y2hhbmdlID0gdGhpcy5fY2hhbmdlc1tpbmRleF07XG5cblx0XHRcdHBhdGguZ2V0KG9iamVjdCwgY2hhbmdlLnBhdGgpW2NoYW5nZS5wcm9wZXJ0eV0gPSBjaGFuZ2UucHJldmlvdXM7XG5cdFx0fVxuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX29uSXNDaGFuZ2VkID09PSB1bmRlZmluZWRcblx0XHRcdD8gdGhpcy5faXNDaGFuZ2VkXG5cdFx0XHQ6IHRoaXMuX29uSXNDaGFuZ2VkKHRoaXMuY2xvbmUsIHZhbHVlKTtcblx0fVxuXG5cdGlzUGF0aEFwcGxpY2FibGUoY2hhbmdlUGF0aCkge1xuXHRcdHJldHVybiBwYXRoLmlzUm9vdFBhdGgodGhpcy5fcGF0aCkgfHwgcGF0aC5pc1N1YlBhdGgoY2hhbmdlUGF0aCwgdGhpcy5fcGF0aCk7XG5cdH1cbn1cbiIsImltcG9ydCB7SEFORExFRF9TRVRfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9zZXQuanMnO1xuaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVTZXQgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QobmFtZSkge1xuXHRcdHJldHVybiBIQU5ETEVEX1NFVF9NRVRIT0RTLmhhcyhuYW1lKTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmNsb25lKSB7XG5cdFx0XHRvYmplY3QuYWRkKHZhbHVlKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIG9iamVjdCkge1xuXHRcdFx0aWYgKCF0aGlzLmNsb25lLmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0b2JqZWN0LmRlbGV0ZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZVdlYWtNYXAgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKSB7XG5cdFx0c3VwZXIodW5kZWZpbmVkLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKTtcblxuXHRcdHRoaXMuX3dlYWtLZXkgPSBhcmd1bWVudHNMaXN0WzBdO1xuXHRcdHRoaXMuX3dlYWtIYXMgPSB2YWx1ZS5oYXModGhpcy5fd2Vha0tleSk7XG5cdFx0dGhpcy5fd2Vha1ZhbHVlID0gdmFsdWUuZ2V0KHRoaXMuX3dlYWtLZXkpO1xuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3dlYWtWYWx1ZSAhPT0gdmFsdWUuZ2V0KHRoaXMuX3dlYWtLZXkpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRjb25zdCB3ZWFrSGFzID0gb2JqZWN0Lmhhcyh0aGlzLl93ZWFrS2V5KTtcblxuXHRcdGlmICh0aGlzLl93ZWFrSGFzICYmICF3ZWFrSGFzKSB7XG5cdFx0XHRvYmplY3Quc2V0KHRoaXMuX3dlYWtLZXksIHRoaXMuX3dlYWtWYWx1ZSk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5fd2Vha0hhcyAmJiB3ZWFrSGFzKSB7XG5cdFx0XHRvYmplY3QuZGVsZXRlKHRoaXMuX3dlYWtLZXkpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5fd2Vha1ZhbHVlICE9PSBvYmplY3QuZ2V0KHRoaXMuX3dlYWtLZXkpKSB7XG5cdFx0XHRvYmplY3Quc2V0KHRoaXMuX3dlYWtLZXksIHRoaXMuX3dlYWtWYWx1ZSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZVdlYWtTZXQgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKSB7XG5cdFx0c3VwZXIodW5kZWZpbmVkLCBwYXRoLCBhcmd1bWVudHNMaXN0LCBoYXNPblZhbGlkYXRlKTtcblxuXHRcdHRoaXMuX2FyZ3VtZW50MSA9IGFyZ3VtZW50c0xpc3RbMF07XG5cdFx0dGhpcy5fd2Vha1ZhbHVlID0gdmFsdWUuaGFzKHRoaXMuX2FyZ3VtZW50MSk7XG5cdH1cblxuXHRpc0NoYW5nZWQodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fd2Vha1ZhbHVlICE9PSB2YWx1ZS5oYXModGhpcy5fYXJndW1lbnQxKTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0aWYgKHRoaXMuX3dlYWtWYWx1ZSAmJiAhb2JqZWN0Lmhhcyh0aGlzLl9hcmd1bWVudDEpKSB7XG5cdFx0XHRvYmplY3QuYWRkKHRoaXMuX2FyZ3VtZW50MSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9iamVjdC5kZWxldGUodGhpcy5fYXJndW1lbnQxKTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZkFycmF5cyhjbG9uZSwgdmFsdWUpIHtcblx0cmV0dXJuIGNsb25lLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoIHx8IGNsb25lLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB2YWx1ZVtpbmRleF0gIT09IGl0ZW0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEaWZmQ2VydGFpbigpIHtcblx0cmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RpZmZNYXBzKGNsb25lLCB2YWx1ZSkge1xuXHRpZiAoY2xvbmUuc2l6ZSAhPT0gdmFsdWUuc2l6ZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0bGV0IGJWYWx1ZTtcblx0Zm9yIChjb25zdCBba2V5LCBhVmFsdWVdIG9mIGNsb25lKSB7XG5cdFx0YlZhbHVlID0gdmFsdWUuZ2V0KGtleSk7XG5cblx0XHRpZiAoYlZhbHVlICE9PSBhVmFsdWUgfHwgKGJWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICF2YWx1ZS5oYXMoa2V5KSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZlNldHMoY2xvbmUsIHZhbHVlKSB7XG5cdGlmIChjbG9uZS5zaXplICE9PSB2YWx1ZS5zaXplKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2xvbmUpIHtcblx0XHRpZiAoIXZhbHVlLmhhcyhlbGVtZW50KSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGlzRGlmZkNlcnRhaW4gZnJvbSAnLi4vZGlmZi9pcy1kaWZmLWNlcnRhaW4uanMnO1xuaW1wb3J0IGlzRGlmZkFycmF5cyBmcm9tICcuLi9kaWZmL2lzLWRpZmYtYXJyYXlzLmpzJztcbmltcG9ydCB7SU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTfSBmcm9tICcuL29iamVjdC5qcyc7XG5cbmNvbnN0IElNTVVUQUJMRV9BUlJBWV9NRVRIT0RTID0gbmV3IFNldChbXG5cdCdjb25jYXQnLFxuXHQnaW5jbHVkZXMnLFxuXHQnaW5kZXhPZicsXG5cdCdqb2luJyxcblx0J2tleXMnLFxuXHQnbGFzdEluZGV4T2YnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBNVVRBQkxFX0FSUkFZX01FVEhPRFMgPSB7XG5cdHB1c2g6IGlzRGlmZkNlcnRhaW4sXG5cdHBvcDogaXNEaWZmQ2VydGFpbixcblx0c2hpZnQ6IGlzRGlmZkNlcnRhaW4sXG5cdHVuc2hpZnQ6IGlzRGlmZkNlcnRhaW4sXG5cdGNvcHlXaXRoaW46IGlzRGlmZkFycmF5cyxcblx0cmV2ZXJzZTogaXNEaWZmQXJyYXlzLFxuXHRzb3J0OiBpc0RpZmZBcnJheXMsXG5cdHNwbGljZTogaXNEaWZmQXJyYXlzLFxuXHRmbGF0OiBpc0RpZmZBcnJheXMsXG5cdGZpbGw6IGlzRGlmZkFycmF5cyxcbn07XG5cbmV4cG9ydCBjb25zdCBIQU5ETEVEX0FSUkFZX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0Li4uSU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTLFxuXHQuLi5JTU1VVEFCTEVfQVJSQVlfTUVUSE9EUyxcblx0Li4uT2JqZWN0LmtleXMoTVVUQUJMRV9BUlJBWV9NRVRIT0RTKSxcbl0pO1xuIiwiaW1wb3J0IGlzRGlmZk1hcHMgZnJvbSAnLi4vZGlmZi9pcy1kaWZmLW1hcHMuanMnO1xuaW1wb3J0IHtJTU1VVEFCTEVfU0VUX01FVEhPRFMsIENPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EU30gZnJvbSAnLi9zZXQuanMnO1xuXG5jb25zdCBJTU1VVEFCTEVfTUFQX01FVEhPRFMgPSBuZXcgU2V0KFsuLi5JTU1VVEFCTEVfU0VUX01FVEhPRFMsICdnZXQnXSk7XG5cbmV4cG9ydCBjb25zdCBNVVRBQkxFX01BUF9NRVRIT0RTID0ge1xuXHRzZXQ6IGlzRGlmZk1hcHMsXG5cdGNsZWFyOiBpc0RpZmZNYXBzLFxuXHRkZWxldGU6IGlzRGlmZk1hcHMsXG5cdGZvckVhY2g6IGlzRGlmZk1hcHMsXG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFRF9NQVBfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQuLi5JTU1VVEFCTEVfTUFQX01FVEhPRFMsXG5cdC4uLk9iamVjdC5rZXlzKE1VVEFCTEVfTUFQX01FVEhPRFMpLFxuXHQuLi5DT0xMRUNUSU9OX0lURVJBVE9SX01FVEhPRFMsXG5dKTtcbiIsImV4cG9ydCBjb25zdCBJTU1VVEFCTEVfT0JKRUNUX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0J2hhc093blByb3BlcnR5Jyxcblx0J2lzUHJvdG90eXBlT2YnLFxuXHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQndG9Mb2NhbGVTdHJpbmcnLFxuXHQndG9TdHJpbmcnLFxuXHQndmFsdWVPZicsXG5dKTtcbiIsImltcG9ydCBpc0RpZmZTZXRzIGZyb20gJy4uL2RpZmYvaXMtZGlmZi1zZXRzLmpzJztcblxuZXhwb3J0IGNvbnN0IENPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EUyA9IFtcblx0J2tleXMnLFxuXHQndmFsdWVzJyxcblx0J2VudHJpZXMnLFxuXTtcblxuZXhwb3J0IGNvbnN0IElNTVVUQUJMRV9TRVRfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQnaGFzJyxcblx0J3RvU3RyaW5nJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgTVVUQUJMRV9TRVRfTUVUSE9EUyA9IHtcblx0YWRkOiBpc0RpZmZTZXRzLFxuXHRjbGVhcjogaXNEaWZmU2V0cyxcblx0ZGVsZXRlOiBpc0RpZmZTZXRzLFxuXHRmb3JFYWNoOiBpc0RpZmZTZXRzLFxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRURfU0VUX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0Li4uSU1NVVRBQkxFX1NFVF9NRVRIT0RTLFxuXHQuLi5PYmplY3Qua2V5cyhNVVRBQkxFX1NFVF9NRVRIT0RTKSxcblx0Li4uQ09MTEVDVElPTl9JVEVSQVRPUl9NRVRIT0RTLFxuXSk7XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuLi9pcy1hcnJheS5qcyc7XG5pbXBvcnQge2lzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kc30gZnJvbSAnLi4vaXMtYnVpbHRpbi5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vaXMtb2JqZWN0LmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lL2Nsb25lLW9iamVjdC5qcyc7XG5pbXBvcnQgQ2xvbmVBcnJheSBmcm9tICcuL2Nsb25lL2Nsb25lLWFycmF5LmpzJztcbmltcG9ydCBDbG9uZURhdGUgZnJvbSAnLi9jbG9uZS9jbG9uZS1kYXRlLmpzJztcbmltcG9ydCBDbG9uZVNldCBmcm9tICcuL2Nsb25lL2Nsb25lLXNldC5qcyc7XG5pbXBvcnQgQ2xvbmVNYXAgZnJvbSAnLi9jbG9uZS9jbG9uZS1tYXAuanMnO1xuaW1wb3J0IENsb25lV2Vha1NldCBmcm9tICcuL2Nsb25lL2Nsb25lLXdlYWtzZXQuanMnO1xuaW1wb3J0IENsb25lV2Vha01hcCBmcm9tICcuL2Nsb25lL2Nsb25lLXdlYWttYXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydENsb25lIHtcblx0Y29uc3RydWN0b3IoaGFzT25WYWxpZGF0ZSkge1xuXHRcdHRoaXMuX3N0YWNrID0gW107XG5cdFx0dGhpcy5faGFzT25WYWxpZGF0ZSA9IGhhc09uVmFsaWRhdGU7XG5cdH1cblxuXHRzdGF0aWMgaXNIYW5kbGVkVHlwZSh2YWx1ZSkge1xuXHRcdHJldHVybiBpc09iamVjdCh2YWx1ZSlcblx0XHRcdHx8IGlzQXJyYXkodmFsdWUpXG5cdFx0XHR8fCBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZCh0YXJnZXQsIG5hbWUpIHtcblx0XHRpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuXHRcdFx0cmV0dXJuIENsb25lT2JqZWN0LmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVBcnJheS5pc0hhbmRsZWRNZXRob2QobmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIFNldCkge1xuXHRcdFx0cmV0dXJuIENsb25lU2V0LmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVNYXAuaXNIYW5kbGVkTWV0aG9kKG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModGFyZ2V0KTtcblx0fVxuXG5cdGdldCBpc0Nsb25pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRzdGFydCh2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCkge1xuXHRcdGxldCBDbG9uZUNsYXNzID0gQ2xvbmVPYmplY3Q7XG5cblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZUFycmF5O1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVEYXRlO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVNldDtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVNYXA7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdlYWtTZXQpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVdlYWtTZXQ7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXApIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZVdlYWtNYXA7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3RhY2sucHVzaChuZXcgQ2xvbmVDbGFzcyh2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgdGhpcy5faGFzT25WYWxpZGF0ZSkpO1xuXHR9XG5cblx0dXBkYXRlKGZ1bGxQYXRoLCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHR0aGlzLl9zdGFjay5hdCgtMSkudXBkYXRlKGZ1bGxQYXRoLCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHR9XG5cblx0cHJlZmVycmVkVGhpc0FyZyh0YXJnZXQsIHRoaXNBcmd1bWVudCwgdGhpc1Byb3h5VGFyZ2V0KSB7XG5cdFx0Y29uc3Qge25hbWV9ID0gdGFyZ2V0O1xuXHRcdGNvbnN0IGlzSGFuZGxlZE1ldGhvZCA9IFNtYXJ0Q2xvbmUuaXNIYW5kbGVkTWV0aG9kKHRoaXNQcm94eVRhcmdldCwgbmFtZSk7XG5cblx0XHRyZXR1cm4gdGhpcy5fc3RhY2suYXQoLTEpXG5cdFx0XHQucHJlZmVycmVkVGhpc0FyZyhpc0hhbmRsZWRNZXRob2QsIG5hbWUsIHRoaXNBcmd1bWVudCwgdGhpc1Byb3h5VGFyZ2V0KTtcblx0fVxuXG5cdGlzQ2hhbmdlZChpc011dGFibGUsIHZhbHVlLCBlcXVhbHMpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhY2suYXQoLTEpLmlzQ2hhbmdlZChpc011dGFibGUsIHZhbHVlLCBlcXVhbHMpO1xuXHR9XG5cblx0aXNQYXJ0T2ZDbG9uZShjaGFuZ2VQYXRoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWNrLmF0KC0xKS5pc1BhdGhBcHBsaWNhYmxlKGNoYW5nZVBhdGgpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRpZiAodGhpcy5fcHJldmlvdXNDbG9uZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9wcmV2aW91c0Nsb25lLnVuZG8ob2JqZWN0KTtcblx0XHR9XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMuX3ByZXZpb3VzQ2xvbmUgPSB0aGlzLl9zdGFjay5wb3AoKTtcblxuXHRcdHJldHVybiB0aGlzLl9wcmV2aW91c0Nsb25lLmNsb25lO1xuXHR9XG59XG4iLCJpbXBvcnQge1RBUkdFVH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcEl0ZXJhdG9yKGl0ZXJhdG9yLCB0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXBwbHlQYXRoLCBwcmVwYXJlVmFsdWUpIHtcblx0Y29uc3Qgb3JpZ2luYWxOZXh0ID0gaXRlcmF0b3IubmV4dDtcblxuXHRpZiAodGFyZ2V0Lm5hbWUgPT09ICdlbnRyaWVzJykge1xuXHRcdGl0ZXJhdG9yLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE5leHQuY2FsbCh0aGlzKTtcblxuXHRcdFx0aWYgKHJlc3VsdC5kb25lID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXN1bHQudmFsdWVbMF0gPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzBdLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMF0sXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXN1bHQudmFsdWVbMV0gPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzFdLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMF0sXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH0gZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT09ICd2YWx1ZXMnKSB7XG5cdFx0Y29uc3Qga2V5SXRlcmF0b3IgPSB0aGlzQXJndW1lbnRbVEFSR0VUXS5rZXlzKCk7XG5cblx0XHRpdGVyYXRvci5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxOZXh0LmNhbGwodGhpcyk7XG5cblx0XHRcdGlmIChyZXN1bHQuZG9uZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gcHJlcGFyZVZhbHVlKFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSxcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0a2V5SXRlcmF0b3IubmV4dCgpLnZhbHVlLFxuXHRcdFx0XHRcdGFwcGx5UGF0aCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGl0ZXJhdG9yLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE5leHQuY2FsbCh0aGlzKTtcblxuXHRcdFx0aWYgKHJlc3VsdC5kb25lID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXN1bHQudmFsdWUgPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUsXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gaXRlcmF0b3I7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vYXBwLnNjc3NcIjtcclxuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tIFwiLi92aWV3L25vdC1mb3VuZC9ub3QtZm91bmRcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvbiB9IGZyb20gXCIuL3ZpZXcvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uXCI7XHJcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vdmlldy9hYm91dC9hYm91dFwiO1xyXG5pbXBvcnQge01haW5WaWV3fSBmcm9tIFwiLi92aWV3L21haW4vbWFpbi12aWV3XCI7XHJcbmltcG9ydCB7IEN1c3RvbVdlYlNvY2tldCB9IGZyb20gXCIuL2NvbW1vbi9jdXN0b20td2ViLXNvY2tldFwiO1xyXG5pbXBvcnQgb25DaGFuZ2UgZnJvbSBcIm9uLWNoYW5nZVwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHJvdXRlcyA9IFtcclxuICAgICAgICB7cGF0aDogXCIjYXV0aFwiLCB2aWV3OiBBdXRob3JpemF0aW9uIH0sXHJcbiAgICAgICAge3BhdGg6IFwiI2Fib3V0XCIsIHZpZXc6IEFib3V0IH0sXHJcbiAgICAgICAge3BhdGg6IFwiI21haW5cIiwgdmlldzogTWFpblZpZXd9XHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXRlVXNlciA9IHtcclxuICAgICAgbG9naW46IG51bGwsXHJcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICBpc0xvZ2luZWQ6IGZhbHNlLFxyXG4gICAgICB1c2Vyc0FjdGl2ZTogW10sXHJcbiAgICAgIHVzZXJzSW5hY3JpdmU6IFtdLFxyXG4gICAgICBzZW5kVXNlcjogbnVsbCxcclxuICAgICAgbWFpbkxhc3RNZXNzYWdlOiBudWxsLFxyXG4gICAgICBjdXJyZW50UmVjZWl2ZWRNZXNzYWdlOiBudWxsLFxyXG4gICAgICBoaXN0b3J5V2l0aFVzZXI6IG51bGwsXHJcbiAgICAgIG5vdGlmaWNhdGlvbk1lc3NhZ2UgOiBudWxsLFxyXG4gICAgICBtc2dSZWFkOiBudWxsLFxyXG4gICAgICBjb25uZWN0aW9uOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLnJvdXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gb25DaGFuZ2UodGhpcy5zdGF0ZVVzZXIsIHRoaXMuc3RhdGVVc2VySG9vay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLndzID0gbmV3IEN1c3RvbVdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6NDAwMCcsdGhpcy5zdGF0ZVVzZXIpO1xyXG4gICAgICAgIHRoaXMucm91dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVVzZXJIb29rKHBhdGgpe1xyXG4gICAgICBpZiggcGF0aCA9PT0gJ3VzZXJzQWN0aXZlJyB8fCBwYXRoID09PSAndXNlcnNJbmFjcml2ZScpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tdXNlcnNBY3RpdmUtLS11c2Vyc0luYWNyaXZlJywgdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lKTtcclxuICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcucmVkcmF3aW5nU2lkZWJhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIHBhdGggPT09ICdzZW5kVXNlcicpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKXtcclxuICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LiBpc1NlbmRVc2VyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL9CvINC+0YLQv9GA0LDQstC70Y/RjiDRgdC+0L7QsdGJ0LXQvdC40LVcclxuICAgICAgaWYoIHBhdGggPT09ICdtYWluTGFzdE1lc3NhZ2UnKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlVXNlci5tYWluTGFzdE1lc3NhZ2Upe1xyXG4gICAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcubWFpbk5ld01lc3NhZ2UodGhpcy5zdGF0ZVVzZXIubWFpbkxhc3RNZXNzYWdlLnBheWxvYWQubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aCA9PT0gJ2N1cnJlbnRSZWNlaXZlZE1lc3NhZ2UnKXtcclxuICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuaW50ZXJsb2N1dG9yTmV3TWVzc2FnZSh0aGlzLnN0YXRlVXNlci5jdXJyZW50UmVjZWl2ZWRNZXNzYWdlLnBheWxvYWQubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aCA9PT0gJ2hpc3RvcnlXaXRoVXNlcicpe1xyXG4gICAgICAgIGNvbnN0IGN1cnJlclVzZXIgPSAodGhpcy5zdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyLmlkKS5yZXBsYWNlKFwiaGlzdG9yeVwiLCBcIlwiKTtcclxuICAgICAgICBpZihjdXJyZXJVc2VyID09PSB0aGlzLnN0YXRlVXNlci5zZW5kVXNlcil7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy51cGRhdGVNZXNzYWdlTGlzdCh0aGlzLnN0YXRlVXNlci5oaXN0b3J5V2l0aFVzZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnVwZGF0ZVNpZGViYXJNZXNzYWdlTnVtYmVyKHRoaXMuc3RhdGVVc2VyLmhpc3RvcnlXaXRoVXNlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhdGggPT09ICdub3RpZmljYXRpb25NZXNzYWdlJyl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy51cGRhdGVNZXNzYWdlTnVtYmVyKHRoaXMuc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudFZpZXcudXBkYXRlTWVzc2FnZU51bWJlcih0aGlzLmN1cnJlbnRWaWV3LnN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHBhdGggPT09ICdtc2dSZWFkJyl7XHJcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LmludGVybG9jdXRvclN0YXR1c01lc3NhZ2UodGhpcy5zdGF0ZVVzZXIubXNnUmVhZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihwYXRoID09PSAnY29ubmVjdGlvbicpe1xyXG4gICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbicsIHRoaXMuc3RhdGVVc2VyLmNvbm5lY3Rpb24pXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGUoKXtcclxuICAgICAgY29uc3QgbG9jYXRpb25IYXNoID0gbG9jYXRpb24uaGFzaDtcclxuICAgICAgaWYoIWxvY2F0aW9uSGFzaCB8fCBsb2NhdGlvbkhhc2ggPT09JyNhdXRoJyl7XHJcbiAgICAgICAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gIEpTT04ucGFyc2UodXNlck9iamVjdCk7XHJcblxyXG4gICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjbWFpbic7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjYXV0aCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpc1BhZ2UgPSB0aGlzLnJvdXRlcy5zb21lKHIgPT4gci5wYXRoID09PSBsb2NhdGlvbi5oYXNoKTtcclxuICAgICAgdGhpcy53cy5jb25uZWN0KCkudGhlbigoc29ja2V0KSA9PiB7XHJcbiAgICAgICAgaWYoaXNQYWdlKXtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnJvdXRlcy5maW5kKHIgPT4gci5wYXRoID09IGxvY2F0aW9uLmhhc2gpLnZpZXc7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbmV3IHZpZXcoc29ja2V0LHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXcgTm90Rm91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5yZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5uZXcgQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9