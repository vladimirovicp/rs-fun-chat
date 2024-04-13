import { AbstractView } from '../../../common/view';
import styles from "./styles.module.css";

export class MessageBlock extends AbstractView{
    render(){


        const messageBlock = document.createElement('div');
        messageBlock.classList.add(styles.messageBlock);
        messageBlock.innerHTML = `
            <form  class=${styles.form} onSubmit={handleSend}>
                <input 
                    type="text" 
                    class=${styles.userMessage} 
                    value='message'
                />
                <button class=${styles.btn}>Сказать</button>
            </form>
        `;
        return messageBlock;
    }
}