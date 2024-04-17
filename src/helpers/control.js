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

    
}



export { processingTypes };