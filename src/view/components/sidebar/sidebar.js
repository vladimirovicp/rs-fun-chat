import { AbstractView } from '../../../common/view';

import styles from "./styles.module.css";

export class Sidebar extends AbstractView{
    render(){

        

        const sidebar = document.createElement('div');
        sidebar.classList.add(styles.sidebar);
        sidebar.innerHTML = `
            <h4 class=${styles.header}>Users</h4>
            <ul class=${styles.users}>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        `;
        return sidebar;
    }
}