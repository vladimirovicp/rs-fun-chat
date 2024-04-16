import { AbstractView } from '../../../common/view';
import "./styles.css";
import { gettingAllAuthenticatedUsers } from "../../../helpers/api";

export class Sidebar extends AbstractView{


    constructor(ws,stateUser){
        super();
        this.ws = ws;
        this.stateUser = stateUser;
    }

    render(){

        //gettingAllAuthenticatedUsers(this.ws);

        //gettingAllAuthenticatedUsers(this.ws);

        console.log('this.stateUser.users',this.stateUser.users)

        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

        //const sidebarTitle = document.createElement('div');

        // sidebarTitle.classList.add('sidebar__header');
        // sidebarTitle.innerHTML = 'Users';


        sidebar.innerHTML = `
            <h4 class='sidebar__header'>Users</h4>
            <ul class='sidebar__users'>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        `;

        let sidebarUsersList = '';

        for (let i = 0; i < this.stateUser.users.length; i++) {
            sidebarUsersList += `<li>${this.stateUser.users[i].login}</li>`;
          }


        const sidebarUsers = sidebar.querySelector('.sidebar__users');
        sidebarUsers.innerHTML = sidebarUsersList;


        return sidebar;
    }
}