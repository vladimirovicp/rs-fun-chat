import { AbstractView } from '../../../common/view';
//import styles from "./styles.module.css";
import "./styles.css";
import ElementCreator from '../../../util/element-creator';
import { sendingMessageUser } from '../../../helpers/api';

export class MessageBlock extends AbstractView{

    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){
        const messageBlock = new ElementCreator({tag:'div', classNames:['messageBlock']});
        const form = new ElementCreator({tag:'form', classNames:['form']});
        const input = new ElementCreator({
            tag:'input', 
            classNames:['userMessage'], 
            attr:{type:"text",disabled: 'disabled'},
        });
        const button = new ElementCreator({
            tag:'button', 
            classNames:['btn'], 
            attr:{disabled: 'disabled'},
            textContent: 'Отправить',
        });
        form.addInnerElement(input);
        form.addInnerElement(button);
        messageBlock.addInnerElement(form);
        const messageContainer = messageBlock.getElement();

        this.trackInput(messageContainer);
        this.btnClick(messageContainer);

        
        return messageContainer;
    }

    trackInput(messageContainer){
        const userMessage = messageContainer.querySelector('.userMessage');
        const btn = messageContainer.querySelector('.btn');
        userMessage.addEventListener('input', (e) => {
            const value = e.target.value;
            if(value.length > 0){
                btn.removeAttribute('disabled');
            } else{
                btn.setAttribute('disabled', 'disabled');
            }
        });
    }

    btnClick(messageContainer){
        const userMessage = messageContainer.querySelector('.userMessage');
        const btn = messageContainer.querySelector('.btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const messaage = userMessage.value;
            userMessage.value = '';
            btn.setAttribute('disabled', 'disabled');
            sendingMessageUser(this.ws,messaage,this.stateUser.sendUser);

        });
    }
}