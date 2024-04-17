import { gettingAllAuthenticatedUsers, gettingAllUnauthorizedUsers } from '../helpers/api';

const processingTypes = (message,stateUser,ws) =>{
    const messageJson = JSON.parse(message);
    const type = messageJson.type;

    if(type === 'USER_LOGIN'){
      // const login = messageJson.payload.user.login;
      // stateUser.login = login;

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
      stateUser.usersActive = messageJson.payload.users;
    }

    //Получение всех неавторизованных пользователей
    if(type === 'USER_INACTIVE'){
      stateUser.usersInacrive = messageJson.payload.users;
    }

    
}



export { processingTypes };