interface State{
    login: String | null,
    password: String | null,
    isLogined: boolean,
    usersActive: [],
    usersInacrive: [],
    sendUser: String | null,
    mainLastMessage: String | null,
    currentReceivedMessage: String | null,
    historyWithUser: {} | null,
    notificationMessage: string | null
    msgRead: {} | null,
    msgDel: {} | null,
    connection: boolean,
}

interface UserObject{
    login: String | null,
    password: String | null,
}

export{
    State,
    UserObject,
}