interface State{
    login: String | null,
    password: String | null,
    isLogined: boolean,
    usersActive: [{login:String, isLogined:String}] | [],
    usersInacrive: [{login:String, isLogined:String}] | [],
    sendUser: string | null,
    mainLastMessage: {payload:{message:DateMessage}} | null,
    currentReceivedMessage: {payload:{message:DateMessage}} | null,
    historyWithUser: {} | null | any,
    notificationMessage: string | null
    msgRead: { id: string; status: { isReaded: boolean; }; } | null,
    msgDel: { id: string; status: { isDeleted: boolean; }; } | null,
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

interface DateMessage{
    id: string, 
    from: string,
    datetime:string, 
    text:string, 
    status: {
        isReaded:boolean, 
        isEdited:boolean
        }
    }

export{
    State,
    UserObject,
    ParamsElement,
    DateMessage
}