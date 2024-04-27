import { AbstractView } from "../../common/view";
import ElementCreator from "../../util/element-creator";
import "./style.css";
import {ParamsElement} from "../../helpers/myTypes";

export class About extends AbstractView {
  render(): void {
    const about = new ElementCreator({ tag: "div", classNames: ["about"] });
    const container = new ElementCreator({
      tag: "div",
      classNames: ["about__container"],
    });
    const title = new ElementCreator({
      tag: "h1",
      classNames: ["about__title"],
      textContent: "Супер чат!",
    });
    const info = new ElementCreator({
      tag: "p",
      classNames: ["about__info"],
      textContent:
        "Приложение разработано в рамках курса RSSchool JS/FE 2023Q3",
    });
    const autor = new ElementCreator({
      tag: "p",
      classNames: ["about__info"],
      textContent: "Автор: vladimirovicp",
    });
    const bodyBtn = new ElementCreator({
      tag: "button",
      classNames: ["btn", "form__btn"],
      textContent: "Вернуться назад",
      callback: () => {
        window.location.hash = "#auth";
      },
    });

    container.addInnerElement(title);
    
    container.addInnerElement(info);
    container.addInnerElement(autor);
    container.addInnerElement(bodyBtn);

    about.addInnerElement(container);

    this.app.innerHTML = "";

    const resultAbout = about.getElement();
    if(resultAbout){
      this.app.append(resultAbout);
    }
    
  }
}
