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
}



export { processingTypes };