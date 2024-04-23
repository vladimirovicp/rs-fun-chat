import { gettingAllAuthenticatedUsers, gettingAllUnauthorizedUsers } from '../helpers/api';

const processingTypes = (message,stateUser,ws) =>{
    const messageJson = JSON.parse(message);
    const type = messageJson.type;

    if(type === 'USER_LOGIN'){
      window.location.hash = '#main';
      gettingAllAuthenticatedUsers(ws); // Получение всех аутентифицированных пользователей
      gettingAllUnauthorizedUsers(ws); // Получение всех неавторизованных пользователей
    }

    if(type === 'ERROR'){
      alert(messageJson.payload.error);
    }

    if(type === 'USER_LOGOUT'){
      window.location.hash = '';
    }

    //Аутентификация пользователя третьей стороной
    if(type === 'USER_EXTERNAL_LOGIN'){
      gettingAllAuthenticatedUsers(ws); // Получение всех аутентифицированных пользователей
      gettingAllUnauthorizedUsers(ws); // Получение всех неавторизованных пользователей
    }

    if(type === 'USER_EXTERNAL_LOGOUT'){
      gettingAllAuthenticatedUsers(ws); // Получение всех аутентифицированных пользователей
      gettingAllUnauthorizedUsers(ws); // Получение всех неавторизованных пользователей
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



export { processingTypes };