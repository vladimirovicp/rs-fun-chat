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

const userLogout = (ws) => {
  const data = {
    id: string,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: string,
        password: string,
      }
    }
  }

  //ws.send(JSON.stringify(data));

}





export { 
  userAuthentication,
  userLogout,
 };