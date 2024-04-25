//Аутентификация пользователя
const userAuthentication = async (ws) => {
  const userObject = sessionStorage.getItem("user");
  const user = JSON.parse(userObject);
  const data = {
    id: user.login,
    type: "USER_LOGIN",
    payload: {
      user: {
        login: user.login,
        password: user.password,
      },
    },
  };
  ws.send(JSON.stringify(data));
};

//Выход пользователя из системы
const userLogout = (ws, stateUser) => {
  const userObject = sessionStorage.getItem("user");
  const user = JSON.parse(userObject);
  const data = {
    id: user.login,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: user.login,
        password: user.password,
      },
    },
  };
  sessionStorage.removeItem("user");
  stateUser.isLogined = false;
  ws.send(JSON.stringify(data));
  window.location.hash = "#auth";
};

//Получение всех аутентифицированных пользователей
const gettingAllAuthenticatedUsers = (ws) => {
  const data = {
    id: "allAuthUser",
    type: "USER_ACTIVE",
    payload: null,
  };
  ws.send(JSON.stringify(data));
};

//Получение всех неавторизованных пользователей
const gettingAllUnauthorizedUsers = (ws) => {
  const data = {
    id: "allUnautUser",
    type: "USER_INACTIVE",
    payload: null,
  };
  ws.send(JSON.stringify(data));
};

//Отправка сообщения пользователю
const sendingMessageUser = (ws, textMessage, toUser) => {
  const userObject = sessionStorage.getItem("user");
  const user = JSON.parse(userObject);
  const data = {
    id: user.login,
    type: "MSG_SEND",
    payload: {
      message: {
        to: toUser,
        text: textMessage,
      },
    },
  };
  ws.send(JSON.stringify(data));
};

//Получение истории сообщений пользователя
const fetchingMessageHistoryWithUser = (ws, login) => {
  const data = {
    id: `history${login}`,
    type: "MSG_FROM_USER",
    payload: {
      user: {
        login: login,
      },
    },
  };

  ws.send(JSON.stringify(data));
  /**
   *  id - идентификатор запроса
      login - имя пользователя, от которого запрашивается история сообщений
    */
};

//Изменение статуса прочтения сообщения
const messageReadStatusChange = (ws, idMessage) => {
  const data = {
    id: `mainMSG_READ`,
    type: "MSG_READ",
    payload: {
      message: {
        id: idMessage,
      },
    },
  };
  ws.send(JSON.stringify(data));
};

//Удаление сообщения
const messageDeletion = (ws, id) => {
  const data = {
    id: "del",
    type: "MSG_DELETE",
    payload: {
      message: {
        id: id,
      },
    },
  };

  ws.send(JSON.stringify(data));
};

export {
  userAuthentication,
  userLogout,
  gettingAllAuthenticatedUsers,
  gettingAllUnauthorizedUsers,
  sendingMessageUser,
  fetchingMessageHistoryWithUser,
  messageReadStatusChange,
  messageDeletion,
};
