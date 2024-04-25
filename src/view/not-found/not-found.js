import { AbstractView } from "../../common/view";
import ElementCreator from "../../util/element-creator";
import "./styles.css";

export class NotFound extends AbstractView {
  render() {
    const container = new ElementCreator({
      tag: "div",
      classNames: ["not-fouund__container"],
    });
    const info = new ElementCreator({
      tag: "div",
      classNames: ["not-fouund__info"],
      textContent: "404 Not Found",
    });
    container.addInnerElement(info);

    this.app.innerHTML = "";
    this.app.append(container.getElement());
  }
}
