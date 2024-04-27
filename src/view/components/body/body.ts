import { AbstractView } from "../../../common/view";
import { userLogout } from "../../../helpers/api";
import "./styles.css";
import ElementCreator from "../../../util/element-creator";
import {State} from "../../../helpers/myTypes";

export class Body extends AbstractView {
  private ws: WebSocket;
  private stateUser:State;

  constructor(ws:WebSocket , stateUser:State) {
    super();
    this.ws = ws;
    this.stateUser = stateUser;
  }

  render() {
    const container = new ElementCreator({
      tag: "div",
      classNames: ["main__container"],
    });
    const bodyHeader = new ElementCreator({
      tag: "header",
      classNames: ["body__header"],
    });
    const bodyBtn = new ElementCreator({
      tag: "button",
      classNames: ["btn", "body__btn", "body__btn-chat"],
      textContent: "Покинуть чат",
      callback: () => {
        userLogout(this.ws, this.stateUser);
      },
    });

    const nameChat = new ElementCreator({
      tag: "div",
      classNames: ["body__name-chat"],
      textContent: "Супер чат!",
    });
    const aboutBtn = new ElementCreator({
      tag: "button",
      classNames: ["btn", "body__btn", "body__btn-about"],
      textContent: "About",
      callback: () => {
        window.location.hash = "#about";
      },
    });

    bodyHeader.addInnerElement(nameChat);
    bodyHeader.addInnerElement(aboutBtn);
    bodyHeader.addInnerElement(bodyBtn);
    container.addInnerElement(bodyHeader);

    const bodyInfo = new ElementCreator({
      tag: "div",
      classNames: ["body__info"],
    });
    const sendUserName = new ElementCreator({
      tag: "div",
      classNames: ["body__send-user-name"],
    });
    const sendUserStatus = new ElementCreator({
      tag: "div",
      classNames: ["body__send-user-status"],
    });
    bodyInfo.addInnerElement(sendUserName);
    bodyInfo.addInnerElement(sendUserStatus);
    container.addInnerElement(bodyInfo);

    const bodyContainer = new ElementCreator({
      tag: "div",
      classNames: ["body__container"],
    });
    const noneMessage = new ElementCreator({
      tag: "div",
      classNames: ["none-message"],
      textContent: "Выберите пользователя для отправки сообщения...",
    });
    bodyContainer.addInnerElement(noneMessage);

    container.addInnerElement(bodyContainer);

    return container.getElement();
  }

  createChatsSender(message:string, date:string, statusMessage:string, editMessage:string, idMessage:string) {
    const bodyChatsSender = new ElementCreator({
      tag: "div",
      classNames: ["body__chats", "body__chats-sender"],
      idData: idMessage,
    });
    const bodyChatsSenderInfo = new ElementCreator({
      tag: "div",
      classNames: ["body__chats-info"],
    });
    const bodyChatsSenderName = new ElementCreator({
      tag: "span",
      classNames: ["body__chats-name"],
      textContent: "Вы",
    });
    const bodyChatsSenderDate = new ElementCreator({
      tag: "span",
      classNames: ["body__chats-date"],
      textContent: date,
    });
    bodyChatsSenderInfo.addInnerElement(bodyChatsSenderName);
    bodyChatsSenderInfo.addInnerElement(bodyChatsSenderDate);

    bodyChatsSender.addInnerElement(bodyChatsSenderInfo);
    const bodyChatsSenderMessage = new ElementCreator({
      tag: "div",
      classNames: ["body__messageSender"],
    });
    const bodyChatsSenderMessageP = new ElementCreator({
      tag: "p",
      textContent: message,
    });
    bodyChatsSenderMessage.addInnerElement(bodyChatsSenderMessageP);
    bodyChatsSender.addInnerElement(bodyChatsSenderMessage);
    const bodyChatsSenderMessageStatuses = new ElementCreator({
      tag: "p",
      classNames: ["body__messageSender-statuses"],
    });
    const editMessageText = editMessage ? editMessage : "";
    const bodyChatsSenderMessageEdit = new ElementCreator({
      tag: "span",
      classNames: ["body__messageSender-edit"],
      textContent: editMessageText,
    });
    bodyChatsSenderMessageStatuses.addInnerElement(bodyChatsSenderMessageEdit);

    const bodyChatsSenderMessageStatus = new ElementCreator({
      tag: "span",
      classNames: ["body__messageSender-status"],
      textContent: statusMessage,
    });
    bodyChatsSenderMessageStatuses.addInnerElement(
      bodyChatsSenderMessageStatus,
    );

    bodyChatsSender.addInnerElement(bodyChatsSenderMessageStatuses);

    return bodyChatsSender;
  }

  createChatsRecipent(message: string, date: string, userRecipent: string, idMessage: string) {
    const bodyChatsRecipent = new ElementCreator({
      tag: "div",
      classNames: ["body__chats", "body__chats-recipent"],
      idData: idMessage,
    });
    const bodyChatsRecipentInfo = new ElementCreator({
      tag: "div",
      classNames: ["body__chats-info"],
    });
    const bodyChatsRecipentName = new ElementCreator({
      tag: "span",
      classNames: ["body__chats-name"],
      textContent: userRecipent,
    });
    const bodyChatsRecipentDate = new ElementCreator({
      tag: "span",
      classNames: ["body__chats-date"],
      textContent: date,
    });
    bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentName);
    bodyChatsRecipentInfo.addInnerElement(bodyChatsRecipentDate);
    bodyChatsRecipent.addInnerElement(bodyChatsRecipentInfo);
    const bodyChatsRecipentMessage = new ElementCreator({
      tag: "div",
      classNames: ["body__messageRecipent"],
    });
    const bodyChatsRecipentMessageP = new ElementCreator({
      tag: "p",
      textContent: message,
    });
    bodyChatsRecipentMessage.addInnerElement(bodyChatsRecipentMessageP);
    bodyChatsRecipent.addInnerElement(bodyChatsRecipentMessage);

    return bodyChatsRecipent;
  }
}
