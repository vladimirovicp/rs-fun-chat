console.log("123");

// {
//     id: string,
//     type: "USER_LOGOUT",
//     payload: {
//       user: {
//         login: string,
//         password: string,
//       }
//     }
//   }


const user1 = {
    id: '1',
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: 'test',
        password: 'test',
      }
    }
  };


  const ws = new WebSocket('ws://127.0.0.1:4000');

  ws.addEventListener('open', () => {

    //console.log("открылось");

    //console.log(ws.send(JSON.stringify(user1)));

  });