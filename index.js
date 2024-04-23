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
const messageDeletion = (ws,id) => {

  const data = {
        id: 'del',
        type: "MSG_DELETE",
        payload: {
          message: {
            id: id,
          }
        }
      };

      ws.send(JSON.stringify(data));

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

    if(type === 'MSG_DELETE'){
      //удаление сообщения
      stateUser.msgDel = messageJson.payload.message;
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
            btn.setAttribute('disabled', 'disabled');
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

        const bodyChatsSenderBox = bodyChatsSender.getElement();

        //const bodyMessageSenderText = bodyChatsSenderBox.querySelector('p')


        bodyChatsSenderBox.addEventListener('contextmenu', (event) => {

            const self = this;

            event.preventDefault();
            console.log(event.target)
            const bodyContainer = document.querySelector('.body__container');
            const contextmenu = bodyContainer.querySelector('.body__context-menu');

            if(contextmenu){
                contextmenu.remove();
            }
            
            bodyChatsSenderBox.innerHTML += `
            <div class="body__context-menu">
                <ul>
                    <li class="message__edit">Изменить</li>
                    <li class="message__delete">Удалить</li>
                </ul>
            </div>`;

            
            

            const contextmenuNew = bodyChatsSenderBox.querySelector('.body__context-menu');
            bodyChatsSenderBox.addEventListener('click', (e) => {

                if(e.target.textContent.trim() === 'Изменить'){
                    console.log('---Изменить')
                }

                if(e.target.textContent.trim() === 'Удалить'){
                    console.log('---Удалить');
                    (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.messageDeletion)(self.ws,dateMessage.id);
                    bodyChatsSenderBox.remove();
                }

                contextmenuNew.remove();
            });





        });

        //bodyContainer.innerHTML += bodyChatsSenderBox.outerHTML;

        bodyContainer.append(bodyChatsSenderBox);

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

    deleteMessage(data){
        const id = data.id;
        console.log('mainid',id)

        if(this.stateUser.sendUser){
            const bodyContainer = this.app.querySelector('.body__container');
            const bodyChatsRecipent = bodyContainer.querySelectorAll('.body__chats-recipent');
            bodyChatsRecipent.forEach(el =>{

                if(el.dataset.id === id){
                    console.log('найден');
                    el.remove();
                }
            })
            

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
      msgDel: null,
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

      if(path === 'msgDel'){
        if( this.currentView.constructor.name === 'MainView'){
          this.currentView.deleteMessage(this.stateUser.msgDel);
        }
      }

      // if(path === 'connection'){
      //   console.log('connection', this.stateUser.connection)
      // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUQ7QUFDckQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFdBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RGTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUjJGO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBNEIsTUFBTTtBQUN4QyxNQUFNLHlFQUEyQixNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQTRCLE1BQU07QUFDeEMsTUFBTSx5RUFBMkIsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUE0QixNQUFNO0FBQ3hDLE1BQU0seUVBQTJCLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FB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c0JBQXNCLG9EQUFLLEVBQUU7QUFDdEMsU0FBUyxxQkFBcUIsMERBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBUTtBQUNqQyxzQkFBc0Isc0VBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLCtEQUFRO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hYm91dC9zdHlsZS5jc3M/OTUyMyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvYm9keS9zdHlsZXMuY3NzPzdmOGIiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL21lc3NhZ2UtYmxvY2svc3R5bGVzLmNzcz9lZmIxIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3N0eWxlcy5jc3M/YzQ5YSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L21haW4vc3R5bGVzLmNzcz8yZjJhIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvbm90LWZvdW5kL3N0eWxlcy5jc3M/NDc5MiIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9hcHAuc2Nzcz8yNzcyIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLnNjc3M/YmQwOSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9jb21tb24vY3VzdG9tLXdlYi1zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvY29tbW9uL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9jb250cm9sLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL2hlbHBlcnMvc3ZnLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3V0aWwvZWxlbWVudC1jcmVhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvbWVzc2FnZS1ibG9jay9tZXNzYWdlLWJsb2NrLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9tYWluL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L25vdC1mb3VuZC9ub3QtZm91bmQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pZ25vcmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLWJ1aWx0aW4uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3BhdGguanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2Nsb25lL2Nsb25lLWRhdGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1zZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS13ZWFrbWFwLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtd2Vha3NldC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1hcnJheXMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9kaWZmL2lzLWRpZmYtY2VydGFpbi5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1tYXBzLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvZGlmZi9pcy1kaWZmLXNldHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL2FycmF5LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvbWV0aG9kcy9tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL21ldGhvZHMvc2V0LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvc21hcnQtY2xvbmUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi93cmFwLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHByb2Nlc3NpbmdUeXBlcyB9IGZyb20gJy4uL2hlbHBlcnMvY29udHJvbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2ViU29ja2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCxzdGF0ZVVzZXIpIHtcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29ubmVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25uZWN0X19pbmZvXCI+0KHQvtC10LTQuNC90LXQvdC40LUg0L/QvtC00L7QttC00LjRgtC1IDEw0YE8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L7QtdC00LjQvdC10L3QuNC1INGD0YHRgtCw0L3QvtCy0LvQtdC90L4nKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub25PcGVuQ2FsbGJhY2soKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQn9C+0LvRg9GH0LXQvdC+INGB0L7QvtCx0YnQtdC90LjQtTogJyArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIHByb2Nlc3NpbmdUeXBlcyhldmVudC5kYXRhLCB0aGlzLnN0YXRlVXNlciwgdGhpcy5zb2NrZXQpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZW5kKG1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlY29ubmVjdCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ9Cf0L7Qv9GL0YLQutCwINC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjy4uLicpO1xyXG4gICAgICB0aGlzLmNvdW50ICs9IDE7XHJcbiAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbm5lY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29ubmVjdF9faW5mb1wiPtCf0L7Qv9GL0YLQutCwINC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjyDihJYke3RoaXMuY291bnR9Li4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ch0L7QtdC00LjQvdC10L3QuNC1INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC+Jyk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0J/QvtC70YPRh9C10L3QviDRgdC+0L7QsdGJ0LXQvdC40LU6ICcgKyBldmVudC5kYXRhKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5DYWxsYmFjaygpIHtcclxuICAgICAgLy8g0JLRi9C30YvQstCw0LXQvCByZXNvbHZlINC00LvRjyDQv9GA0L7QvNC40YHQsCDQv9C+0YHQu9C1INGD0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDRgdC+0LXQtNC40L3QtdC90LjRj1xyXG4gICAgICBpZiAodGhpcy5yZXNvbHZlKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc29sdmUodGhpcy5zb2NrZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zb2NrZXQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIC8vINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC60LvQsNGB0YHQsCBXZWJTb2NrZXRcclxuICBjb25zdCB3cyA9IG5ldyBDdXN0b21XZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjQwMDAnKTsiLCJleHBvcnQgY2xhc3MgQWJzdHJhY3RWaWV3e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIH1cclxufSIsIi8v0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgdXNlckF1dGhlbnRpY2F0aW9uID0gYXN5bmMod3MpID0+IHtcclxuICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gIGNvbnN0IHVzZXIgPSAgSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgaWQ6IHVzZXIubG9naW4sXHJcbiAgICAgICAgdHlwZTogXCJVU0VSX0xPR0lOXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBsb2dpbjogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuLy/QktGL0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC3INGB0LjRgdGC0LXQvNGLXHJcbmNvbnN0IHVzZXJMb2dvdXQgPSAod3Msc3RhdGVVc2VyKSA9PiB7XHJcbiAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICBjb25zdCB1c2VyID0gIEpTT04ucGFyc2UodXNlck9iamVjdCk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiB1c2VyLmxvZ2luLFxyXG4gICAgdHlwZTogXCJVU0VSX0xPR09VVFwiLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gIHN0YXRlVXNlci5pc0xvZ2luZWQgPSBmYWxzZTtcclxuICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjYXV0aCc7XHJcbn1cclxuXHJcbi8vPz8g0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0YLRgNC10YLRjNC10Lkg0YHRgtC+0YDQvtC90L7QuVxyXG4vLyDQodC10YDQstC10YDQvdC+0LUg0L/RgNC40LvQvtC20LXQvdC40LVcclxuY29uc3QgdGhpcmRQYXJ0eVVzZXJBdXRoZW50aWNhdGlvbiA9ICgpID0+IHtcclxuICAvKlxyXG4gICAge1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgdHlwZTogXCJVU0VSX0VYVEVSTkFMX0xPR0lOXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBsb2dpbjogc3RyaW5nLFxyXG4gICAgICAgICAgaXNMb2dpbmVkOiBib29sZWFuLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gIC8qXHJcbiAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0YHQtdGA0LLQtdGA0L7QvFxyXG4gICAgbG9naW4gLSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQstC+0YjQtdC00YjQtdCz0L4g0LIg0YHQuNGB0YLQtdC80YNcclxuICAgIGlzTG9naW5lZCAtINGC0LXQutGD0YnQuNC5INGB0YLQsNGC0YPRgSDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICovXHJcblxyXG59XHJcblxyXG4vLz8/INCS0YvRhdC+0LQg0YHRgtC+0YDQvtC90L3QtdCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40Lcg0YHQuNGB0YLQtdC80YtcclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IHRoaXJkUGFydHlVc2VyTG9nb3V0ID0gKCkgPT57XHJcbiAgLypcclxuICAgIHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwiVVNFUl9FWFRFUk5BTF9MT0dPVVRcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGxvZ2luOiBzdHJpbmcsXHJcbiAgICAgICAgICBpc0xvZ2luZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiAgICAvKlxyXG4gICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsCwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5INGB0LXRgNCy0LXRgNC+0LxcclxuICAgIGxvZ2luIC0g0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LLRi9GI0LXQtNGI0LXQs9C+INC40Lcg0L/RgNC40LvQvtC20LXQvdC40Y9cclxuICAgIGlzTG9naW5lZCAtINGC0LXQutGD0YnQuNC5INGB0YLQsNGC0YPRgSDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgKi9cclxuXHJcblxyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQsNGD0YLQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG5jb25zdCBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzID0gKHdzKSA9PntcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgaWQ6ICdhbGxBdXRoVXNlcicsXHJcbiAgICB0eXBlOiBcIlVTRVJfQUNUSVZFXCIsXHJcbiAgICBwYXlsb2FkOiBudWxsLFxyXG4gIH1cclxuICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuY29uc3QgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzID0gKHdzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiAnYWxsVW5hdXRVc2VyJyxcclxuICAgIHR5cGU6IFwiVVNFUl9JTkFDVElWRVwiLFxyXG4gICAgcGF5bG9hZDogbnVsbCxcclxuICB9XHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuXHJcbi8v0J7RgtC/0YDQsNCy0LrQsCDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GOXHJcbmNvbnN0IHNlbmRpbmdNZXNzYWdlVXNlciA9ICh3cyx0ZXh0TWVzc2FnZSx0b1VzZXIpID0+e1xyXG4gIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgY29uc3QgdXNlciA9ICBKU09OLnBhcnNlKHVzZXJPYmplY3QpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQ6IHVzZXIubG9naW4sXHJcbiAgICAgIHR5cGU6IFwiTVNHX1NFTkRcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIHRvOiB0b1VzZXIsXHJcbiAgICAgICAgICB0ZXh0OiB0ZXh0TWVzc2FnZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgLypcclxuICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICBsb2dpbiAtINC70L7Qs9C40L0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQutC+0YLQvtGA0L7QvNGDINC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjyDRgdC+0L7QsdGJ0LXQvdC40LVcclxuICAgICAgdGV4dCAtINGC0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAqL1xyXG59XHJcblxyXG4vLz8/INCf0L7Qu9GD0YfQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IHJlY2VpdmluZ01lc3NhZ2VGcm9tVXNlciA9ICgpID0+IHtcclxuICAvKlxyXG4gICAgICB7XHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICB0eXBlOiBcIk1TR19TRU5EXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgZnJvbTogc3RyaW5nLFxyXG4gICAgICAgICAgdG86IHN0cmluZyxcclxuICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgIGRhdGV0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgaXNEZWxpdmVyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIGlzUmVhZGVkOiBib29sZWFuLFxyXG4gICAgICAgICAgICBpc0VkaXRlZDogYm9vbGVhbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAqL1xyXG5cclxuICAgIC8qXHJcbiAgICAgIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LAsINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvQuSDRgdC10YDQstC10YDQvtC8XHJcbiAgICAgICAgbWVzc2FnZSAtINC/0L7Qu9C1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCz0LTQtTpcclxuICAgICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGZyb20gLSDQvtGC0L/RgNCw0LLQuNGC0LXQu9GMINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIHRvIC0g0L/QvtC70YPRh9Cw0YLQtdC70Ywg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgdGV4dCAtINGC0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgZGF0ZXRpbWUgLSDQtNCw0YLQsCDQuCDQstGA0LXQvNGPINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgaXNEZWxpdmVyZWQgLSDRgdGC0LDRgtGD0YEsINC60L7RgtC+0YDRi9C5INGD0LrQsNC30YvQstCw0LXRgiwg0LTQvtGB0YLQsNCy0LvQtdC90L4g0LvQuCDRgdC+0L7QsdGJ0LXQvdC40LUg0L/QvtC70YPRh9Cw0YLQtdC70Y5cclxuICAgICAgICBpc1JlYWRlZCAtINGB0YLQsNGC0YPRgSwg0LrQvtGC0L7RgNGL0Lkg0YPQutCw0LfRi9Cy0LDQtdGCLCDQsdGL0LvQviDQu9C4INGB0L7QvtCx0YnQtdC90LjQtSDQv9GA0L7Rh9C40YLQsNC90L4g0L/QvtC70YPRh9Cw0YLQtdC70LXQvFxyXG4gICAgICAgIGlzRWRpdGVkIC0g0YHRgtCw0YLRg9GBLCDQutC+0YLQvtGA0YvQuSDRg9C60LDQt9GL0LLQsNC10YIsINCx0YvQu9C+INC70Lgg0YHQvtC+0LHRidC10L3QuNC1INC+0YLRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QviDQvtGC0L/RgNCw0LLQuNGC0LXQu9C10LxcclxuICAgICovXHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC40YHRgtC+0YDQuNC4INGB0L7QvtCx0YnQtdC90LjQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyID0gKHdzLGxvZ2luKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiBgaGlzdG9yeSR7bG9naW59YCxcclxuICAgIHR5cGU6IFwiTVNHX0ZST01fVVNFUlwiLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgbG9naW46IGxvZ2luLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgLyoqXHJcbiAgICogIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LBcclxuICAgICAgbG9naW4gLSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQvtGCINC60L7RgtC+0YDQvtCz0L4g0LfQsNC/0YDQsNGI0LjQstCw0LXRgtGB0Y8g0LjRgdGC0L7RgNC40Y8g0YHQvtC+0LHRidC10L3QuNC5XHJcbiAgICAqL1xyXG59XHJcblxyXG4vLz8/INCj0LLQtdC00L7QvNC70LXQvdC40LUg0L7QsSDQuNC30LzQtdC90LXQvdC40Lgg0YHRgtCw0YLRg9GB0LAg0LTQvtGB0YLQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxpdmVyeVN0YXR1c0NoYW5nZSA9ICgpID0+IHtcclxuICAvLyB7XHJcbiAgLy8gICBpZDogbnVsbCxcclxuICAvLyAgIHR5cGU6IFwiTVNHX0RFTElWRVJcIixcclxuICAvLyAgIHBheWxvYWQ6IHtcclxuICAvLyAgICAgbWVzc2FnZToge1xyXG4gIC8vICAgICAgIGlkOiBzdHJpbmcsXHJcbiAgLy8gICAgICAgc3RhdHVzOiB7XHJcbiAgLy8gICAgICAgICBpc0RlbGl2ZXJlZDogYm9vbGVhbixcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0YHQtdGA0LLQtdGA0L7QvFxyXG4gICAgICBtZXNzYWdlIC0g0L/QvtC70LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LPQtNC1OlxyXG4gICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICBpc0RlbGl2ZXJlZCAtINGB0YLQsNGC0YPRgSwg0LrQvtGC0L7RgNGL0Lkg0YPQutCw0LfRi9Cy0LDQtdGCLCDQtNC+0YHRgtCw0LLQu9C10L3QviDQu9C4INGB0L7QvtCx0YnQtdC90LjQtSDQv9C+0LvRg9GH0LDRgtC10LvRjlxyXG4gICAqL1xyXG5cclxuXHJcbn1cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLQsNGC0YPRgdCwINC/0YDQvtGH0YLQtdC90LjRjyDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuY29uc3QgbWVzc2FnZVJlYWRTdGF0dXNDaGFuZ2UgPSAod3MsaWRNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZDogYG1haW5NU0dfUkVBRGAsXHJcbiAgICAgIHR5cGU6IFwiTVNHX1JFQURcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIGlkOiBpZE1lc3NhZ2UsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG59IFxyXG5cclxuLy8/PyDQo9C00LDQu9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjRj1xyXG5jb25zdCBtZXNzYWdlRGVsZXRpb24gPSAod3MsaWQpID0+IHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpZDogJ2RlbCcsXHJcbiAgICAgICAgdHlwZTogXCJNU0dfREVMRVRFXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LBcclxuICAgICAgbWVzc2FnZSAtINC/0L7Qu9C1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCz0LTQtTpcclxuICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgKi9cclxuXHJcbn1cclxuXHJcbi8vPz8g0KPQstC10LTQvtC80LvQtdC90LjQtSDQvtCxINGD0LTQsNC70LXQvdC40Lgg0YHQvtC+0LHRidC10L3QuNGPXHJcbi8vINCY0L3QuNGG0LjQsNGC0L7RgDog0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxldGlvbiA9ICgpID0+IHtcclxuXHJcbn1cclxuXHJcbi8v0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtC10LrRgdGC0LAg0YHQvtC+0LHRidC10L3QuNGPXHJcbmNvbnN0IG1lc3NhZ2VUZXh0RWRpdGluZyA9ICgpID0+e1xyXG4gIC8qKlxyXG4gICAqIHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IFwiTVNHX0VESVRcIlxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgdGV4dDogc3RyaW5nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICovXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICAgICAgICBtZXNzYWdlIC0g0L/QvtC70LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LPQtNC1OlxyXG4gICAgICAgICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgICAgICB0ZXh0IC0g0YLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBcclxuICB1c2VyQXV0aGVudGljYXRpb24sXHJcbiAgdXNlckxvZ291dCxcclxuICBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzLFxyXG4gIGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2VycyxcclxuICBzZW5kaW5nTWVzc2FnZVVzZXIsXHJcbiAgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyLFxyXG4gIG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxpdmVyeVN0YXR1c0NoYW5nZSxcclxuICBtZXNzYWdlUmVhZFN0YXR1c0NoYW5nZSxcclxuICBtZXNzYWdlRGVsZXRpb24sXHJcbiAgbWVzc2FnZVRleHRFZGl0aW5nLFxyXG4gfTsiLCJpbXBvcnQgeyBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzLCBnZXR0aW5nQWxsVW5hdXRob3JpemVkVXNlcnMgfSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XHJcblxyXG5jb25zdCBwcm9jZXNzaW5nVHlwZXMgPSAobWVzc2FnZSxzdGF0ZVVzZXIsd3MpID0+e1xyXG4gICAgY29uc3QgbWVzc2FnZUpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgdHlwZSA9IG1lc3NhZ2VKc29uLnR5cGU7XHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfTE9HSU4nKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI21haW4nO1xyXG4gICAgICBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINCw0YPRgtC10L3RgtC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgIGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2Vycyh3cyk7IC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQvdC10LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdFUlJPUicpe1xyXG4gICAgICBhbGVydChtZXNzYWdlSnNvbi5wYXlsb2FkLmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlID09PSAnVVNFUl9MT0dPVVQnKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvL9CQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGC0YDQtdGC0YzQtdC5INGB0YLQvtGA0L7QvdC+0LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0VYVEVSTkFMX0xPR0lOJyl7XHJcbiAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfRVhURVJOQUxfTE9HT1VUJyl7XHJcbiAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0FDVElWRScpe1xyXG4gICAgICBjb25zdCB1c2Vyc0xpc3QgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLnVzZXJzO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck9iaiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJOYW1lID0gSlNPTi5wYXJzZShjdXJyZW50VXNlck9iaikubG9naW47XHJcbiAgICAgIC8vINCd0LDRhdC+0LTQuNC8INC40L3QtNC10LrRgSDQvtCx0YrQtdC60YLQsCDQsiDRgdC/0LjRgdC60LVcclxuICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHVzZXJzTGlzdC5maW5kSW5kZXgob2JqID0+IG9iai5sb2dpbiA9PT0gY3VycmVudFVzZXJOYW1lKTtcclxuICAgICAgaWYgKGluZGV4VG9EZWxldGUgIT09IC0xKSB7XHJcbiAgICAgICAgdXNlcnNMaXN0LnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZVVzZXIudXNlcnNBY3RpdmUgPSB1c2Vyc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0lOQUNUSVZFJyl7XHJcbiAgICAgIHN0YXRlVXNlci51c2Vyc0luYWNyaXZlID0gbWVzc2FnZUpzb24ucGF5bG9hZC51c2VycztcclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGlmKHR5cGUgPT09ICdNU0dfU0VORCcpe1xyXG4gICAgICBjb25zdCBmcm9tID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLmZyb207XHJcbiAgICAgIGNvbnN0IHRvID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLnRvO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck9iaiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJOYW1lID0gSlNPTi5wYXJzZShjdXJyZW50VXNlck9iaikubG9naW47XHJcblxyXG4gICAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGRhdGV0aW1lID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLmRhdGV0aW1lO1xyXG5cclxuICAgICAgaWYoY3VycmVudFVzZXJOYW1lID09PSBmcm9tKSB7XHJcbiAgICAgICAgLy8gc3RhdGVVc2VyLm1haW5MYXN0TWVzc2FnZSA9IHtcclxuICAgICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgLy8gICBkYXRldGltZTogZGF0ZXRpbWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBzdGF0ZVVzZXIubWFpbkxhc3RNZXNzYWdlID0gbWVzc2FnZUpzb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGN1cnJlbnRVc2VyTmFtZSA9PT0gdG8pIHtcclxuICAgICAgICBpZihzdGF0ZVVzZXIuc2VuZFVzZXIgPT09IGZyb20pe1xyXG4gICAgICAgICAgLy8gc3RhdGVVc2VyLmN1cnJlbnRSZWNlaXZlZE1lc3NhZ2U9e1xyXG4gICAgICAgICAgLy8gICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgLy8gICBkYXRldGltZTogZGF0ZXRpbWUsXHJcbiAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgc3RhdGVVc2VyLmN1cnJlbnRSZWNlaXZlZE1lc3NhZ2U9bWVzc2FnZUpzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLy8g0L/QvtC70YPRh9Cw0YLQtdC70Ywg0Y8g0L7RgiBmcm9tXHJcbiAgICAgICAgICBpZiAoc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UgPT09IGZyb20pe1xyXG4gICAgICAgICAgICBzdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlID0gZnJvbTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlID0gZnJvbTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDQuNGB0YLQvtGA0LjQuCDRgdC+0L7QsdGJ0LXQvdC40Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICBpZih0eXBlID09PSAnTVNHX0ZST01fVVNFUicpe1xyXG4gICAgICBzdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyID0gbWVzc2FnZUpzb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdNU0dfUkVBRCcpe1xyXG4gICAgICAvL9GB0LzQtdC90LjQu9GB0Y8g0YHRgtCw0YLRg9GBINGDINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICBzdGF0ZVVzZXIubXNnUmVhZCA9IG1lc3NhZ2VKc29uLnBheWxvYWQubWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlID09PSAnTVNHX0RFTEVURScpe1xyXG4gICAgICAvL9GD0LTQsNC70LXQvdC40LUg0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgIHN0YXRlVXNlci5tc2dEZWwgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLm1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgcHJvY2Vzc2luZ1R5cGVzIH07IiwiY29uc3QgYXV0aG9yaXphdGlvbkljbyA9IGA8c3ZnIGlkPVwic3ZnLXNvdXJjZVwiIGhlaWdodD1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGVcIj5cclxuIDxnIGlkPVwibWFuLXBlb3BsZS11c2VyXCIgZGF0YS1pY29ubWVsb249XCJTdHJlYW1saW5lIEljb24gU2V0OmRlMzJlYjI2MjE0OTFjMWE4ODFhOWZlODQ2MjM2ZGExXCI+XHJcbiAgICA8ZyBpZD1cIkV4cGFuZGVkXCI+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGggIGQ9XCJNMTYuMDI4LDIwYy00Ljc2NCwwLTguNjM5LTQuNDg2LTguNjM5LTEwczMuODc1LTEwLDguNjM5LTEwYzQuNzYzLDAsOC42MzgsNC40ODYsOC42MzgsMTBcclxuXHRcdFx0XHRTMjAuNzkxLDIwLDE2LjAyOCwyMHogTTE2LjAyOCwxLjMzM0MxMiwxLjMzMyw4LjcyMiw1LjIyMSw4LjcyMiwxMHMzLjI3Nyw4LjY2Nyw3LjMwNiw4LjY2N2M0LjAyOSwwLDcuMzA2LTMuODg4LDcuMzA2LTguNjY3XHJcblx0XHRcdFx0UzIwLjA1NywxLjMzMywxNi4wMjgsMS4zMzN6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPGc+XHJcbiAgICAgICAgIDxwYXRoICBkPVwiTTMxLjk4OCwzMkgwLjAxMnYtNC41MTVjMC0xLjk2NywxLjI0NS0zLjczMywzLjA5Ny00LjM5NWw4LjIyNC0yLjI2NnYtMi43N2gxLjMzM3YzLjc4NUwzLjUxLDI0LjM2MVxyXG5cdFx0XHRcdGMtMS4yNzUsMC40NTgtMi4xNjUsMS43Mi0yLjE2NSwzLjEyNHYzLjE4MmgyOS4zMDl2LTMuMTgyYzAtMS40MDQtMC44ODktMi42NjYtMi4yMTMtMy4xMzlsLTkuMTA3LTIuNTA2di0zLjc1OGgxLjMzMnYyLjc0MlxyXG5cdFx0XHRcdGw4LjE3OCwyLjI1MWMxLjksMC42NzcsMy4xNDUsMi40NDIsMy4xNDUsNC40MDlWMzJ6XCI+PC9wYXRoPlxyXG4gICAgICAgPC9nPlxyXG4gICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggIGQ9XCJNMjEuODY1LDguODEyYy0wLjA0NSwwLTAuMDktMC4wMDEtMC4xMzctMC4wMDNjLTEuNS0wLjA1NS0zLjI1LTEuMDA0LTQuMzYxLTIuMjg3XHJcblx0XHRcdFx0QzE2LjU5LDcuNTEzLDE1LjQ4LDguMTUsMTQuMTA2LDguMzgzYy0yLjQwMywwLjQxMy01LjE1Mi0wLjUxLTUuOTg4LTEuMzIxbDAuOTI4LTAuOTU3YzAuNDAzLDAuMzkxLDIuNjksMS4zMjksNC44MzYsMC45NjRcclxuXHRcdFx0XHRjMS4zMzItMC4yMjYsMi4yOTItMC45MTEsMi44NTQtMi4wMzRsMC41NTgtMS4xMTRsMC42MTcsMS4wODJjMC43MzgsMS4yOTIsMi41MDgsMi40MjUsMy44NjcsMi40NzVcclxuXHRcdFx0XHRjMC42MDQsMC4wMTYsMS4wMzMtMC4xNjUsMS4zMDctMC41NzFsMS4xMDUsMC43NDVDMjMuNjg2LDguNDAzLDIyLjg2Myw4LjgxMiwyMS44NjUsOC44MTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwibG9jay1sb2NrZXJcIiBkYXRhLWljb25tZWxvbj1cIlN0cmVhbWxpbmUgSWNvbiBTZXQ6NWQ0M2M2ZjQ1Y2RiZWNmZDViOGExMmJjOWU1ZGQzM2NcIj5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkV4cGFuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSAgY3g9XCIxNlwiIGN5PVwiMjBcIiByPVwiMS4zMzNcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgPHBhdGggIGQ9XCJNMTYsMjUuMzMzYy0wLjM2OSwwLTAuNjY3LTAuMjk4LTAuNjY3LTAuNjY2di00QzE1LjMzMywyMC4yOTgsMTUuNjMxLDIwLDE2LDIwczAuNjY3LDAuMjk4LDAuNjY3LDAuNjY3XHJcblx0XHRcdFx0djRDMTYuNjY3LDI1LjAzNSwxNi4zNjksMjUuMzMzLDE2LDI1LjMzM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggIGQ9XCJNMjgsMzJINFYxMmgyNFYzMnogTTUuMzMzLDMwLjY2N2gyMS4zMzNWMTMuMzMzSDUuMzMzVjMwLjY2N3pcIj48L3BhdGg+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICA8cGF0aCAgZD1cIk0yNCwxMi42NjdoLTEuMzMzVjhjMC0zLjY3Ni0yLjk5MS02LjY2Ny02LjY2Ny02LjY2N2MtMy42NzYsMC02LjY2NywyLjk5LTYuNjY3LDYuNjY3djQuNjY3SDhWOFxyXG5cdFx0XHRcdGMwLTQuNDEyLDMuNTg4LTgsOC04YzQuNDExLDAsOCwzLjU4OCw4LDhWMTIuNjY3elwiPjwvcGF0aD5cclxuICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgIDwvZz5cclxuPC9zdmc+YDtcclxuXHJcbmV4cG9ydCB7IGF1dGhvcml6YXRpb25JY28gfTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50Q3JlYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbm5lckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudENyZWF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50LmdldEVsZW1lbnQoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWxlbWVudChwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy50YWcpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3NlcyhwYXJhbXMuY2xhc3NOYW1lcyk7XHJcbiAgICAgICAgdGhpcy5zZXRUZXh0Q29udGVudChwYXJhbXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FsbGJhY2socGFyYW1zLmNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnNldElkKHBhcmFtcy5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyKHBhcmFtcy5hdHRyKTtcclxuICAgICAgICB0aGlzLmFkZERhdGEocGFyYW1zLmlkRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWQoaWQpIHtcclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDc3NDbGFzc2VzKGNzc0NsYXNzZXMgPSBbXSkge1xyXG4gICAgICAgIGNzc0NsYXNzZXMubWFwKChjc3NDbGFzcykgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdHRyKGF0dHIgPSB7fSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhhdHRyKS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhhdHRyKVtpXTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dENvbnRlbnQodGV4dCA9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREYXRhKGlkRGF0YSl7XHJcbiAgICAgICAgaWYoaWREYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRhdGFzZXQuaWQgPSBpZERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi9jb21tb24vdmlldyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcic7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAvLyBtYWluLmlubmVySFRNTCA9ICdBYm91dCc7XHJcbiAgICAgICAgLy8gdGhpcy5hcHAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5hcHAuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgICAgICBjb25zdCBhYm91dCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYWJvdXQnXX0pO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYWJvdXRfX2NvbnRhaW5lciddfSk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonaDEnLCBjbGFzc05hbWVzOlsnYWJvdXRfX3RpdGxlJ10sIHRleHRDb250ZW50OiAn0KHRg9C/0LXRgCDRh9Cw0YIhJ30pO1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzoncCcsIGNsYXNzTmFtZXM6WydhYm91dF9faW5mbyddLCB0ZXh0Q29udGVudDogJ9Cf0YDQuNC70L7QttC10L3QuNC1INGA0LDQt9GA0LDQsdC+0YLQsNC90L4g0LIg0YDQsNC80LrQsNGFINC60YPRgNGB0LAgUlNTY2hvb2wgSlMvRkUgMjAyM1EzJ30pO1xyXG4gICAgICAgIGNvbnN0IGF1dG9yID0gIG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidwJywgY2xhc3NOYW1lczpbJ2Fib3V0X19pbmZvJ10sIHRleHRDb250ZW50OiAn0JDQstGC0L7RgDogdmxhZGltaXJvdmljcCd9KTtcclxuICAgICAgICBjb25zdCBib2R5QnRuID0gbmV3IEVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOididXR0b24nLCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lczpbJ2J0bicsJ2Zvcm1fX2J0biddLCBcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNhdXRoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KHRpdGxlKTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGluZm8pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoYXV0b3IpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoYm9keUJ0bik7XHJcblxyXG4gICAgICAgIGFib3V0LmFkZElubmVyRWxlbWVudChjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmQoYWJvdXQuZ2V0RWxlbWVudCgpKTtcclxuXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5pbXBvcnQgJy4vYXV0aG9yaXphdGlvbi5zY3NzJztcclxuaW1wb3J0IHsgYXV0aG9yaXphdGlvbkljbyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3ZnJztcclxuaW1wb3J0IHsgdXNlckF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb24gZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iod3Msc3RhdGVVc2VyKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgICAgIHRoaXMud3MgPSB3cztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBwYWdlQXV0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2VBdXRoLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtYXV0aCcpO1xyXG4gICAgICAgIHBhZ2VBdXRoLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiYXV0aF9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX191c2VyLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidXNlclwiIGZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNtYW4tcGVvcGxlLXVzZXJcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVzZXItbmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgbmFtZSBpc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogXCI0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIl5bQS1aXVthLXpBLVpcXFxcLV0rJFwiICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXItZXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3VzZXItcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibG9ja1wiIGZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWx0ZXI9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2xvY2stbG9ja2VyXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwidXNlci1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTXkgcGFzc3dvcmQgaXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFzc3dvcmQtZXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNpZ24gaW5cIiBjbGFzcz1cInNpZ24taW5cIiBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgY2xhc3M9XCJidG4gZm9ybV9fYnRuXCI+YWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAke2F1dGhvcml6YXRpb25JY299XHJcbiAgICAgICAgPC9kaXZgO1xyXG5cclxuXHJcbiAgICAgICAgLy8hISEhISEhISEhISEhISDQn9C+0YLQvtC8INCS0LrQu9GO0YfQuCDQstCw0LvQuNC00LDRhtC40Y4hISEhXHJcbiAgICAgICAgLy8g0LTQvtCx0LDQstGMIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduIGluXCIgY2xhc3M9XCJzaWduLWluXCIgZGlzYWJsZWQgLz5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQocGFnZUF1dGgpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbkluID0gcGFnZUF1dGgucXVlcnlTZWxlY3RvcignLnNpZ24taW4nKTtcclxuICAgICAgICBzaWduSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xpY2socGFnZUF1dGgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmQocGFnZUF1dGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKGVsKXtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcclxuICAgICAgICBjb25zdCB1c2VyUGFzID0gZWwucXVlcnlTZWxlY3RvcignLnVzZXItcGFzc3dvcmQnKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZVZhbCA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJQYXNWYWwgPSB1c2VyUGFzLnZhbHVlO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh7bG9naW46IHVzZXJOYW1lVmFsLCBwYXNzd29yZDogdXNlclBhc1ZhbH0pKTtcclxuICAgICAgICB0aGlzLnN0YXRlVXNlci5pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgIHVzZXJBdXRoZW50aWNhdGlvbih0aGlzLndzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUlucHV0KHBhZ2VBdXRoKXtcclxuICAgICAgICBsZXQgbmFtZUJvb2wgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcGFzc0Jvb2wgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBzaWduSW4gPSBwYWdlQXV0aC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Vc2VyTmFtZSA9IHBhZ2VBdXRoLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX191c2VyLW5hbWUnKTtcclxuICAgICAgICBjb25zdCB1c2VyRXJyb3IgPSBmb3JtVXNlck5hbWUucXVlcnlTZWxlY3RvcignLnVzZXItZXJyb3InKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGZvcm1Vc2VyTmFtZS5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcbiAgICAgICAgdXNlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVbMF0gIT09IHZhbHVlWzBdLnRvVXBwZXJDYXNlKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFcnJvci5pbm5lckhUTUwgPSAn0J/QtdGA0LLQsNGPINCx0YPQutCy0LAg0LIg0JjQvNC10L3QuCDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LfQsNCz0LvQsNCy0L3QvtC5ISc7IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVCb29sPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoIDwgNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJFcnJvci5pbm5lckhUTUwgPSAn0KHQuNC80LLQvtC70L7QsiDQsiDQmNC80LXQvdC4INC00L7Qu9C20L3QviDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgMyEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQm9vbD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVCb29sPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25JbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdXNlckVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtVXNlclBhc3N3b3JkID0gIHBhZ2VBdXRoLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX191c2VyLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRFcnJvciA9IGZvcm1Vc2VyUGFzc3dvcmQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLWVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclBhc3N3b3JkID0gZm9ybVVzZXJQYXNzd29yZC5xdWVyeVNlbGVjdG9yKCcudXNlci1wYXNzd29yZCcpO1xyXG4gICAgICAgIHVzZXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZS5sZW5ndGggPCA0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICfQodC40LzQstC+0LvQvtCyINCyINC/0LDRgNC+0LvQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LHQvtC70YzRiNC1IDMhJztcclxuICAgICAgICAgICAgICAgICAgICBwYXNzQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25JbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gYGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEvWzAtOV0rLy50ZXN0KHZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJ9CSINC/0LDRgNC+0LvQtSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YXQvtGC0Ywg0L7QtNC90LAg0YbQuNGE0YDQsCEnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0Jvb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVNpZ25JbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5hbWVCb29sICYmIHBhc3NCb29sKXtcclxuICAgICAgICAgICAgICAgIHNpZ25Jbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PntcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZihzaWduSW4uZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy90aGlzLmJ0bkNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW50ZXInKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2lnbkluLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlldyc7XHJcbmltcG9ydCB7IHVzZXJMb2dvdXQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FwaSc7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkgZXh0ZW5kcyBBYnN0cmFjdFZpZXd7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod3Msc3RhdGVVc2VyKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud3MgPSB3cztcclxuICAgICAgICB0aGlzLnN0YXRlVXNlciA9IHN0YXRlVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ21haW5fX2NvbnRhaW5lciddfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUhlYWRlciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidoZWFkZXInLCBjbGFzc05hbWVzOlsnYm9keV9faGVhZGVyJ119KTtcclxuICAgICAgICBjb25zdCBib2R5QnRuID0gbmV3IEVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOididXR0b24nLCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lczpbJ2J0bicsJ2JvZHlfX2J0bicsJ2JvZHlfX2J0bi1jaGF0J10sIFxyXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ9Cf0L7QutC40L3Rg9GC0Ywg0YfQsNGCJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgdXNlckxvZ291dCh0aGlzLndzLHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lQ2hhdCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fbmFtZS1jaGF0J10sIHRleHRDb250ZW50OiAn0KHRg9C/0LXRgCDRh9Cw0YIhJ30pO1xyXG4gICAgICAgIGNvbnN0IGFib3V0QnRuID0gbmV3IEVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOididXR0b24nLCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lczpbJ2J0bicsJ2JvZHlfX2J0bicsJ2JvZHlfX2J0bi1hYm91dCddLCBcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdBYm91dCcsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PntcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNhYm91dCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYm9keUhlYWRlci5hZGRJbm5lckVsZW1lbnQobmFtZUNoYXQpO1xyXG4gICAgICAgIGJvZHlIZWFkZXIuYWRkSW5uZXJFbGVtZW50KGFib3V0QnRuKTtcclxuICAgICAgICBib2R5SGVhZGVyLmFkZElubmVyRWxlbWVudChib2R5QnRuKTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlIZWFkZXIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUluZm8gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX2luZm8nXX0pO1xyXG4gICAgICAgIGNvbnN0IHNlbmRVc2VyTmFtZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fc2VuZC11c2VyLW5hbWUnXX0pO1xyXG4gICAgICAgIGNvbnN0IHNlbmRVc2VyU3RhdHVzID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19zZW5kLXVzZXItc3RhdHVzJ119KTtcclxuICAgICAgICBib2R5SW5mby5hZGRJbm5lckVsZW1lbnQoc2VuZFVzZXJOYW1lKTtcclxuICAgICAgICBib2R5SW5mby5hZGRJbm5lckVsZW1lbnQoc2VuZFVzZXJTdGF0dXMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoYm9keUluZm8pO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19jb250YWluZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IG5vbmVNZXNzYWdlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydub25lLW1lc3NhZ2UnXSx0ZXh0Q29udGVudDon0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LTQu9GPINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPLi4uJ30pO1xyXG4gICAgICAgIGJvZHlDb250YWluZXIuYWRkSW5uZXJFbGVtZW50KG5vbmVNZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmdldEVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDaGF0c1NlbmRlcihtZXNzYWdlLGRhdGUsc3RhdHVzTWVzc2FnZSxlZGl0TWVzc2FnZSxpZE1lc3NhZ2Upe1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fY2hhdHMnLCdib2R5X19jaGF0cy1zZW5kZXInXSxpZERhdGE6IGlkTWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlckluZm8gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1pbmZvJ10gfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTmFtZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1uYW1lJ10sIHRleHRDb250ZW50OiAn0JLRiyd9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJEYXRlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLWRhdGUnXSwgdGV4dENvbnRlbnQ6IGRhdGV9KTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJJbmZvLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJOYW1lKTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJJbmZvLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJEYXRlKTtcclxuXHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJJbmZvKTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19tZXNzYWdlU2VuZGVyJ119KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlUCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidwJywgdGV4dENvbnRlbnQ6IG1lc3NhZ2V9KTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJNZXNzYWdlUCk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJNZXNzYWdlKTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzZXMgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzoncCcsIGNsYXNzTmFtZXM6Wydib2R5X19tZXNzYWdlU2VuZGVyLXN0YXR1c2VzJ119KTtcclxuICAgICAgICBjb25zdCBlZGl0TWVzc2FnZVRleHQgPSBlZGl0TWVzc2FnZSA/IGVkaXRNZXNzYWdlIDogJyc7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTWVzc2FnZUVkaXQgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6Wydib2R5X19tZXNzYWdlU2VuZGVyLWVkaXQnXSwgdGV4dENvbnRlbnQ6IGVkaXRNZXNzYWdlVGV4dH0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXNlcy5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTWVzc2FnZUVkaXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXMgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6Wydib2R5X19tZXNzYWdlU2VuZGVyLXN0YXR1cyddLCB0ZXh0Q29udGVudDogc3RhdHVzTWVzc2FnZX0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXNlcy5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1cyk7XHJcblxyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlci5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1c2VzKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBib2R5Q2hhdHNTZW5kZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hhdHNSZWNpcGVudChtZXNzYWdlLGRhdGUsdXNlclJlY2lwZW50LGlkTWVzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnQgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX2NoYXRzJywgJ2JvZHlfX2NoYXRzLXJlY2lwZW50J10sIGlkRGF0YTogaWRNZXNzYWdlfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnRJbmZvID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtaW5mbyddIH0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50TmFtZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1uYW1lJ10sIHRleHRDb250ZW50OiB1c2VyUmVjaXBlbnR9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudERhdGUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtZGF0ZSddLCB0ZXh0Q29udGVudDogZGF0ZX0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1JlY2lwZW50SW5mby5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzUmVjaXBlbnROYW1lKTtcclxuICAgICAgICBib2R5Q2hhdHNSZWNpcGVudEluZm8uYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1JlY2lwZW50RGF0ZSk7XHJcbiAgICAgICAgYm9keUNoYXRzUmVjaXBlbnQuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1JlY2lwZW50SW5mbyk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnRNZXNzYWdlID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19tZXNzYWdlUmVjaXBlbnQnXX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50TWVzc2FnZVAgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzoncCcsIHRleHRDb250ZW50OiBtZXNzYWdlfSk7XHJcbiAgICAgICAgYm9keUNoYXRzUmVjaXBlbnRNZXNzYWdlLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNSZWNpcGVudE1lc3NhZ2VQKTtcclxuICAgICAgICBib2R5Q2hhdHNSZWNpcGVudC5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzUmVjaXBlbnRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJvZHlDaGF0c1JlY2lwZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlldyc7XHJcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0IHsgc2VuZGluZ01lc3NhZ2VVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hcGknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCbG9jayBleHRlbmRzIEFic3RyYWN0Vmlld3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCbG9jayA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnbWVzc2FnZUJsb2NrJ119KTtcclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2Zvcm0nLCBjbGFzc05hbWVzOlsnZm9ybSddfSk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6J2lucHV0JywgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6Wyd1c2VyTWVzc2FnZSddLCBcclxuICAgICAgICAgICAgYXR0cjp7dHlwZTpcInRleHRcIixkaXNhYmxlZDogJ2Rpc2FibGVkJ30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKHtcclxuICAgICAgICAgICAgdGFnOididXR0b24nLCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lczpbJ2J0biddLCBcclxuICAgICAgICAgICAgYXR0cjp7ZGlzYWJsZWQ6ICdkaXNhYmxlZCd9LFxyXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ9Ce0YLQv9GA0LDQstC40YLRjCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybS5hZGRJbm5lckVsZW1lbnQoaW5wdXQpO1xyXG4gICAgICAgIGZvcm0uYWRkSW5uZXJFbGVtZW50KGJ1dHRvbik7XHJcbiAgICAgICAgbWVzc2FnZUJsb2NrLmFkZElubmVyRWxlbWVudChmb3JtKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gbWVzc2FnZUJsb2NrLmdldEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFja0lucHV0KG1lc3NhZ2VDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2xpY2sobWVzc2FnZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrSW5wdXQobWVzc2FnZUNvbnRhaW5lcil7XHJcbiAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSBtZXNzYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy51c2VyTWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IG1lc3NhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG4gICAgICAgIHVzZXJNZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xpY2sobWVzc2FnZUNvbnRhaW5lcil7XHJcbiAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSBtZXNzYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy51c2VyTWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IG1lc3NhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FhZ2UgPSB1c2VyTWVzc2FnZS52YWx1ZTtcclxuICAgICAgICAgICAgdXNlck1lc3NhZ2UudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgc2VuZGluZ01lc3NhZ2VVc2VyKHRoaXMud3MsbWVzc2FhZ2UsdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3JztcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvYXBpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhciBleHRlbmRzIEFic3RyYWN0Vmlld3tcclxuICAgIGNvbnN0cnVjdG9yKHdzLHN0YXRlVXNlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndzID0gd3M7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIgPSBzdGF0ZVVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IEpTT04ucGFyc2UodXNlck9iamVjdCkubG9naW47XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xyXG4gICAgICAgIHNpZGViYXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlci1jdXJyZW50XCI+XHJcbiAgICAgICAgICAgICAgICDQktGLINCy0L7RiNC70Lgg0LrQsNC6OiA8c3BhbiBjbGFzcz1cInNpZGViYXJfX3VzZXItY3VycmVudC1uYW1lXCI+JHt1c2VyTmFtZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hfX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzcz1cInNlYXJjaF9faW5wdXRcIiBwbGFjZWhvbGRlcj1cItCd0LDQudGC0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIC4uLlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzPSdzaWRlYmFyX19oZWFkZXInPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDo8L2g0PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9J3NpZGViYXJfX3VzZXJzJz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGxldCBzaWRlYmFyVXNlcnNMaXN0ID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlVXNlci51c2Vyc0FjdGl2ZScsdGhpcy5zdGF0ZVVzZXIudXNlcnNBY3RpdmUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGVVc2VyLnVzZXJzQWN0aXZlLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvL9C30LDQv9GA0L7RgdC40YLRjCDQuNGB0YLQvtGA0LjRjiDQtNC70Y8g0L/QvtC00YHRh9C10YLQsCDQvdC10L/RgNC+0YfQuNGC0LDQvdGL0YUg0YHQvtC+0LHRidC10L3QuNC5XHJcbiAgICAgICAgICAgIGZldGNoaW5nTWVzc2FnZUhpc3RvcnlXaXRoVXNlcih0aGlzLndzLHRoaXMuc3RhdGVVc2VyLnVzZXJzQWN0aXZlW2ldLmxvZ2luKTtcclxuXHJcbiAgICAgICAgICAgIHNpZGViYXJVc2Vyc0xpc3QgKz0gYDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXItc3RhdHVzIHNpZGViYXJfX3VzZXItYWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXItbmFtZVwiPiR7dGhpcy5zdGF0ZVVzZXIudXNlcnNBY3RpdmVbaV0ubG9naW59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX21lc3NhZ2UtbnVtYmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlVXNlci51c2Vyc0luYWNyaXZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNpZGViYXJVc2Vyc0xpc3QgKz0gYDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXItc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXItbmFtZVwiPiR7dGhpcy5zdGF0ZVVzZXIudXNlcnNJbmFjcml2ZVtpXS5sb2dpbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fbWVzc2FnZS1udW1iZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcnMnKTtcclxuICAgICAgICBzaWRlYmFyVXNlcnMuaW5uZXJIVE1MID0gc2lkZWJhclVzZXJzTGlzdDtcclxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3JztcclxuXHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhcic7XHJcbmltcG9ydCB7IEJvZHkgfSBmcm9tICcuLi9jb21wb25lbnRzL2JvZHkvYm9keSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VCbG9jayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZS1ibG9jay9tZXNzYWdlLWJsb2NrJztcclxuaW1wb3J0IHsgdXNlckF1dGhlbnRpY2F0aW9uLCBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzLCBmZXRjaGluZ01lc3NhZ2VIaXN0b3J5V2l0aFVzZXIsIG1lc3NhZ2VSZWFkU3RhdHVzQ2hhbmdlLCBtZXNzYWdlRGVsZXRpb24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGlcIjtcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy51c2VyKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVVc2VyLmlzTG9naW5lZCl7XHJcbiAgICAgICAgICAgICAgICB1c2VyQXV0aGVudGljYXRpb24odGhpcy53cyk7IC8vINCQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlVXNlci5pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnModGhpcy53cyk7IC8v0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINCw0YPRgtC10L3RgtC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy51c2VyKXtcclxuICAgICAgICAgICAgY29uc3QgcGFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcGFnZU5hbWUuY2xhc3NMaXN0LmFkZCgnY2hhdF9fbm9BdXRoJyk7XHJcbiAgICAgICAgICAgIHBhZ2VOYW1lLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2hhdF9fbm9BdXRoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfX25vQXV0aC10ZXh0XCI+0JLRiyDQvdC1INCw0LLRgtC+0YDQuNC30L7QstCw0L3RiyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2hhdF9fbm9BdXRoLWxpbmtcIiBocmVmPVwiL3JzLWZ1bi1jaGF0L1wiPtCf0LXRgNC10LnRgtC4INC90LAg0YHRgtGA0LDQvdC40YbRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4ITwvYT5cclxuICAgICAgICAgICAgPC9kaXY+IGA7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQocGFnZU5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZU5hbWUuY2xhc3NMaXN0LmFkZCgnY2hhdCcpO1xyXG5cclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gbmV3IFNpZGViYXIodGhpcy53cyx0aGlzLnN0YXRlVXNlcikucmVuZGVyKCk7XHJcbiAgICAgICAgcGFnZU5hbWUuYXBwZW5kKHNpZGViYXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcblxyXG4gICAgICAgIHRoaXMuQm9keUNsYXNzID0gbmV3IEJvZHkodGhpcy53cyx0aGlzLnN0YXRlVXNlcik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQodGhpcy5Cb2R5Q2xhc3MucmVuZGVyKCkpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKG5ldyBNZXNzYWdlQmxvY2sodGhpcy53cyx0aGlzLnN0YXRlVXNlcikucmVuZGVyKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2NoYXRfX2Zvb3RlciddfSkuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X19mb290ZXItcnNcIj48aW1nIHNyYz1cIi4vaW1nL3JzLWxvZ28ud2VicFwiPlRoZSBSb2xsaW5nIFNjb3BlcyBTY2hvb2w8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5HaXQgSHViOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRpbWlyb3ZpY3BcIj5WbGFkaW1pcm92aWNwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjIwMjQ8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGZvb3Rlcik7XHJcbiAgICAgICAgcGFnZU5hbWUuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmQocGFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZHJhd2luZ1NpZGViYXIoKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHJhd2luZ1NpZGViYXInKVxyXG5cclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgICAgICBpZihzaWRlYmFyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhck5ldyA9IG5ldyBTaWRlYmFyKHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIpLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGViYXJOZXcnLHNpZGViYXJOZXcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyU3RyID0gc2lkZWJhck5ldy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHNpZGViYXIuaW5uZXJIVE1MID0gc2lkZWJhclN0cjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVXNlcihzaWRlYmFyKVxyXG4gICAgICAgICAgICB0aGlzLmNsaWNrVXNlcihzaWRlYmFyLHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVXNlcihzaWRlYmFyKXtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lVXNlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItbmFtZScpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZVVzZXIuaW5jbHVkZXMoc2VhcmNoVGV4dCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja1VzZXIoc2lkZWJhcixzdGF0ZVVzZXIpIHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcicpO1xyXG4gICAgICAgICAgICBzaWRlYmFyVXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlck5hbWUgPSBzaWRlYmFyVXNlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVVzZXIuc2VuZFVzZXIgPSBzaWRlYmFyVXNlck5hbWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZW5kVXNlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgICAgICBjb25zdCBib2R5SW5mbyA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19pbmZvJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJOYW1lID0gYm9keUluZm8ucXVlcnlTZWxlY3RvcignLmJvZHlfX3NlbmQtdXNlci1uYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJTdGF0dXMgPSBib2R5SW5mby5xdWVyeVNlbGVjdG9yKCcuYm9keV9fc2VuZC11c2VyLXN0YXR1cycpO1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZVVzZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXRlVXNlci5zZW5kVXNlciA9PT0gbmFtZVVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lVXNlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlclN0YXR1cyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItc3RhdHVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2lkZWJhclVzZXJTdGF0dXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyX191c2VyLWFjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclN0YXR1cy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzdGF0dXMtYWN0aXZlXCI+0JIg0YHQtdGC0Lg8L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclN0YXR1cy5pbm5lckhUTUwgPSBgPHNwYW4+0J3QtSDQsiDRgdC10YLQuDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCw0LrRgtC40LLQvdGL0Lkg0LjQvdGC0YPQvyDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40LlcclxuICAgICAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcudXNlck1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgdXNlck1lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpOyBcclxuXHJcbiAgICAgICAgICAgIC8v0J/QvtC70YPRh9C10L3QuNC1INC40YHRgtC+0YDQuNC4INGB0L7QvtCx0YnQtdC90LjQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAgICAgICAgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyKHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40LksINC60L7RgtC+0YDRi9C1INC+0YLQv9GA0LDQstC40Lsg0Y8hXHJcbiAgICBtYWluTmV3TWVzc2FnZShkYXRlTWVzc2FnZSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3Qgbm9uZU1lc3NhZ2UgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ub25lLW1lc3NhZ2UnKTtcclxuICAgICAgICBpZihub25lTWVzc2FnZSl7XHJcbiAgICAgICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAgdGhpcy5mb3JtYXRlRGF0ZShkYXRlTWVzc2FnZS5kYXRldGltZSk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRhdGVNZXNzYWdlLnN0YXR1cy5pc1JlYWRlZCA/ICfQv9GA0L7Rh9C40YLQsNC90L4nIDogJ9C00L7RgdGC0LDQstC70LXQvdC+JztcclxuICAgICAgICBjb25zdCBlZGl0TWVzc2FnZSA9IGRhdGVNZXNzYWdlLnN0YXR1cy5pc0VkaXRlZCA/ICfQuNC30LzQtdC90LXQvdC+JyA6IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlciA9IHRoaXMuQm9keUNsYXNzLmNyZWF0ZUNoYXRzU2VuZGVyKGRhdGVNZXNzYWdlLnRleHQsZGF0ZSxzdGF0dXNNZXNzYWdlLGVkaXRNZXNzYWdlLGRhdGVNZXNzYWdlLmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyQm94ID0gYm9keUNoYXRzU2VuZGVyLmdldEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgLy9jb25zdCBib2R5TWVzc2FnZVNlbmRlclRleHQgPSBib2R5Q2hhdHNTZW5kZXJCb3gucXVlcnlTZWxlY3RvcigncCcpXHJcblxyXG5cclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0bWVudSA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRleHQtbWVudScpO1xyXG5cclxuICAgICAgICAgICAgaWYoY29udGV4dG1lbnUpe1xyXG4gICAgICAgICAgICAgICAgY29udGV4dG1lbnUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvZHlDaGF0c1NlbmRlckJveC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fY29udGV4dC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVzc2FnZV9fZWRpdFwiPtCY0LfQvNC10L3QuNGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lc3NhZ2VfX2RlbGV0ZVwiPtCj0LTQsNC70LjRgtGMPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0bWVudU5ldyA9IGJvZHlDaGF0c1NlbmRlckJveC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGV4dC1tZW51Jyk7XHJcbiAgICAgICAgICAgIGJvZHlDaGF0c1NlbmRlckJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpID09PSAn0JjQt9C80LXQvdC40YLRjCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS3QmNC30LzQtdC90LjRgtGMJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkgPT09ICfQo9C00LDQu9C40YLRjCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS3Qo9C00LDQu9C40YLRjCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VEZWxldGlvbihzZWxmLndzLGRhdGVNZXNzYWdlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q2hhdHNTZW5kZXJCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGV4dG1lbnVOZXcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vYm9keUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYm9keUNoYXRzU2VuZGVyQm94Lm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmQoYm9keUNoYXRzU2VuZGVyQm94KTtcclxuXHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdGD0LbQvdC+INC70Lgg0L/RgNC+0LrRgNGD0YfQuNCy0LDRgtGMINCy0L3QuNC3XHJcbiAgICAgICAgaWYgKGJvZHlDb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gYm9keUNvbnRhaW5lci5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgYm9keUNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGJvZHlDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gYm9keUNvbnRhaW5lci5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v0J/QvtGP0LLQu9C10L3QuNGPINGB0L7QvtCx0YnQtdC90LjRjyDQv9GA0LjRgdC70LDQvdC90L7Qs9C+INC80L3QtSFcclxuICAgIGludGVybG9jdXRvck5ld01lc3NhZ2UoZGF0ZU1lc3NhZ2Upe1xyXG5cclxuICAgICAgICAvL2xldCBpc05ld01lc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IG5vbmVNZXNzYWdlID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubm9uZS1tZXNzYWdlJyk7XHJcbiAgICAgICAgaWYobm9uZU1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gIHRoaXMuZm9ybWF0ZURhdGUoZGF0ZU1lc3NhZ2UuZGF0ZXRpbWUpO1xyXG4gICAgICAgIGNvbnN0IGlzTmV3TWVzc2FnZSA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvZHlfX2NoYXRzLW5vdC1yZWFkJyk7XHJcbiAgICAgICAgaWYoIWlzTmV3TWVzc2FnZSl7XHJcbiAgICAgICAgICAgIGlmKCFkYXRlTWVzc2FnZS5zdGF0dXMuaXNSZWFkZWQpe1xyXG4gICAgICAgICAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJib2R5X19jaGF0cyBib2R5X19jaGF0cy1ub3QtcmVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0L7QstGL0LUg0YHQvtC+0LHRidC10L3QuNGPPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL9C20LTQtdC8INC60LvQuNC60LAg0LTQu9GPINGB0LzQtdC90Ysg0YHRgtCw0YLRg9GB0LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Cb3ggPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90UmVhZEJveCA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvZHlfX2NoYXRzLW5vdC1yZWFkJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHBhcmVudEVsZW1lbnQgPSBub3RSZWFkQm94LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lcldoZWVsID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VTdGF0dXNNYWluRnVuID0gdGhpcy5jaGFuZ2VTdGF0dXNNYWluO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbldzID0gdGhpcy53cztcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucyAhPT0gJ2J0bicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdGF0dXNNYWluRnVuKG1haW5Xcyk7IC8vINC80LXQvdGP0LXQvCDRgdGC0LDRgtGD0YHRiyDQvdCwINC80L7QtdC5INGB0YLRgNCw0L3QuNGH0LrQtVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtYWluQm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyV2hlZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWFpbkJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyV2hlZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGNoYW5nZVN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudCA9IHRoaXMuQm9keUNsYXNzLmNyZWF0ZUNoYXRzUmVjaXBlbnQoZGF0ZU1lc3NhZ2UudGV4dCxkYXRlLHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyLGRhdGVNZXNzYWdlLmlkKTtcclxuICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCArPSBib2R5Q2hhdHNSZWNpcGVudC5nZXRFbGVtZW50KCkub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICBpZihpc05ld01lc3NhZ2Upe1xyXG4gICAgICAgICAgICAvL9Cf0YDQvtC60YDRg9GC0LrQsCDQtNC+INC90LXQv9GA0L7Rh9C40YLQsNC90L7Qs9C+INGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgICAgIGNvbnN0IG5vdFJlYWQgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jaGF0cy1ub3QtcmVhZCcpO1xyXG4gICAgICAgICAgIG5vdFJlYWQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdGD0LbQvdC+INC70Lgg0L/RgNC+0LrRgNGD0YfQuNCy0LDRgtGMINCy0L3QuNC3XHJcbiAgICAgICAgICAgIGlmIChib2R5Q29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGJvZHlDb250YWluZXIuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGJvZHlDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gYm9keUNvbnRhaW5lci5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0ZURhdGUodGltZXN0YW1wKXtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0uJHttb250aH0uJHt5ZWFyfSwgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNZXNzYWdlTGlzdChtZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlLnBheWxvYWQubWVzc2FnZXM7XHJcblxyXG4gICAgICAgIGlmKG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJub25lLW1lc3NhZ2VcIj7QndCw0L/QuNGI0LjRgtC1INCy0LDRiNC1INC/0LXRgNCy0L7QtSDRgdC+0L7QsdGJ0LXQvdC40LUuLi48L2Rpdj5gO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgbGV0IGlzTmV3TWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXRlVXNlci5zZW5kVXNlciA9PT0gaXRlbS5mcm9tKXtcclxuICAgICAgICAgICAgICAgICAgICAvL9C+0YLQv9GA0LDQstC70LXQvdC90YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0LzQvdC+0LksINC/0L7Rj9Cy0LjRgtGB0Y8g0YMg0YHQvtCx0LXRgdC10LTQvdC40LrQsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJsb2N1dG9yTmV3TWVzc2FnZShpdGVtLGlzTmV3TWVzc2FnZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLy8v0L7RgtC/0YDQsNCy0LvQtdC90L3Ri9C1INGB0L7QvtCx0YnQtdC90LjRjyDQvNC90LVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5OZXdNZXNzYWdlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/QvtCx0L3QvtCy0LvQtdC90LjQtSDQvdC10L/RgNC+0YfQuNGC0LDQvdC90YvRhSDRgdC+0L7QsdGJ0LXQvdC40LlcclxuICAgIHVwZGF0ZU1lc3NhZ2VOdW1iZXIodXNlclNlbmRlcil7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJzID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgY29uc3QgbmFtZVVzZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKG5hbWVVc2VyID09PSB1c2VyU2VuZGVyKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJNZXNzYWdlTnVtYmVyID0gIGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX21lc3NhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyTWVzc2FnZU51bWJlcklzU3BhbiA9IHNpZGViYXJNZXNzYWdlTnVtYmVyLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIGlmKHNpZGViYXJNZXNzYWdlTnVtYmVySXNTcGFuKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyTWVzc2FnZU51bWJlclNwYW4gPSBzaWRlYmFyTWVzc2FnZU51bWJlci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck1lc3NhZ2VOdW1iZXJTcGFuLnRleHRDb250ZW50ID0gU3RyaW5nKE51bWJlcihzaWRlYmFyTWVzc2FnZU51bWJlclNwYW4udGV4dENvbnRlbnQpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXJNZXNzYWdlTnVtYmVyLmlubmVySFRNTCA9ICc8c3Bhbj4xPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXR1c01haW4od3Mpe1xyXG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3Qgbm90UmVhZCA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvZHlfX2NoYXRzLW5vdC1yZWFkJyk7XHJcblxyXG4gICAgICAgIC8vc2VuZFVzZXJcclxuXHJcbiAgICAgICAgaWYobm90UmVhZCl7XHJcbiAgICAgICAgICAgIC8v0YPQtNCw0LvQuNGC0Ywg0L7Qv9C+0LLQtdGJ0LXQvdC40LUg0YMg0L3Rg9C20L3QvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHNpZGViYXJVc2Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhck1lc3NhZ2VOdW1iZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19tZXNzYWdlLW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXJNZXNzYWdlTnVtYmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYobm90UmVhZCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHNBZnRlclJlZmVyZW5jZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRFbGVtZW50ID0gbm90UmVhZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c0FmdGVyUmVmZXJlbmNlLnB1c2gobmV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbGVtZW50ID0gbmV4dEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNBZnRlclJlZmVyZW5jZS5mb3JFYWNoKGVsID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VSZWFkU3RhdHVzQ2hhbmdlKHdzLGVsLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgYm9keWNoYXRzUmVjaXBlbnRzID0gIGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmJvZHlfX2NoYXRzLXJlY2lwZW50Jyk7XHJcbiAgICAgICAgICAgIC8vIGJvZHljaGF0c1JlY2lwZW50cy5mb3JFYWNoKCByZWNpcGVudHMgPT57XHJcbiAgICAgICAgICAgIC8vICAgICBtZXNzYWdlUmVhZFN0YXR1c0NoYW5nZSh3cyxyZWNpcGVudHMuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICBub3RSZWFkLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQv9C+0LrQsNC30YvQstCw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdC+0L7QsdGJ0LXQvdC40Y8sINC60L7RgtC+0YDRi9C1INC90LUg0L/RgNC+0YfQuNGC0LDQvdGLXHJcbiAgICB1cGRhdGVTaWRlYmFyTWVzc2FnZU51bWJlcihoaXN0b3J5V2l0aFVzZXIpe1xyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeVdpdGhVc2VyLnBheWxvYWQubWVzc2FnZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gSlNPTi5wYXJzZSh1c2VyT2JqZWN0KS5sb2dpbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlclVzZXIgPSAodGhpcy5zdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyLmlkKS5yZXBsYWNlKFwiaGlzdG9yeVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJOYW1lVGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItbmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihzaWRlYmFyVXNlck5hbWVUZXh0ID09PSBjdXJyZXJVc2VyKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnROb3RSZWFkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5V2l0aFVzZXIucGF5bG9hZC5tZXNzYWdlcy5mb3JFYWNoKGVsID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbC50byA9PT0gdXNlck5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWwuc3RhdHVzLmlzUmVhZGVkID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnROb3RSZWFkICs9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50Tm90UmVhZCAhPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhck1lc3NhZ2VOdW1iZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19tZXNzYWdlLW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyTWVzc2FnZU51bWJlci5pbm5lckhUTUwgPSBgPHNwYW4+JHtjb3VudE5vdFJlYWR9PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGludGVybG9jdXRvclN0YXR1c01lc3NhZ2UoZGF0YSl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIGNvbnN0IGlzUmVhZGVkID0gZGF0YS5zdGF0dXMuaXNSZWFkZWQ7XHJcblxyXG4gICAgICAgIGlmKGlzUmVhZGVkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlciA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmJvZHlfX2NoYXRzLXNlbmRlcicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBib2R5Q2hhdHNTZW5kZXIuZm9yRWFjaChlbCA9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihlbC5kYXRhc2V0LmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlNZXNzYWdlU2VuZGVyU3RhdHVzID0gZWwucXVlcnlTZWxlY3RvcignLmJvZHlfX21lc3NhZ2VTZW5kZXItc3RhdHVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlNZXNzYWdlU2VuZGVyU3RhdHVzLnRleHRDb250ZW50ID0gJ9C/0YDQvtGH0LjRgtCw0L3Qvic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVNZXNzYWdlKGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gZGF0YS5pZDtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWFpbmlkJyxpZClcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudCA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmJvZHlfX2NoYXRzLXJlY2lwZW50Jyk7XHJcbiAgICAgICAgICAgIGJvZHlDaGF0c1JlY2lwZW50LmZvckVhY2goZWwgPT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWwuZGF0YXNldC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQvdCw0LnQtNC10L0nKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi9jb21tb24vdmlldyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcic7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ25vdC1mb3V1bmRfX2NvbnRhaW5lciddfSk7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnbm90LWZvdXVuZF9faW5mbyddLCB0ZXh0Q29udGVudDogJzQwNCBOb3QgRm91bmQnfSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChpbmZvKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5hcHAuYXBwZW5kKGNvbnRhaW5lci5nZXRFbGVtZW50KCkpO1xyXG4gICAgfVxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItc3ByZWFkICovXG5pbXBvcnQge1RBUkdFVCwgVU5TVUJTQ1JJQkUsIFBBVEhfU0VQQVJBVE9SfSBmcm9tICcuL2xpYi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHMsIGlzQnVpbHRpbldpdGhvdXRNdXRhYmxlTWV0aG9kc30gZnJvbSAnLi9saWIvaXMtYnVpbHRpbi5qcyc7XG5pbXBvcnQgcGF0aCBmcm9tICcuL2xpYi9wYXRoLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vbGliL2lzLWFycmF5LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2xpYi9pcy1zeW1ib2wuanMnO1xuaW1wb3J0IGlzSXRlcmF0b3IgZnJvbSAnLi9saWIvaXMtaXRlcmF0b3IuanMnO1xuaW1wb3J0IHdyYXBJdGVyYXRvciBmcm9tICcuL2xpYi93cmFwLWl0ZXJhdG9yLmpzJztcbmltcG9ydCBpZ25vcmVQcm9wZXJ0eSBmcm9tICcuL2xpYi9pZ25vcmUtcHJvcGVydHkuanMnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vbGliL2NhY2hlLmpzJztcbmltcG9ydCBTbWFydENsb25lIGZyb20gJy4vbGliL3NtYXJ0LWNsb25lL3NtYXJ0LWNsb25lLmpzJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVxdWFsczogT2JqZWN0LmlzLFxuXHRpc1NoYWxsb3c6IGZhbHNlLFxuXHRwYXRoQXNBcnJheTogZmFsc2UsXG5cdGlnbm9yZVN5bWJvbHM6IGZhbHNlLFxuXHRpZ25vcmVVbmRlcnNjb3JlczogZmFsc2UsXG5cdGlnbm9yZURldGFjaGVkOiBmYWxzZSxcblx0ZGV0YWlsczogZmFsc2UsXG59O1xuXG5jb25zdCBvbkNoYW5nZSA9IChvYmplY3QsIG9uQ2hhbmdlLCBvcHRpb25zID0ge30pID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHQuLi5kZWZhdWx0T3B0aW9ucyxcblx0XHQuLi5vcHRpb25zLFxuXHR9O1xuXG5cdGNvbnN0IHByb3h5VGFyZ2V0ID0gU3ltYm9sKCdQcm94eVRhcmdldCcpO1xuXHRjb25zdCB7ZXF1YWxzLCBpc1NoYWxsb3csIGlnbm9yZURldGFjaGVkLCBkZXRhaWxzfSA9IG9wdGlvbnM7XG5cdGNvbnN0IGNhY2hlID0gbmV3IENhY2hlKGVxdWFscyk7XG5cdGNvbnN0IGhhc09uVmFsaWRhdGUgPSB0eXBlb2Ygb3B0aW9ucy5vblZhbGlkYXRlID09PSAnZnVuY3Rpb24nO1xuXHRjb25zdCBzbWFydENsb25lID0gbmV3IFNtYXJ0Q2xvbmUoaGFzT25WYWxpZGF0ZSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0Y29uc3QgdmFsaWRhdGUgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzLCBhcHBseURhdGEpID0+ICFoYXNPblZhbGlkYXRlXG5cdFx0fHwgc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHR8fCBvcHRpb25zLm9uVmFsaWRhdGUocGF0aC5jb25jYXQoY2FjaGUuZ2V0UGF0aCh0YXJnZXQpLCBwcm9wZXJ0eSksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKSA9PT0gdHJ1ZTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2VPblRhcmdldCA9ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQhaWdub3JlUHJvcGVydHkoY2FjaGUsIG9wdGlvbnMsIHByb3BlcnR5KVxuXHRcdFx0JiYgIShpZ25vcmVEZXRhY2hlZCAmJiBjYWNoZS5pc0RldGFjaGVkKHRhcmdldCwgb2JqZWN0KSlcblx0XHQpIHtcblx0XHRcdGhhbmRsZUNoYW5nZShjYWNoZS5nZXRQYXRoKHRhcmdldCksIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoY2hhbmdlUGF0aCwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKSA9PiB7XG5cdFx0aWYgKHNtYXJ0Q2xvbmUuaXNDbG9uaW5nICYmIHNtYXJ0Q2xvbmUuaXNQYXJ0T2ZDbG9uZShjaGFuZ2VQYXRoKSkge1xuXHRcdFx0c21hcnRDbG9uZS51cGRhdGUoY2hhbmdlUGF0aCwgcHJvcGVydHksIHByZXZpb3VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b25DaGFuZ2UocGF0aC5jb25jYXQoY2hhbmdlUGF0aCwgcHJvcGVydHkpLCB2YWx1ZSwgcHJldmlvdXMsIGFwcGx5RGF0YSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGdldFByb3h5VGFyZ2V0ID0gdmFsdWUgPT4gdmFsdWVcblx0XHQ/ICh2YWx1ZVtwcm94eVRhcmdldF0gPz8gdmFsdWUpXG5cdFx0OiB2YWx1ZTtcblxuXHRjb25zdCBwcmVwYXJlVmFsdWUgPSAodmFsdWUsIHRhcmdldCwgcHJvcGVydHksIGJhc2VQYXRoKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0aXNCdWlsdGluV2l0aG91dE11dGFibGVNZXRob2RzKHZhbHVlKVxuXHRcdFx0fHwgcHJvcGVydHkgPT09ICdjb25zdHJ1Y3Rvcidcblx0XHRcdHx8IChpc1NoYWxsb3cgJiYgIVNtYXJ0Q2xvbmUuaXNIYW5kbGVkTWV0aG9kKHRhcmdldCwgcHJvcGVydHkpKVxuXHRcdFx0fHwgaWdub3JlUHJvcGVydHkoY2FjaGUsIG9wdGlvbnMsIHByb3BlcnR5KVxuXHRcdFx0fHwgY2FjaGUuaXNHZXRJbnZhcmlhbnQodGFyZ2V0LCBwcm9wZXJ0eSlcblx0XHRcdHx8IChpZ25vcmVEZXRhY2hlZCAmJiBjYWNoZS5pc0RldGFjaGVkKHRhcmdldCwgb2JqZWN0KSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoYmFzZVBhdGggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YmFzZVBhdGggPSBjYWNoZS5nZXRQYXRoKHRhcmdldCk7XG5cdFx0fVxuXG5cdFx0LypcbiAgXHRcdENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLlxuXG4gIFx0XHRJZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgYSBjb3JyZXNwb25kaW5nIHBhdGgvcHJveHksXG5cdFx0YW5kIGlmIHRoZSBwYXRoIGNvcnJlc3BvbmRzIHRvIG9uZSBvZiB0aGUgcGFyZW50cyxcblx0XHR0aGVuIHdlIGFyZSBvbiBhIGNpcmN1bGFyIGNhc2UsIHdoZXJlIHRoZSBjaGlsZCBpcyBwb2ludGluZyB0byB0aGVpciBwYXJlbnQuXG5cdFx0SW4gdGhpcyBjYXNlIHdlIHJldHVybiB0aGUgcHJveHkgb2JqZWN0IHdpdGggdGhlIHNob3J0ZXN0IHBhdGguXG4gIFx0XHQqL1xuXHRcdGNvbnN0IGNoaWxkUGF0aCA9IHBhdGguY29uY2F0KGJhc2VQYXRoLCBwcm9wZXJ0eSk7XG5cdFx0Y29uc3QgZXhpc3RpbmdQYXRoID0gY2FjaGUuZ2V0UGF0aCh2YWx1ZSk7XG5cblx0XHRpZiAoZXhpc3RpbmdQYXRoICYmIGlzU2FtZU9iamVjdFRyZWUoY2hpbGRQYXRoLCBleGlzdGluZ1BhdGgpKSB7XG5cdFx0XHQvLyBXZSBhcmUgb24gdGhlIHNhbWUgb2JqZWN0IHRyZWUgYnV0IGRlZXBlciwgc28gd2UgdXNlIHRoZSBwYXJlbnQgcGF0aC5cblx0XHRcdHJldHVybiBjYWNoZS5nZXRQcm94eSh2YWx1ZSwgZXhpc3RpbmdQYXRoLCBoYW5kbGVyLCBwcm94eVRhcmdldCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhY2hlLmdldFByb3h5KHZhbHVlLCBjaGlsZFBhdGgsIGhhbmRsZXIsIHByb3h5VGFyZ2V0KTtcblx0fTtcblxuXHQvKlxuXHRSZXR1cm5zIHRydWUgaWYgYGNoaWxkUGF0aGAgaXMgYSBzdWJwYXRoIG9mIGBleGlzdGluZ1BhdGhgXG5cdChpZiBjaGlsZFBhdGggc3RhcnRzIHdpdGggZXhpc3RpbmdQYXRoKS4gT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGZhbHNlLlxuXG4gXHRJdCBhbHNvIHJldHVybnMgZmFsc2UgaWYgdGhlIDIgcGF0aHMgYXJlIGlkZW50aWNhbC5cblxuIFx0Rm9yIGV4YW1wbGU6XG5cdC0gY2hpbGRQYXRoICAgID0gZ3JvdXAubGF5ZXJzLjAucGFyZW50LmxheWVycy4wLnZhbHVlXG5cdC0gZXhpc3RpbmdQYXRoID0gZ3JvdXAubGF5ZXJzLjAucGFyZW50XG5cdCovXG5cdGNvbnN0IGlzU2FtZU9iamVjdFRyZWUgPSAoY2hpbGRQYXRoLCBleGlzdGluZ1BhdGgpID0+IHtcblx0XHRpZiAoaXNTeW1ib2woY2hpbGRQYXRoKSB8fCBjaGlsZFBhdGgubGVuZ3RoIDw9IGV4aXN0aW5nUGF0aC5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoaXNBcnJheShleGlzdGluZ1BhdGgpICYmIGV4aXN0aW5nUGF0aC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZFBhcnRzID0gaXNBcnJheShjaGlsZFBhdGgpID8gY2hpbGRQYXRoIDogY2hpbGRQYXRoLnNwbGl0KFBBVEhfU0VQQVJBVE9SKTtcblx0XHRjb25zdCBleGlzdGluZ1BhcnRzID0gaXNBcnJheShleGlzdGluZ1BhdGgpID8gZXhpc3RpbmdQYXRoIDogZXhpc3RpbmdQYXRoLnNwbGl0KFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdGlmIChjaGlsZFBhcnRzLmxlbmd0aCA8PSBleGlzdGluZ1BhcnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhKGV4aXN0aW5nUGFydHMuc29tZSgocGFydCwgaW5kZXgpID0+IHBhcnQgIT09IGNoaWxkUGFydHNbaW5kZXhdKSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlciA9IHtcblx0XHRnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcblx0XHRcdGlmIChpc1N5bWJvbChwcm9wZXJ0eSkpIHtcblx0XHRcdFx0aWYgKHByb3BlcnR5ID09PSBwcm94eVRhcmdldCB8fCBwcm9wZXJ0eSA9PT0gVEFSR0VUKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRwcm9wZXJ0eSA9PT0gVU5TVUJTQ1JJQkVcblx0XHRcdFx0XHQmJiAhY2FjaGUuaXNVbnN1YnNjcmliZWRcblx0XHRcdFx0XHQmJiBjYWNoZS5nZXRQYXRoKHRhcmdldCkubGVuZ3RoID09PSAwXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNhY2hlLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kcyh0YXJnZXQpXG5cdFx0XHRcdD8gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eSlcblx0XHRcdFx0OiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcik7XG5cblx0XHRcdHJldHVybiBwcmVwYXJlVmFsdWUodmFsdWUsIHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdH0sXG5cblx0XHRzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG5cdFx0XHR2YWx1ZSA9IGdldFByb3h5VGFyZ2V0KHZhbHVlKTtcblxuXHRcdFx0Y29uc3QgcmVmbGVjdFRhcmdldCA9IHRhcmdldFtwcm94eVRhcmdldF0gPz8gdGFyZ2V0O1xuXHRcdFx0Y29uc3QgcHJldmlvdXMgPSByZWZsZWN0VGFyZ2V0W3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKGVxdWFscyhwcmV2aW91cywgdmFsdWUpICYmIHByb3BlcnR5IGluIHRhcmdldCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cyk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0aXNWYWxpZFxuXHRcdFx0XHQmJiBjYWNoZS5zZXRQcm9wZXJ0eShyZWZsZWN0VGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBwcmV2aW91cylcblx0XHRcdCkge1xuXHRcdFx0XHRoYW5kbGVDaGFuZ2VPblRhcmdldCh0YXJnZXQsIHByb3BlcnR5LCB0YXJnZXRbcHJvcGVydHldLCBwcmV2aW91cyk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAhaXNWYWxpZDtcblx0XHR9LFxuXG5cdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuXHRcdFx0aWYgKCFjYWNoZS5pc1NhbWVEZXNjcmlwdG9yKGRlc2NyaXB0b3IsIHRhcmdldCwgcHJvcGVydHkpKSB7XG5cdFx0XHRcdGNvbnN0IHByZXZpb3VzID0gdGFyZ2V0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsaWRhdGUodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvci52YWx1ZSwgcHJldmlvdXMpXG5cdFx0XHRcdFx0JiYgY2FjaGUuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvciwgcHJldmlvdXMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGhhbmRsZUNoYW5nZU9uVGFyZ2V0KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IudmFsdWUsIHByZXZpb3VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0ZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdFx0aWYgKCFSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcHJldmlvdXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5KTtcblx0XHRcdGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZSh0YXJnZXQsIHByb3BlcnR5LCB1bmRlZmluZWQsIHByZXZpb3VzKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpc1ZhbGlkXG5cdFx0XHRcdCYmIGNhY2hlLmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHByZXZpb3VzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGhhbmRsZUNoYW5nZU9uVGFyZ2V0KHRhcmdldCwgcHJvcGVydHksIHVuZGVmaW5lZCwgcHJldmlvdXMpO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gIWlzVmFsaWQ7XG5cdFx0fSxcblxuXHRcdGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJndW1lbnRzTGlzdCkge1xuXHRcdFx0Y29uc3QgdGhpc1Byb3h5VGFyZ2V0ID0gdGhpc0FyZ1twcm94eVRhcmdldF0gPz8gdGhpc0FyZztcblxuXHRcdFx0aWYgKGNhY2hlLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc1Byb3h5VGFyZ2V0LCBhcmd1bWVudHNMaXN0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQoZGV0YWlscyA9PT0gZmFsc2Vcblx0XHRcdFx0XHR8fCAoZGV0YWlscyAhPT0gdHJ1ZSAmJiAhZGV0YWlscy5pbmNsdWRlcyh0YXJnZXQubmFtZSkpKVxuXHRcdFx0XHQmJiBTbWFydENsb25lLmlzSGFuZGxlZFR5cGUodGhpc1Byb3h5VGFyZ2V0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxldCBhcHBseVBhdGggPSBwYXRoLmluaXRpYWwoY2FjaGUuZ2V0UGF0aCh0YXJnZXQpKTtcblx0XHRcdFx0Y29uc3QgaXNIYW5kbGVkTWV0aG9kID0gU21hcnRDbG9uZS5pc0hhbmRsZWRNZXRob2QodGhpc1Byb3h5VGFyZ2V0LCB0YXJnZXQubmFtZSk7XG5cblx0XHRcdFx0c21hcnRDbG9uZS5zdGFydCh0aGlzUHJveHlUYXJnZXQsIGFwcGx5UGF0aCwgYXJndW1lbnRzTGlzdCk7XG5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkoXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdHNtYXJ0Q2xvbmUucHJlZmVycmVkVGhpc0FyZyh0YXJnZXQsIHRoaXNBcmcsIHRoaXNQcm94eVRhcmdldCksXG5cdFx0XHRcdFx0aXNIYW5kbGVkTWV0aG9kXG5cdFx0XHRcdFx0XHQ/IGFyZ3VtZW50c0xpc3QubWFwKGFyZ3VtZW50ID0+IGdldFByb3h5VGFyZ2V0KGFyZ3VtZW50KSlcblx0XHRcdFx0XHRcdDogYXJndW1lbnRzTGlzdCxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCBpc0NoYW5nZWQgPSBzbWFydENsb25lLmlzQ2hhbmdlZCh0aGlzUHJveHlUYXJnZXQsIGVxdWFscyk7XG5cdFx0XHRcdGNvbnN0IHByZXZpb3VzID0gc21hcnRDbG9uZS5zdG9wKCk7XG5cblx0XHRcdFx0aWYgKFNtYXJ0Q2xvbmUuaXNIYW5kbGVkVHlwZShyZXN1bHQpICYmIGlzSGFuZGxlZE1ldGhvZCkge1xuXHRcdFx0XHRcdGlmICh0aGlzQXJnIGluc3RhbmNlb2YgTWFwICYmIHRhcmdldC5uYW1lID09PSAnZ2V0Jykge1xuXHRcdFx0XHRcdFx0YXBwbHlQYXRoID0gcGF0aC5jb25jYXQoYXBwbHlQYXRoLCBhcmd1bWVudHNMaXN0WzBdKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXN1bHQgPSBjYWNoZS5nZXRQcm94eShyZXN1bHQsIGFwcGx5UGF0aCwgaGFuZGxlcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0Y29uc3QgYXBwbHlEYXRhID0ge1xuXHRcdFx0XHRcdFx0bmFtZTogdGFyZ2V0Lm5hbWUsXG5cdFx0XHRcdFx0XHRhcmdzOiBhcmd1bWVudHNMaXN0LFxuXHRcdFx0XHRcdFx0cmVzdWx0LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc3QgY2hhbmdlUGF0aCA9IHNtYXJ0Q2xvbmUuaXNDbG9uaW5nXG5cdFx0XHRcdFx0XHQ/IHBhdGguaW5pdGlhbChhcHBseVBhdGgpXG5cdFx0XHRcdFx0XHQ6IGFwcGx5UGF0aDtcblx0XHRcdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHNtYXJ0Q2xvbmUuaXNDbG9uaW5nXG5cdFx0XHRcdFx0XHQ/IHBhdGgubGFzdChhcHBseVBhdGgpXG5cdFx0XHRcdFx0XHQ6ICcnO1xuXG5cdFx0XHRcdFx0aWYgKHZhbGlkYXRlKHBhdGguZ2V0KG9iamVjdCwgY2hhbmdlUGF0aCksIHByb3BlcnR5LCB0aGlzUHJveHlUYXJnZXQsIHByZXZpb3VzLCBhcHBseURhdGEpKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2UoY2hhbmdlUGF0aCwgcHJvcGVydHksIHRoaXNQcm94eVRhcmdldCwgcHJldmlvdXMsIGFwcGx5RGF0YSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNtYXJ0Q2xvbmUudW5kbyh0aGlzUHJveHlUYXJnZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQodGhpc0FyZyBpbnN0YW5jZW9mIE1hcCB8fCB0aGlzQXJnIGluc3RhbmNlb2YgU2V0KVxuXHRcdFx0XHRcdCYmIGlzSXRlcmF0b3IocmVzdWx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3JhcEl0ZXJhdG9yKHJlc3VsdCwgdGFyZ2V0LCB0aGlzQXJnLCBhcHBseVBhdGgsIHByZXBhcmVWYWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpO1xuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgcHJveHkgPSBjYWNoZS5nZXRQcm94eShvYmplY3QsIG9wdGlvbnMucGF0aEFzQXJyYXkgPyBbXSA6ICcnLCBoYW5kbGVyKTtcblx0b25DaGFuZ2UgPSBvbkNoYW5nZS5iaW5kKHByb3h5KTtcblxuXHRpZiAoaGFzT25WYWxpZGF0ZSkge1xuXHRcdG9wdGlvbnMub25WYWxpZGF0ZSA9IG9wdGlvbnMub25WYWxpZGF0ZS5iaW5kKHByb3h5KTtcblx0fVxuXG5cdHJldHVybiBwcm94eTtcbn07XG5cbm9uQ2hhbmdlLnRhcmdldCA9IHByb3h5ID0+IHByb3h5Py5bVEFSR0VUXSA/PyBwcm94eTtcbm9uQ2hhbmdlLnVuc3Vic2NyaWJlID0gcHJveHkgPT4gcHJveHk/LltVTlNVQlNDUklCRV0gPz8gcHJveHk7XG5cbmV4cG9ydCBkZWZhdWx0IG9uQ2hhbmdlO1xuIiwiaW1wb3J0IHBhdGggZnJvbSAnLi9wYXRoLmpzJztcblxuLyoqXG5AY2xhc3MgQ2FjaGVcbkBwcml2YXRlXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjaGUge1xuXHRjb25zdHJ1Y3RvcihlcXVhbHMpIHtcblx0XHR0aGlzLl9lcXVhbHMgPSBlcXVhbHM7XG5cdFx0dGhpcy5fcHJveHlDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cdFx0dGhpcy5fcGF0aENhY2hlID0gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cdH1cblxuXHRfZ2V0RGVzY3JpcHRvckNhY2hlKCkge1xuXHRcdGlmICh0aGlzLl9kZXNjcmlwdG9yQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fZGVzY3JpcHRvckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fZGVzY3JpcHRvckNhY2hlO1xuXHR9XG5cblx0X2dldFByb3BlcnRpZXModGFyZ2V0KSB7XG5cdFx0Y29uc3QgZGVzY3JpcHRvckNhY2hlID0gdGhpcy5fZ2V0RGVzY3JpcHRvckNhY2hlKCk7XG5cdFx0bGV0IHByb3BlcnRpZXMgPSBkZXNjcmlwdG9yQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRwcm9wZXJ0aWVzID0ge307XG5cdFx0XHRkZXNjcmlwdG9yQ2FjaGUuc2V0KHRhcmdldCwgcHJvcGVydGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BlcnRpZXM7XG5cdH1cblxuXHRfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLl9nZXRQcm9wZXJ0aWVzKHRhcmdldCk7XG5cdFx0bGV0IGRlc2NyaXB0b3IgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcblxuXHRcdGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblx0XHRcdHByb3BlcnRpZXNbcHJvcGVydHldID0gZGVzY3JpcHRvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVzY3JpcHRvcjtcblx0fVxuXG5cdGdldFByb3h5KHRhcmdldCwgcGF0aCwgaGFuZGxlciwgcHJveHlUYXJnZXQpIHtcblx0XHRpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cblx0XHRjb25zdCByZWZsZWN0VGFyZ2V0ID0gdGFyZ2V0W3Byb3h5VGFyZ2V0XTtcblx0XHRjb25zdCBzb3VyY2UgPSByZWZsZWN0VGFyZ2V0ID8/IHRhcmdldDtcblxuXHRcdHRoaXMuX3BhdGhDYWNoZS5zZXQoc291cmNlLCBwYXRoKTtcblxuXHRcdGxldCBwcm94eSA9IHRoaXMuX3Byb3h5Q2FjaGUuZ2V0KHNvdXJjZSk7XG5cblx0XHRpZiAocHJveHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cHJveHkgPSByZWZsZWN0VGFyZ2V0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKVxuXHRcdFx0XHQ6IHRhcmdldDtcblxuXHRcdFx0dGhpcy5fcHJveHlDYWNoZS5zZXQoc291cmNlLCBwcm94eSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3h5O1xuXHR9XG5cblx0Z2V0UGF0aCh0YXJnZXQpIHtcblx0XHRyZXR1cm4gdGhpcy5pc1Vuc3Vic2NyaWJlZCA/IHVuZGVmaW5lZCA6IHRoaXMuX3BhdGhDYWNoZS5nZXQodGFyZ2V0KTtcblx0fVxuXG5cdGlzRGV0YWNoZWQodGFyZ2V0LCBvYmplY3QpIHtcblx0XHRyZXR1cm4gIU9iamVjdC5pcyh0YXJnZXQsIHBhdGguZ2V0KG9iamVjdCwgdGhpcy5nZXRQYXRoKHRhcmdldCkpKTtcblx0fVxuXG5cdGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcblx0XHRpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdHRoaXMuX2dldFByb3BlcnRpZXModGFyZ2V0KVtwcm9wZXJ0eV0gPSBkZXNjcmlwdG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBwcmV2aW91cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1wYXJhbXNcblx0XHRpZiAoIXRoaXMuX2VxdWFscyhwcmV2aW91cywgdmFsdWUpIHx8ICEocHJvcGVydHkgaW4gdGFyZ2V0KSkge1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2dldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCAmJiAnc2V0JyBpbiBkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0ZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgcHJldmlvdXMpIHtcblx0XHRpZiAoUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLl9nZXREZXNjcmlwdG9yQ2FjaGUoKS5nZXQodGFyZ2V0KTtcblxuXHRcdFx0XHRpZiAocHJvcGVydGllcykge1xuXHRcdFx0XHRcdGRlbGV0ZSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcblx0XHRcdFx0XHR0aGlzLl9wYXRoQ2FjaGUuZGVsZXRlKHByZXZpb3VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpc1NhbWVEZXNjcmlwdG9yKGEsIHRhcmdldCwgcHJvcGVydHkpIHtcblx0XHRjb25zdCBiID0gdGhpcy5fZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXG5cdFx0cmV0dXJuIGEgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgYiAhPT0gdW5kZWZpbmVkXG5cdFx0XHQmJiBPYmplY3QuaXMoYS52YWx1ZSwgYi52YWx1ZSlcblx0XHRcdCYmIChhLndyaXRhYmxlIHx8IGZhbHNlKSA9PT0gKGIud3JpdGFibGUgfHwgZmFsc2UpXG5cdFx0XHQmJiAoYS5lbnVtZXJhYmxlIHx8IGZhbHNlKSA9PT0gKGIuZW51bWVyYWJsZSB8fCBmYWxzZSlcblx0XHRcdCYmIChhLmNvbmZpZ3VyYWJsZSB8fCBmYWxzZSkgPT09IChiLmNvbmZpZ3VyYWJsZSB8fCBmYWxzZSlcblx0XHRcdCYmIGEuZ2V0ID09PSBiLmdldFxuXHRcdFx0JiYgYS5zZXQgPT09IGIuc2V0O1xuXHR9XG5cblx0aXNHZXRJbnZhcmlhbnQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cblx0XHRyZXR1cm4gZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkXG5cdFx0XHQmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gdHJ1ZVxuXHRcdFx0JiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gdHJ1ZTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCkge1xuXHRcdHRoaXMuX2Rlc2NyaXB0b3JDYWNoZSA9IG51bGw7XG5cdFx0dGhpcy5fcGF0aENhY2hlID0gbnVsbDtcblx0XHR0aGlzLl9wcm94eUNhY2hlID0gbnVsbDtcblx0XHR0aGlzLmlzVW5zdWJzY3JpYmVkID0gdHJ1ZTtcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IFBBVEhfU0VQQVJBVE9SID0gJy4nO1xuZXhwb3J0IGNvbnN0IFRBUkdFVCA9IFN5bWJvbCgndGFyZ2V0Jyk7XG5leHBvcnQgY29uc3QgVU5TVUJTQ1JJQkUgPSBTeW1ib2woJ3Vuc3Vic2NyaWJlJyk7XG4iLCJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pcy1zeW1ib2wuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZ25vcmVQcm9wZXJ0eShjYWNoZSwgb3B0aW9ucywgcHJvcGVydHkpIHtcblx0cmV0dXJuIGNhY2hlLmlzVW5zdWJzY3JpYmVkXG5cdFx0fHwgKG9wdGlvbnMuaWdub3JlU3ltYm9scyAmJiBpc1N5bWJvbChwcm9wZXJ0eSkpXG5cdFx0fHwgKG9wdGlvbnMuaWdub3JlVW5kZXJzY29yZXMgJiYgcHJvcGVydHkuY2hhckF0KDApID09PSAnXycpXG5cdFx0fHwgKCdpZ25vcmVLZXlzJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuaWdub3JlS2V5cy5pbmNsdWRlcyhwcm9wZXJ0eSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgQXJyYXkuaXNBcnJheTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHModmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZVxuXHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0XG5cdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBNYXBcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtTZXRcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXBcblx0XHR8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsdGluV2l0aG91dE11dGFibGVNZXRob2RzKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlID09PSBudWxsIDogdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSXRlcmF0b3IodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCc7XG59XG4iLCJpbXBvcnQge1BBVEhfU0VQQVJBVE9SfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzLWFycmF5LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzLXN5bWJvbC5qcyc7XG5cbmNvbnN0IHBhdGggPSB7XG5cdGFmdGVyKHBhdGgsIHN1YlBhdGgpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGguc2xpY2Uoc3ViUGF0aC5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdGlmIChzdWJQYXRoID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGguc2xpY2Uoc3ViUGF0aC5sZW5ndGggKyAxKTtcblx0fSxcblx0Y29uY2F0KHBhdGgsIGtleSkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRwYXRoID0gWy4uLnBhdGhdO1xuXG5cdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdHBhdGgucHVzaChrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRpZiAoa2V5ICYmIGtleS50b1N0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAocGF0aCAhPT0gJycpIHtcblx0XHRcdFx0cGF0aCArPSBQQVRIX1NFUEFSQVRPUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzU3ltYm9sKGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIHBhdGggKyBrZXkudG9TdHJpbmcoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHBhdGggKyBrZXk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGg7XG5cdH0sXG5cdGluaXRpYWwocGF0aCkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aC5zbGljZSgwLCAtMSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhdGggPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoUEFUSF9TRVBBUkFUT1IpO1xuXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoLnNsaWNlKDAsIGluZGV4KTtcblx0fSxcblx0bGFzdChwYXRoKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdHJldHVybiBwYXRoLmF0KC0xKSA/PyAnJztcblx0XHR9XG5cblx0XHRpZiAocGF0aCA9PT0gJycpIHtcblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZihQQVRIX1NFUEFSQVRPUik7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aC5zbGljZShpbmRleCArIDEpO1xuXHR9LFxuXHR3YWxrKHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIHBhdGgpIHtcblx0XHRcdFx0Y2FsbGJhY2soa2V5KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHBhdGggIT09ICcnKSB7XG5cdFx0XHRsZXQgcG9zaXRpb24gPSAwO1xuXHRcdFx0bGV0IGluZGV4ID0gcGF0aC5pbmRleE9mKFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRjYWxsYmFjayhwYXRoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlIChwb3NpdGlvbiA8IHBhdGgubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBwYXRoLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjYWxsYmFjayhwYXRoLnNsaWNlKHBvc2l0aW9uLCBpbmRleCkpO1xuXG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleCArIDE7XG5cdFx0XHRcdFx0aW5kZXggPSBwYXRoLmluZGV4T2YoUEFUSF9TRVBBUkFUT1IsIHBvc2l0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0Z2V0KG9iamVjdCwgcGF0aCkge1xuXHRcdHRoaXMud2FsayhwYXRoLCBrZXkgPT4ge1xuXHRcdFx0aWYgKG9iamVjdCkge1xuXHRcdFx0XHRvYmplY3QgPSBvYmplY3Rba2V5XTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBvYmplY3Q7XG5cdH0sXG5cdGlzU3ViUGF0aChwYXRoLCBzdWJQYXRoKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdGlmIChwYXRoLmxlbmd0aCA8IHN1YlBhdGgubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tZm9yLWxvb3Bcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3ViUGF0aC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocGF0aFtpXSAhPT0gc3ViUGF0aFtpXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAocGF0aC5sZW5ndGggPCBzdWJQYXRoLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoID09PSBzdWJQYXRoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAocGF0aC5zdGFydHNXaXRoKHN1YlBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aFtzdWJQYXRoLmxlbmd0aF0gPT09IFBBVEhfU0VQQVJBVE9SO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0aXNSb290UGF0aChwYXRoKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdHJldHVybiBwYXRoLmxlbmd0aCA9PT0gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aCA9PT0gJyc7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuIiwiaW1wb3J0IHtIQU5ETEVEX0FSUkFZX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvYXJyYXkuanMnO1xuaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVBcnJheSBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIEhBTkRMRURfQVJSQVlfTUVUSE9EUy5oYXMobmFtZSk7XG5cdH1cbn1cbiIsImltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lRGF0ZSBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0dW5kbyhvYmplY3QpIHtcblx0XHRvYmplY3Quc2V0VGltZSh0aGlzLmNsb25lLmdldFRpbWUoKSk7XG5cdH1cblxuXHRpc0NoYW5nZWQodmFsdWUsIGVxdWFscykge1xuXHRcdHJldHVybiAhZXF1YWxzKHRoaXMuY2xvbmUudmFsdWVPZigpLCB2YWx1ZS52YWx1ZU9mKCkpO1xuXHR9XG59XG4iLCJpbXBvcnQge0hBTkRMRURfTUFQX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvbWFwLmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lTWFwIGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRzdGF0aWMgaXNIYW5kbGVkTWV0aG9kKG5hbWUpIHtcblx0XHRyZXR1cm4gSEFORExFRF9NQVBfTUVUSE9EUy5oYXMobmFtZSk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuY2xvbmUuZW50cmllcygpKSB7XG5cdFx0XHRvYmplY3Quc2V0KGtleSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qga2V5IG9mIG9iamVjdC5rZXlzKCkpIHtcblx0XHRcdGlmICghdGhpcy5jbG9uZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRvYmplY3QuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgcGF0aCBmcm9tICcuLi8uLi9wYXRoLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uLy4uL2lzLWFycmF5LmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi8uLi9pcy1vYmplY3QuanMnO1xuaW1wb3J0IHtNVVRBQkxFX0FSUkFZX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvYXJyYXkuanMnO1xuaW1wb3J0IHtNVVRBQkxFX1NFVF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL3NldC5qcyc7XG5pbXBvcnQge01VVEFCTEVfTUFQX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvbWFwLmpzJztcbmltcG9ydCB7SU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL29iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lT2JqZWN0IHtcblx0Y29uc3RydWN0b3IodmFsdWUsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIGhhc09uVmFsaWRhdGUpIHtcblx0XHR0aGlzLl9wYXRoID0gcGF0aDtcblx0XHR0aGlzLl9pc0NoYW5nZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9jbG9uZWRDYWNoZSA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLl9oYXNPblZhbGlkYXRlID0gaGFzT25WYWxpZGF0ZTtcblx0XHR0aGlzLl9jaGFuZ2VzID0gaGFzT25WYWxpZGF0ZSA/IFtdIDogbnVsbDtcblxuXHRcdHRoaXMuY2xvbmUgPSBwYXRoID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMuX3NoYWxsb3dDbG9uZSh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgaXNIYW5kbGVkTWV0aG9kKG5hbWUpIHtcblx0XHRyZXR1cm4gSU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTLmhhcyhuYW1lKTtcblx0fVxuXG5cdF9zaGFsbG93Q2xvbmUodmFsdWUpIHtcblx0XHRsZXQgY2xvbmUgPSB2YWx1ZTtcblxuXHRcdGlmIChpc09iamVjdCh2YWx1ZSkpIHtcblx0XHRcdGNsb25lID0gey4uLnZhbHVlfTtcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpIHx8IEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcblx0XHRcdGNsb25lID0gWy4uLnZhbHVlXTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0Y2xvbmUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xuXHRcdFx0Y2xvbmUgPSBuZXcgU2V0KFsuLi52YWx1ZV0ubWFwKGl0ZW0gPT4gdGhpcy5fc2hhbGxvd0Nsb25lKGl0ZW0pKSk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0Y2xvbmUgPSBuZXcgTWFwKCk7XG5cblx0XHRcdGZvciAoY29uc3QgW2tleSwgaXRlbV0gb2YgdmFsdWUuZW50cmllcygpKSB7XG5cdFx0XHRcdGNsb25lLnNldChrZXksIHRoaXMuX3NoYWxsb3dDbG9uZShpdGVtKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2xvbmVkQ2FjaGUuYWRkKGNsb25lKTtcblxuXHRcdHJldHVybiBjbG9uZTtcblx0fVxuXG5cdHByZWZlcnJlZFRoaXNBcmcoaXNIYW5kbGVkTWV0aG9kLCBuYW1lLCB0aGlzQXJndW1lbnQsIHRoaXNQcm94eVRhcmdldCkge1xuXHRcdGlmIChpc0hhbmRsZWRNZXRob2QpIHtcblx0XHRcdGlmIChpc0FycmF5KHRoaXNQcm94eVRhcmdldCkpIHtcblx0XHRcdFx0dGhpcy5fb25Jc0NoYW5nZWQgPSBNVVRBQkxFX0FSUkFZX01FVEhPRFNbbmFtZV07XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXNQcm94eVRhcmdldCBpbnN0YW5jZW9mIFNldCkge1xuXHRcdFx0XHR0aGlzLl9vbklzQ2hhbmdlZCA9IE1VVEFCTEVfU0VUX01FVEhPRFNbbmFtZV07XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXNQcm94eVRhcmdldCBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0XHR0aGlzLl9vbklzQ2hhbmdlZCA9IE1VVEFCTEVfTUFQX01FVEhPRFNbbmFtZV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzUHJveHlUYXJnZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNBcmd1bWVudDtcblx0fVxuXG5cdHVwZGF0ZShmdWxsUGF0aCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0Y29uc3QgY2hhbmdlUGF0aCA9IHBhdGguYWZ0ZXIoZnVsbFBhdGgsIHRoaXMuX3BhdGgpO1xuXG5cdFx0aWYgKHByb3BlcnR5ICE9PSAnbGVuZ3RoJykge1xuXHRcdFx0bGV0IG9iamVjdCA9IHRoaXMuY2xvbmU7XG5cblx0XHRcdHBhdGgud2FsayhjaGFuZ2VQYXRoLCBrZXkgPT4ge1xuXHRcdFx0XHRpZiAob2JqZWN0Py5ba2V5XSkge1xuXHRcdFx0XHRcdGlmICghdGhpcy5fY2xvbmVkQ2FjaGUuaGFzKG9iamVjdFtrZXldKSkge1xuXHRcdFx0XHRcdFx0b2JqZWN0W2tleV0gPSB0aGlzLl9zaGFsbG93Q2xvbmUob2JqZWN0W2tleV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9iamVjdCA9IG9iamVjdFtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHRoaXMuX2hhc09uVmFsaWRhdGUpIHtcblx0XHRcdFx0dGhpcy5fY2hhbmdlcy5wdXNoKHtcblx0XHRcdFx0XHRwYXRoOiBjaGFuZ2VQYXRoLFxuXHRcdFx0XHRcdHByb3BlcnR5LFxuXHRcdFx0XHRcdHByZXZpb3VzOiB2YWx1ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmplY3Q/Lltwcm9wZXJ0eV0pIHtcblx0XHRcdFx0b2JqZWN0W3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX2lzQ2hhbmdlZCA9IHRydWU7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGxldCBjaGFuZ2U7XG5cblx0XHRmb3IgKGxldCBpbmRleCA9IHRoaXMuX2NoYW5nZXMubGVuZ3RoIC0gMTsgaW5kZXggIT09IC0xOyBpbmRleC0tKSB7XG5cdFx0XHRjaGFuZ2UgPSB0aGlzLl9jaGFuZ2VzW2luZGV4XTtcblxuXHRcdFx0cGF0aC5nZXQob2JqZWN0LCBjaGFuZ2UucGF0aClbY2hhbmdlLnByb3BlcnR5XSA9IGNoYW5nZS5wcmV2aW91cztcblx0XHR9XG5cdH1cblxuXHRpc0NoYW5nZWQodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fb25Jc0NoYW5nZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyB0aGlzLl9pc0NoYW5nZWRcblx0XHRcdDogdGhpcy5fb25Jc0NoYW5nZWQodGhpcy5jbG9uZSwgdmFsdWUpO1xuXHR9XG5cblx0aXNQYXRoQXBwbGljYWJsZShjaGFuZ2VQYXRoKSB7XG5cdFx0cmV0dXJuIHBhdGguaXNSb290UGF0aCh0aGlzLl9wYXRoKSB8fCBwYXRoLmlzU3ViUGF0aChjaGFuZ2VQYXRoLCB0aGlzLl9wYXRoKTtcblx0fVxufVxuIiwiaW1wb3J0IHtIQU5ETEVEX1NFVF9NRVRIT0RTfSBmcm9tICcuLi9tZXRob2RzL3NldC5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZVNldCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0c3RhdGljIGlzSGFuZGxlZE1ldGhvZChuYW1lKSB7XG5cdFx0cmV0dXJuIEhBTkRMRURfU0VUX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuY2xvbmUpIHtcblx0XHRcdG9iamVjdC5hZGQodmFsdWUpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgdmFsdWUgb2Ygb2JqZWN0KSB7XG5cdFx0XHRpZiAoIXRoaXMuY2xvbmUuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRvYmplY3QuZGVsZXRlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lV2Vha01hcCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0Y29uc3RydWN0b3IodmFsdWUsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIGhhc09uVmFsaWRhdGUpIHtcblx0XHRzdXBlcih1bmRlZmluZWQsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIGhhc09uVmFsaWRhdGUpO1xuXG5cdFx0dGhpcy5fd2Vha0tleSA9IGFyZ3VtZW50c0xpc3RbMF07XG5cdFx0dGhpcy5fd2Vha0hhcyA9IHZhbHVlLmhhcyh0aGlzLl93ZWFrS2V5KTtcblx0XHR0aGlzLl93ZWFrVmFsdWUgPSB2YWx1ZS5nZXQodGhpcy5fd2Vha0tleSk7XG5cdH1cblxuXHRpc0NoYW5nZWQodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fd2Vha1ZhbHVlICE9PSB2YWx1ZS5nZXQodGhpcy5fd2Vha0tleSk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGNvbnN0IHdlYWtIYXMgPSBvYmplY3QuaGFzKHRoaXMuX3dlYWtLZXkpO1xuXG5cdFx0aWYgKHRoaXMuX3dlYWtIYXMgJiYgIXdlYWtIYXMpIHtcblx0XHRcdG9iamVjdC5zZXQodGhpcy5fd2Vha0tleSwgdGhpcy5fd2Vha1ZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLl93ZWFrSGFzICYmIHdlYWtIYXMpIHtcblx0XHRcdG9iamVjdC5kZWxldGUodGhpcy5fd2Vha0tleSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLl93ZWFrVmFsdWUgIT09IG9iamVjdC5nZXQodGhpcy5fd2Vha0tleSkpIHtcblx0XHRcdG9iamVjdC5zZXQodGhpcy5fd2Vha0tleSwgdGhpcy5fd2Vha1ZhbHVlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lV2Vha1NldCBleHRlbmRzIENsb25lT2JqZWN0IHtcblx0Y29uc3RydWN0b3IodmFsdWUsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIGhhc09uVmFsaWRhdGUpIHtcblx0XHRzdXBlcih1bmRlZmluZWQsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIGhhc09uVmFsaWRhdGUpO1xuXG5cdFx0dGhpcy5fYXJndW1lbnQxID0gYXJndW1lbnRzTGlzdFswXTtcblx0XHR0aGlzLl93ZWFrVmFsdWUgPSB2YWx1ZS5oYXModGhpcy5fYXJndW1lbnQxKTtcblx0fVxuXG5cdGlzQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLl93ZWFrVmFsdWUgIT09IHZhbHVlLmhhcyh0aGlzLl9hcmd1bWVudDEpO1xuXHR9XG5cblx0dW5kbyhvYmplY3QpIHtcblx0XHRpZiAodGhpcy5fd2Vha1ZhbHVlICYmICFvYmplY3QuaGFzKHRoaXMuX2FyZ3VtZW50MSkpIHtcblx0XHRcdG9iamVjdC5hZGQodGhpcy5fYXJndW1lbnQxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2JqZWN0LmRlbGV0ZSh0aGlzLl9hcmd1bWVudDEpO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEaWZmQXJyYXlzKGNsb25lLCB2YWx1ZSkge1xuXHRyZXR1cm4gY2xvbmUubGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGggfHwgY2xvbmUuc29tZSgoaXRlbSwgaW5kZXgpID0+IHZhbHVlW2luZGV4XSAhPT0gaXRlbSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RpZmZDZXJ0YWluKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZk1hcHMoY2xvbmUsIHZhbHVlKSB7XG5cdGlmIChjbG9uZS5zaXplICE9PSB2YWx1ZS5zaXplKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRsZXQgYlZhbHVlO1xuXHRmb3IgKGNvbnN0IFtrZXksIGFWYWx1ZV0gb2YgY2xvbmUpIHtcblx0XHRiVmFsdWUgPSB2YWx1ZS5nZXQoa2V5KTtcblxuXHRcdGlmIChiVmFsdWUgIT09IGFWYWx1ZSB8fCAoYlZhbHVlID09PSB1bmRlZmluZWQgJiYgIXZhbHVlLmhhcyhrZXkpKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEaWZmU2V0cyhjbG9uZSwgdmFsdWUpIHtcblx0aWYgKGNsb25lLnNpemUgIT09IHZhbHVlLnNpemUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBjbG9uZSkge1xuXHRcdGlmICghdmFsdWUuaGFzKGVsZW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaXNEaWZmQ2VydGFpbiBmcm9tICcuLi9kaWZmL2lzLWRpZmYtY2VydGFpbi5qcyc7XG5pbXBvcnQgaXNEaWZmQXJyYXlzIGZyb20gJy4uL2RpZmYvaXMtZGlmZi1hcnJheXMuanMnO1xuaW1wb3J0IHtJTU1VVEFCTEVfT0JKRUNUX01FVEhPRFN9IGZyb20gJy4vb2JqZWN0LmpzJztcblxuY29uc3QgSU1NVVRBQkxFX0FSUkFZX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0J2NvbmNhdCcsXG5cdCdpbmNsdWRlcycsXG5cdCdpbmRleE9mJyxcblx0J2pvaW4nLFxuXHQna2V5cycsXG5cdCdsYXN0SW5kZXhPZicsXG5dKTtcblxuZXhwb3J0IGNvbnN0IE1VVEFCTEVfQVJSQVlfTUVUSE9EUyA9IHtcblx0cHVzaDogaXNEaWZmQ2VydGFpbixcblx0cG9wOiBpc0RpZmZDZXJ0YWluLFxuXHRzaGlmdDogaXNEaWZmQ2VydGFpbixcblx0dW5zaGlmdDogaXNEaWZmQ2VydGFpbixcblx0Y29weVdpdGhpbjogaXNEaWZmQXJyYXlzLFxuXHRyZXZlcnNlOiBpc0RpZmZBcnJheXMsXG5cdHNvcnQ6IGlzRGlmZkFycmF5cyxcblx0c3BsaWNlOiBpc0RpZmZBcnJheXMsXG5cdGZsYXQ6IGlzRGlmZkFycmF5cyxcblx0ZmlsbDogaXNEaWZmQXJyYXlzLFxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRURfQVJSQVlfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQuLi5JTU1VVEFCTEVfT0JKRUNUX01FVEhPRFMsXG5cdC4uLklNTVVUQUJMRV9BUlJBWV9NRVRIT0RTLFxuXHQuLi5PYmplY3Qua2V5cyhNVVRBQkxFX0FSUkFZX01FVEhPRFMpLFxuXSk7XG4iLCJpbXBvcnQgaXNEaWZmTWFwcyBmcm9tICcuLi9kaWZmL2lzLWRpZmYtbWFwcy5qcyc7XG5pbXBvcnQge0lNTVVUQUJMRV9TRVRfTUVUSE9EUywgQ09MTEVDVElPTl9JVEVSQVRPUl9NRVRIT0RTfSBmcm9tICcuL3NldC5qcyc7XG5cbmNvbnN0IElNTVVUQUJMRV9NQVBfTUVUSE9EUyA9IG5ldyBTZXQoWy4uLklNTVVUQUJMRV9TRVRfTUVUSE9EUywgJ2dldCddKTtcblxuZXhwb3J0IGNvbnN0IE1VVEFCTEVfTUFQX01FVEhPRFMgPSB7XG5cdHNldDogaXNEaWZmTWFwcyxcblx0Y2xlYXI6IGlzRGlmZk1hcHMsXG5cdGRlbGV0ZTogaXNEaWZmTWFwcyxcblx0Zm9yRWFjaDogaXNEaWZmTWFwcyxcbn07XG5cbmV4cG9ydCBjb25zdCBIQU5ETEVEX01BUF9NRVRIT0RTID0gbmV3IFNldChbXG5cdC4uLklNTVVUQUJMRV9NQVBfTUVUSE9EUyxcblx0Li4uT2JqZWN0LmtleXMoTVVUQUJMRV9NQVBfTUVUSE9EUyksXG5cdC4uLkNPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EUyxcbl0pO1xuIiwiZXhwb3J0IGNvbnN0IElNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCd0b0xvY2FsZVN0cmluZycsXG5cdCd0b1N0cmluZycsXG5cdCd2YWx1ZU9mJyxcbl0pO1xuIiwiaW1wb3J0IGlzRGlmZlNldHMgZnJvbSAnLi4vZGlmZi9pcy1kaWZmLXNldHMuanMnO1xuXG5leHBvcnQgY29uc3QgQ09MTEVDVElPTl9JVEVSQVRPUl9NRVRIT0RTID0gW1xuXHQna2V5cycsXG5cdCd2YWx1ZXMnLFxuXHQnZW50cmllcycsXG5dO1xuXG5leHBvcnQgY29uc3QgSU1NVVRBQkxFX1NFVF9NRVRIT0RTID0gbmV3IFNldChbXG5cdCdoYXMnLFxuXHQndG9TdHJpbmcnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBNVVRBQkxFX1NFVF9NRVRIT0RTID0ge1xuXHRhZGQ6IGlzRGlmZlNldHMsXG5cdGNsZWFyOiBpc0RpZmZTZXRzLFxuXHRkZWxldGU6IGlzRGlmZlNldHMsXG5cdGZvckVhY2g6IGlzRGlmZlNldHMsXG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFRF9TRVRfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQuLi5JTU1VVEFCTEVfU0VUX01FVEhPRFMsXG5cdC4uLk9iamVjdC5rZXlzKE1VVEFCTEVfU0VUX01FVEhPRFMpLFxuXHQuLi5DT0xMRUNUSU9OX0lURVJBVE9SX01FVEhPRFMsXG5dKTtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4uL2lzLWFycmF5LmpzJztcbmltcG9ydCB7aXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzfSBmcm9tICcuLi9pcy1idWlsdGluLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuLi9pcy1vYmplY3QuanMnO1xuaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUvY2xvbmUtb2JqZWN0LmpzJztcbmltcG9ydCBDbG9uZUFycmF5IGZyb20gJy4vY2xvbmUvY2xvbmUtYXJyYXkuanMnO1xuaW1wb3J0IENsb25lRGF0ZSBmcm9tICcuL2Nsb25lL2Nsb25lLWRhdGUuanMnO1xuaW1wb3J0IENsb25lU2V0IGZyb20gJy4vY2xvbmUvY2xvbmUtc2V0LmpzJztcbmltcG9ydCBDbG9uZU1hcCBmcm9tICcuL2Nsb25lL2Nsb25lLW1hcC5qcyc7XG5pbXBvcnQgQ2xvbmVXZWFrU2V0IGZyb20gJy4vY2xvbmUvY2xvbmUtd2Vha3NldC5qcyc7XG5pbXBvcnQgQ2xvbmVXZWFrTWFwIGZyb20gJy4vY2xvbmUvY2xvbmUtd2Vha21hcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0Q2xvbmUge1xuXHRjb25zdHJ1Y3RvcihoYXNPblZhbGlkYXRlKSB7XG5cdFx0dGhpcy5fc3RhY2sgPSBbXTtcblx0XHR0aGlzLl9oYXNPblZhbGlkYXRlID0gaGFzT25WYWxpZGF0ZTtcblx0fVxuXG5cdHN0YXRpYyBpc0hhbmRsZWRUeXBlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGlzT2JqZWN0KHZhbHVlKVxuXHRcdFx0fHwgaXNBcnJheSh2YWx1ZSlcblx0XHRcdHx8IGlzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kcyh2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgaXNIYW5kbGVkTWV0aG9kKHRhcmdldCwgbmFtZSkge1xuXHRcdGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVPYmplY3QuaXNIYW5kbGVkTWV0aG9kKG5hbWUpO1xuXHRcdH1cblxuXHRcdGlmIChpc0FycmF5KHRhcmdldCkpIHtcblx0XHRcdHJldHVybiBDbG9uZUFycmF5LmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2V0KSB7XG5cdFx0XHRyZXR1cm4gQ2xvbmVTZXQuaXNIYW5kbGVkTWV0aG9kKG5hbWUpO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdHJldHVybiBDbG9uZU1hcC5pc0hhbmRsZWRNZXRob2QobmFtZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kcyh0YXJnZXQpO1xuXHR9XG5cblx0Z2V0IGlzQ2xvbmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdHN0YXJ0KHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0KSB7XG5cdFx0bGV0IENsb25lQ2xhc3MgPSBDbG9uZU9iamVjdDtcblxuXHRcdGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lQXJyYXk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZURhdGU7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lU2V0O1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdENsb25lQ2xhc3MgPSBDbG9uZU1hcDtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV2Vha1NldCkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lV2Vha1NldDtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV2Vha01hcCkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lV2Vha01hcDtcblx0XHR9XG5cblx0XHR0aGlzLl9zdGFjay5wdXNoKG5ldyBDbG9uZUNsYXNzKHZhbHVlLCBwYXRoLCBhcmd1bWVudHNMaXN0LCB0aGlzLl9oYXNPblZhbGlkYXRlKSk7XG5cdH1cblxuXHR1cGRhdGUoZnVsbFBhdGgsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdHRoaXMuX3N0YWNrLmF0KC0xKS51cGRhdGUoZnVsbFBhdGgsIHByb3BlcnR5LCB2YWx1ZSk7XG5cdH1cblxuXHRwcmVmZXJyZWRUaGlzQXJnKHRhcmdldCwgdGhpc0FyZ3VtZW50LCB0aGlzUHJveHlUYXJnZXQpIHtcblx0XHRjb25zdCB7bmFtZX0gPSB0YXJnZXQ7XG5cdFx0Y29uc3QgaXNIYW5kbGVkTWV0aG9kID0gU21hcnRDbG9uZS5pc0hhbmRsZWRNZXRob2QodGhpc1Byb3h5VGFyZ2V0LCBuYW1lKTtcblxuXHRcdHJldHVybiB0aGlzLl9zdGFjay5hdCgtMSlcblx0XHRcdC5wcmVmZXJyZWRUaGlzQXJnKGlzSGFuZGxlZE1ldGhvZCwgbmFtZSwgdGhpc0FyZ3VtZW50LCB0aGlzUHJveHlUYXJnZXQpO1xuXHR9XG5cblx0aXNDaGFuZ2VkKGlzTXV0YWJsZSwgdmFsdWUsIGVxdWFscykge1xuXHRcdHJldHVybiB0aGlzLl9zdGFjay5hdCgtMSkuaXNDaGFuZ2VkKGlzTXV0YWJsZSwgdmFsdWUsIGVxdWFscyk7XG5cdH1cblxuXHRpc1BhcnRPZkNsb25lKGNoYW5nZVBhdGgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhY2suYXQoLTEpLmlzUGF0aEFwcGxpY2FibGUoY2hhbmdlUGF0aCk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGlmICh0aGlzLl9wcmV2aW91c0Nsb25lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX3ByZXZpb3VzQ2xvbmUudW5kbyhvYmplY3QpO1xuXHRcdH1cblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0dGhpcy5fcHJldmlvdXNDbG9uZSA9IHRoaXMuX3N0YWNrLnBvcCgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX3ByZXZpb3VzQ2xvbmUuY2xvbmU7XG5cdH1cbn1cbiIsImltcG9ydCB7VEFSR0VUfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwSXRlcmF0b3IoaXRlcmF0b3IsIHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcHBseVBhdGgsIHByZXBhcmVWYWx1ZSkge1xuXHRjb25zdCBvcmlnaW5hbE5leHQgPSBpdGVyYXRvci5uZXh0O1xuXG5cdGlmICh0YXJnZXQubmFtZSA9PT0gJ2VudHJpZXMnKSB7XG5cdFx0aXRlcmF0b3IubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTmV4dC5jYWxsKHRoaXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0LmRvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJlc3VsdC52YWx1ZVswXSA9IHByZXBhcmVWYWx1ZShcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMF0sXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZVswXSxcblx0XHRcdFx0XHRhcHBseVBhdGgsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlc3VsdC52YWx1ZVsxXSA9IHByZXBhcmVWYWx1ZShcblx0XHRcdFx0XHRyZXN1bHQudmFsdWVbMV0sXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZVswXSxcblx0XHRcdFx0XHRhcHBseVBhdGgsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fSBlbHNlIGlmICh0YXJnZXQubmFtZSA9PT0gJ3ZhbHVlcycpIHtcblx0XHRjb25zdCBrZXlJdGVyYXRvciA9IHRoaXNBcmd1bWVudFtUQVJHRVRdLmtleXMoKTtcblxuXHRcdGl0ZXJhdG9yLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE5leHQuY2FsbCh0aGlzKTtcblxuXHRcdFx0aWYgKHJlc3VsdC5kb25lID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXN1bHQudmFsdWUgPSBwcmVwYXJlVmFsdWUoXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlLFxuXHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRrZXlJdGVyYXRvci5uZXh0KCkudmFsdWUsXG5cdFx0XHRcdFx0YXBwbHlQYXRoLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0aXRlcmF0b3IubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTmV4dC5jYWxsKHRoaXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0LmRvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHByZXBhcmVWYWx1ZShcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUsXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSxcblx0XHRcdFx0XHRhcHBseVBhdGgsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBpdGVyYXRvcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9hcHAuc2Nzc1wiO1xyXG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gXCIuL3ZpZXcvbm90LWZvdW5kL25vdC1mb3VuZFwiO1xyXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uIH0gZnJvbSBcIi4vdmlldy9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb25cIjtcclxuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi92aWV3L2Fib3V0L2Fib3V0XCI7XHJcbmltcG9ydCB7TWFpblZpZXd9IGZyb20gXCIuL3ZpZXcvbWFpbi9tYWluLXZpZXdcIjtcclxuaW1wb3J0IHsgQ3VzdG9tV2ViU29ja2V0IH0gZnJvbSBcIi4vY29tbW9uL2N1c3RvbS13ZWItc29ja2V0XCI7XHJcbmltcG9ydCBvbkNoYW5nZSBmcm9tIFwib24tY2hhbmdlXCI7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgcm91dGVzID0gW1xyXG4gICAgICAgIHtwYXRoOiBcIiNhdXRoXCIsIHZpZXc6IEF1dGhvcml6YXRpb24gfSxcclxuICAgICAgICB7cGF0aDogXCIjYWJvdXRcIiwgdmlldzogQWJvdXQgfSxcclxuICAgICAgICB7cGF0aDogXCIjbWFpblwiLCB2aWV3OiBNYWluVmlld31cclxuICAgIF07XHJcblxyXG4gICAgc3RhdGVVc2VyID0ge1xyXG4gICAgICBsb2dpbjogbnVsbCxcclxuICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgIGlzTG9naW5lZDogZmFsc2UsXHJcbiAgICAgIHVzZXJzQWN0aXZlOiBbXSxcclxuICAgICAgdXNlcnNJbmFjcml2ZTogW10sXHJcbiAgICAgIHNlbmRVc2VyOiBudWxsLFxyXG4gICAgICBtYWluTGFzdE1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRSZWNlaXZlZE1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGhpc3RvcnlXaXRoVXNlcjogbnVsbCxcclxuICAgICAgbm90aWZpY2F0aW9uTWVzc2FnZSA6IG51bGwsXHJcbiAgICAgIG1zZ1JlYWQ6IG51bGwsXHJcbiAgICAgIG1zZ0RlbDogbnVsbCxcclxuICAgICAgY29ubmVjdGlvbjogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXsgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5yb3V0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnN0YXRlVXNlciA9IG9uQ2hhbmdlKHRoaXMuc3RhdGVVc2VyLCB0aGlzLnN0YXRlVXNlckhvb2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBDdXN0b21XZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjQwMDAnLHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICB0aGlzLnJvdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVVc2VySG9vayhwYXRoKXtcclxuICAgICAgaWYoIHBhdGggPT09ICd1c2Vyc0FjdGl2ZScgfHwgcGF0aCA9PT0gJ3VzZXJzSW5hY3JpdmUnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLXVzZXJzQWN0aXZlLS0tdXNlcnNJbmFjcml2ZScsIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnJlZHJhd2luZ1NpZGViYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCBwYXRoID09PSAnc2VuZFVzZXInKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlVXNlci5zZW5kVXNlcil7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy4gaXNTZW5kVXNlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy/QryDQvtGC0L/RgNCw0LLQu9GP0Y4g0YHQvtC+0LHRidC10L3QuNC1XHJcbiAgICAgIGlmKCBwYXRoID09PSAnbWFpbkxhc3RNZXNzYWdlJyl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZVVzZXIubWFpbkxhc3RNZXNzYWdlKXtcclxuICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3Lm1haW5OZXdNZXNzYWdlKHRoaXMuc3RhdGVVc2VyLm1haW5MYXN0TWVzc2FnZS5wYXlsb2FkLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhdGggPT09ICdjdXJyZW50UmVjZWl2ZWRNZXNzYWdlJyl7XHJcbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LmludGVybG9jdXRvck5ld01lc3NhZ2UodGhpcy5zdGF0ZVVzZXIuY3VycmVudFJlY2VpdmVkTWVzc2FnZS5wYXlsb2FkLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhdGggPT09ICdoaXN0b3J5V2l0aFVzZXInKXtcclxuICAgICAgICBjb25zdCBjdXJyZXJVc2VyID0gKHRoaXMuc3RhdGVVc2VyLmhpc3RvcnlXaXRoVXNlci5pZCkucmVwbGFjZShcImhpc3RvcnlcIiwgXCJcIik7XHJcbiAgICAgICAgaWYoY3VycmVyVXNlciA9PT0gdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpe1xyXG4gICAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcudXBkYXRlTWVzc2FnZUxpc3QodGhpcy5zdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy51cGRhdGVTaWRlYmFyTWVzc2FnZU51bWJlcih0aGlzLnN0YXRlVXNlci5oaXN0b3J5V2l0aFVzZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXRoID09PSAnbm90aWZpY2F0aW9uTWVzc2FnZScpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UgIT09IG51bGwpe1xyXG4gICAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcudXBkYXRlTWVzc2FnZU51bWJlcih0aGlzLnN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRWaWV3LnVwZGF0ZU1lc3NhZ2VOdW1iZXIodGhpcy5jdXJyZW50Vmlldy5zdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihwYXRoID09PSAnbXNnUmVhZCcpe1xyXG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5pbnRlcmxvY3V0b3JTdGF0dXNNZXNzYWdlKHRoaXMuc3RhdGVVc2VyLm1zZ1JlYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocGF0aCA9PT0gJ21zZ0RlbCcpe1xyXG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5kZWxldGVNZXNzYWdlKHRoaXMuc3RhdGVVc2VyLm1zZ0RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZihwYXRoID09PSAnY29ubmVjdGlvbicpe1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uJywgdGhpcy5zdGF0ZVVzZXIuY29ubmVjdGlvbilcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlKCl7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcbiAgICAgIGlmKCFsb2NhdGlvbkhhc2ggfHwgbG9jYXRpb25IYXNoID09PScjYXV0aCcpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9ICBKU09OLnBhcnNlKHVzZXJPYmplY3QpO1xyXG5cclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI21haW4nO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI2F1dGgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNQYWdlID0gdGhpcy5yb3V0ZXMuc29tZShyID0+IHIucGF0aCA9PT0gbG9jYXRpb24uaGFzaCk7XHJcbiAgICAgIHRoaXMud3MuY29ubmVjdCgpLnRoZW4oKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIGlmKGlzUGFnZSl7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5yb3V0ZXMuZmluZChyID0+IHIucGF0aCA9PSBsb2NhdGlvbi5oYXNoKS52aWV3O1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ldyB2aWV3KHNvY2tldCx0aGlzLnN0YXRlVXNlcik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbmV3IE5vdEZvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcucmVuZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubmV3IEFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==