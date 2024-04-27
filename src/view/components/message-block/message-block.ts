import { AbstractView } from "../../../common/view";
import "./styles.css";
import ElementCreator from "../../../util/element-creator";
import { sendingMessageUser } from "../../../helpers/api";
import {State} from "../../../helpers/myTypes";
export class MessageBlock extends AbstractView {
  private ws: WebSocket;
  private stateUser:State;

  constructor(ws: WebSocket, stateUser:State) {
    super();
    this.ws = ws;
    this.stateUser = stateUser;
  }

  render() {
    const messageBlock = new ElementCreator({
      tag: "div",
      classNames: ["messageBlock"],
    });
    const form = new ElementCreator({ tag: "form", classNames: ["form"] });
    const input = new ElementCreator({
      tag: "input",
      classNames: ["userMessage"],
      attr: { type: "text", disabled: "disabled" },
    });
    const button = new ElementCreator({
      tag: "button",
      classNames: ["btn"],
      attr: { disabled: "disabled" },
      textContent: "Отправить",
    });
    form.addInnerElement(input);
    form.addInnerElement(button);
    messageBlock.addInnerElement(form);
    const messageContainer = messageBlock.getElement() as HTMLElement;

    this.trackInput(messageContainer);
    this.btnClick(messageContainer);

    return messageContainer;
  }

  trackInput(messageContainer: HTMLElement): void {
    const userMessage = messageContainer.querySelector(".userMessage") as HTMLInputElement;;
    const btn = messageContainer.querySelector(".btn") as HTMLButtonElement;
    userMessage.addEventListener("input", () => {
      const value = userMessage.value;
      if (value.length > 0) {
        btn.removeAttribute("disabled");
      } else {
        btn.setAttribute("disabled", "disabled");
      }
    });
  }

  btnClick(messageContainer: HTMLElement) {
    const userMessage = messageContainer.querySelector(".userMessage")  as HTMLInputElement;;
    const btn = messageContainer.querySelector(".btn") as HTMLButtonElement;;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const messaage = userMessage.value;
      userMessage.value = "";
      btn.setAttribute("disabled", "disabled");
      if(this.stateUser.sendUser){
        sendingMessageUser(this.ws, messaage, this.stateUser.sendUser);
      }
      
    });
  }
}
