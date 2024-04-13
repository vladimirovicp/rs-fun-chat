import { AbstractView } from '../../common/view';

import { Sidebar } from '../components/sidebar/sidebar';
import { Body } from '../components/body/body';
import { MessageBlock } from '../components/message-block/message-block';

import "./styles.css";

export class MainView extends AbstractView{

    constructor(ws,stateUser){
        super();

        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const pageName = document.createElement('div');
        pageName.classList.add('chat');

        const sidebar = new Sidebar().render();
        pageName.append(sidebar);
        
    
        const main = document.createElement('main');
        main.classList.add('main');

        main.append(new Body(this.ws,this.stateUser).render());
        main.append(new MessageBlock().render());

        pageName.append(main);

        this.app.innerHTML = '';

        this.app.append(pageName);

    }

}