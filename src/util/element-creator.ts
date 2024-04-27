import {ParamsElement} from '../helpers/myTypes';

export default class ElementCreator {
  
  private element: HTMLElement | null;

  constructor(params:ParamsElement) {
    this.element = null;
    this.createElement(params);
  }

  getElement(): HTMLElement | null {
    return this.element;
  }

  addInnerElement(element:any): void {
    if (element instanceof ElementCreator) {
      this.element?.append(element.getElement() as HTMLElement );
    } else {
      this.element?.append(element);
    }
  }

  createElement(params:ParamsElement): void {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames as []);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
    this.setId(params.id);
    this.setAttr(params.attr);
    this.addData(params.idData);
  }

  setId(id: string | undefined): void {
    if (id) {
      this.element?.setAttribute("id", id);
    }
  }

  setCssClasses(cssClasses: string[] = []) {
    cssClasses.map((cssClass) => this.element?.classList.add(cssClass));
  }

  setAttr(attr : { [key: string]: string } = {}): void {
    for (let i = 0; i < Object.keys(attr).length; i += 1) {
      const key = Object.keys(attr)[i];
      this.element?.setAttribute(key, attr[key]);
    }
  }

  setTextContent(text : string | null = null): void {
    if (this.element) {
      this.element.textContent = text;
    }
  }

  setCallback(callback: ((event: Event) => void) | undefined) {
    if (typeof callback === "function") {
      if (callback && this.element) {
        this.element.addEventListener("click", (event) => callback(event));
      }
    }
  }

  addData(idData : string | undefined): void {
    if (idData && this.element) {
      this.element.dataset.id = idData;
    }
  }
}
