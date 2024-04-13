import { AbstractView } from '../../../common/view';

import "./styles.css";

export class Body extends AbstractView{
    render(){

        const bodyHeader = document.createElement('header');
        bodyHeader.classList.add('body__header');

        bodyHeader.innerHTML = `<button class='btn body__btn'>Покинуть чат</button>`;


        const bodyBtn = bodyHeader.querySelector('.body__btn');
        bodyBtn.addEventListener('click',() =>{
            console.log('выход из чата');
        })




        const body = `
            <header class="body__header">
                <button class='btn body__btn'>Покинуть чат</button>
            </header>

            <div class="body__container">
                <div class="body__chats">
                    <p class="body__sender">Вы</p>
                    <div class="body__messageSender">
                        <p>Hellow</p>
                    </div>
                </div>

                <div class="body__chats">
                    <p>Вы</p>
                    <div class="body__messageRecipent">
                        <p>Hellow</p>
                    </div>
                </div>
            </div>
        `;

        //const bodyBtn =

        

        return bodyHeader;
    }
}