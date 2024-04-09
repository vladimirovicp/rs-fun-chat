const ws = new WebSocket('ws://127.0.0.1:4000');

const userAuthentication = async(id,login,pas) => {

    const result = {};
    const data = {
        id: id,
        type: "USER_LOGIN",
        payload: {
          user: {
            login: login,
            password: pas,
          },
        },
      };
 
    ws.send(JSON.stringify(data));
    ws.addEventListener('message', (event) => {
        result =  event.data;
    });

    console.log(result);

    //return result;
}



export { userAuthentication };