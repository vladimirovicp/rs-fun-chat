export class AbstractView {
  private app: HTMLElement;  
  constructor() {
    this.app = document.querySelector("body") as HTMLElement;
  }
}
