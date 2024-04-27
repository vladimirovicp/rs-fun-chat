export class AbstractView {
  app: HTMLElement;  
  constructor() {
    this.app = document.querySelector("body") as HTMLElement;
  }
}
