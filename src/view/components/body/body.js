import { AbstractView } from '../../../common/view';
import { userLogout } from '../../../helpers/api';
import "./styles.css";
import ElementCreator from '../../../util/element-creator';

export class Body extends AbstractView{

    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const container = new ElementCreator({tag:'div', classNames:['main__container']});
        const bodyHeader = new ElementCreator({tag:'header', classNames:['body__header']});
        const bodyBtn = new ElementCreator({
            tag:'button', 
            classNames:['btn','body__btn','body__btn-chat'], 
            textContent: 'Покинуть чат',
            callback: () =>{
                userLogout(this.ws,this.stateUser);
            }
        });

        const nameChat = new ElementCreator({tag:'div', classNames:['body__name-chat'], textContent: 'Супер чат!'});
        const aboutBtn = new ElementCreator({
            tag:'button', 
            classNames:['btn','body__btn','body__btn-about'], 
            textContent: 'About',
            callback: () =>{
                window.location.hash = '#about';
            }
        });

        bodyHeader.addInnerElement(nameChat);
        bodyHeader.addInnerElement(aboutBtn);
        bodyHeader.addInnerElement(bodyBtn);
        container.addInnerElement(bodyHeader);


        const bodyInfo = new ElementCreator({tag:'div', classNames:['body__info']});
        const sendUserName = new ElementCreator({tag:'div', classNames:['body__send-user-name']});
        const sendUserStatus = new ElementCreator({tag:'div', classNames:['body__send-user-status']});
        bodyInfo.addInnerElement(sendUserName);
        bodyInfo.addInnerElement(sendUserStatus);
        container.addInnerElement(bodyInfo);

        const bodyContainer = new ElementCreator({tag:'div', classNames:['body__container']});


        const bodyChatsSender = this.createChatsSender('Привет!','19.04.2024, 22:42:29');

        const bodyChatsRecipent = new ElementCreator({tag:'div', classNames:['body__chats', 'body__chats-recipent']});
        const bodyChatsRecipentInfo = new ElementCreator({tag:'div', classNames: ['body__chats-info'] });
        const bodyChatsRecipentName = new ElementCreator({tag:'span', classNames: ['body__chats-name'], textContent: 'Имя отправляющего'});
        const bodyChatsRecipentDate = new ElementCreator({tag:'span', classNames: ['body__chats-date'], textContent: '15.04.2024, 22:42:29'});
        bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentName);
        bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentDate);
        bodyChatsRecipent.addInnerElement(bodyChatsRecipentInfo);
        const bodyChatsRecipentMessage = new ElementCreator({tag:'div', classNames:['body__messageRecipent']});
        const bodyChatsRecipentMessageP = new ElementCreator({tag:'p', textContent: 'Hellow'});
        bodyChatsRecipentMessage.addInnerElement(bodyChatsRecipentMessageP);
        bodyChatsRecipent.addInnerElement(bodyChatsRecipentMessage);
        // const bodyChatsRecipentMessageStatus = new ElementCreator({tag:'p', textContent: 'прочитано'});
        // bodyChatsRecipent.addInnerElement(bodyChatsRecipentMessageStatus);

        bodyContainer.addInnerElement(bodyChatsSender);
        bodyContainer.addInnerElement(bodyChatsRecipent);
        container.addInnerElement(bodyContainer);

        return container.getElement();
    }

    createChatsSender(message,date){
        const bodyChatsSender = new ElementCreator({tag:'div', classNames:['body__chats','body__chats-sender']});
        const bodyChatsSenderInfo = new ElementCreator({tag:'div', classNames: ['body__chats-info'] });
        const bodyChatsSenderName = new ElementCreator({tag:'span', classNames: ['body__chats-name'], textContent: 'Вы'});
        const bodyChatsSenderDate = new ElementCreator({tag:'span', classNames: ['body__chats-date'], textContent: date});
        bodyChatsSenderInfo.addInnerElement(bodyChatsSenderName);
        bodyChatsSenderInfo.addInnerElement(bodyChatsSenderDate);

        bodyChatsSender.addInnerElement(bodyChatsSenderInfo);
        const bodyChatsSenderMessage = new ElementCreator({tag:'div', classNames:['body__messageSender']});
        const bodyChatsSenderMessageP = new ElementCreator({tag:'p', textContent: message});
        bodyChatsSenderMessage.addInnerElement(bodyChatsSenderMessageP);
        bodyChatsSender.addInnerElement(bodyChatsSenderMessage);
        const bodyChatsSenderMessageStatus = new ElementCreator({tag:'p', classNames:['body__messageSender-status'], textContent: 'доставлено'});
        bodyChatsSender.addInnerElement(bodyChatsSenderMessageStatus);
        return bodyChatsSender;
    }


}