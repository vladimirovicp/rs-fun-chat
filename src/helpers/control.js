const processingTypes = (message,stateUser) =>{
    const messageJson = JSON.parse(message);
    const type = messageJson.type;

    if(type === 'USER_LOGIN'){
      const login = messageJson.payload.user.login;
      stateUser.login = login;
      window.location.hash = '#main';
    }

    if(type === 'ERROR'){
      alert(messageJson.payload.error);
    }

    if(type === 'USER_LOGOUT'){
      window.location.hash = '';
    }

    //Аутентификация пользователя третьей стороной
    if(type === 'USER_EXTERNAL_LOGIN'){
      const foundObject = stateUser.users.some(obj => obj.login === messageJson.payload.user.login);
      
      console.log('foundObject----',foundObject);
      
      if(!foundObject){
        stateUser.users.push(messageJson.payload.user);
        console.log('----------------',stateUser.users);
      } else {
        stateUser.usersActive = true;
      }
    }

    //Получение всех аутентифицированных пользователей
    if(type === 'USER_ACTIVE'){
      stateUser.users = messageJson.payload.users;

      //console.log(document);

    }

    
}



export { processingTypes };