import { AbstractView } from "../../common/view";
import "./authorization.scss";
import { authorizationIco } from "../../helpers/svg";
import { userAuthentication } from "../../helpers/api";
import { State } from "../../helpers/myTypes";

export class Authorization extends AbstractView {

  private stateUser:State;
  private ws: WebSocket;
  constructor(ws: WebSocket, stateUser:State) {
    super();
    this.stateUser = stateUser;
    this.ws = ws;
  }

  render() {
    const pageAuth = document.createElement("div");
    pageAuth.classList.add("page-auth");
    pageAuth.innerHTML = `
        <div class='container'>
            <div class="wrapper">
                <form action="#" class="auth__form">
                    <div class="form__user-name">
                        <label class="user" for="name">
                            <svg viewBox="0 0 32 32">
                                <use xlink:href="#man-people-user"></use>
                            </svg>
                        </label>
                        <input 
                            class="user-name" 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="My name is" 
                            required: "required" 
                            minlength: "4" 
                            pattern: "^[A-Z][a-zA-Z\\-]+$"  />
                        <span class="user-error"></span>
                    </div>
                    <div class="form__user-password">
                        <label class="lock" for="password">
                            <svg viewBox="0 0 32 32">
                                <g filter="">
                                    <use xlink:href="#lock-locker"></use>
                                </g>
                            </svg>  
                        </label>
                        <input type="password" name="password" class="user-password" placeholder="My password is"/>
                        <span class="password-error"></span>
                    </div>
                    <input type="submit" value="Sign in" class="sign-in" disabled/>
                </form>
                <a href="#about" class="btn form__btn">about</a>
            </div>
            ${authorizationIco}
        </div`;

    this.validateInput(pageAuth);
    const signIn = pageAuth.querySelector(".sign-in") as HTMLButtonElement;
    signIn.addEventListener("click", (e) => {
      e.preventDefault();
      this.btnClick(pageAuth);
    });

    this.app.innerHTML = "";
    this.app.append(pageAuth);
  }

  btnClick(el: HTMLElement) {
    const userName = el.querySelector(".user-name") as HTMLInputElement;
    const userPas = el.querySelector(".user-password") as HTMLInputElement;
    const userNameVal = userName.value;
    const userPasVal = userPas.value;
    sessionStorage.setItem(
      "user",
      JSON.stringify({ login: userNameVal, password: userPasVal }),
    );
    this.stateUser.isLogined = true;
    userAuthentication(this.ws);
  }

  validateInput(pageAuth: HTMLElement) {
    let nameBool = false;
    let passBool = false;
    const signIn = pageAuth.querySelector(".sign-in") as HTMLInputElement;
    const formUserName = pageAuth.querySelector(".form__user-name") as HTMLInputElement;
    const userError = formUserName.querySelector(".user-error") as HTMLElement;;
    const userName = formUserName.querySelector(".user-name") as HTMLButtonElement;
    userName.addEventListener("input", (e) => {
      const value = (e.target as HTMLInputElement).value;
      if (value) {
        if (value[0] !== value[0].toUpperCase()) {
          userError.innerHTML = "Первая буква в Имени должно быть заглавной!";
          nameBool = false;
          activeSignIn();
        } else {
          if (value.length < 4) {
            userError.innerHTML = "Символов в Имени должно быть больше 3!";
            nameBool = false;
            activeSignIn();
          } else {
            userError.innerHTML = "";
            nameBool = true;
            activeSignIn();
          }
        }
      } else {
        userError.innerHTML = "";
      }
    });

    const formUserPassword = pageAuth.querySelector(".form__user-password") as HTMLElement;
    const passwordError = formUserPassword.querySelector(".password-error") as HTMLElement;
    const userPassword = formUserPassword.querySelector(".user-password") as HTMLInputElement;;
    userPassword.addEventListener("input", (e) => {
      const value = (e.target as HTMLInputElement).value;
      if (value) {
        if (value.length < 4) {
          passwordError.innerHTML = "Символов в пароле должно быть больше 3!";
          passBool = false;
          activeSignIn();
        } else {
          passwordError.innerHTML = ``;

          if (!/[0-9]+/.test(value)) {
            passwordError.innerHTML = "В пароле должна быть хоть одна цифра!";
          } else {
            passBool = true;
            activeSignIn();
          }
        }
      } else {
        passwordError.innerHTML = "";
      }
    });

    const activeSignIn = () => {
      if (nameBool && passBool) {
        signIn.removeAttribute("disabled");
      } else {
        signIn.setAttribute("disabled", "disabled");
      }
    };
  }
}
