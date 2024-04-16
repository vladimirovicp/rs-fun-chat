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

  // stateUser.login = null;
  // stateUser.password = null;
  ws.send(JSON.stringify(data));

  stateUser.isLogined = false;
  sessionStorage.removeItem('user');

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

//?? Получение всех аутентифицированных пользователей
const gettingAllAuthenticatedUsers = (ws) =>{

  const data = {
    id: 'allUser',
    type: "USER_ACTIVE",
    payload: null,
  }

  ws.send(JSON.stringify(data));


  /*
    id - идентификатор запроса
  */
}

//?? Получение всех неавторизованных пользователей
const gettingAllUnauthorizedUsers = () => {
  /*
    {
      id: string,
      type: "USER_INACTIVE",
      payload: null,
    }
  */

  //id - идентификатор запроса
}

//?? Отправка сообщения пользователю
const sendingMessageUser = () =>{
  /*
    {
      id: string,
      type: "MSG_SEND",
      payload: {
        message: {
          to: string,
          text: string,
        }
      }
    }
  */
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

//?? Получение истории сообщений пользователя
const fetchingMessageHistoryWithUser = () => {
  /**
   * {
        id: string,
        type: "MSG_FROM_USER",
        payload: {
          user: {
            login: string,
          }
        }
      }
   */

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

//?? Изменение статуса прочтения сообщения
const messageReadStatusChange = () => {

  /**
   * {
        id: string,
        type: "MSG_READ",
        payload: {
          message: {
            id: string,
          }
        }
      }
   */

      /**
       *  {
            id: string,
            type: "MSG_READ",
            payload: {
              message: {
                id: string,
              }
            }
          }
       */

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





export { 
  userAuthentication,
  userLogout,
  gettingAllAuthenticatedUsers,
  gettingAllUnauthorizedUsers,
  sendingMessageUser,
  fetchingMessageHistoryWithUser,
  notificationMessageDeliveryStatusChange,
  messageReadStatusChange,
  messageDeletion,
  messageTextEditing,
 };