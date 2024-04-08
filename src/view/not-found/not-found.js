import { AbstractView } from '../../common/view';

export class NotFound extends AbstractView {
    render(){
        const main = document.createElement('h1');
        main.innerHTML = '404 Not Found';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}