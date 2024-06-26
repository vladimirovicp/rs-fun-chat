import { AbstractView } from '../../common/view';

export class MainView extends AbstractView{
    constructor(){
        super();
        this.ws = new WebSocket('ws://127.0.0.1:4000');
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML = 'Чат';
        this.app.innerHTML = '';
        this.app.append(main);
    }

    authorization(login,pas){
        const data = {
            id: login,
            type: "USER_LOGIN",
            payload: {
              user: {
                login: login,
                password: pas,
              },
            },
          };

        this.ws.addEventListener('open', (event) => {

            //console.log('addEventListener - event', event);
            this.ws.send(JSON.stringify(data));
        });

        this.ws.addEventListener('message', (event) => {
            const answer = JSON.parse(event.data);

            console.log(answer);

            if (answer.type === 'ERROR'){
                console.log('ERROR', answer);
                alert('a user with this login is already authorized');
            }

            if(answer.type === 'USER_LOGIN'){
                console.log('USER_LOGIN', answer);
                this.render();
            }

        });


        //this.ws.send(JSON.stringify(data));
        //   this.ws.addEventListener('message', (event) => {
        //     const answer = event.data;
        //     console.log('answer', answer);
        // });

    }
}