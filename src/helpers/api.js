const userAuthentication = async(ws,login,pas) => {
    const data = {
        id: login,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: login,
            password: pas,
          },
        },
      };
    ws.send(JSON.stringify(data));
}

const userLogout = (ws,stateUser) => {

  console.log(stateUser.login);

  const data = {
    id: stateUser.login,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: stateUser.login,
        password: stateUser.password,
      }
    }
  }
  
  ws.send(JSON.stringify(data));

}





export { 
  userAuthentication,
  userLogout,
 };