import { AbstractView } from '../../common/view';

export class MainView extends AbstractView{
    constructor(){
        super();
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML = 'Чат';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}