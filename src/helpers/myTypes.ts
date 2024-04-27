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

interface ParamsElement{
    tag: string;
    classNames?: string[];
    textContent?: string;
    callback?: (event: Event) => void;
    id?: string;
    attr?: { [key: string]: string };
    idData?: string;
}

export{
    State,
    UserObject,
    ParamsElement,
}