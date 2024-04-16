import { AbstractView } from '../../common/view';
import './authorization.scss';
import { authorizationIco } from '../../helpers/svg';
import { userAuthentication } from '../../helpers/api';

export class Authorization extends AbstractView {
    constructor(ws,stateUser){
        super();
        this.stateUser = stateUser;
        this.ws = ws;
    }

    render(){
        const pageAuth = document.createElement('div');
        pageAuth.classList.add('page-auth');
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
                            value="Test1" 
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
                        <input type="password" name="password" class="user-password" placeholder="My password is" value="test"/>
                        <span class="password-error"></span>
                    </div>
                    <input type="submit" value="Sign in" class="sign-in" />
                </form>
                <a href="#about" class="btn">about</a>
            </div>
            ${authorizationIco}
        </div`;


        //!!!!!!!!!!!!!! Потом Включи валидацию!!!!
        // добавь <input type="submit" value="Sign in" class="sign-in" disabled />
        //this.validateInput(pageAuth);


        const signIn = pageAuth.querySelector('.sign-in');
        signIn.addEventListener('click', (e) => {
            e.preventDefault();
            this.btnClick(pageAuth);
        });

        this.app.innerHTML = '';
        this.app.append(pageAuth);
    }

    btnClick(el){
        const userName = el.querySelector('.user-name');
        const userPas = el.querySelector('.user-password');
        const userNameVal = userName.value;
        const userPasVal = userPas.value;
        this.stateUser.password = userPasVal;
        userAuthentication(this.ws,userNameVal, userPasVal);
    }

    validateInput(pageAuth){

        let nameBool = false;
        let passBool = false;

        const signIn = pageAuth.querySelector('.sign-in');

        const formUserName = pageAuth.querySelector('.form__user-name');
        const userError = formUserName.querySelector('.user-error');
        const userName = formUserName.querySelector('.user-name');
        userName.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value){
                if( value[0] !== value[0].toUpperCase()){
                    userError.innerHTML = 'Первая буква в Имени должно быть заглавной!'; 
                    nameBool= false; 
                    activeSignIn();
                } else{
                    if(value.length < 4){
                        console.log(value.length)
                        userError.innerHTML = 'Символов в Имени должно быть больше 3!';
                        nameBool=false;
                        activeSignIn();
                    } else{
                        userError.innerHTML = '';
                        nameBool=true;
                        activeSignIn();
                    }
                }
            } else{
                userError.innerHTML = '';
            }

        });

        const formUserPassword =  pageAuth.querySelector('.form__user-password');
        const passwordError = formUserPassword.querySelector('.password-error');
        const userPassword = formUserPassword.querySelector('.user-password');
        userPassword.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value){
                if( value.length < 4 ){
                    console.log(value.length);
                    passwordError.innerHTML = 'Символов в пароле должно быть больше 3!';
                    passBool = false;
                    activeSignIn();
                } else{
                    passwordError.innerHTML = ``;

                    if(!/[0-9]+/.test(value)){
                        passwordError.innerHTML = 'В пароле должна быть хоть одна цифра!';
                    } else{
                        passBool = true;
                        activeSignIn();
                    }
                }
            } else {
                passwordError.innerHTML = '';
            }
        });

        const activeSignIn = () => {
            if (nameBool && passBool){
                signIn.removeAttribute('disabled');

                // document.addEventListener('keydown', (e) =>{
                //     if (e.key === 'Enter'){
                //         if(signIn.disabled){
                //             //this.btnClick();
                //             console.log('Enter');
                //         }
                //     }
                // });

            } else{
                signIn.setAttribute('disabled', 'disabled');
            }
        };
    }
}