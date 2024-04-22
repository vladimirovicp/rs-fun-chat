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
      this.socket = new WebSocket(this.url);
      
      this.socket.onopen = () => {
        console.log('Соединение восстановлено');
      };
      
      this.socket.onmessage = (event) => {
        console.log('Получено сообщение: ' + event.data);
      };
      
      this.socket.onclose = () => {
        console.log('Соединение закрыто');
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
                            value="Test1" 
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
                        <input type="password" name="password" class="user-password" placeholder="My password is" value="test"/>
                        <span class="password-error"></span>
                    </div>
                    <input type="submit" value="Sign in" class="sign-in" />
                </form>
                <a href="#about" class="btn form__btn">about</a>
            </div>
            ${_helpers_svg__WEBPACK_IMPORTED_MODULE_2__.authorizationIco}
        </div`;


        //!!!!!!!!!!!!!! Потом Включи валидацию!!!!
        // добавь <input type="submit" value="Sign in" class="sign-in" disabled />
        //this.validateInput(pageAuth);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUQ7QUFDckQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNSMkY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUE0QixNQUFNO0FBQ3hDLE1BQU0seUVBQTJCLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBNEIsTUFBTTtBQUN4QyxNQUFNLHlFQUEyQixNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQTRCLE1BQU07QUFDeEMsTUFBTSx5RUFBMkIsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0VBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNEVBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLCtEQUFRO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hYm91dC9zdHlsZS5jc3M/OTUyMyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvYm9keS9zdHlsZXMuY3NzPzdmOGIiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL21lc3NhZ2UtYmxvY2svc3R5bGVzLmNzcz9lZmIxIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3N0eWxlcy5jc3M/YzQ5YSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L21haW4vc3R5bGVzLmNzcz8yZjJhIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvbm90LWZvdW5kL3N0eWxlcy5jc3M/NDc5MiIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9hcHAuc2Nzcz8yNzcyIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLnNjc3M/YmQwOSIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy9jb21tb24vY3VzdG9tLXdlYi1zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvY29tbW9uL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvaGVscGVycy9jb250cm9sLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL2hlbHBlcnMvc3ZnLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3V0aWwvZWxlbWVudC1jcmVhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvYWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9jb21wb25lbnRzL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L2NvbXBvbmVudHMvbWVzc2FnZS1ibG9jay9tZXNzYWdlLWJsb2NrLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vc3JjL3ZpZXcvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvdmlldy9tYWluL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL3NyYy92aWV3L25vdC1mb3VuZC9ub3QtZm91bmQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2luZGV4LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pZ25vcmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLWJ1aWx0aW4uanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9pcy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3BhdGguanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2Nsb25lL2Nsb25lLWRhdGUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS1zZXQuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9jbG9uZS9jbG9uZS13ZWFrbWFwLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvY2xvbmUvY2xvbmUtd2Vha3NldC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1hcnJheXMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9kaWZmL2lzLWRpZmYtY2VydGFpbi5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL2RpZmYvaXMtZGlmZi1tYXBzLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvZGlmZi9pcy1kaWZmLXNldHMuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL2FycmF5LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvbWV0aG9kcy9tYXAuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi9zbWFydC1jbG9uZS9tZXRob2RzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9vbi1jaGFuZ2UvbGliL3NtYXJ0LWNsb25lL21ldGhvZHMvc2V0LmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL29uLWNoYW5nZS9saWIvc21hcnQtY2xvbmUvc21hcnQtY2xvbmUuanMiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvb24tY2hhbmdlL2xpYi93cmFwLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycy1mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzLWZ1bi1jaGF0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnMtZnVuLWNoYXQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHByb2Nlc3NpbmdUeXBlcyB9IGZyb20gJy4uL2hlbHBlcnMvY29udHJvbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2ViU29ja2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCxzdGF0ZVVzZXIpIHtcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDRg9GB0YLQsNC90L7QstC70LXQvdC+Jyk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25PcGVuQ2FsbGJhY2soKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQn9C+0LvRg9GH0LXQvdC+INGB0L7QvtCx0YnQtdC90LjQtTogJyArIGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIHByb2Nlc3NpbmdUeXBlcyhldmVudC5kYXRhLCB0aGlzLnN0YXRlVXNlciwgdGhpcy5zb2NrZXQpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0KHQvtC10LTQuNC90LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZW5kKG1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlY29ubmVjdCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ9Cf0L7Qv9GL0YLQutCwINC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjy4uLicpO1xyXG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy51cmwpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QvicpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Cf0L7Qu9GD0YfQtdC90L4g0YHQvtC+0LHRidC10L3QuNC1OiAnICsgZXZlbnQuZGF0YSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQodC+0LXQtNC40L3QtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpO1xyXG4gICAgICAgIHRoaXMucmVjb25uZWN0KCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuQ2FsbGJhY2soKSB7XHJcbiAgICAgIC8vINCS0YvQt9GL0LLQsNC10LwgcmVzb2x2ZSDQtNC70Y8g0L/RgNC+0LzQuNGB0LAg0L/QvtGB0LvQtSDRg9GB0YLQsNC90L7QstC70LXQvdC40Y8g0YHQvtC10LTQuNC90LXQvdC40Y9cclxuICAgICAgaWYgKHRoaXMucmVzb2x2ZSkge1xyXG4gICAgICAgICAgdGhpcy5yZXNvbHZlKHRoaXMuc29ja2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc29ja2V0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICAvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDQutC70LDRgdGB0LAgV2ViU29ja2V0XHJcbiAgY29uc3Qgd3MgPSBuZXcgQ3VzdG9tV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo0MDAwJyk7IiwiZXhwb3J0IGNsYXNzIEFic3RyYWN0Vmlld3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICB9XHJcbn0iLCIvL9CQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbmNvbnN0IHVzZXJBdXRoZW50aWNhdGlvbiA9IGFzeW5jKHdzKSA9PiB7XHJcbiAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICBjb25zdCB1c2VyID0gIEpTT04ucGFyc2UodXNlck9iamVjdCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGlkOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIHR5cGU6IFwiVVNFUl9MT0dJTlwiLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbG9naW46IHVzZXIubG9naW4sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuXHJcbi8v0JLRi9GF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQtyDRgdC40YHRgtC10LzRi1xyXG5jb25zdCB1c2VyTG9nb3V0ID0gKHdzLHN0YXRlVXNlcikgPT4ge1xyXG4gIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgY29uc3QgdXNlciA9ICBKU09OLnBhcnNlKHVzZXJPYmplY3QpO1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZDogdXNlci5sb2dpbixcclxuICAgIHR5cGU6IFwiVVNFUl9MT0dPVVRcIixcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICBzdGF0ZVVzZXIuaXNMb2dpbmVkID0gZmFsc2U7XHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2F1dGgnO1xyXG59XHJcblxyXG4vLz8/INCQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGC0YDQtdGC0YzQtdC5INGB0YLQvtGA0L7QvdC+0LlcclxuLy8g0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IHRoaXJkUGFydHlVc2VyQXV0aGVudGljYXRpb24gPSAoKSA9PiB7XHJcbiAgLypcclxuICAgIHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwiVVNFUl9FWFRFUk5BTF9MT0dJTlwiLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgbG9naW46IHN0cmluZyxcclxuICAgICAgICAgIGlzTG9naW5lZDogYm9vbGVhbixcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAqL1xyXG5cclxuICAvKlxyXG4gICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsCwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5INGB0LXRgNCy0LXRgNC+0LxcclxuICAgIGxvZ2luIC0g0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LLQvtGI0LXQtNGI0LXQs9C+INCyINGB0LjRgdGC0LXQvNGDXHJcbiAgICBpc0xvZ2luZWQgLSDRgtC10LrRg9GJ0LjQuSDRgdGC0LDRgtGD0YEg0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAqL1xyXG5cclxufVxyXG5cclxuLy8/PyDQktGL0YXQvtC0INGB0YLQvtGA0L7QvdC90LXQs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC3INGB0LjRgdGC0LXQvNGLXHJcbi8vINCh0LXRgNCy0LXRgNC90L7QtSDQv9GA0LjQu9C+0LbQtdC90LjQtVxyXG5jb25zdCB0aGlyZFBhcnR5VXNlckxvZ291dCA9ICgpID0+e1xyXG4gIC8qXHJcbiAgICB7XHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICB0eXBlOiBcIlVTRVJfRVhURVJOQUxfTE9HT1VUXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBsb2dpbjogc3RyaW5nLFxyXG4gICAgICAgICAgaXNMb2dpbmVkOiBib29sZWFuLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gICAgLypcclxuICAgIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LAsINGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YvQuSDRgdC10YDQstC10YDQvtC8XHJcbiAgICBsb2dpbiAtINC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCy0YvRiNC10LTRiNC10LPQviDQuNC3INC/0YDQuNC70L7QttC10L3QuNGPXHJcbiAgICBpc0xvZ2luZWQgLSDRgtC10LrRg9GJ0LjQuSDRgdGC0LDRgtGD0YEg0LDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICovXHJcblxyXG5cclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuY29uc3QgZ2V0dGluZ0FsbEF1dGhlbnRpY2F0ZWRVc2VycyA9ICh3cykgPT57XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkOiAnYWxsQXV0aFVzZXInLFxyXG4gICAgdHlwZTogXCJVU0VSX0FDVElWRVwiLFxyXG4gICAgcGF5bG9hZDogbnVsbCxcclxuICB9XHJcbiAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbmNvbnN0IGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2VycyA9ICh3cykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZDogJ2FsbFVuYXV0VXNlcicsXHJcbiAgICB0eXBlOiBcIlVTRVJfSU5BQ1RJVkVcIixcclxuICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgfVxyXG4gIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG4vL9Ce0YLQv9GA0LDQstC60LAg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjlxyXG5jb25zdCBzZW5kaW5nTWVzc2FnZVVzZXIgPSAod3MsdGV4dE1lc3NhZ2UsdG9Vc2VyKSA9PntcclxuICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gIGNvbnN0IHVzZXIgPSAgSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkOiB1c2VyLmxvZ2luLFxyXG4gICAgICB0eXBlOiBcIk1TR19TRU5EXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICB0bzogdG9Vc2VyLFxyXG4gICAgICAgICAgdGV4dDogdGV4dE1lc3NhZ2UsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIC8qXHJcbiAgICAgIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LBcclxuICAgICAgbG9naW4gLSDQu9C+0LPQuNC9INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LrQvtGC0L7RgNC+0LzRgyDQvtGC0L/RgNCw0LLQu9GP0LXRgtGB0Y8g0YHQvtC+0LHRidC10L3QuNC1XHJcbiAgICAgIHRleHQgLSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgKi9cclxufVxyXG5cclxuLy8/PyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQvtC+0LHRidC10L3QuNGPINC+0YIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbi8vINCh0LXRgNCy0LXRgNC90L7QtSDQv9GA0LjQu9C+0LbQtdC90LjQtVxyXG5jb25zdCByZWNlaXZpbmdNZXNzYWdlRnJvbVVzZXIgPSAoKSA9PiB7XHJcbiAgLypcclxuICAgICAge1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgdHlwZTogXCJNU0dfU0VORFwiLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICAgIGZyb206IHN0cmluZyxcclxuICAgICAgICAgIHRvOiBzdHJpbmcsXHJcbiAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICBkYXRldGltZTogbnVtYmVyLFxyXG4gICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgIGlzRGVsaXZlcmVkOiBib29sZWFuLFxyXG4gICAgICAgICAgICBpc1JlYWRlZDogYm9vbGVhbixcclxuICAgICAgICAgICAgaXNFZGl0ZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiAgICAvKlxyXG4gICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0YHQtdGA0LLQtdGA0L7QvFxyXG4gICAgICAgIG1lc3NhZ2UgLSDQv9C+0LvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLCDQs9C00LU6XHJcbiAgICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICBmcm9tIC0g0L7RgtC/0YDQsNCy0LjRgtC10LvRjCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICB0byAtINC/0L7Qu9GD0YfQsNGC0LXQu9GMINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIHRleHQgLSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGRhdGV0aW1lIC0g0LTQsNGC0LAg0Lgg0LLRgNC10LzRjyDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGlzRGVsaXZlcmVkIC0g0YHRgtCw0YLRg9GBLCDQutC+0YLQvtGA0YvQuSDRg9C60LDQt9GL0LLQsNC10YIsINC00L7RgdGC0LDQstC70LXQvdC+INC70Lgg0YHQvtC+0LHRidC10L3QuNC1INC/0L7Qu9GD0YfQsNGC0LXQu9GOXHJcbiAgICAgICAgaXNSZWFkZWQgLSDRgdGC0LDRgtGD0YEsINC60L7RgtC+0YDRi9C5INGD0LrQsNC30YvQstCw0LXRgiwg0LHRi9C70L4g0LvQuCDRgdC+0L7QsdGJ0LXQvdC40LUg0L/RgNC+0YfQuNGC0LDQvdC+INC/0L7Qu9GD0YfQsNGC0LXQu9C10LxcclxuICAgICAgICBpc0VkaXRlZCAtINGB0YLQsNGC0YPRgSwg0LrQvtGC0L7RgNGL0Lkg0YPQutCw0LfRi9Cy0LDQtdGCLCDQsdGL0LvQviDQu9C4INGB0L7QvtCx0YnQtdC90LjQtSDQvtGC0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90L4g0L7RgtC/0YDQsNCy0LjRgtC10LvQtdC8XHJcbiAgICAqL1xyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQuNGB0YLQvtGA0LjQuCDRgdC+0L7QsdGJ0LXQvdC40Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbmNvbnN0IGZldGNoaW5nTWVzc2FnZUhpc3RvcnlXaXRoVXNlciA9ICh3cyxsb2dpbikgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZDogYGhpc3Rvcnkke2xvZ2lufWAsXHJcbiAgICB0eXBlOiBcIk1TR19GUk9NX1VTRVJcIixcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpbixcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIC8qKlxyXG4gICAqICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC30LDQv9GA0L7RgdCwXHJcbiAgICAgIGxvZ2luIC0g0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0L7RgiDQutC+0YLQvtGA0L7Qs9C+INC30LDQv9GA0LDRiNC40LLQsNC10YLRgdGPINC40YHRgtC+0YDQuNGPINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gICAgKi9cclxufVxyXG5cclxuLy8/PyDQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+0LEg0LjQt9C80LXQvdC10L3QuNC4INGB0YLQsNGC0YPRgdCwINC00L7RgdGC0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPXHJcbi8vINCh0LXRgNCy0LXRgNC90L7QtSDQv9GA0LjQu9C+0LbQtdC90LjQtVxyXG5jb25zdCBub3RpZmljYXRpb25NZXNzYWdlRGVsaXZlcnlTdGF0dXNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IG51bGwsXHJcbiAgLy8gICB0eXBlOiBcIk1TR19ERUxJVkVSXCIsXHJcbiAgLy8gICBwYXlsb2FkOiB7XHJcbiAgLy8gICAgIG1lc3NhZ2U6IHtcclxuICAvLyAgICAgICBpZDogc3RyaW5nLFxyXG4gIC8vICAgICAgIHN0YXR1czoge1xyXG4gIC8vICAgICAgICAgaXNEZWxpdmVyZWQ6IGJvb2xlYW4sXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsCwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C5INGB0LXRgNCy0LXRgNC+0LxcclxuICAgICAgbWVzc2FnZSAtINC/0L7Qu9C1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCz0LTQtTpcclxuICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgaXNEZWxpdmVyZWQgLSDRgdGC0LDRgtGD0YEsINC60L7RgtC+0YDRi9C5INGD0LrQsNC30YvQstCw0LXRgiwg0LTQvtGB0YLQsNCy0LvQtdC90L4g0LvQuCDRgdC+0L7QsdGJ0LXQvdC40LUg0L/QvtC70YPRh9Cw0YLQtdC70Y5cclxuICAgKi9cclxuXHJcblxyXG59XHJcblxyXG4vL9CY0LfQvNC10L3QtdC90LjQtSDRgdGC0LDRgtGD0YHQsCDQv9GA0L7Rh9GC0LXQvdC40Y8g0YHQvtC+0LHRidC10L3QuNGPXHJcbmNvbnN0IG1lc3NhZ2VSZWFkU3RhdHVzQ2hhbmdlID0gKHdzLGlkTWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQ6IGBtYWluTVNHX1JFQURgLFxyXG4gICAgICB0eXBlOiBcIk1TR19SRUFEXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICBpZDogaWRNZXNzYWdlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxufSBcclxuXHJcbi8vPz8g0KPQtNCw0LvQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuY29uc3QgbWVzc2FnZURlbGV0aW9uID0gKCkgPT4ge1xyXG5cclxuICAvKipcclxuICAgKiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICB0eXBlOiBcIk1TR19ERUxFVEVcIlxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgKi9cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIGlkIC0g0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LfQsNC/0YDQvtGB0LBcclxuICAgICAgbWVzc2FnZSAtINC/0L7Qu9C1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8sINCz0LTQtTpcclxuICAgICAgaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgKi9cclxuXHJcbn1cclxuXHJcbi8vPz8g0KPQstC10LTQvtC80LvQtdC90LjQtSDQvtCxINGD0LTQsNC70LXQvdC40Lgg0YHQvtC+0LHRidC10L3QuNGPXHJcbi8vINCY0L3QuNGG0LjQsNGC0L7RgDog0KHQtdGA0LLQtdGA0L3QvtC1INC/0YDQuNC70L7QttC10L3QuNC1XHJcbmNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxldGlvbiA9ICgpID0+IHtcclxuXHJcbn1cclxuXHJcbi8v0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtC10LrRgdGC0LAg0YHQvtC+0LHRidC10L3QuNGPXHJcbmNvbnN0IG1lc3NhZ2VUZXh0RWRpdGluZyA9ICgpID0+e1xyXG4gIC8qKlxyXG4gICAqIHtcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIHR5cGU6IFwiTVNHX0VESVRcIlxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgdGV4dDogc3RyaW5nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICovXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogaWQgLSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICAgICAgICBtZXNzYWdlIC0g0L/QvtC70LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjywg0LPQtNC1OlxyXG4gICAgICAgICAgICBpZCAtINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgICAgICB0ZXh0IC0g0YLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBcclxuICB1c2VyQXV0aGVudGljYXRpb24sXHJcbiAgdXNlckxvZ291dCxcclxuICBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzLFxyXG4gIGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2VycyxcclxuICBzZW5kaW5nTWVzc2FnZVVzZXIsXHJcbiAgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyLFxyXG4gIG5vdGlmaWNhdGlvbk1lc3NhZ2VEZWxpdmVyeVN0YXR1c0NoYW5nZSxcclxuICBtZXNzYWdlUmVhZFN0YXR1c0NoYW5nZSxcclxuICBtZXNzYWdlRGVsZXRpb24sXHJcbiAgbWVzc2FnZVRleHRFZGl0aW5nLFxyXG4gfTsiLCJpbXBvcnQgeyBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzLCBnZXR0aW5nQWxsVW5hdXRob3JpemVkVXNlcnMgfSBmcm9tICcuLi9oZWxwZXJzL2FwaSc7XHJcblxyXG5jb25zdCBwcm9jZXNzaW5nVHlwZXMgPSAobWVzc2FnZSxzdGF0ZVVzZXIsd3MpID0+e1xyXG4gICAgY29uc3QgbWVzc2FnZUpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgdHlwZSA9IG1lc3NhZ2VKc29uLnR5cGU7XHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfTE9HSU4nKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI21haW4nO1xyXG4gICAgICBnZXR0aW5nQWxsQXV0aGVudGljYXRlZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINCw0YPRgtC10L3RgtC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgIGdldHRpbmdBbGxVbmF1dGhvcml6ZWRVc2Vycyh3cyk7IC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQstGB0LXRhSDQvdC10LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdFUlJPUicpe1xyXG4gICAgICBhbGVydChtZXNzYWdlSnNvbi5wYXlsb2FkLmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlID09PSAnVVNFUl9MT0dPVVQnKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvL9CQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGC0YDQtdGC0YzQtdC5INGB0YLQvtGA0L7QvdC+0LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0VYVEVSTkFMX0xPR0lOJyl7XHJcbiAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZSA9PT0gJ1VTRVJfRVhURVJOQUxfTE9HT1VUJyl7XHJcbiAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMod3MpOyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgICAgZ2V0dGluZ0FsbFVuYXV0aG9yaXplZFVzZXJzKHdzKTsgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0LDRg9GC0LXQvdGC0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0FDVElWRScpe1xyXG4gICAgICBjb25zdCB1c2Vyc0xpc3QgPSBtZXNzYWdlSnNvbi5wYXlsb2FkLnVzZXJzO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck9iaiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJOYW1lID0gSlNPTi5wYXJzZShjdXJyZW50VXNlck9iaikubG9naW47XHJcbiAgICAgIC8vINCd0LDRhdC+0LTQuNC8INC40L3QtNC10LrRgSDQvtCx0YrQtdC60YLQsCDQsiDRgdC/0LjRgdC60LVcclxuICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IHVzZXJzTGlzdC5maW5kSW5kZXgob2JqID0+IG9iai5sb2dpbiA9PT0gY3VycmVudFVzZXJOYW1lKTtcclxuICAgICAgaWYgKGluZGV4VG9EZWxldGUgIT09IC0xKSB7XHJcbiAgICAgICAgdXNlcnNMaXN0LnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZVVzZXIudXNlcnNBY3RpdmUgPSB1c2Vyc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LLRgdC10YUg0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcclxuICAgIGlmKHR5cGUgPT09ICdVU0VSX0lOQUNUSVZFJyl7XHJcbiAgICAgIHN0YXRlVXNlci51c2Vyc0luYWNyaXZlID0gbWVzc2FnZUpzb24ucGF5bG9hZC51c2VycztcclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L7RgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGlmKHR5cGUgPT09ICdNU0dfU0VORCcpe1xyXG4gICAgICBjb25zdCBmcm9tID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLmZyb207XHJcbiAgICAgIGNvbnN0IHRvID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLnRvO1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlck9iaiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJOYW1lID0gSlNPTi5wYXJzZShjdXJyZW50VXNlck9iaikubG9naW47XHJcblxyXG4gICAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLnRleHQ7XHJcbiAgICAgIGNvbnN0IGRhdGV0aW1lID0gbWVzc2FnZUpzb24ucGF5bG9hZC5tZXNzYWdlLmRhdGV0aW1lO1xyXG5cclxuICAgICAgaWYoY3VycmVudFVzZXJOYW1lID09PSBmcm9tKSB7XHJcbiAgICAgICAgLy8gc3RhdGVVc2VyLm1haW5MYXN0TWVzc2FnZSA9IHtcclxuICAgICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgLy8gICBkYXRldGltZTogZGF0ZXRpbWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBzdGF0ZVVzZXIubWFpbkxhc3RNZXNzYWdlID0gbWVzc2FnZUpzb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGN1cnJlbnRVc2VyTmFtZSA9PT0gdG8pIHtcclxuICAgICAgICBpZihzdGF0ZVVzZXIuc2VuZFVzZXIgPT09IGZyb20pe1xyXG4gICAgICAgICAgLy8gc3RhdGVVc2VyLmN1cnJlbnRSZWNlaXZlZE1lc3NhZ2U9e1xyXG4gICAgICAgICAgLy8gICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgLy8gICBkYXRldGltZTogZGF0ZXRpbWUsXHJcbiAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgc3RhdGVVc2VyLmN1cnJlbnRSZWNlaXZlZE1lc3NhZ2U9bWVzc2FnZUpzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLy8g0L/QvtC70YPRh9Cw0YLQtdC70Ywg0Y8g0L7RgiBmcm9tXHJcbiAgICAgICAgICBpZiAoc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UgPT09IGZyb20pe1xyXG4gICAgICAgICAgICBzdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlID0gZnJvbTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlID0gZnJvbTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDQuNGB0YLQvtGA0LjQuCDRgdC+0L7QsdGJ0LXQvdC40Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICBpZih0eXBlID09PSAnTVNHX0ZST01fVVNFUicpe1xyXG4gICAgICBzdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyID0gbWVzc2FnZUpzb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmKHR5cGUgPT09ICdNU0dfUkVBRCcpe1xyXG4gICAgICAvL9GB0LzQtdC90LjQu9GB0Y8g0YHRgtCw0YLRg9GBINGDINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICBzdGF0ZVVzZXIubXNnUmVhZCA9IG1lc3NhZ2VKc29uLnBheWxvYWQubWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwcm9jZXNzaW5nVHlwZXMgfTsiLCJjb25zdCBhdXRob3JpemF0aW9uSWNvID0gYDxzdmcgaWQ9XCJzdmctc291cmNlXCIgaGVpZ2h0PVwiMFwiIHZlcnNpb249XCIxLjFcIiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZVwiPlxyXG4gPGcgaWQ9XCJtYW4tcGVvcGxlLXVzZXJcIiBkYXRhLWljb25tZWxvbj1cIlN0cmVhbWxpbmUgSWNvbiBTZXQ6ZGUzMmViMjYyMTQ5MWMxYTg4MWE5ZmU4NDYyMzZkYTFcIj5cclxuICAgIDxnIGlkPVwiRXhwYW5kZWRcIj5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aCAgZD1cIk0xNi4wMjgsMjBjLTQuNzY0LDAtOC42MzktNC40ODYtOC42MzktMTBzMy44NzUtMTAsOC42MzktMTBjNC43NjMsMCw4LjYzOCw0LjQ4Niw4LjYzOCwxMFxyXG5cdFx0XHRcdFMyMC43OTEsMjAsMTYuMDI4LDIweiBNMTYuMDI4LDEuMzMzQzEyLDEuMzMzLDguNzIyLDUuMjIxLDguNzIyLDEwczMuMjc3LDguNjY3LDcuMzA2LDguNjY3YzQuMDI5LDAsNy4zMDYtMy44ODgsNy4zMDYtOC42NjdcclxuXHRcdFx0XHRTMjAuMDU3LDEuMzMzLDE2LjAyOCwxLjMzM3pcIj48L3BhdGg+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8Zz5cclxuICAgICAgICAgPHBhdGggIGQ9XCJNMzEuOTg4LDMySDAuMDEydi00LjUxNWMwLTEuOTY3LDEuMjQ1LTMuNzMzLDMuMDk3LTQuMzk1bDguMjI0LTIuMjY2di0yLjc3aDEuMzMzdjMuNzg1TDMuNTEsMjQuMzYxXHJcblx0XHRcdFx0Yy0xLjI3NSwwLjQ1OC0yLjE2NSwxLjcyLTIuMTY1LDMuMTI0djMuMTgyaDI5LjMwOXYtMy4xODJjMC0xLjQwNC0wLjg4OS0yLjY2Ni0yLjIxMy0zLjEzOWwtOS4xMDctMi41MDZ2LTMuNzU4aDEuMzMydjIuNzQyXHJcblx0XHRcdFx0bDguMTc4LDIuMjUxYzEuOSwwLjY3NywzLjE0NSwyLjQ0MiwzLjE0NSw0LjQwOVYzMnpcIj48L3BhdGg+XHJcbiAgICAgICA8L2c+XHJcbiAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCAgZD1cIk0yMS44NjUsOC44MTJjLTAuMDQ1LDAtMC4wOS0wLjAwMS0wLjEzNy0wLjAwM2MtMS41LTAuMDU1LTMuMjUtMS4wMDQtNC4zNjEtMi4yODdcclxuXHRcdFx0XHRDMTYuNTksNy41MTMsMTUuNDgsOC4xNSwxNC4xMDYsOC4zODNjLTIuNDAzLDAuNDEzLTUuMTUyLTAuNTEtNS45ODgtMS4zMjFsMC45MjgtMC45NTdjMC40MDMsMC4zOTEsMi42OSwxLjMyOSw0LjgzNiwwLjk2NFxyXG5cdFx0XHRcdGMxLjMzMi0wLjIyNiwyLjI5Mi0wLjkxMSwyLjg1NC0yLjAzNGwwLjU1OC0xLjExNGwwLjYxNywxLjA4MmMwLjczOCwxLjI5MiwyLjUwOCwyLjQyNSwzLjg2NywyLjQ3NVxyXG5cdFx0XHRcdGMwLjYwNCwwLjAxNiwxLjAzMy0wLjE2NSwxLjMwNy0wLjU3MWwxLjEwNSwwLjc0NUMyMy42ODYsOC40MDMsMjIuODYzLDguODEyLDIxLjg2NSw4LjgxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJsb2NrLWxvY2tlclwiIGRhdGEtaWNvbm1lbG9uPVwiU3RyZWFtbGluZSBJY29uIFNldDo1ZDQzYzZmNDVjZGJlY2ZkNWI4YTEyYmM5ZTVkZDMzY1wiPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiRXhwYW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlICBjeD1cIjE2XCIgY3k9XCIyMFwiIHI9XCIxLjMzM1wiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICA8cGF0aCAgZD1cIk0xNiwyNS4zMzNjLTAuMzY5LDAtMC42NjctMC4yOTgtMC42NjctMC42NjZ2LTRDMTUuMzMzLDIwLjI5OCwxNS42MzEsMjAsMTYsMjBzMC42NjcsMC4yOTgsMC42NjcsMC42NjdcclxuXHRcdFx0XHR2NEMxNi42NjcsMjUuMDM1LDE2LjM2OSwyNS4zMzMsMTYsMjUuMzMzelwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCAgZD1cIk0yOCwzMkg0VjEyaDI0VjMyeiBNNS4zMzMsMzAuNjY3aDIxLjMzM1YxMy4zMzNINS4zMzNWMzAuNjY3elwiPjwvcGF0aD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgIDxwYXRoICBkPVwiTTI0LDEyLjY2N2gtMS4zMzNWOGMwLTMuNjc2LTIuOTkxLTYuNjY3LTYuNjY3LTYuNjY3Yy0zLjY3NiwwLTYuNjY3LDIuOTktNi42NjcsNi42Njd2NC42NjdIOFY4XHJcblx0XHRcdFx0YzAtNC40MTIsMy41ODgtOCw4LThjNC40MTEsMCw4LDMuNTg4LDgsOFYxMi42Njd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgPC9nPlxyXG48L3N2Zz5gO1xyXG5cclxuZXhwb3J0IHsgYXV0aG9yaXphdGlvbkljbyB9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRDcmVhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZElubmVyRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50Q3JlYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQuZ2V0RWxlbWVudCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbGVtZW50KHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XHJcbiAgICAgICAgdGhpcy5zZXRDc3NDbGFzc2VzKHBhcmFtcy5jbGFzc05hbWVzKTtcclxuICAgICAgICB0aGlzLnNldFRleHRDb250ZW50KHBhcmFtcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdGhpcy5zZXRDYWxsYmFjayhwYXJhbXMuY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuc2V0SWQocGFyYW1zLmlkKTtcclxuICAgICAgICB0aGlzLnNldEF0dHIocGFyYW1zLmF0dHIpO1xyXG4gICAgICAgIHRoaXMuYWRkRGF0YShwYXJhbXMuaWREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJZChpZCkge1xyXG4gICAgICAgIGlmKGlkKXtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENzc0NsYXNzZXMoY3NzQ2xhc3NlcyA9IFtdKSB7XHJcbiAgICAgICAgY3NzQ2xhc3Nlcy5tYXAoKGNzc0NsYXNzKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHIoYXR0ciA9IHt9KXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGF0dHIpLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGF0dHIpW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUZXh0Q29udGVudCh0ZXh0ID0gJycpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZERhdGEoaWREYXRhKXtcclxuICAgICAgICBpZihpZERhdGEpe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGF0YXNldC5pZCA9IGlkRGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIC8vIG1haW4uaW5uZXJIVE1MID0gJ0Fib3V0JztcclxuICAgICAgICAvLyB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAvLyB0aGlzLmFwcC5hcHBlbmQobWFpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFib3V0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6WydhYm91dCddfSk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6WydhYm91dF9fY29udGFpbmVyJ119KTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidoMScsIGNsYXNzTmFtZXM6WydhYm91dF9fdGl0bGUnXSwgdGV4dENvbnRlbnQ6ICfQodGD0L/QtdGAINGH0LDRgiEnfSk7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidwJywgY2xhc3NOYW1lczpbJ2Fib3V0X19pbmZvJ10sIHRleHRDb250ZW50OiAn0J/RgNC40LvQvtC20LXQvdC40LUg0YDQsNC30YDQsNCx0L7RgtCw0L3QviDQsiDRgNCw0LzQutCw0YUg0LrRg9GA0YHQsCBSU1NjaG9vbCBKUy9GRSAyMDIzUTMnfSk7XHJcbiAgICAgICAgY29uc3QgYXV0b3IgPSAgbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3AnLCBjbGFzc05hbWVzOlsnYWJvdXRfX2luZm8nXSwgdGV4dENvbnRlbnQ6ICfQkNCy0YLQvtGAOiB2bGFkaW1pcm92aWNwJ30pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlCdG4gPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6J2J1dHRvbicsIFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOlsnYnRuJywnZm9ybV9fYnRuJ10sIFxyXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ9CS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0JyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2F1dGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQodGl0bGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoaW5mbyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChhdXRvcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChib2R5QnRuKTtcclxuXHJcbiAgICAgICAgYWJvdXQuYWRkSW5uZXJFbGVtZW50KGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZChhYm91dC5nZXRFbGVtZW50KCkpO1xyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tICcuLi8uLi9jb21tb24vdmlldyc7XHJcbmltcG9ydCAnLi9hdXRob3JpemF0aW9uLnNjc3MnO1xyXG5pbXBvcnQgeyBhdXRob3JpemF0aW9uSWNvIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdmcnO1xyXG5pbXBvcnQgeyB1c2VyQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwaSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvbiBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIgPSBzdGF0ZVVzZXI7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHBhZ2VBdXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZUF1dGguY2xhc3NMaXN0LmFkZCgncGFnZS1hdXRoJyk7XHJcbiAgICAgICAgcGFnZUF1dGguaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJhdXRoX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3VzZXItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ1c2VyXCIgZm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI21hbi1wZW9wbGUtdXNlclwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1uYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBuYW1lIGlzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlRlc3QxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJyZXF1aXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBcIjRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXltBLVpdW2EtekEtWlxcXFwtXSskXCIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXNlci1lcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fdXNlci1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsb2NrXCIgZm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbHRlcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjbG9jay1sb2NrZXJcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJ1c2VyLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNeSBwYXNzd29yZCBpc1wiIHZhbHVlPVwidGVzdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYXNzd29yZC1lcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2lnbiBpblwiIGNsYXNzPVwic2lnbi1pblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgY2xhc3M9XCJidG4gZm9ybV9fYnRuXCI+YWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAke2F1dGhvcml6YXRpb25JY299XHJcbiAgICAgICAgPC9kaXZgO1xyXG5cclxuXHJcbiAgICAgICAgLy8hISEhISEhISEhISEhISDQn9C+0YLQvtC8INCS0LrQu9GO0YfQuCDQstCw0LvQuNC00LDRhtC40Y4hISEhXHJcbiAgICAgICAgLy8g0LTQvtCx0LDQstGMIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduIGluXCIgY2xhc3M9XCJzaWduLWluXCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAvL3RoaXMudmFsaWRhdGVJbnB1dChwYWdlQXV0aCk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBzaWduSW4gPSBwYWdlQXV0aC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbicpO1xyXG4gICAgICAgIHNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5idG5DbGljayhwYWdlQXV0aCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZChwYWdlQXV0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xpY2soZWwpe1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZWwucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJQYXMgPSBlbC5xdWVyeVNlbGVjdG9yKCcudXNlci1wYXNzd29yZCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lVmFsID0gdXNlck5hbWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXNlclBhc1ZhbCA9IHVzZXJQYXMudmFsdWU7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHtsb2dpbjogdXNlck5hbWVWYWwsIHBhc3N3b3JkOiB1c2VyUGFzVmFsfSkpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyLmlzTG9naW5lZCA9IHRydWU7XHJcbiAgICAgICAgdXNlckF1dGhlbnRpY2F0aW9uKHRoaXMud3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlSW5wdXQocGFnZUF1dGgpe1xyXG4gICAgICAgIGxldCBuYW1lQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwYXNzQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHNpZ25JbiA9IHBhZ2VBdXRoLnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybVVzZXJOYW1lID0gcGFnZUF1dGgucXVlcnlTZWxlY3RvcignLmZvcm1fX3VzZXItbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJFcnJvciA9IGZvcm1Vc2VyTmFtZS5xdWVyeVNlbGVjdG9yKCcudXNlci1lcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZm9ybVVzZXJOYW1lLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcclxuICAgICAgICB1c2VyTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZVswXSAhPT0gdmFsdWVbMF0udG9VcHBlckNhc2UoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckVycm9yLmlubmVySFRNTCA9ICfQn9C10YDQstCw0Y8g0LHRg9C60LLQsCDQsiDQmNC80LXQvdC4INC00L7Qu9C20L3QviDQsdGL0YLRjCDQt9Cw0LPQu9Cw0LLQvdC+0LkhJzsgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZUJvb2w9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduSW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPCA0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckVycm9yLmlubmVySFRNTCA9ICfQodC40LzQstC+0LvQvtCyINCyINCY0LzQtdC90Lgg0LTQvtC70LbQvdC+INCx0YvRgtGMINCx0L7Qu9GM0YjQtSAzISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVCb29sPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJFcnJvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUJvb2w9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB1c2VyRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1Vc2VyUGFzc3dvcmQgPSAgcGFnZUF1dGgucXVlcnlTZWxlY3RvcignLmZvcm1fX3VzZXItcGFzc3dvcmQnKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVycm9yID0gZm9ybVVzZXJQYXNzd29yZC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtZXJyb3InKTtcclxuICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmQgPSBmb3JtVXNlclBhc3N3b3JkLnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXBhc3N3b3JkJyk7XHJcbiAgICAgICAgdXNlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlLmxlbmd0aCA8IDQgKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJ9Ch0LjQvNCy0L7Qu9C+0LIg0LIg0L/QsNGA0L7Qu9C1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgMyEnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3NCb29sID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbkluKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIS9bMC05XSsvLnRlc3QodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAn0JIg0L/QsNGA0L7Qu9C1INC00L7Qu9C20L3QsCDQsdGL0YLRjCDRhdC+0YLRjCDQvtC00L3QsCDRhtC40YTRgNCwISc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzQm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25JbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlU2lnbkluID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmFtZUJvb2wgJiYgcGFzc0Jvb2wpe1xyXG4gICAgICAgICAgICAgICAgc2lnbkluLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHNpZ25Jbi5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvL3RoaXMuYnRuQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzaWduSW4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3JztcclxuaW1wb3J0IHsgdXNlckxvZ291dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvYXBpJztcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi8uLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keSBleHRlbmRzIEFic3RyYWN0Vmlld3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnbWFpbl9fY29udGFpbmVyJ119KTtcclxuICAgICAgICBjb25zdCBib2R5SGVhZGVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2hlYWRlcicsIGNsYXNzTmFtZXM6Wydib2R5X19oZWFkZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlCdG4gPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6J2J1dHRvbicsIFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOlsnYnRuJywnYm9keV9fYnRuJywnYm9keV9fYnRuLWNoYXQnXSwgXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAn0J/QvtC60LjQvdGD0YLRjCDRh9Cw0YInLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT57XHJcbiAgICAgICAgICAgICAgICB1c2VyTG9nb3V0KHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWVDaGF0ID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19uYW1lLWNoYXQnXSwgdGV4dENvbnRlbnQ6ICfQodGD0L/QtdGAINGH0LDRgiEnfSk7XHJcbiAgICAgICAgY29uc3QgYWJvdXRCdG4gPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6J2J1dHRvbicsIFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOlsnYnRuJywnYm9keV9fYnRuJywnYm9keV9fYnRuLWFib3V0J10sIFxyXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0Fib3V0JyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2Fib3V0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBib2R5SGVhZGVyLmFkZElubmVyRWxlbWVudChuYW1lQ2hhdCk7XHJcbiAgICAgICAgYm9keUhlYWRlci5hZGRJbm5lckVsZW1lbnQoYWJvdXRCdG4pO1xyXG4gICAgICAgIGJvZHlIZWFkZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlCdG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoYm9keUhlYWRlcik7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBib2R5SW5mbyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9faW5mbyddfSk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFVzZXJOYW1lID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19zZW5kLXVzZXItbmFtZSddfSk7XHJcbiAgICAgICAgY29uc3Qgc2VuZFVzZXJTdGF0dXMgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX3NlbmQtdXNlci1zdGF0dXMnXX0pO1xyXG4gICAgICAgIGJvZHlJbmZvLmFkZElubmVyRWxlbWVudChzZW5kVXNlck5hbWUpO1xyXG4gICAgICAgIGJvZHlJbmZvLmFkZElubmVyRWxlbWVudChzZW5kVXNlclN0YXR1cyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZElubmVyRWxlbWVudChib2R5SW5mbyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX2NvbnRhaW5lciddfSk7XHJcbiAgICAgICAgY29uc3Qgbm9uZU1lc3NhZ2UgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ25vbmUtbWVzc2FnZSddLHRleHRDb250ZW50OifQktGL0LHQtdGA0LjRgtC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y8uLi4nfSk7XHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQobm9uZU1lc3NhZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRJbm5lckVsZW1lbnQoYm9keUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuZ2V0RWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoYXRzU2VuZGVyKG1lc3NhZ2UsZGF0ZSxzdGF0dXNNZXNzYWdlLGVkaXRNZXNzYWdlLGlkTWVzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydib2R5X19jaGF0cycsJ2JvZHlfX2NoYXRzLXNlbmRlciddLGlkRGF0YTogaWRNZXNzYWdlfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVySW5mbyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLWluZm8nXSB9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJOYW1lID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLW5hbWUnXSwgdGV4dENvbnRlbnQ6ICfQktGLJ30pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlckRhdGUgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonc3BhbicsIGNsYXNzTmFtZXM6IFsnYm9keV9fY2hhdHMtZGF0ZSddLCB0ZXh0Q29udGVudDogZGF0ZX0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlckluZm8uYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck5hbWUpO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlckluZm8uYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlckRhdGUpO1xyXG5cclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlckluZm8pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck1lc3NhZ2UgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX21lc3NhZ2VTZW5kZXInXX0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VQID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3AnLCB0ZXh0Q29udGVudDogbWVzc2FnZX0pO1xyXG4gICAgICAgIGJvZHlDaGF0c1NlbmRlck1lc3NhZ2UuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VQKTtcclxuICAgICAgICBib2R5Q2hhdHNTZW5kZXIuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1NlbmRlck1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1NlbmRlck1lc3NhZ2VTdGF0dXNlcyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidwJywgY2xhc3NOYW1lczpbJ2JvZHlfX21lc3NhZ2VTZW5kZXItc3RhdHVzZXMnXX0pO1xyXG4gICAgICAgIGNvbnN0IGVkaXRNZXNzYWdlVGV4dCA9IGVkaXRNZXNzYWdlID8gZWRpdE1lc3NhZ2UgOiAnJztcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNTZW5kZXJNZXNzYWdlRWRpdCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczpbJ2JvZHlfX21lc3NhZ2VTZW5kZXItZWRpdCddLCB0ZXh0Q29udGVudDogZWRpdE1lc3NhZ2VUZXh0fSk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1c2VzLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJNZXNzYWdlRWRpdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1cyA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczpbJ2JvZHlfX21lc3NhZ2VTZW5kZXItc3RhdHVzJ10sIHRleHRDb250ZW50OiBzdGF0dXNNZXNzYWdlfSk7XHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyTWVzc2FnZVN0YXR1c2VzLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzKTtcclxuXHJcbiAgICAgICAgYm9keUNoYXRzU2VuZGVyLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNTZW5kZXJNZXNzYWdlU3RhdHVzZXMpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGJvZHlDaGF0c1NlbmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDaGF0c1JlY2lwZW50KG1lc3NhZ2UsZGF0ZSx1c2VyUmVjaXBlbnQsaWRNZXNzYWdlKXtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnYm9keV9fY2hhdHMnLCAnYm9keV9fY2hhdHMtcmVjaXBlbnQnXSwgaWREYXRhOiBpZE1lc3NhZ2V9KTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudEluZm8gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1pbmZvJ10gfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnROYW1lID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J3NwYW4nLCBjbGFzc05hbWVzOiBbJ2JvZHlfX2NoYXRzLW5hbWUnXSwgdGV4dENvbnRlbnQ6IHVzZXJSZWNpcGVudH0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50RGF0ZSA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidzcGFuJywgY2xhc3NOYW1lczogWydib2R5X19jaGF0cy1kYXRlJ10sIHRleHRDb250ZW50OiBkYXRlfSk7XHJcbiAgICAgICAgYm9keUNoYXRzUmVjaXBlbnRJbmZvLmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNSZWNpcGVudE5hbWUpO1xyXG4gICAgICAgIGJvZHlDaGF0c1JlY2lwZW50SW5mby5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzUmVjaXBlbnREYXRlKTtcclxuICAgICAgICBib2R5Q2hhdHNSZWNpcGVudC5hZGRJbm5lckVsZW1lbnQoYm9keUNoYXRzUmVjaXBlbnRJbmZvKTtcclxuICAgICAgICBjb25zdCBib2R5Q2hhdHNSZWNpcGVudE1lc3NhZ2UgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2JvZHlfX21lc3NhZ2VSZWNpcGVudCddfSk7XHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzUmVjaXBlbnRNZXNzYWdlUCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidwJywgdGV4dENvbnRlbnQ6IG1lc3NhZ2V9KTtcclxuICAgICAgICBib2R5Q2hhdHNSZWNpcGVudE1lc3NhZ2UuYWRkSW5uZXJFbGVtZW50KGJvZHlDaGF0c1JlY2lwZW50TWVzc2FnZVApO1xyXG4gICAgICAgIGJvZHlDaGF0c1JlY2lwZW50LmFkZElubmVyRWxlbWVudChib2R5Q2hhdHNSZWNpcGVudE1lc3NhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gYm9keUNoYXRzUmVjaXBlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3JztcclxuLy9pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSAnLi4vLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InO1xyXG5pbXBvcnQgeyBzZW5kaW5nTWVzc2FnZVVzZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FwaSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJsb2NrIGV4dGVuZHMgQWJzdHJhY3RWaWV3e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdzLHN0YXRlVXNlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndzID0gd3M7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVVzZXIgPSBzdGF0ZVVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJsb2NrID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6WydtZXNzYWdlQmxvY2snXX0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZm9ybScsIGNsYXNzTmFtZXM6Wydmb3JtJ119KTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBFbGVtZW50Q3JlYXRvcih7XHJcbiAgICAgICAgICAgIHRhZzonaW5wdXQnLCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lczpbJ3VzZXJNZXNzYWdlJ10sIFxyXG4gICAgICAgICAgICBhdHRyOnt0eXBlOlwidGV4dFwiLGRpc2FibGVkOiAnZGlzYWJsZWQnfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3Ioe1xyXG4gICAgICAgICAgICB0YWc6J2J1dHRvbicsIFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOlsnYnRuJ10sIFxyXG4gICAgICAgICAgICBhdHRyOntkaXNhYmxlZDogJ2Rpc2FibGVkJ30sXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAn0J7RgtC/0YDQsNCy0LjRgtGMJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtLmFkZElubmVyRWxlbWVudChpbnB1dCk7XHJcbiAgICAgICAgZm9ybS5hZGRJbm5lckVsZW1lbnQoYnV0dG9uKTtcclxuICAgICAgICBtZXNzYWdlQmxvY2suYWRkSW5uZXJFbGVtZW50KGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBtZXNzYWdlQmxvY2suZ2V0RWxlbWVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRyYWNrSW5wdXQobWVzc2FnZUNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5idG5DbGljayhtZXNzYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tJbnB1dChtZXNzYWdlQ29udGFpbmVyKXtcclxuICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IG1lc3NhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLnVzZXJNZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgYnRuID0gbWVzc2FnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBidG5DbGljayhtZXNzYWdlQ29udGFpbmVyKXtcclxuICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IG1lc3NhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLnVzZXJNZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgYnRuID0gbWVzc2FnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWFnZSA9IHVzZXJNZXNzYWdlLnZhbHVlO1xyXG4gICAgICAgICAgICB1c2VyTWVzc2FnZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBzZW5kaW5nTWVzc2FnZVVzZXIodGhpcy53cyxtZXNzYWFnZSx0aGlzLnN0YXRlVXNlci5zZW5kVXNlcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBmZXRjaGluZ01lc3NhZ2VIaXN0b3J5V2l0aFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9hcGlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQWJzdHJhY3RWaWV3e1xyXG4gICAgY29uc3RydWN0b3Iod3Msc3RhdGVVc2VyKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud3MgPSB3cztcclxuICAgICAgICB0aGlzLnN0YXRlVXNlciA9IHN0YXRlVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gSlNPTi5wYXJzZSh1c2VyT2JqZWN0KS5sb2dpbjtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbiAgICAgICAgc2lkZWJhci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX191c2VyLWN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICAgINCS0Ysg0LLQvtGI0LvQuCDQutCw0Lo6IDxzcGFuIGNsYXNzPVwic2lkZWJhcl9fdXNlci1jdXJyZW50LW5hbWVcIj4ke3VzZXJOYW1lfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaF9fYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzPVwic2VhcmNoX19pbnB1dFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC50YLQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gLi4uXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9J3NpZGViYXJfX2hlYWRlcic+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4OjwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nc2lkZWJhcl9fdXNlcnMnPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGV0IHNpZGViYXJVc2Vyc0xpc3QgPSAnJztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGVVc2VyLnVzZXJzQWN0aXZlJyx0aGlzLnN0YXRlVXNlci51c2Vyc0FjdGl2ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZVVzZXIudXNlcnNBY3RpdmUubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8v0LfQsNC/0YDQvtGB0LjRgtGMINC40YHRgtC+0YDQuNGOINC00LvRjyDQv9C+0LTRgdGH0LXRgtCwINC90LXQv9GA0L7Rh9C40YLQsNC90YvRhSDRgdC+0L7QsdGJ0LXQvdC40LlcclxuICAgICAgICAgICAgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyKHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIudXNlcnNBY3RpdmVbaV0ubG9naW4pO1xyXG5cclxuICAgICAgICAgICAgc2lkZWJhclVzZXJzTGlzdCArPSBgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlci1zdGF0dXMgc2lkZWJhcl9fdXNlci1hY3RpdmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlci1uYW1lXCI+JHt0aGlzLnN0YXRlVXNlci51c2Vyc0FjdGl2ZVtpXS5sb2dpbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fbWVzc2FnZS1udW1iZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGVVc2VyLnVzZXJzSW5hY3JpdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2lkZWJhclVzZXJzTGlzdCArPSBgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3VzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlci1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fdXNlci1uYW1lXCI+JHt0aGlzLnN0YXRlVXNlci51c2Vyc0luYWNyaXZlW2ldLmxvZ2lufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19tZXNzYWdlLW51bWJlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIHNpZGViYXJVc2Vycy5pbm5lckhUTUwgPSBzaWRlYmFyVXNlcnNMaXN0O1xyXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RWaWV3IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyJztcclxuaW1wb3J0IHsgQm9keSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYm9keS9ib2R5JztcclxuaW1wb3J0IHsgTWVzc2FnZUJsb2NrIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlLWJsb2NrL21lc3NhZ2UtYmxvY2snO1xyXG5pbXBvcnQgeyB1c2VyQXV0aGVudGljYXRpb24sIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnMsIGZldGNoaW5nTWVzc2FnZUhpc3RvcnlXaXRoVXNlciwgbWVzc2FnZVJlYWRTdGF0dXNDaGFuZ2UgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGlcIjtcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcih3cyxzdGF0ZVVzZXIpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy53cyA9IHdzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gc3RhdGVVc2VyO1xyXG4gICAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy51c2VyKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVVc2VyLmlzTG9naW5lZCl7XHJcbiAgICAgICAgICAgICAgICB1c2VyQXV0aGVudGljYXRpb24odGhpcy53cyk7IC8vINCQ0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlVXNlci5pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldHRpbmdBbGxBdXRoZW50aWNhdGVkVXNlcnModGhpcy53cyk7IC8v0J/QvtC70YPRh9C10L3QuNC1INCy0YHQtdGFINCw0YPRgtC10L3RgtC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy51c2VyKXtcclxuICAgICAgICAgICAgY29uc3QgcGFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcGFnZU5hbWUuY2xhc3NMaXN0LmFkZCgnY2hhdF9fbm9BdXRoJyk7XHJcbiAgICAgICAgICAgIHBhZ2VOYW1lLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2hhdF9fbm9BdXRoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfX25vQXV0aC10ZXh0XCI+0JLRiyDQvdC1INCw0LLRgtC+0YDQuNC30L7QstCw0L3RiyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2hhdF9fbm9BdXRoLWxpbmtcIiBocmVmPVwiL3JzLWZ1bi1jaGF0L1wiPtCf0LXRgNC10LnRgtC4INC90LAg0YHRgtGA0LDQvdC40YbRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4ITwvYT5cclxuICAgICAgICAgICAgPC9kaXY+IGA7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQocGFnZU5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZU5hbWUuY2xhc3NMaXN0LmFkZCgnY2hhdCcpO1xyXG5cclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gbmV3IFNpZGViYXIodGhpcy53cyx0aGlzLnN0YXRlVXNlcikucmVuZGVyKCk7XHJcbiAgICAgICAgcGFnZU5hbWUuYXBwZW5kKHNpZGViYXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcblxyXG4gICAgICAgIHRoaXMuQm9keUNsYXNzID0gbmV3IEJvZHkodGhpcy53cyx0aGlzLnN0YXRlVXNlcik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmQodGhpcy5Cb2R5Q2xhc3MucmVuZGVyKCkpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKG5ldyBNZXNzYWdlQmxvY2sodGhpcy53cyx0aGlzLnN0YXRlVXNlcikucmVuZGVyKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXIgPSBuZXcgRWxlbWVudENyZWF0b3Ioe3RhZzonZGl2JywgY2xhc3NOYW1lczpbJ2NoYXRfX2Zvb3RlciddfSkuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X19mb290ZXItcnNcIj48aW1nIHNyYz1cIi4vaW1nL3JzLWxvZ28ud2VicFwiPlRoZSBSb2xsaW5nIFNjb3BlcyBTY2hvb2w8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5HaXQgSHViOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRpbWlyb3ZpY3BcIj5WbGFkaW1pcm92aWNwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjIwMjQ8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGZvb3Rlcik7XHJcbiAgICAgICAgcGFnZU5hbWUuYXBwZW5kKG1haW4pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmQocGFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZHJhd2luZ1NpZGViYXIoKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHJhd2luZ1NpZGViYXInKVxyXG5cclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgICAgICBpZihzaWRlYmFyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhck5ldyA9IG5ldyBTaWRlYmFyKHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIpLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGViYXJOZXcnLHNpZGViYXJOZXcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyU3RyID0gc2lkZWJhck5ldy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHNpZGViYXIuaW5uZXJIVE1MID0gc2lkZWJhclN0cjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVXNlcihzaWRlYmFyKVxyXG4gICAgICAgICAgICB0aGlzLmNsaWNrVXNlcihzaWRlYmFyLHRoaXMuc3RhdGVVc2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVXNlcihzaWRlYmFyKXtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lVXNlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItbmFtZScpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZVVzZXIuaW5jbHVkZXMoc2VhcmNoVGV4dCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja1VzZXIoc2lkZWJhcixzdGF0ZVVzZXIpIHtcclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VycycpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcicpO1xyXG4gICAgICAgICAgICBzaWRlYmFyVXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlck5hbWUgPSBzaWRlYmFyVXNlci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVVzZXIuc2VuZFVzZXIgPSBzaWRlYmFyVXNlck5hbWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZW5kVXNlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJVc2VycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgICAgICBjb25zdCBib2R5SW5mbyA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19pbmZvJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJOYW1lID0gYm9keUluZm8ucXVlcnlTZWxlY3RvcignLmJvZHlfX3NlbmQtdXNlci1uYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVVzZXJTdGF0dXMgPSBib2R5SW5mby5xdWVyeVNlbGVjdG9yKCcuYm9keV9fc2VuZC11c2VyLXN0YXR1cycpO1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZVVzZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX191c2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnN0YXRlVXNlci5zZW5kVXNlciA9PT0gbmFtZVVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lVXNlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlclN0YXR1cyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItc3RhdHVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2lkZWJhclVzZXJTdGF0dXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyX191c2VyLWFjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclN0YXR1cy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzdGF0dXMtYWN0aXZlXCI+0JIg0YHQtdGC0Lg8L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVXNlclN0YXR1cy5pbm5lckhUTUwgPSBgPHNwYW4+0J3QtSDQsiDRgdC10YLQuDwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCw0LrRgtC40LLQvdGL0Lkg0LjQvdGC0YPQvyDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40LlcclxuICAgICAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcudXNlck1lc3NhZ2UnKTtcclxuICAgICAgICAgICAgdXNlck1lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpOyBcclxuXHJcbiAgICAgICAgICAgIC8v0J/QvtC70YPRh9C10L3QuNC1INC40YHRgtC+0YDQuNC4INGB0L7QvtCx0YnQtdC90LjQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAgICAgICAgZmV0Y2hpbmdNZXNzYWdlSGlzdG9yeVdpdGhVc2VyKHRoaXMud3MsdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40LksINC60L7RgtC+0YDRi9C1INC+0YLQv9GA0LDQstC40Lsg0Y8hXHJcbiAgICBtYWluTmV3TWVzc2FnZShkYXRlTWVzc2FnZSl7XHJcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBub25lTWVzc2FnZSA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5vbmUtbWVzc2FnZScpO1xyXG4gICAgICAgIGlmKG5vbmVNZXNzYWdlKXtcclxuICAgICAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICB0aGlzLmZvcm1hdGVEYXRlKGRhdGVNZXNzYWdlLmRhdGV0aW1lKTtcclxuICAgICAgICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZGF0ZU1lc3NhZ2Uuc3RhdHVzLmlzUmVhZGVkID8gJ9C/0YDQvtGH0LjRgtCw0L3QvicgOiAn0LTQvtGB0YLQsNCy0LvQtdC90L4nO1xyXG4gICAgICAgIGNvbnN0IGVkaXRNZXNzYWdlID0gZGF0ZU1lc3NhZ2Uuc3RhdHVzLmlzRWRpdGVkID8gJ9C40LfQvNC10L3QtdC90L4nIDogbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyID0gdGhpcy5Cb2R5Q2xhc3MuY3JlYXRlQ2hhdHNTZW5kZXIoZGF0ZU1lc3NhZ2UudGV4dCxkYXRlLHN0YXR1c01lc3NhZ2UsZWRpdE1lc3NhZ2UsZGF0ZU1lc3NhZ2UuaWQpO1xyXG4gICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MICs9IGJvZHlDaGF0c1NlbmRlci5nZXRFbGVtZW50KCkub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC90YPQttC90L4g0LvQuCDQv9GA0L7QutGA0YPRh9C40LLQsNGC0Ywg0LLQvdC40LdcclxuICAgICAgICBpZiAoYm9keUNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBib2R5Q29udGFpbmVyLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBib2R5Q29udGFpbmVyLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogYm9keUNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSBib2R5Q29udGFpbmVyLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9C+0Y/QstC70LXQvdC40Y8g0YHQvtC+0LHRidC10L3QuNGPINC/0YDQuNGB0LvQsNC90L3QvtCz0L4g0LzQvdC1IVxyXG4gICAgaW50ZXJsb2N1dG9yTmV3TWVzc2FnZShkYXRlTWVzc2FnZSl7XHJcblxyXG4gICAgICAgIC8vbGV0IGlzTmV3TWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3Qgbm9uZU1lc3NhZ2UgPSBib2R5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ub25lLW1lc3NhZ2UnKTtcclxuICAgICAgICBpZihub25lTWVzc2FnZSl7XHJcbiAgICAgICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAgdGhpcy5mb3JtYXRlRGF0ZShkYXRlTWVzc2FnZS5kYXRldGltZSk7XHJcbiAgICAgICAgY29uc3QgaXNOZXdNZXNzYWdlID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY2hhdHMtbm90LXJlYWQnKTtcclxuICAgICAgICBpZighaXNOZXdNZXNzYWdlKXtcclxuICAgICAgICAgICAgaWYoIWRhdGVNZXNzYWdlLnN0YXR1cy5pc1JlYWRlZCl7XHJcbiAgICAgICAgICAgICAgICBib2R5Q29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImJvZHlfX2NoYXRzIGJvZHlfX2NoYXRzLW5vdC1yZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QvtCy0YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v0LbQtNC10Lwg0LrQu9C40LrQsCDQtNC70Y8g0YHQvNC10L3RiyDRgdGC0LDRgtGD0YHQsFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbkJveCA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RSZWFkQm94ID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY2hhdHMtbm90LXJlYWQnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgcGFyZW50RWxlbWVudCA9IG5vdFJlYWRCb3gucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyV2hlZWwgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZVN0YXR1c01haW5GdW4gPSB0aGlzLmNoYW5nZVN0YXR1c01haW47XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluV3MgPSB0aGlzLndzO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zICE9PSAnYnRuJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVN0YXR1c01haW5GdW4obWFpbldzKTsgLy8g0LzQtdC90Y/QtdC8INGB0YLQsNGC0YPRgdGLINC90LAg0LzQvtC10Lkg0YHRgtGA0LDQvdC40YfQutC1XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Cb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250YWluZXJXaGVlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYWluQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGJvZHlDb250YWluZXJXaGVlbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2hhbmdlU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlDaGF0c1JlY2lwZW50ID0gdGhpcy5Cb2R5Q2xhc3MuY3JlYXRlQ2hhdHNSZWNpcGVudChkYXRlTWVzc2FnZS50ZXh0LGRhdGUsdGhpcy5zdGF0ZVVzZXIuc2VuZFVzZXIsZGF0ZU1lc3NhZ2UuaWQpO1xyXG4gICAgICAgIGJvZHlDb250YWluZXIuaW5uZXJIVE1MICs9IGJvZHlDaGF0c1JlY2lwZW50LmdldEVsZW1lbnQoKS5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIGlmKGlzTmV3TWVzc2FnZSl7XHJcbiAgICAgICAgICAgIC8v0J/RgNC+0LrRgNGD0YLQutCwINC00L4g0L3QtdC/0YDQvtGH0LjRgtCw0L3QvtCz0L4g0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgICAgY29uc3Qgbm90UmVhZCA9IGJvZHlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvZHlfX2NoYXRzLW5vdC1yZWFkJyk7XHJcbiAgICAgICAgICAgbm90UmVhZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC90YPQttC90L4g0LvQuCDQv9GA0L7QutGA0YPRh9C40LLQsNGC0Ywg0LLQvdC40LdcclxuICAgICAgICAgICAgaWYgKGJvZHlDb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gYm9keUNvbnRhaW5lci5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHlDb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogYm9keUNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSBib2R5Q29udGFpbmVyLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRlRGF0ZSh0aW1lc3RhbXApe1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9LCAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1lc3NhZ2VMaXN0KG1lc3NhZ2Upe1xyXG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IG1lc3NhZ2UucGF5bG9hZC5tZXNzYWdlcztcclxuXHJcbiAgICAgICAgaWYobWVzc2FnZXMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgYm9keUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5vbmUtbWVzc2FnZVwiPtCd0LDQv9C40YjQuNGC0LUg0LLQsNGI0LUg0L/QtdGA0LLQvtC1INGB0L7QvtCx0YnQtdC90LjQtS4uLjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBsZXQgaXNOZXdNZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyID09PSBpdGVtLmZyb20pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v0L7RgtC/0YDQsNCy0LvQtdC90L3Ri9C1INGB0L7QvtCx0YnQtdC90LjRjyDQvNC90L7QuSwg0L/QvtGP0LLQuNGC0YHRjyDRgyDRgdC+0LHQtdGB0LXQtNC90LjQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmxvY3V0b3JOZXdNZXNzYWdlKGl0ZW0saXNOZXdNZXNzYWdlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLy/QvtGC0L/RgNCw0LLQu9C10L3QvdGL0LUg0YHQvtC+0LHRidC10L3QuNGPINC80L3QtVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbk5ld01lc3NhZ2UoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL9C+0LHQvdC+0LLQu9C10L3QuNC1INC90LXQv9GA0L7Rh9C40YLQsNC90L3Ri9GFINGB0L7QvtCx0YnQtdC90LjQuVxyXG4gICAgdXBkYXRlTWVzc2FnZU51bWJlcih1c2VyU2VuZGVyKXtcclxuICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcnMnKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHNpZGViYXJVc2Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuICAgICAgICBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lVXNlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXItbmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAobmFtZVVzZXIgPT09IHVzZXJTZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhck1lc3NhZ2VOdW1iZXIgPSAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fbWVzc2FnZS1udW1iZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJNZXNzYWdlTnVtYmVySXNTcGFuID0gc2lkZWJhck1lc3NhZ2VOdW1iZXIuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgaWYoc2lkZWJhck1lc3NhZ2VOdW1iZXJJc1NwYW4pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJNZXNzYWdlTnVtYmVyU3BhbiA9IHNpZGViYXJNZXNzYWdlTnVtYmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyTWVzc2FnZU51bWJlclNwYW4udGV4dENvbnRlbnQgPSBTdHJpbmcoTnVtYmVyKHNpZGViYXJNZXNzYWdlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck1lc3NhZ2VOdW1iZXIuaW5uZXJIVE1MID0gJzxzcGFuPjE8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdHVzTWFpbih3cyl7XHJcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5X19jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBub3RSZWFkID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9keV9fY2hhdHMtbm90LXJlYWQnKTtcclxuXHJcbiAgICAgICAgLy9zZW5kVXNlclxyXG5cclxuICAgICAgICBpZihub3RSZWFkKXtcclxuICAgICAgICAgICAgLy/Rg9C00LDQu9C40YLRjCDQvtC/0L7QstC10YnQtdC90LjQtSDRgyDQvdGD0LbQvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3VzZXJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gc2lkZWJhclVzZXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyTWVzc2FnZU51bWJlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX21lc3NhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck1lc3NhZ2VOdW1iZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihub3RSZWFkKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50c0FmdGVyUmVmZXJlbmNlID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEVsZW1lbnQgPSBub3RSZWFkLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzQWZ0ZXJSZWZlcmVuY2UucHVzaChuZXh0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0FmdGVyUmVmZXJlbmNlLmZvckVhY2goZWwgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVJlYWRTdGF0dXNDaGFuZ2Uod3MsZWwuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCBib2R5Y2hhdHNSZWNpcGVudHMgPSAgYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuYm9keV9fY2hhdHMtcmVjaXBlbnQnKTtcclxuICAgICAgICAgICAgLy8gYm9keWNoYXRzUmVjaXBlbnRzLmZvckVhY2goIHJlY2lwZW50cyA9PntcclxuICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2VSZWFkU3RhdHVzQ2hhbmdlKHdzLHJlY2lwZW50cy5kYXRhc2V0LmlkKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIG5vdFJlYWQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INC/0L7QutCw0LfRi9Cy0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INGB0L7QvtCx0YnQtdC90LjRjywg0LrQvtGC0L7RgNGL0LUg0L3QtSDQv9GA0L7Rh9C40YLQsNC90YtcclxuICAgIHVwZGF0ZVNpZGViYXJNZXNzYWdlTnVtYmVyKGhpc3RvcnlXaXRoVXNlcil7XHJcblxyXG4gICAgICAgIGlmIChoaXN0b3J5V2l0aFVzZXIucGF5bG9hZC5tZXNzYWdlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgdXNlck9iamVjdCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSBKU09OLnBhcnNlKHVzZXJPYmplY3QpLmxvZ2luO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVyVXNlciA9ICh0aGlzLnN0YXRlVXNlci5oaXN0b3J5V2l0aFVzZXIuaWQpLnJlcGxhY2UoXCJoaXN0b3J5XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlcnMnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBzaWRlYmFyVXNlcnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyVXNlck5hbWVUZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdXNlci1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHNpZGViYXJVc2VyTmFtZVRleHQgPT09IGN1cnJlclVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudE5vdFJlYWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnlXaXRoVXNlci5wYXlsb2FkLm1lc3NhZ2VzLmZvckVhY2goZWwgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsLnRvID09PSB1c2VyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbC5zdGF0dXMuaXNSZWFkZWQgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudE5vdFJlYWQgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY291bnROb3RSZWFkICE9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyTWVzc2FnZU51bWJlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX21lc3NhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJNZXNzYWdlTnVtYmVyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2NvdW50Tm90UmVhZH08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJsb2N1dG9yU3RhdHVzTWVzc2FnZShkYXRhKXtcclxuICAgICAgICBjb25zdCBpZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgY29uc3QgaXNSZWFkZWQgPSBkYXRhLnN0YXR1cy5pc1JlYWRlZDtcclxuXHJcbiAgICAgICAgaWYoaXNSZWFkZWQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlVXNlci5zZW5kVXNlcil7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmJvZHlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keUNoYXRzU2VuZGVyID0gYm9keUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuYm9keV9fY2hhdHMtc2VuZGVyJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGJvZHlDaGF0c1NlbmRlci5mb3JFYWNoKGVsID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmRhdGFzZXQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keU1lc3NhZ2VTZW5kZXJTdGF0dXMgPSBlbC5xdWVyeVNlbGVjdG9yKCcuYm9keV9fbWVzc2FnZVNlbmRlci1zdGF0dXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU1lc3NhZ2VTZW5kZXJTdGF0dXMudGV4dENvbnRlbnQgPSAn0L/RgNC+0YfQuNGC0LDQvdC+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3JztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBFbGVtZW50Q3JlYXRvcih7dGFnOidkaXYnLCBjbGFzc05hbWVzOlsnbm90LWZvdXVuZF9fY29udGFpbmVyJ119KTtcclxuICAgICAgICBjb25zdCBpbmZvID0gbmV3IEVsZW1lbnRDcmVhdG9yKHt0YWc6J2RpdicsIGNsYXNzTmFtZXM6Wydub3QtZm91dW5kX19pbmZvJ10sIHRleHRDb250ZW50OiAnNDA0IE5vdCBGb3VuZCd9KTtcclxuICAgICAgICBjb250YWluZXIuYWRkSW5uZXJFbGVtZW50KGluZm8pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmQoY29udGFpbmVyLmdldEVsZW1lbnQoKSk7XHJcbiAgICB9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL3ByZWZlci1zcHJlYWQgKi9cbmltcG9ydCB7VEFSR0VULCBVTlNVQlNDUklCRSwgUEFUSF9TRVBBUkFUT1J9IGZyb20gJy4vbGliL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2lzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kcywgaXNCdWlsdGluV2l0aG91dE11dGFibGVNZXRob2RzfSBmcm9tICcuL2xpYi9pcy1idWlsdGluLmpzJztcbmltcG9ydCBwYXRoIGZyb20gJy4vbGliL3BhdGguanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9saWIvaXMtYXJyYXkuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vbGliL2lzLXN5bWJvbC5qcyc7XG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2xpYi9pcy1pdGVyYXRvci5qcyc7XG5pbXBvcnQgd3JhcEl0ZXJhdG9yIGZyb20gJy4vbGliL3dyYXAtaXRlcmF0b3IuanMnO1xuaW1wb3J0IGlnbm9yZVByb3BlcnR5IGZyb20gJy4vbGliL2lnbm9yZS1wcm9wZXJ0eS5qcyc7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9saWIvY2FjaGUuanMnO1xuaW1wb3J0IFNtYXJ0Q2xvbmUgZnJvbSAnLi9saWIvc21hcnQtY2xvbmUvc21hcnQtY2xvbmUuanMnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZXF1YWxzOiBPYmplY3QuaXMsXG5cdGlzU2hhbGxvdzogZmFsc2UsXG5cdHBhdGhBc0FycmF5OiBmYWxzZSxcblx0aWdub3JlU3ltYm9sczogZmFsc2UsXG5cdGlnbm9yZVVuZGVyc2NvcmVzOiBmYWxzZSxcblx0aWdub3JlRGV0YWNoZWQ6IGZhbHNlLFxuXHRkZXRhaWxzOiBmYWxzZSxcbn07XG5cbmNvbnN0IG9uQ2hhbmdlID0gKG9iamVjdCwgb25DaGFuZ2UsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdC4uLmRlZmF1bHRPcHRpb25zLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3QgcHJveHlUYXJnZXQgPSBTeW1ib2woJ1Byb3h5VGFyZ2V0Jyk7XG5cdGNvbnN0IHtlcXVhbHMsIGlzU2hhbGxvdywgaWdub3JlRGV0YWNoZWQsIGRldGFpbHN9ID0gb3B0aW9ucztcblx0Y29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoZXF1YWxzKTtcblx0Y29uc3QgaGFzT25WYWxpZGF0ZSA9IHR5cGVvZiBvcHRpb25zLm9uVmFsaWRhdGUgPT09ICdmdW5jdGlvbic7XG5cdGNvbnN0IHNtYXJ0Q2xvbmUgPSBuZXcgU21hcnRDbG9uZShoYXNPblZhbGlkYXRlKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXHRjb25zdCB2YWxpZGF0ZSA9ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcHJldmlvdXMsIGFwcGx5RGF0YSkgPT4gIWhhc09uVmFsaWRhdGVcblx0XHR8fCBzbWFydENsb25lLmlzQ2xvbmluZ1xuXHRcdHx8IG9wdGlvbnMub25WYWxpZGF0ZShwYXRoLmNvbmNhdChjYWNoZS5nZXRQYXRoKHRhcmdldCksIHByb3BlcnR5KSwgdmFsdWUsIHByZXZpb3VzLCBhcHBseURhdGEpID09PSB0cnVlO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZU9uVGFyZ2V0ID0gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cykgPT4ge1xuXHRcdGlmIChcblx0XHRcdCFpZ25vcmVQcm9wZXJ0eShjYWNoZSwgb3B0aW9ucywgcHJvcGVydHkpXG5cdFx0XHQmJiAhKGlnbm9yZURldGFjaGVkICYmIGNhY2hlLmlzRGV0YWNoZWQodGFyZ2V0LCBvYmplY3QpKVxuXHRcdCkge1xuXHRcdFx0aGFuZGxlQ2hhbmdlKGNhY2hlLmdldFBhdGgodGFyZ2V0KSwgcHJvcGVydHksIHZhbHVlLCBwcmV2aW91cyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChjaGFuZ2VQYXRoLCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzLCBhcHBseURhdGEpID0+IHtcblx0XHRpZiAoc21hcnRDbG9uZS5pc0Nsb25pbmcgJiYgc21hcnRDbG9uZS5pc1BhcnRPZkNsb25lKGNoYW5nZVBhdGgpKSB7XG5cdFx0XHRzbWFydENsb25lLnVwZGF0ZShjaGFuZ2VQYXRoLCBwcm9wZXJ0eSwgcHJldmlvdXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvbkNoYW5nZShwYXRoLmNvbmNhdChjaGFuZ2VQYXRoLCBwcm9wZXJ0eSksIHZhbHVlLCBwcmV2aW91cywgYXBwbHlEYXRhKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgZ2V0UHJveHlUYXJnZXQgPSB2YWx1ZSA9PiB2YWx1ZVxuXHRcdD8gKHZhbHVlW3Byb3h5VGFyZ2V0XSA/PyB2YWx1ZSlcblx0XHQ6IHZhbHVlO1xuXG5cdGNvbnN0IHByZXBhcmVWYWx1ZSA9ICh2YWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eSwgYmFzZVBhdGgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRpc0J1aWx0aW5XaXRob3V0TXV0YWJsZU1ldGhvZHModmFsdWUpXG5cdFx0XHR8fCBwcm9wZXJ0eSA9PT0gJ2NvbnN0cnVjdG9yJ1xuXHRcdFx0fHwgKGlzU2hhbGxvdyAmJiAhU21hcnRDbG9uZS5pc0hhbmRsZWRNZXRob2QodGFyZ2V0LCBwcm9wZXJ0eSkpXG5cdFx0XHR8fCBpZ25vcmVQcm9wZXJ0eShjYWNoZSwgb3B0aW9ucywgcHJvcGVydHkpXG5cdFx0XHR8fCBjYWNoZS5pc0dldEludmFyaWFudCh0YXJnZXQsIHByb3BlcnR5KVxuXHRcdFx0fHwgKGlnbm9yZURldGFjaGVkICYmIGNhY2hlLmlzRGV0YWNoZWQodGFyZ2V0LCBvYmplY3QpKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmIChiYXNlUGF0aCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRiYXNlUGF0aCA9IGNhY2hlLmdldFBhdGgodGFyZ2V0KTtcblx0XHR9XG5cblx0XHQvKlxuICBcdFx0Q2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMuXG5cbiAgXHRcdElmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBhIGNvcnJlc3BvbmRpbmcgcGF0aC9wcm94eSxcblx0XHRhbmQgaWYgdGhlIHBhdGggY29ycmVzcG9uZHMgdG8gb25lIG9mIHRoZSBwYXJlbnRzLFxuXHRcdHRoZW4gd2UgYXJlIG9uIGEgY2lyY3VsYXIgY2FzZSwgd2hlcmUgdGhlIGNoaWxkIGlzIHBvaW50aW5nIHRvIHRoZWlyIHBhcmVudC5cblx0XHRJbiB0aGlzIGNhc2Ugd2UgcmV0dXJuIHRoZSBwcm94eSBvYmplY3Qgd2l0aCB0aGUgc2hvcnRlc3QgcGF0aC5cbiAgXHRcdCovXG5cdFx0Y29uc3QgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoYmFzZVBhdGgsIHByb3BlcnR5KTtcblx0XHRjb25zdCBleGlzdGluZ1BhdGggPSBjYWNoZS5nZXRQYXRoKHZhbHVlKTtcblxuXHRcdGlmIChleGlzdGluZ1BhdGggJiYgaXNTYW1lT2JqZWN0VHJlZShjaGlsZFBhdGgsIGV4aXN0aW5nUGF0aCkpIHtcblx0XHRcdC8vIFdlIGFyZSBvbiB0aGUgc2FtZSBvYmplY3QgdHJlZSBidXQgZGVlcGVyLCBzbyB3ZSB1c2UgdGhlIHBhcmVudCBwYXRoLlxuXHRcdFx0cmV0dXJuIGNhY2hlLmdldFByb3h5KHZhbHVlLCBleGlzdGluZ1BhdGgsIGhhbmRsZXIsIHByb3h5VGFyZ2V0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGUuZ2V0UHJveHkodmFsdWUsIGNoaWxkUGF0aCwgaGFuZGxlciwgcHJveHlUYXJnZXQpO1xuXHR9O1xuXG5cdC8qXG5cdFJldHVybnMgdHJ1ZSBpZiBgY2hpbGRQYXRoYCBpcyBhIHN1YnBhdGggb2YgYGV4aXN0aW5nUGF0aGBcblx0KGlmIGNoaWxkUGF0aCBzdGFydHMgd2l0aCBleGlzdGluZ1BhdGgpLiBPdGhlcndpc2UsIGl0IHJldHVybnMgZmFsc2UuXG5cbiBcdEl0IGFsc28gcmV0dXJucyBmYWxzZSBpZiB0aGUgMiBwYXRocyBhcmUgaWRlbnRpY2FsLlxuXG4gXHRGb3IgZXhhbXBsZTpcblx0LSBjaGlsZFBhdGggICAgPSBncm91cC5sYXllcnMuMC5wYXJlbnQubGF5ZXJzLjAudmFsdWVcblx0LSBleGlzdGluZ1BhdGggPSBncm91cC5sYXllcnMuMC5wYXJlbnRcblx0Ki9cblx0Y29uc3QgaXNTYW1lT2JqZWN0VHJlZSA9IChjaGlsZFBhdGgsIGV4aXN0aW5nUGF0aCkgPT4ge1xuXHRcdGlmIChpc1N5bWJvbChjaGlsZFBhdGgpIHx8IGNoaWxkUGF0aC5sZW5ndGggPD0gZXhpc3RpbmdQYXRoLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChpc0FycmF5KGV4aXN0aW5nUGF0aCkgJiYgZXhpc3RpbmdQYXRoLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNoaWxkUGFydHMgPSBpc0FycmF5KGNoaWxkUGF0aCkgPyBjaGlsZFBhdGggOiBjaGlsZFBhdGguc3BsaXQoUEFUSF9TRVBBUkFUT1IpO1xuXHRcdGNvbnN0IGV4aXN0aW5nUGFydHMgPSBpc0FycmF5KGV4aXN0aW5nUGF0aCkgPyBleGlzdGluZ1BhdGggOiBleGlzdGluZ1BhdGguc3BsaXQoUEFUSF9TRVBBUkFUT1IpO1xuXG5cdFx0aWYgKGNoaWxkUGFydHMubGVuZ3RoIDw9IGV4aXN0aW5nUGFydHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEoZXhpc3RpbmdQYXJ0cy5zb21lKChwYXJ0LCBpbmRleCkgPT4gcGFydCAhPT0gY2hpbGRQYXJ0c1tpbmRleF0pKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVyID0ge1xuXHRcdGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuXHRcdFx0aWYgKGlzU3ltYm9sKHByb3BlcnR5KSkge1xuXHRcdFx0XHRpZiAocHJvcGVydHkgPT09IHByb3h5VGFyZ2V0IHx8IHByb3BlcnR5ID09PSBUQVJHRVQpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHByb3BlcnR5ID09PSBVTlNVQlNDUklCRVxuXHRcdFx0XHRcdCYmICFjYWNoZS5pc1Vuc3Vic2NyaWJlZFxuXHRcdFx0XHRcdCYmIGNhY2hlLmdldFBhdGgodGFyZ2V0KS5sZW5ndGggPT09IDBcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y2FjaGUudW5zdWJzY3JpYmUoKTtcblx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gaXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzKHRhcmdldClcblx0XHRcdFx0PyBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5KVxuXHRcdFx0XHQ6IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKTtcblxuXHRcdFx0cmV0dXJuIHByZXBhcmVWYWx1ZSh2YWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eSk7XG5cdFx0fSxcblxuXHRcdHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJveHlUYXJnZXQodmFsdWUpO1xuXG5cdFx0XHRjb25zdCByZWZsZWN0VGFyZ2V0ID0gdGFyZ2V0W3Byb3h5VGFyZ2V0XSA/PyB0YXJnZXQ7XG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IHJlZmxlY3RUYXJnZXRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZXF1YWxzKHByZXZpb3VzLCB2YWx1ZSkgJiYgcHJvcGVydHkgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHByZXZpb3VzKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpc1ZhbGlkXG5cdFx0XHRcdCYmIGNhY2hlLnNldFByb3BlcnR5KHJlZmxlY3RUYXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIHByZXZpb3VzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGhhbmRsZUNoYW5nZU9uVGFyZ2V0KHRhcmdldCwgcHJvcGVydHksIHRhcmdldFtwcm9wZXJ0eV0sIHByZXZpb3VzKTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICFpc1ZhbGlkO1xuXHRcdH0sXG5cblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG5cdFx0XHRpZiAoIWNhY2hlLmlzU2FtZURlc2NyaXB0b3IoZGVzY3JpcHRvciwgdGFyZ2V0LCBwcm9wZXJ0eSkpIHtcblx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSB0YXJnZXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWxpZGF0ZSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLnZhbHVlLCBwcmV2aW91cylcblx0XHRcdFx0XHQmJiBjYWNoZS5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yLCBwcmV2aW91cylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aGFuZGxlQ2hhbmdlT25UYXJnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvci52YWx1ZSwgcHJldmlvdXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0XHRpZiAoIVJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHkpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwcmV2aW91cyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdFx0Y29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlKHRhcmdldCwgcHJvcGVydHksIHVuZGVmaW5lZCwgcHJldmlvdXMpO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGlzVmFsaWRcblx0XHRcdFx0JiYgY2FjaGUuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgcHJldmlvdXMpXG5cdFx0XHQpIHtcblx0XHRcdFx0aGFuZGxlQ2hhbmdlT25UYXJnZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5kZWZpbmVkLCBwcmV2aW91cyk7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAhaXNWYWxpZDtcblx0XHR9LFxuXG5cdFx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmd1bWVudHNMaXN0KSB7XG5cdFx0XHRjb25zdCB0aGlzUHJveHlUYXJnZXQgPSB0aGlzQXJnW3Byb3h5VGFyZ2V0XSA/PyB0aGlzQXJnO1xuXG5cdFx0XHRpZiAoY2FjaGUuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzUHJveHlUYXJnZXQsIGFyZ3VtZW50c0xpc3QpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdChkZXRhaWxzID09PSBmYWxzZVxuXHRcdFx0XHRcdHx8IChkZXRhaWxzICE9PSB0cnVlICYmICFkZXRhaWxzLmluY2x1ZGVzKHRhcmdldC5uYW1lKSkpXG5cdFx0XHRcdCYmIFNtYXJ0Q2xvbmUuaXNIYW5kbGVkVHlwZSh0aGlzUHJveHlUYXJnZXQpXG5cdFx0XHQpIHtcblx0XHRcdFx0bGV0IGFwcGx5UGF0aCA9IHBhdGguaW5pdGlhbChjYWNoZS5nZXRQYXRoKHRhcmdldCkpO1xuXHRcdFx0XHRjb25zdCBpc0hhbmRsZWRNZXRob2QgPSBTbWFydENsb25lLmlzSGFuZGxlZE1ldGhvZCh0aGlzUHJveHlUYXJnZXQsIHRhcmdldC5uYW1lKTtcblxuXHRcdFx0XHRzbWFydENsb25lLnN0YXJ0KHRoaXNQcm94eVRhcmdldCwgYXBwbHlQYXRoLCBhcmd1bWVudHNMaXN0KTtcblxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0c21hcnRDbG9uZS5wcmVmZXJyZWRUaGlzQXJnKHRhcmdldCwgdGhpc0FyZywgdGhpc1Byb3h5VGFyZ2V0KSxcblx0XHRcdFx0XHRpc0hhbmRsZWRNZXRob2Rcblx0XHRcdFx0XHRcdD8gYXJndW1lbnRzTGlzdC5tYXAoYXJndW1lbnQgPT4gZ2V0UHJveHlUYXJnZXQoYXJndW1lbnQpKVxuXHRcdFx0XHRcdFx0OiBhcmd1bWVudHNMaXN0LFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IGlzQ2hhbmdlZCA9IHNtYXJ0Q2xvbmUuaXNDaGFuZ2VkKHRoaXNQcm94eVRhcmdldCwgZXF1YWxzKTtcblx0XHRcdFx0Y29uc3QgcHJldmlvdXMgPSBzbWFydENsb25lLnN0b3AoKTtcblxuXHRcdFx0XHRpZiAoU21hcnRDbG9uZS5pc0hhbmRsZWRUeXBlKHJlc3VsdCkgJiYgaXNIYW5kbGVkTWV0aG9kKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXNBcmcgaW5zdGFuY2VvZiBNYXAgJiYgdGFyZ2V0Lm5hbWUgPT09ICdnZXQnKSB7XG5cdFx0XHRcdFx0XHRhcHBseVBhdGggPSBwYXRoLmNvbmNhdChhcHBseVBhdGgsIGFyZ3VtZW50c0xpc3RbMF0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc3VsdCA9IGNhY2hlLmdldFByb3h5KHJlc3VsdCwgYXBwbHlQYXRoLCBoYW5kbGVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NoYW5nZWQpIHtcblx0XHRcdFx0XHRjb25zdCBhcHBseURhdGEgPSB7XG5cdFx0XHRcdFx0XHRuYW1lOiB0YXJnZXQubmFtZSxcblx0XHRcdFx0XHRcdGFyZ3M6IGFyZ3VtZW50c0xpc3QsXG5cdFx0XHRcdFx0XHRyZXN1bHQsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRjb25zdCBjaGFuZ2VQYXRoID0gc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHRcdFx0XHRcdD8gcGF0aC5pbml0aWFsKGFwcGx5UGF0aClcblx0XHRcdFx0XHRcdDogYXBwbHlQYXRoO1xuXHRcdFx0XHRcdGNvbnN0IHByb3BlcnR5ID0gc21hcnRDbG9uZS5pc0Nsb25pbmdcblx0XHRcdFx0XHRcdD8gcGF0aC5sYXN0KGFwcGx5UGF0aClcblx0XHRcdFx0XHRcdDogJyc7XG5cblx0XHRcdFx0XHRpZiAodmFsaWRhdGUocGF0aC5nZXQob2JqZWN0LCBjaGFuZ2VQYXRoKSwgcHJvcGVydHksIHRoaXNQcm94eVRhcmdldCwgcHJldmlvdXMsIGFwcGx5RGF0YSkpIHtcblx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZShjaGFuZ2VQYXRoLCBwcm9wZXJ0eSwgdGhpc1Byb3h5VGFyZ2V0LCBwcmV2aW91cywgYXBwbHlEYXRhKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c21hcnRDbG9uZS51bmRvKHRoaXNQcm94eVRhcmdldCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCh0aGlzQXJnIGluc3RhbmNlb2YgTWFwIHx8IHRoaXNBcmcgaW5zdGFuY2VvZiBTZXQpXG5cdFx0XHRcdFx0JiYgaXNJdGVyYXRvcihyZXN1bHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiB3cmFwSXRlcmF0b3IocmVzdWx0LCB0YXJnZXQsIHRoaXNBcmcsIGFwcGx5UGF0aCwgcHJlcGFyZVZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJndW1lbnRzTGlzdCk7XG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcm94eSA9IGNhY2hlLmdldFByb3h5KG9iamVjdCwgb3B0aW9ucy5wYXRoQXNBcnJheSA/IFtdIDogJycsIGhhbmRsZXIpO1xuXHRvbkNoYW5nZSA9IG9uQ2hhbmdlLmJpbmQocHJveHkpO1xuXG5cdGlmIChoYXNPblZhbGlkYXRlKSB7XG5cdFx0b3B0aW9ucy5vblZhbGlkYXRlID0gb3B0aW9ucy5vblZhbGlkYXRlLmJpbmQocHJveHkpO1xuXHR9XG5cblx0cmV0dXJuIHByb3h5O1xufTtcblxub25DaGFuZ2UudGFyZ2V0ID0gcHJveHkgPT4gcHJveHk/LltUQVJHRVRdID8/IHByb3h5O1xub25DaGFuZ2UudW5zdWJzY3JpYmUgPSBwcm94eSA9PiBwcm94eT8uW1VOU1VCU0NSSUJFXSA/PyBwcm94eTtcblxuZXhwb3J0IGRlZmF1bHQgb25DaGFuZ2U7XG4iLCJpbXBvcnQgcGF0aCBmcm9tICcuL3BhdGguanMnO1xuXG4vKipcbkBjbGFzcyBDYWNoZVxuQHByaXZhdGVcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZSB7XG5cdGNvbnN0cnVjdG9yKGVxdWFscykge1xuXHRcdHRoaXMuX2VxdWFscyA9IGVxdWFscztcblx0XHR0aGlzLl9wcm94eUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLl9wYXRoQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXHRcdHRoaXMuaXNVbnN1YnNjcmliZWQgPSBmYWxzZTtcblx0fVxuXG5cdF9nZXREZXNjcmlwdG9yQ2FjaGUoKSB7XG5cdFx0aWYgKHRoaXMuX2Rlc2NyaXB0b3JDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9kZXNjcmlwdG9yQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9kZXNjcmlwdG9yQ2FjaGU7XG5cdH1cblxuXHRfZ2V0UHJvcGVydGllcyh0YXJnZXQpIHtcblx0XHRjb25zdCBkZXNjcmlwdG9yQ2FjaGUgPSB0aGlzLl9nZXREZXNjcmlwdG9yQ2FjaGUoKTtcblx0XHRsZXQgcHJvcGVydGllcyA9IGRlc2NyaXB0b3JDYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHByb3BlcnRpZXMgPSB7fTtcblx0XHRcdGRlc2NyaXB0b3JDYWNoZS5zZXQodGFyZ2V0LCBwcm9wZXJ0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvcGVydGllcztcblx0fVxuXG5cdF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IHRoaXMuX2dldFByb3BlcnRpZXModGFyZ2V0KTtcblx0XHRsZXQgZGVzY3JpcHRvciA9IHByb3BlcnRpZXNbcHJvcGVydHldO1xuXG5cdFx0aWYgKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXHRcdFx0cHJvcGVydGllc1twcm9wZXJ0eV0gPSBkZXNjcmlwdG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZXNjcmlwdG9yO1xuXHR9XG5cblx0Z2V0UHJveHkodGFyZ2V0LCBwYXRoLCBoYW5kbGVyLCBwcm94eVRhcmdldCkge1xuXHRcdGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZmxlY3RUYXJnZXQgPSB0YXJnZXRbcHJveHlUYXJnZXRdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IHJlZmxlY3RUYXJnZXQgPz8gdGFyZ2V0O1xuXG5cdFx0dGhpcy5fcGF0aENhY2hlLnNldChzb3VyY2UsIHBhdGgpO1xuXG5cdFx0bGV0IHByb3h5ID0gdGhpcy5fcHJveHlDYWNoZS5nZXQoc291cmNlKTtcblxuXHRcdGlmIChwcm94eSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRwcm94eSA9IHJlZmxlY3RUYXJnZXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpXG5cdFx0XHRcdDogdGFyZ2V0O1xuXG5cdFx0XHR0aGlzLl9wcm94eUNhY2hlLnNldChzb3VyY2UsIHByb3h5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJveHk7XG5cdH1cblxuXHRnZXRQYXRoKHRhcmdldCkge1xuXHRcdHJldHVybiB0aGlzLmlzVW5zdWJzY3JpYmVkID8gdW5kZWZpbmVkIDogdGhpcy5fcGF0aENhY2hlLmdldCh0YXJnZXQpO1xuXHR9XG5cblx0aXNEZXRhY2hlZCh0YXJnZXQsIG9iamVjdCkge1xuXHRcdHJldHVybiAhT2JqZWN0LmlzKHRhcmdldCwgcGF0aC5nZXQob2JqZWN0LCB0aGlzLmdldFBhdGgodGFyZ2V0KSkpO1xuXHR9XG5cblx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuXHRcdGlmICghUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuXHRcdFx0dGhpcy5fZ2V0UHJvcGVydGllcyh0YXJnZXQpW3Byb3BlcnR5XSA9IGRlc2NyaXB0b3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIHByZXZpb3VzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LXBhcmFtc1xuXHRcdGlmICghdGhpcy5fZXF1YWxzKHByZXZpb3VzLCB2YWx1ZSkgfHwgIShwcm9wZXJ0eSBpbiB0YXJnZXQpKSB7XG5cdFx0XHRjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5fZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHkpO1xuXG5cdFx0XHRpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkICYmICdzZXQnIGluIGRlc2NyaXB0b3IpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBwcmV2aW91cykge1xuXHRcdGlmIChSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpKSB7XG5cdFx0XHRpZiAoIXRoaXMuaXNVbnN1YnNjcmliZWQpIHtcblx0XHRcdFx0Y29uc3QgcHJvcGVydGllcyA9IHRoaXMuX2dldERlc2NyaXB0b3JDYWNoZSgpLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRcdGlmIChwcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIHByb3BlcnRpZXNbcHJvcGVydHldO1xuXHRcdFx0XHRcdHRoaXMuX3BhdGhDYWNoZS5kZWxldGUocHJldmlvdXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlzU2FtZURlc2NyaXB0b3IoYSwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuXHRcdGNvbnN0IGIgPSB0aGlzLl9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cblx0XHRyZXR1cm4gYSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQmJiBiICE9PSB1bmRlZmluZWRcblx0XHRcdCYmIE9iamVjdC5pcyhhLnZhbHVlLCBiLnZhbHVlKVxuXHRcdFx0JiYgKGEud3JpdGFibGUgfHwgZmFsc2UpID09PSAoYi53cml0YWJsZSB8fCBmYWxzZSlcblx0XHRcdCYmIChhLmVudW1lcmFibGUgfHwgZmFsc2UpID09PSAoYi5lbnVtZXJhYmxlIHx8IGZhbHNlKVxuXHRcdFx0JiYgKGEuY29uZmlndXJhYmxlIHx8IGZhbHNlKSA9PT0gKGIuY29uZmlndXJhYmxlIHx8IGZhbHNlKVxuXHRcdFx0JiYgYS5nZXQgPT09IGIuZ2V0XG5cdFx0XHQmJiBhLnNldCA9PT0gYi5zZXQ7XG5cdH1cblxuXHRpc0dldEludmFyaWFudCh0YXJnZXQsIHByb3BlcnR5KSB7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2dldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5KTtcblxuXHRcdHJldHVybiBkZXNjcmlwdG9yICE9PSB1bmRlZmluZWRcblx0XHRcdCYmIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICE9PSB0cnVlXG5cdFx0XHQmJiBkZXNjcmlwdG9yLndyaXRhYmxlICE9PSB0cnVlO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoKSB7XG5cdFx0dGhpcy5fZGVzY3JpcHRvckNhY2hlID0gbnVsbDtcblx0XHR0aGlzLl9wYXRoQ2FjaGUgPSBudWxsO1xuXHRcdHRoaXMuX3Byb3h5Q2FjaGUgPSBudWxsO1xuXHRcdHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgUEFUSF9TRVBBUkFUT1IgPSAnLic7XG5leHBvcnQgY29uc3QgVEFSR0VUID0gU3ltYm9sKCd0YXJnZXQnKTtcbmV4cG9ydCBjb25zdCBVTlNVQlNDUklCRSA9IFN5bWJvbCgndW5zdWJzY3JpYmUnKTtcbiIsImltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzLXN5bWJvbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlnbm9yZVByb3BlcnR5KGNhY2hlLCBvcHRpb25zLCBwcm9wZXJ0eSkge1xuXHRyZXR1cm4gY2FjaGUuaXNVbnN1YnNjcmliZWRcblx0XHR8fCAob3B0aW9ucy5pZ25vcmVTeW1ib2xzICYmIGlzU3ltYm9sKHByb3BlcnR5KSlcblx0XHR8fCAob3B0aW9ucy5pZ25vcmVVbmRlcnNjb3JlcyAmJiBwcm9wZXJ0eS5jaGFyQXQoMCkgPT09ICdfJylcblx0XHR8fCAoJ2lnbm9yZUtleXMnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5pZ25vcmVLZXlzLmluY2x1ZGVzKHByb3BlcnR5KSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBBcnJheS5pc0FycmF5O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbHRpbldpdGhNdXRhYmxlTWV0aG9kcyh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlXG5cdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBTZXRcblx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcFxuXHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgV2Vha1NldFxuXHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgV2Vha01hcFxuXHRcdHx8IEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWx0aW5XaXRob3V0TXV0YWJsZU1ldGhvZHModmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgPT09IG51bGwgOiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyYXRvcih2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUubmV4dCA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJztcbn1cbiIsImltcG9ydCB7UEFUSF9TRVBBUkFUT1J9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXMtYXJyYXkuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXMtc3ltYm9sLmpzJztcblxuY29uc3QgcGF0aCA9IHtcblx0YWZ0ZXIocGF0aCwgc3ViUGF0aCkge1xuXHRcdGlmIChpc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aC5zbGljZShzdWJQYXRoLmxlbmd0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN1YlBhdGggPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aC5zbGljZShzdWJQYXRoLmxlbmd0aCArIDEpO1xuXHR9LFxuXHRjb25jYXQocGF0aCwga2V5KSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdHBhdGggPSBbLi4ucGF0aF07XG5cblx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0cGF0aC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgJiYga2V5LnRvU3RyaW5nICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmIChwYXRoICE9PSAnJykge1xuXHRcdFx0XHRwYXRoICs9IFBBVEhfU0VQQVJBVE9SO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNTeW1ib2woa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gcGF0aCArIGtleS50b1N0cmluZygpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcGF0aCArIGtleTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aDtcblx0fSxcblx0aW5pdGlhbChwYXRoKSB7XG5cdFx0aWYgKGlzQXJyYXkocGF0aCkpIHtcblx0XHRcdHJldHVybiBwYXRoLnNsaWNlKDAsIC0xKTtcblx0XHR9XG5cblx0XHRpZiAocGF0aCA9PT0gJycpIHtcblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZihQQVRIX1NFUEFSQVRPUik7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGguc2xpY2UoMCwgaW5kZXgpO1xuXHR9LFxuXHRsYXN0KHBhdGgpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGguYXQoLTEpID8/ICcnO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHBhdGg7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKFBBVEhfU0VQQVJBVE9SKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoLnNsaWNlKGluZGV4ICsgMSk7XG5cdH0sXG5cdHdhbGsocGF0aCwgY2FsbGJhY2spIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgcGF0aCkge1xuXHRcdFx0XHRjYWxsYmFjayhrZXkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocGF0aCAhPT0gJycpIHtcblx0XHRcdGxldCBwb3NpdGlvbiA9IDA7XG5cdFx0XHRsZXQgaW5kZXggPSBwYXRoLmluZGV4T2YoUEFUSF9TRVBBUkFUT1IpO1xuXG5cdFx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdGNhbGxiYWNrKHBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKHBvc2l0aW9uIDwgcGF0aC5sZW5ndGgpIHtcblx0XHRcdFx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IHBhdGgubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNhbGxiYWNrKHBhdGguc2xpY2UocG9zaXRpb24sIGluZGV4KSk7XG5cblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4ICsgMTtcblx0XHRcdFx0XHRpbmRleCA9IHBhdGguaW5kZXhPZihQQVRIX1NFUEFSQVRPUiwgcG9zaXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRnZXQob2JqZWN0LCBwYXRoKSB7XG5cdFx0dGhpcy53YWxrKHBhdGgsIGtleSA9PiB7XG5cdFx0XHRpZiAob2JqZWN0KSB7XG5cdFx0XHRcdG9iamVjdCA9IG9iamVjdFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fSxcblx0aXNTdWJQYXRoKHBhdGgsIHN1YlBhdGgpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0aWYgKHBhdGgubGVuZ3RoIDwgc3ViUGF0aC5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1mb3ItbG9vcFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdWJQYXRoLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwYXRoW2ldICE9PSBzdWJQYXRoW2ldKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoLmxlbmd0aCA8IHN1YlBhdGgubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHBhdGggPT09IHN1YlBhdGgpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChwYXRoLnN0YXJ0c1dpdGgoc3ViUGF0aCkpIHtcblx0XHRcdHJldHVybiBwYXRoW3N1YlBhdGgubGVuZ3RoXSA9PT0gUEFUSF9TRVBBUkFUT1I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRpc1Jvb3RQYXRoKHBhdGgpIHtcblx0XHRpZiAoaXNBcnJheShwYXRoKSkge1xuXHRcdFx0cmV0dXJuIHBhdGgubGVuZ3RoID09PSAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoID09PSAnJztcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhdGg7XG4iLCJpbXBvcnQge0hBTkRMRURfQVJSQVlfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9hcnJheS5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS1vYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9uZUFycmF5IGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRzdGF0aWMgaXNIYW5kbGVkTWV0aG9kKG5hbWUpIHtcblx0XHRyZXR1cm4gSEFORExFRF9BUlJBWV9NRVRIT0RTLmhhcyhuYW1lKTtcblx0fVxufVxuIiwiaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVEYXRlIGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHR1bmRvKG9iamVjdCkge1xuXHRcdG9iamVjdC5zZXRUaW1lKHRoaXMuY2xvbmUuZ2V0VGltZSgpKTtcblx0fVxuXG5cdGlzQ2hhbmdlZCh2YWx1ZSwgZXF1YWxzKSB7XG5cdFx0cmV0dXJuICFlcXVhbHModGhpcy5jbG9uZS52YWx1ZU9mKCksIHZhbHVlLnZhbHVlT2YoKSk7XG5cdH1cbn1cbiIsImltcG9ydCB7SEFORExFRF9NQVBfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9tYXAuanMnO1xuaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVNYXAgZXh0ZW5kcyBDbG9uZU9iamVjdCB7XG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QobmFtZSkge1xuXHRcdHJldHVybiBIQU5ETEVEX01BUF9NRVRIT0RTLmhhcyhuYW1lKTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5jbG9uZS5lbnRyaWVzKCkpIHtcblx0XHRcdG9iamVjdC5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBrZXkgb2Ygb2JqZWN0LmtleXMoKSkge1xuXHRcdFx0aWYgKCF0aGlzLmNsb25lLmhhcyhrZXkpKSB7XG5cdFx0XHRcdG9iamVjdC5kZWxldGUoa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBwYXRoIGZyb20gJy4uLy4uL3BhdGguanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vLi4vaXMtYXJyYXkuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uLy4uL2lzLW9iamVjdC5qcyc7XG5pbXBvcnQge01VVEFCTEVfQVJSQVlfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9hcnJheS5qcyc7XG5pbXBvcnQge01VVEFCTEVfU0VUX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvc2V0LmpzJztcbmltcG9ydCB7TVVUQUJMRV9NQVBfTUVUSE9EU30gZnJvbSAnLi4vbWV0aG9kcy9tYXAuanMnO1xuaW1wb3J0IHtJTU1VVEFCTEVfT0JKRUNUX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSkge1xuXHRcdHRoaXMuX3BhdGggPSBwYXRoO1xuXHRcdHRoaXMuX2lzQ2hhbmdlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2Nsb25lZENhY2hlID0gbmV3IFNldCgpO1xuXHRcdHRoaXMuX2hhc09uVmFsaWRhdGUgPSBoYXNPblZhbGlkYXRlO1xuXHRcdHRoaXMuX2NoYW5nZXMgPSBoYXNPblZhbGlkYXRlID8gW10gOiBudWxsO1xuXG5cdFx0dGhpcy5jbG9uZSA9IHBhdGggPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5fc2hhbGxvd0Nsb25lKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QobmFtZSkge1xuXHRcdHJldHVybiBJTU1VVEFCTEVfT0JKRUNUX01FVEhPRFMuaGFzKG5hbWUpO1xuXHR9XG5cblx0X3NoYWxsb3dDbG9uZSh2YWx1ZSkge1xuXHRcdGxldCBjbG9uZSA9IHZhbHVlO1xuXG5cdFx0aWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuXHRcdFx0Y2xvbmUgPSB7Li4udmFsdWV9O1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuXHRcdFx0Y2xvbmUgPSBbLi4udmFsdWVdO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRjbG9uZSA9IG5ldyBEYXRlKHZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XG5cdFx0XHRjbG9uZSA9IG5ldyBTZXQoWy4uLnZhbHVlXS5tYXAoaXRlbSA9PiB0aGlzLl9zaGFsbG93Q2xvbmUoaXRlbSkpKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRjbG9uZSA9IG5ldyBNYXAoKTtcblxuXHRcdFx0Zm9yIChjb25zdCBba2V5LCBpdGVtXSBvZiB2YWx1ZS5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y2xvbmUuc2V0KGtleSwgdGhpcy5fc2hhbGxvd0Nsb25lKGl0ZW0pKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9jbG9uZWRDYWNoZS5hZGQoY2xvbmUpO1xuXG5cdFx0cmV0dXJuIGNsb25lO1xuXHR9XG5cblx0cHJlZmVycmVkVGhpc0FyZyhpc0hhbmRsZWRNZXRob2QsIG5hbWUsIHRoaXNBcmd1bWVudCwgdGhpc1Byb3h5VGFyZ2V0KSB7XG5cdFx0aWYgKGlzSGFuZGxlZE1ldGhvZCkge1xuXHRcdFx0aWYgKGlzQXJyYXkodGhpc1Byb3h5VGFyZ2V0KSkge1xuXHRcdFx0XHR0aGlzLl9vbklzQ2hhbmdlZCA9IE1VVEFCTEVfQVJSQVlfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH0gZWxzZSBpZiAodGhpc1Byb3h5VGFyZ2V0IGluc3RhbmNlb2YgU2V0KSB7XG5cdFx0XHRcdHRoaXMuX29uSXNDaGFuZ2VkID0gTVVUQUJMRV9TRVRfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH0gZWxzZSBpZiAodGhpc1Byb3h5VGFyZ2V0IGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0XHRcdHRoaXMuX29uSXNDaGFuZ2VkID0gTVVUQUJMRV9NQVBfTUVUSE9EU1tuYW1lXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNQcm94eVRhcmdldDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc0FyZ3VtZW50O1xuXHR9XG5cblx0dXBkYXRlKGZ1bGxQYXRoLCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHRjb25zdCBjaGFuZ2VQYXRoID0gcGF0aC5hZnRlcihmdWxsUGF0aCwgdGhpcy5fcGF0aCk7XG5cblx0XHRpZiAocHJvcGVydHkgIT09ICdsZW5ndGgnKSB7XG5cdFx0XHRsZXQgb2JqZWN0ID0gdGhpcy5jbG9uZTtcblxuXHRcdFx0cGF0aC53YWxrKGNoYW5nZVBhdGgsIGtleSA9PiB7XG5cdFx0XHRcdGlmIChvYmplY3Q/LltrZXldKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9jbG9uZWRDYWNoZS5oYXMob2JqZWN0W2tleV0pKSB7XG5cdFx0XHRcdFx0XHRvYmplY3Rba2V5XSA9IHRoaXMuX3NoYWxsb3dDbG9uZShvYmplY3Rba2V5XSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b2JqZWN0ID0gb2JqZWN0W2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5faGFzT25WYWxpZGF0ZSkge1xuXHRcdFx0XHR0aGlzLl9jaGFuZ2VzLnB1c2goe1xuXHRcdFx0XHRcdHBhdGg6IGNoYW5nZVBhdGgsXG5cdFx0XHRcdFx0cHJvcGVydHksXG5cdFx0XHRcdFx0cHJldmlvdXM6IHZhbHVlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9iamVjdD8uW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRvYmplY3RbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5faXNDaGFuZ2VkID0gdHJ1ZTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0bGV0IGNoYW5nZTtcblxuXHRcdGZvciAobGV0IGluZGV4ID0gdGhpcy5fY2hhbmdlcy5sZW5ndGggLSAxOyBpbmRleCAhPT0gLTE7IGluZGV4LS0pIHtcblx0XHRcdGNoYW5nZSA9IHRoaXMuX2NoYW5nZXNbaW5kZXhdO1xuXG5cdFx0XHRwYXRoLmdldChvYmplY3QsIGNoYW5nZS5wYXRoKVtjaGFuZ2UucHJvcGVydHldID0gY2hhbmdlLnByZXZpb3VzO1xuXHRcdH1cblx0fVxuXG5cdGlzQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLl9vbklzQ2hhbmdlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHRoaXMuX2lzQ2hhbmdlZFxuXHRcdFx0OiB0aGlzLl9vbklzQ2hhbmdlZCh0aGlzLmNsb25lLCB2YWx1ZSk7XG5cdH1cblxuXHRpc1BhdGhBcHBsaWNhYmxlKGNoYW5nZVBhdGgpIHtcblx0XHRyZXR1cm4gcGF0aC5pc1Jvb3RQYXRoKHRoaXMuX3BhdGgpIHx8IHBhdGguaXNTdWJQYXRoKGNoYW5nZVBhdGgsIHRoaXMuX3BhdGgpO1xuXHR9XG59XG4iLCJpbXBvcnQge0hBTkRMRURfU0VUX01FVEhPRFN9IGZyb20gJy4uL21ldGhvZHMvc2V0LmpzJztcbmltcG9ydCBDbG9uZU9iamVjdCBmcm9tICcuL2Nsb25lLW9iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lU2V0IGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRzdGF0aWMgaXNIYW5kbGVkTWV0aG9kKG5hbWUpIHtcblx0XHRyZXR1cm4gSEFORExFRF9TRVRfTUVUSE9EUy5oYXMobmFtZSk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5jbG9uZSkge1xuXHRcdFx0b2JqZWN0LmFkZCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiBvYmplY3QpIHtcblx0XHRcdGlmICghdGhpcy5jbG9uZS5oYXModmFsdWUpKSB7XG5cdFx0XHRcdG9iamVjdC5kZWxldGUodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVXZWFrTWFwIGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSkge1xuXHRcdHN1cGVyKHVuZGVmaW5lZCwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSk7XG5cblx0XHR0aGlzLl93ZWFrS2V5ID0gYXJndW1lbnRzTGlzdFswXTtcblx0XHR0aGlzLl93ZWFrSGFzID0gdmFsdWUuaGFzKHRoaXMuX3dlYWtLZXkpO1xuXHRcdHRoaXMuX3dlYWtWYWx1ZSA9IHZhbHVlLmdldCh0aGlzLl93ZWFrS2V5KTtcblx0fVxuXG5cdGlzQ2hhbmdlZCh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzLl93ZWFrVmFsdWUgIT09IHZhbHVlLmdldCh0aGlzLl93ZWFrS2V5KTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0Y29uc3Qgd2Vha0hhcyA9IG9iamVjdC5oYXModGhpcy5fd2Vha0tleSk7XG5cblx0XHRpZiAodGhpcy5fd2Vha0hhcyAmJiAhd2Vha0hhcykge1xuXHRcdFx0b2JqZWN0LnNldCh0aGlzLl93ZWFrS2V5LCB0aGlzLl93ZWFrVmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMuX3dlYWtIYXMgJiYgd2Vha0hhcykge1xuXHRcdFx0b2JqZWN0LmRlbGV0ZSh0aGlzLl93ZWFrS2V5KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuX3dlYWtWYWx1ZSAhPT0gb2JqZWN0LmdldCh0aGlzLl93ZWFrS2V5KSkge1xuXHRcdFx0b2JqZWN0LnNldCh0aGlzLl93ZWFrS2V5LCB0aGlzLl93ZWFrVmFsdWUpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IENsb25lT2JqZWN0IGZyb20gJy4vY2xvbmUtb2JqZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvbmVXZWFrU2V0IGV4dGVuZHMgQ2xvbmVPYmplY3Qge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSkge1xuXHRcdHN1cGVyKHVuZGVmaW5lZCwgcGF0aCwgYXJndW1lbnRzTGlzdCwgaGFzT25WYWxpZGF0ZSk7XG5cblx0XHR0aGlzLl9hcmd1bWVudDEgPSBhcmd1bWVudHNMaXN0WzBdO1xuXHRcdHRoaXMuX3dlYWtWYWx1ZSA9IHZhbHVlLmhhcyh0aGlzLl9hcmd1bWVudDEpO1xuXHR9XG5cblx0aXNDaGFuZ2VkKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3dlYWtWYWx1ZSAhPT0gdmFsdWUuaGFzKHRoaXMuX2FyZ3VtZW50MSk7XG5cdH1cblxuXHR1bmRvKG9iamVjdCkge1xuXHRcdGlmICh0aGlzLl93ZWFrVmFsdWUgJiYgIW9iamVjdC5oYXModGhpcy5fYXJndW1lbnQxKSkge1xuXHRcdFx0b2JqZWN0LmFkZCh0aGlzLl9hcmd1bWVudDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvYmplY3QuZGVsZXRlKHRoaXMuX2FyZ3VtZW50MSk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RpZmZBcnJheXMoY2xvbmUsIHZhbHVlKSB7XG5cdHJldHVybiBjbG9uZS5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCB8fCBjbG9uZS5zb21lKChpdGVtLCBpbmRleCkgPT4gdmFsdWVbaW5kZXhdICE9PSBpdGVtKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGlmZkNlcnRhaW4oKSB7XG5cdHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEaWZmTWFwcyhjbG9uZSwgdmFsdWUpIHtcblx0aWYgKGNsb25lLnNpemUgIT09IHZhbHVlLnNpemUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGxldCBiVmFsdWU7XG5cdGZvciAoY29uc3QgW2tleSwgYVZhbHVlXSBvZiBjbG9uZSkge1xuXHRcdGJWYWx1ZSA9IHZhbHVlLmdldChrZXkpO1xuXG5cdFx0aWYgKGJWYWx1ZSAhPT0gYVZhbHVlIHx8IChiVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhdmFsdWUuaGFzKGtleSkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RpZmZTZXRzKGNsb25lLCB2YWx1ZSkge1xuXHRpZiAoY2xvbmUuc2l6ZSAhPT0gdmFsdWUuc2l6ZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGNsb25lKSB7XG5cdFx0aWYgKCF2YWx1ZS5oYXMoZWxlbWVudCkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBpc0RpZmZDZXJ0YWluIGZyb20gJy4uL2RpZmYvaXMtZGlmZi1jZXJ0YWluLmpzJztcbmltcG9ydCBpc0RpZmZBcnJheXMgZnJvbSAnLi4vZGlmZi9pcy1kaWZmLWFycmF5cy5qcyc7XG5pbXBvcnQge0lNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EU30gZnJvbSAnLi9vYmplY3QuanMnO1xuXG5jb25zdCBJTU1VVEFCTEVfQVJSQVlfTUVUSE9EUyA9IG5ldyBTZXQoW1xuXHQnY29uY2F0Jyxcblx0J2luY2x1ZGVzJyxcblx0J2luZGV4T2YnLFxuXHQnam9pbicsXG5cdCdrZXlzJyxcblx0J2xhc3RJbmRleE9mJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgTVVUQUJMRV9BUlJBWV9NRVRIT0RTID0ge1xuXHRwdXNoOiBpc0RpZmZDZXJ0YWluLFxuXHRwb3A6IGlzRGlmZkNlcnRhaW4sXG5cdHNoaWZ0OiBpc0RpZmZDZXJ0YWluLFxuXHR1bnNoaWZ0OiBpc0RpZmZDZXJ0YWluLFxuXHRjb3B5V2l0aGluOiBpc0RpZmZBcnJheXMsXG5cdHJldmVyc2U6IGlzRGlmZkFycmF5cyxcblx0c29ydDogaXNEaWZmQXJyYXlzLFxuXHRzcGxpY2U6IGlzRGlmZkFycmF5cyxcblx0ZmxhdDogaXNEaWZmQXJyYXlzLFxuXHRmaWxsOiBpc0RpZmZBcnJheXMsXG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFRF9BUlJBWV9NRVRIT0RTID0gbmV3IFNldChbXG5cdC4uLklNTVVUQUJMRV9PQkpFQ1RfTUVUSE9EUyxcblx0Li4uSU1NVVRBQkxFX0FSUkFZX01FVEhPRFMsXG5cdC4uLk9iamVjdC5rZXlzKE1VVEFCTEVfQVJSQVlfTUVUSE9EUyksXG5dKTtcbiIsImltcG9ydCBpc0RpZmZNYXBzIGZyb20gJy4uL2RpZmYvaXMtZGlmZi1tYXBzLmpzJztcbmltcG9ydCB7SU1NVVRBQkxFX1NFVF9NRVRIT0RTLCBDT0xMRUNUSU9OX0lURVJBVE9SX01FVEhPRFN9IGZyb20gJy4vc2V0LmpzJztcblxuY29uc3QgSU1NVVRBQkxFX01BUF9NRVRIT0RTID0gbmV3IFNldChbLi4uSU1NVVRBQkxFX1NFVF9NRVRIT0RTLCAnZ2V0J10pO1xuXG5leHBvcnQgY29uc3QgTVVUQUJMRV9NQVBfTUVUSE9EUyA9IHtcblx0c2V0OiBpc0RpZmZNYXBzLFxuXHRjbGVhcjogaXNEaWZmTWFwcyxcblx0ZGVsZXRlOiBpc0RpZmZNYXBzLFxuXHRmb3JFYWNoOiBpc0RpZmZNYXBzLFxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRURfTUFQX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0Li4uSU1NVVRBQkxFX01BUF9NRVRIT0RTLFxuXHQuLi5PYmplY3Qua2V5cyhNVVRBQkxFX01BUF9NRVRIT0RTKSxcblx0Li4uQ09MTEVDVElPTl9JVEVSQVRPUl9NRVRIT0RTLFxuXSk7XG4iLCJleHBvcnQgY29uc3QgSU1NVVRBQkxFX09CSkVDVF9NRVRIT0RTID0gbmV3IFNldChbXG5cdCdoYXNPd25Qcm9wZXJ0eScsXG5cdCdpc1Byb3RvdHlwZU9mJyxcblx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3RvU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXSk7XG4iLCJpbXBvcnQgaXNEaWZmU2V0cyBmcm9tICcuLi9kaWZmL2lzLWRpZmYtc2V0cy5qcyc7XG5cbmV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX0lURVJBVE9SX01FVEhPRFMgPSBbXG5cdCdrZXlzJyxcblx0J3ZhbHVlcycsXG5cdCdlbnRyaWVzJyxcbl07XG5cbmV4cG9ydCBjb25zdCBJTU1VVEFCTEVfU0VUX01FVEhPRFMgPSBuZXcgU2V0KFtcblx0J2hhcycsXG5cdCd0b1N0cmluZycsXG5dKTtcblxuZXhwb3J0IGNvbnN0IE1VVEFCTEVfU0VUX01FVEhPRFMgPSB7XG5cdGFkZDogaXNEaWZmU2V0cyxcblx0Y2xlYXI6IGlzRGlmZlNldHMsXG5cdGRlbGV0ZTogaXNEaWZmU2V0cyxcblx0Zm9yRWFjaDogaXNEaWZmU2V0cyxcbn07XG5cbmV4cG9ydCBjb25zdCBIQU5ETEVEX1NFVF9NRVRIT0RTID0gbmV3IFNldChbXG5cdC4uLklNTVVUQUJMRV9TRVRfTUVUSE9EUyxcblx0Li4uT2JqZWN0LmtleXMoTVVUQUJMRV9TRVRfTUVUSE9EUyksXG5cdC4uLkNPTExFQ1RJT05fSVRFUkFUT1JfTUVUSE9EUyxcbl0pO1xuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi4vaXMtYXJyYXkuanMnO1xuaW1wb3J0IHtpc0J1aWx0aW5XaXRoTXV0YWJsZU1ldGhvZHN9IGZyb20gJy4uL2lzLWJ1aWx0aW4uanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL2lzLW9iamVjdC5qcyc7XG5pbXBvcnQgQ2xvbmVPYmplY3QgZnJvbSAnLi9jbG9uZS9jbG9uZS1vYmplY3QuanMnO1xuaW1wb3J0IENsb25lQXJyYXkgZnJvbSAnLi9jbG9uZS9jbG9uZS1hcnJheS5qcyc7XG5pbXBvcnQgQ2xvbmVEYXRlIGZyb20gJy4vY2xvbmUvY2xvbmUtZGF0ZS5qcyc7XG5pbXBvcnQgQ2xvbmVTZXQgZnJvbSAnLi9jbG9uZS9jbG9uZS1zZXQuanMnO1xuaW1wb3J0IENsb25lTWFwIGZyb20gJy4vY2xvbmUvY2xvbmUtbWFwLmpzJztcbmltcG9ydCBDbG9uZVdlYWtTZXQgZnJvbSAnLi9jbG9uZS9jbG9uZS13ZWFrc2V0LmpzJztcbmltcG9ydCBDbG9uZVdlYWtNYXAgZnJvbSAnLi9jbG9uZS9jbG9uZS13ZWFrbWFwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRDbG9uZSB7XG5cdGNvbnN0cnVjdG9yKGhhc09uVmFsaWRhdGUpIHtcblx0XHR0aGlzLl9zdGFjayA9IFtdO1xuXHRcdHRoaXMuX2hhc09uVmFsaWRhdGUgPSBoYXNPblZhbGlkYXRlO1xuXHR9XG5cblx0c3RhdGljIGlzSGFuZGxlZFR5cGUodmFsdWUpIHtcblx0XHRyZXR1cm4gaXNPYmplY3QodmFsdWUpXG5cdFx0XHR8fCBpc0FycmF5KHZhbHVlKVxuXHRcdFx0fHwgaXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzKHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyBpc0hhbmRsZWRNZXRob2QodGFyZ2V0LCBuYW1lKSB7XG5cdFx0aWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcblx0XHRcdHJldHVybiBDbG9uZU9iamVjdC5pc0hhbmRsZWRNZXRob2QobmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuXHRcdFx0cmV0dXJuIENsb25lQXJyYXkuaXNIYW5kbGVkTWV0aG9kKG5hbWUpO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRcdHJldHVybiBDbG9uZVNldC5pc0hhbmRsZWRNZXRob2QobmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0cmV0dXJuIENsb25lTWFwLmlzSGFuZGxlZE1ldGhvZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXNCdWlsdGluV2l0aE11dGFibGVNZXRob2RzKHRhcmdldCk7XG5cdH1cblxuXHRnZXQgaXNDbG9uaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0c3RhcnQodmFsdWUsIHBhdGgsIGFyZ3VtZW50c0xpc3QpIHtcblx0XHRsZXQgQ2xvbmVDbGFzcyA9IENsb25lT2JqZWN0O1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVBcnJheTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lRGF0ZTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVTZXQ7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0Q2xvbmVDbGFzcyA9IENsb25lTWFwO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXZWFrU2V0KSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVXZWFrU2V0O1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXZWFrTWFwKSB7XG5cdFx0XHRDbG9uZUNsYXNzID0gQ2xvbmVXZWFrTWFwO1xuXHRcdH1cblxuXHRcdHRoaXMuX3N0YWNrLnB1c2gobmV3IENsb25lQ2xhc3ModmFsdWUsIHBhdGgsIGFyZ3VtZW50c0xpc3QsIHRoaXMuX2hhc09uVmFsaWRhdGUpKTtcblx0fVxuXG5cdHVwZGF0ZShmdWxsUGF0aCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdFx0dGhpcy5fc3RhY2suYXQoLTEpLnVwZGF0ZShmdWxsUGF0aCwgcHJvcGVydHksIHZhbHVlKTtcblx0fVxuXG5cdHByZWZlcnJlZFRoaXNBcmcodGFyZ2V0LCB0aGlzQXJndW1lbnQsIHRoaXNQcm94eVRhcmdldCkge1xuXHRcdGNvbnN0IHtuYW1lfSA9IHRhcmdldDtcblx0XHRjb25zdCBpc0hhbmRsZWRNZXRob2QgPSBTbWFydENsb25lLmlzSGFuZGxlZE1ldGhvZCh0aGlzUHJveHlUYXJnZXQsIG5hbWUpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX3N0YWNrLmF0KC0xKVxuXHRcdFx0LnByZWZlcnJlZFRoaXNBcmcoaXNIYW5kbGVkTWV0aG9kLCBuYW1lLCB0aGlzQXJndW1lbnQsIHRoaXNQcm94eVRhcmdldCk7XG5cdH1cblxuXHRpc0NoYW5nZWQoaXNNdXRhYmxlLCB2YWx1ZSwgZXF1YWxzKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWNrLmF0KC0xKS5pc0NoYW5nZWQoaXNNdXRhYmxlLCB2YWx1ZSwgZXF1YWxzKTtcblx0fVxuXG5cdGlzUGFydE9mQ2xvbmUoY2hhbmdlUGF0aCkge1xuXHRcdHJldHVybiB0aGlzLl9zdGFjay5hdCgtMSkuaXNQYXRoQXBwbGljYWJsZShjaGFuZ2VQYXRoKTtcblx0fVxuXG5cdHVuZG8ob2JqZWN0KSB7XG5cdFx0aWYgKHRoaXMuX3ByZXZpb3VzQ2xvbmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fcHJldmlvdXNDbG9uZS51bmRvKG9iamVjdCk7XG5cdFx0fVxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHR0aGlzLl9wcmV2aW91c0Nsb25lID0gdGhpcy5fc3RhY2sucG9wKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5fcHJldmlvdXNDbG9uZS5jbG9uZTtcblx0fVxufVxuIiwiaW1wb3J0IHtUQVJHRVR9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdyYXBJdGVyYXRvcihpdGVyYXRvciwgdGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFwcGx5UGF0aCwgcHJlcGFyZVZhbHVlKSB7XG5cdGNvbnN0IG9yaWdpbmFsTmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG5cblx0aWYgKHRhcmdldC5uYW1lID09PSAnZW50cmllcycpIHtcblx0XHRpdGVyYXRvci5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxOZXh0LmNhbGwodGhpcyk7XG5cblx0XHRcdGlmIChyZXN1bHQuZG9uZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmVzdWx0LnZhbHVlWzBdID0gcHJlcGFyZVZhbHVlKFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZVswXSxcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzBdLFxuXHRcdFx0XHRcdGFwcGx5UGF0aCxcblx0XHRcdFx0KTtcblx0XHRcdFx0cmVzdWx0LnZhbHVlWzFdID0gcHJlcGFyZVZhbHVlKFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZVsxXSxcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlWzBdLFxuXHRcdFx0XHRcdGFwcGx5UGF0aCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9IGVsc2UgaWYgKHRhcmdldC5uYW1lID09PSAndmFsdWVzJykge1xuXHRcdGNvbnN0IGtleUl0ZXJhdG9yID0gdGhpc0FyZ3VtZW50W1RBUkdFVF0ua2V5cygpO1xuXG5cdFx0aXRlcmF0b3IubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTmV4dC5jYWxsKHRoaXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0LmRvbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHByZXBhcmVWYWx1ZShcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUsXG5cdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdGtleUl0ZXJhdG9yLm5leHQoKS52YWx1ZSxcblx0XHRcdFx0XHRhcHBseVBhdGgsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRpdGVyYXRvci5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxOZXh0LmNhbGwodGhpcyk7XG5cblx0XHRcdGlmIChyZXN1bHQuZG9uZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gcHJlcGFyZVZhbHVlKFxuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSxcblx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlLFxuXHRcdFx0XHRcdGFwcGx5UGF0aCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGl0ZXJhdG9yO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2FwcC5zY3NzXCI7XHJcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSBcIi4vdmlldy9ub3QtZm91bmQvbm90LWZvdW5kXCI7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb24gfSBmcm9tIFwiLi92aWV3L2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvblwiO1xyXG5pbXBvcnQgeyBBYm91dCB9IGZyb20gXCIuL3ZpZXcvYWJvdXQvYWJvdXRcIjtcclxuaW1wb3J0IHtNYWluVmlld30gZnJvbSBcIi4vdmlldy9tYWluL21haW4tdmlld1wiO1xyXG5pbXBvcnQgeyBDdXN0b21XZWJTb2NrZXQgfSBmcm9tIFwiLi9jb21tb24vY3VzdG9tLXdlYi1zb2NrZXRcIjtcclxuaW1wb3J0IG9uQ2hhbmdlIGZyb20gXCJvbi1jaGFuZ2VcIjtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXMgPSBbXHJcbiAgICAgICAge3BhdGg6IFwiI2F1dGhcIiwgdmlldzogQXV0aG9yaXphdGlvbiB9LFxyXG4gICAgICAgIHtwYXRoOiBcIiNhYm91dFwiLCB2aWV3OiBBYm91dCB9LFxyXG4gICAgICAgIHtwYXRoOiBcIiNtYWluXCIsIHZpZXc6IE1haW5WaWV3fVxyXG4gICAgXTtcclxuXHJcbiAgICBzdGF0ZVVzZXIgPSB7XHJcbiAgICAgIGxvZ2luOiBudWxsLFxyXG4gICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcclxuICAgICAgdXNlcnNBY3RpdmU6IFtdLFxyXG4gICAgICB1c2Vyc0luYWNyaXZlOiBbXSxcclxuICAgICAgc2VuZFVzZXI6IG51bGwsXHJcbiAgICAgIG1haW5MYXN0TWVzc2FnZTogbnVsbCxcclxuICAgICAgY3VycmVudFJlY2VpdmVkTWVzc2FnZTogbnVsbCxcclxuICAgICAgaGlzdG9yeVdpdGhVc2VyOiBudWxsLFxyXG4gICAgICBub3RpZmljYXRpb25NZXNzYWdlIDogbnVsbCxcclxuICAgICAgbXNnUmVhZDogbnVsbCxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLnJvdXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVVc2VyID0gb25DaGFuZ2UodGhpcy5zdGF0ZVVzZXIsIHRoaXMuc3RhdGVVc2VySG9vay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLndzID0gbmV3IEN1c3RvbVdlYlNvY2tldCgnd3M6Ly8xMjcuMC4wLjE6NDAwMCcsdGhpcy5zdGF0ZVVzZXIpO1xyXG4gICAgICAgIHRoaXMucm91dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVVzZXJIb29rKHBhdGgpe1xyXG4gICAgICBpZiggcGF0aCA9PT0gJ3VzZXJzQWN0aXZlJyB8fCBwYXRoID09PSAndXNlcnNJbmFjcml2ZScpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tdXNlcnNBY3RpdmUtLS11c2Vyc0luYWNyaXZlJywgdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lKTtcclxuICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcucmVkcmF3aW5nU2lkZWJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCBwYXRoID09PSAnc2VuZFVzZXInKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlVXNlci5zZW5kVXNlcil7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy4gaXNTZW5kVXNlcigpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v0K8g0L7RgtC/0YDQsNCy0LvRj9GOINGB0L7QvtCx0YnQtdC90LjQtVxyXG4gICAgICBpZiggcGF0aCA9PT0gJ21haW5MYXN0TWVzc2FnZScpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGVVc2VyLm1haW5MYXN0TWVzc2FnZSl7XHJcbiAgICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5tYWluTmV3TWVzc2FnZSh0aGlzLnN0YXRlVXNlci5tYWluTGFzdE1lc3NhZ2UucGF5bG9hZC5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXRoID09PSAnY3VycmVudFJlY2VpdmVkTWVzc2FnZScpe1xyXG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5pbnRlcmxvY3V0b3JOZXdNZXNzYWdlKHRoaXMuc3RhdGVVc2VyLmN1cnJlbnRSZWNlaXZlZE1lc3NhZ2UucGF5bG9hZC5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXRoID09PSAnaGlzdG9yeVdpdGhVc2VyJyl7XHJcbiAgICAgICAgY29uc3QgY3VycmVyVXNlciA9ICh0aGlzLnN0YXRlVXNlci5oaXN0b3J5V2l0aFVzZXIuaWQpLnJlcGxhY2UoXCJoaXN0b3J5XCIsIFwiXCIpO1xyXG4gICAgICAgIGlmKGN1cnJlclVzZXIgPT09IHRoaXMuc3RhdGVVc2VyLnNlbmRVc2VyKXtcclxuICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnVwZGF0ZU1lc3NhZ2VMaXN0KHRoaXMuc3RhdGVVc2VyLmhpc3RvcnlXaXRoVXNlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgaWYoIHRoaXMuY3VycmVudFZpZXcuY29uc3RydWN0b3IubmFtZSA9PT0gJ01haW5WaWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcudXBkYXRlU2lkZWJhck1lc3NhZ2VOdW1iZXIodGhpcy5zdGF0ZVVzZXIuaGlzdG9yeVdpdGhVc2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGF0aCA9PT0gJ25vdGlmaWNhdGlvbk1lc3NhZ2UnKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlVXNlci5ub3RpZmljYXRpb25NZXNzYWdlICE9PSBudWxsKXtcclxuICAgICAgICAgIGlmKCB0aGlzLmN1cnJlbnRWaWV3LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdNYWluVmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnVwZGF0ZU1lc3NhZ2VOdW1iZXIodGhpcy5zdGF0ZVVzZXIubm90aWZpY2F0aW9uTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50Vmlldy51cGRhdGVNZXNzYWdlTnVtYmVyKHRoaXMuY3VycmVudFZpZXcuc3RhdGVVc2VyLm5vdGlmaWNhdGlvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocGF0aCA9PT0gJ21zZ1JlYWQnKXtcclxuICAgICAgICBpZiggdGhpcy5jdXJyZW50Vmlldy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnTWFpblZpZXcnKXtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuaW50ZXJsb2N1dG9yU3RhdHVzTWVzc2FnZSh0aGlzLnN0YXRlVXNlci5tc2dSZWFkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByb3V0ZSgpe1xyXG4gICAgICBjb25zdCBsb2NhdGlvbkhhc2ggPSBsb2NhdGlvbi5oYXNoO1xyXG4gICAgICBpZighbG9jYXRpb25IYXNoIHx8IGxvY2F0aW9uSGFzaCA9PT0nI2F1dGgnKXtcclxuICAgICAgICBjb25zdCB1c2VyT2JqZWN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSAgSlNPTi5wYXJzZSh1c2VyT2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNtYWluJztcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNhdXRoJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzUGFnZSA9IHRoaXMucm91dGVzLnNvbWUociA9PiByLnBhdGggPT09IGxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICB0aGlzLndzLmNvbm5lY3QoKS50aGVuKChzb2NrZXQpID0+IHtcclxuICAgICAgICBpZihpc1BhZ2Upe1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMucm91dGVzLmZpbmQociA9PiByLnBhdGggPT0gbG9jYXRpb24uaGFzaCkudmlldztcclxuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXcgdmlldyhzb2NrZXQsdGhpcy5zdGF0ZVVzZXIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ldyBOb3RGb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LnJlbmRlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbm5ldyBBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=