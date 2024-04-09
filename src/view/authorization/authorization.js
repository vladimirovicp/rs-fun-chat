import { AbstractView } from '../../common/view';
import './authorization.scss';
import { authorizationIco } from '../../helpers/svg';
//import { userAuthentication } from '../../helpers/api';
import { MainView } from '../main/main-view';
export class Authorization extends AbstractView {
    constructor(){
        super();
    }

    render(){
        const pageAuth = document.createElement('div');
        pageAuth.classList.add('page-auth');
        pageAuth.innerHTML = `
        <div class='container'>
            <div class="wrapper">
                <form action="#" class="auth__form">
                    <div>
                        <label class="user" for="name">
                            <svg viewBox="0 0 32 32">
                                <use xlink:href="#man-people-user"></use>
                            </svg>
                        </label>
                        <input class="user-name" type="text" name="name" id="name" placeholder="My name is" value="test1"  />
                    </div>
                    <div>
                        <label class="lock" for="password">
                            <svg viewBox="0 0 32 32">
                                <g filter="">
                                    <use xlink:href="#lock-locker"></use>
                                </g>
                            </svg>  
                        </label>
                        <input type="password" name="password" class="user-password" placeholder="My password is" value="test"/>
                    </div>
                    <input type="submit" value="Sign in" class="sign-in" />
                </form>
                <a href="#about" class="btn">about</a>
            </div>
            ${authorizationIco}
        </div`;
        const signIn = pageAuth.querySelector('.sign-in');
        signIn.addEventListener('click', (e) => {
            e.preventDefault();
            this.btnClick(pageAuth);
        })
        this.app.innerHTML = '';
        this.app.append(pageAuth);
    }

    btnClick(el){
        const userName = el.querySelector('.user-name');
        const userPas = el.querySelector('.user-password');
        const userNameVal = userName.value;
        const userPasVal = userPas.value;

        const mainView = new MainView();
        mainView.authorization(userNameVal, userPasVal);
    }

    errorAuth(){
        const wrapper = this.app.querySelector('.wrapper');


    }
}