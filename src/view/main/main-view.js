import { AbstractView } from '../../common/view';

import { Sidebar } from '../components/sidebar/sidebar';
import { Body } from '../components/body/body';
import { MessageBlock } from '../components/message-block/message-block';
import { gettingAllAuthenticatedUsers } from "../../helpers/api";

import "./styles.css";

export class MainView extends AbstractView{
    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;

        if(this.stateUser.login && this.stateUser.password){
            gettingAllAuthenticatedUsers(this.ws);
        }
        
    }

    render(){
        if(!this.stateUser.login && !this.stateUser.password){

            const pageName = document.createElement('div');
            pageName.classList.add('chat__noAuth');
            pageName.innerHTML = `<div class="chat__noAuth-container">
                <div class="chat__noAuth-text">Вы не авторизованы!</div>
                <a class="chat__noAuth-link" href="/">Перейти на страницу авторизации!</a>
            </div> `;
            this.app.innerHTML = '';
            this.app.append(pageName);
            return null;


        }

        const pageName = document.createElement('div');
        pageName.classList.add('chat');

        const sidebar = new Sidebar(this.ws,this.stateUser).render();
        pageName.append(sidebar);
        
        const main = document.createElement('main');
        main.classList.add('main');

        main.append(new Body(this.ws,this.stateUser).render());
        main.append(new MessageBlock().render());

        pageName.append(main);
        this.app.innerHTML = '';
        this.app.append(pageName);
    }

    redrawingSidebar(){
        const sidebar = this.app.querySelector('.sidebar');

        if(sidebar){
            const sidebarNew = new Sidebar(this.ws,this.stateUser).render();
            const sidebarStr = sidebarNew.innerHTML;
            sidebar.innerHTML = sidebarStr;
        }

        
        //sidebar.innerHTML = sidebarStr;

        //sidebar.innerHTML = Сработало;
    }

}