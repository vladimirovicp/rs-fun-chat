import { AbstractView } from '../../common/view';

export class Authorization extends AbstractView {
    constructor(){
        super();
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML = 'Authorization';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}