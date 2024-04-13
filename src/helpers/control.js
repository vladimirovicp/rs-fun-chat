const processingTypes = (message) =>{
    const messageJson = JSON.parse(message);
    const type = messageJson.type;

    if(type === 'USER_LOGIN'){
      //new MainView();

      window.location.hash = '#main';
    }

    if(type === 'ERROR'){
      alert(messageJson.payload.error);
    }
}



export { processingTypes };