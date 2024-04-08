import { AbstractView } from '../../common/view';

export class About extends AbstractView {
    render(){
        const main = document.createElement('h1');
        main.innerHTML = 'About';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}