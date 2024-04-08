import { AbstractView } from '../../common/view';
import './Authorization.scss';

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
                <form action="#">
                    <div>
                        <label class="user" for="text">ico</label>
                        <input class="user-input" type="text" name="name" id="name" placeholder="My name is"  />
                    </div>
                    <div>
                        <label class="lock" for="password">ico</label>
                        <input type="password" name="name" id="name" placeholder="" />
                    </div>
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        </div`;
        this.app.innerHTML = '';
        this.app.append(pageAuth);
    }
}