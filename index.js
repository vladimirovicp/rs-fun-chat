(()=>{"use strict";class e{constructor(){this.app=document.querySelector("body")}}class t{constructor(e){this.element=null,this.createElement(e)}getElement(){return this.element}addInnerElement(e){e instanceof t?this.element.append(e.getElement()):this.element.append(e)}createElement(e){this.element=document.createElement(e.tag),this.setCssClasses(e.classNames),this.setTextContent(e.textContent),this.setCallback(e.callback),this.setId(e.id),this.setAttr(e.attr),this.addData(e.idData)}setId(e){e&&this.element.setAttribute("id",e)}setCssClasses(e=[]){e.map((e=>this.element.classList.add(e)))}setAttr(e={}){for(let t=0;t<Object.keys(e).length;t+=1){const s=Object.keys(e)[t];this.element.setAttribute(s,e[s])}}setTextContent(e=""){this.element.textContent=e}setCallback(e){"function"==typeof e&&this.element.addEventListener("click",(t=>e(t)))}addData(e){e&&(this.element.dataset.id=e)}}class s extends e{render(){const e=new t({tag:"div",classNames:["not-fouund__container"]}),s=new t({tag:"div",classNames:["not-fouund__info"],textContent:"404 Not Found"});e.addInnerElement(s),this.app.innerHTML="",this.app.append(e.getElement())}}const n=async e=>{const t=sessionStorage.getItem("user"),s=JSON.parse(t),n={id:s.login,type:"USER_LOGIN",payload:{user:{login:s.login,password:s.password}}};e.send(JSON.stringify(n))},a=e=>{e.send(JSON.stringify({id:"allAuthUser",type:"USER_ACTIVE",payload:null}))},r=e=>{e.send(JSON.stringify({id:"allUnautUser",type:"USER_INACTIVE",payload:null}))},i=(e,t)=>{const s={id:`history${t}`,type:"MSG_FROM_USER",payload:{user:{login:t}}};e.send(JSON.stringify(s))};class o extends e{constructor(e,t){super(),this.stateUser=t,this.ws=e}render(){const e=document.createElement("div");e.classList.add("page-auth"),e.innerHTML='\n        <div class=\'container\'>\n            <div class="wrapper">\n                <form action="#" class="auth__form">\n                    <div class="form__user-name">\n                        <label class="user" for="name">\n                            <svg viewBox="0 0 32 32">\n                                <use xlink:href="#man-people-user"></use>\n                            </svg>\n                        </label>\n                        <input \n                            class="user-name" \n                            type="text" \n                            name="name" \n                            id="name" \n                            placeholder="My name is" \n                            value="Test1" \n                            required: "required" \n                            minlength: "4" \n                            pattern: "^[A-Z][a-zA-Z\\-]+$"  />\n                        <span class="user-error"></span>\n                    </div>\n                    <div class="form__user-password">\n                        <label class="lock" for="password">\n                            <svg viewBox="0 0 32 32">\n                                <g filter="">\n                                    <use xlink:href="#lock-locker"></use>\n                                </g>\n                            </svg>  \n                        </label>\n                        <input type="password" name="password" class="user-password" placeholder="My password is" value="test"/>\n                        <span class="password-error"></span>\n                    </div>\n                    <input type="submit" value="Sign in" class="sign-in" />\n                </form>\n                <a href="#about" class="btn form__btn">about</a>\n            </div>\n            <svg id="svg-source" height="0" version="1.1"  xmlns="http://www.w3.org/2000/svg" \nxmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute">\n <g id="man-people-user" data-iconmelon="Streamline Icon Set:de32eb2621491c1a881a9fe846236da1">\n    <g id="Expanded">\n      <g>\n        <g>\n          <path  d="M16.028,20c-4.764,0-8.639-4.486-8.639-10s3.875-10,8.639-10c4.763,0,8.638,4.486,8.638,10\n\t\t\t\tS20.791,20,16.028,20z M16.028,1.333C12,1.333,8.722,5.221,8.722,10s3.277,8.667,7.306,8.667c4.029,0,7.306-3.888,7.306-8.667\n\t\t\t\tS20.057,1.333,16.028,1.333z"></path>\n        </g>\n      <g>\n         <path  d="M31.988,32H0.012v-4.515c0-1.967,1.245-3.733,3.097-4.395l8.224-2.266v-2.77h1.333v3.785L3.51,24.361\n\t\t\t\tc-1.275,0.458-2.165,1.72-2.165,3.124v3.182h29.309v-3.182c0-1.404-0.889-2.666-2.213-3.139l-9.107-2.506v-3.758h1.332v2.742\n\t\t\t\tl8.178,2.251c1.9,0.677,3.145,2.442,3.145,4.409V32z"></path>\n       </g>\n       <g>\n                    <path  d="M21.865,8.812c-0.045,0-0.09-0.001-0.137-0.003c-1.5-0.055-3.25-1.004-4.361-2.287\n\t\t\t\tC16.59,7.513,15.48,8.15,14.106,8.383c-2.403,0.413-5.152-0.51-5.988-1.321l0.928-0.957c0.403,0.391,2.69,1.329,4.836,0.964\n\t\t\t\tc1.332-0.226,2.292-0.911,2.854-2.034l0.558-1.114l0.617,1.082c0.738,1.292,2.508,2.425,3.867,2.475\n\t\t\t\tc0.604,0.016,1.033-0.165,1.307-0.571l1.105,0.745C23.686,8.403,22.863,8.812,21.865,8.812z"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <g id="lock-locker" data-iconmelon="Streamline Icon Set:5d43c6f45cdbecfd5b8a12bc9e5dd33c">\n              <g id="Expanded">\n                <g>\n                  <g>\n                    <circle  cx="16" cy="20" r="1.333"></circle>\n                  </g>\n          <g>\n              <path  d="M16,25.333c-0.369,0-0.667-0.298-0.667-0.666v-4C15.333,20.298,15.631,20,16,20s0.667,0.298,0.667,0.667\n\t\t\t\tv4C16.667,25.035,16.369,25.333,16,25.333z"></path>\n          </g>\n          <g>\n            <path  d="M28,32H4V12h24V32z M5.333,30.667h21.333V13.333H5.333V30.667z"></path>\n        </g>\n        <g>\n         <path  d="M24,12.667h-1.333V8c0-3.676-2.991-6.667-6.667-6.667c-3.676,0-6.667,2.99-6.667,6.667v4.667H8V8\n\t\t\t\tc0-4.412,3.588-8,8-8c4.411,0,8,3.588,8,8V12.667z"></path>\n           </g>\n        </g>\n      </g>\n   </g>\n</svg>\n        </div',e.querySelector(".sign-in").addEventListener("click",(t=>{t.preventDefault(),this.btnClick(e)})),this.app.innerHTML="",this.app.append(e)}btnClick(e){const t=e.querySelector(".user-name"),s=e.querySelector(".user-password"),a=t.value,r=s.value;sessionStorage.setItem("user",JSON.stringify({login:a,password:r})),this.stateUser.isLogined=!0,n(this.ws)}validateInput(e){let t=!1,s=!1;const n=e.querySelector(".sign-in"),a=e.querySelector(".form__user-name"),r=a.querySelector(".user-error");a.querySelector(".user-name").addEventListener("input",(e=>{const s=e.target.value;s?s[0]!==s[0].toUpperCase()?(r.innerHTML="Первая буква в Имени должно быть заглавной!",t=!1,c()):s.length<4?(r.innerHTML="Символов в Имени должно быть больше 3!",t=!1,c()):(r.innerHTML="",t=!0,c()):r.innerHTML=""}));const i=e.querySelector(".form__user-password"),o=i.querySelector(".password-error");i.querySelector(".user-password").addEventListener("input",(e=>{const t=e.target.value;t?t.length<4?(console.log(t.length),o.innerHTML="Символов в пароле должно быть больше 3!",s=!1,c()):(o.innerHTML="",/[0-9]+/.test(t)?(s=!0,c()):o.innerHTML="В пароле должна быть хоть одна цифра!"):o.innerHTML=""}));const c=()=>{t&&s?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled")}}}class c extends e{render(){const e=document.createElement("h1");e.innerHTML="About",this.app.innerHTML="",this.app.append(e)}}class l extends e{constructor(e,t){super(),this.ws=e,this.stateUser=t}render(){const e=sessionStorage.getItem("user"),t=JSON.parse(e).login,s=document.createElement("div");s.classList.add("sidebar"),s.innerHTML=`\n            <div class="sidebar__user-current">\n                Вы вошли как: <span class="sidebar__user-current-name">${t}</span></div>\n            <div class="search__box">\n                <input type="search" class="search__input" placeholder="Найти пользователя ...">\n            </div>\n            <h4 class='sidebar__header'>Пользователи:</h4>\n            <ul class='sidebar__users'>\n            </ul>\n        `;let n="";console.log("this.stateUser.usersActive",this.stateUser.usersActive);for(let e=0;e<this.stateUser.usersActive.length;e++)i(this.ws,this.stateUser.usersActive[e].login),n+=`<li>\n                <div class="sidebar__user">\n                    <div class="sidebar__user-status sidebar__user-active"></div>\n                    <div class="sidebar__user-name">${this.stateUser.usersActive[e].login}</div>\n                    <div class="sidebar__message-number"></div>\n                </div>\n            </li>`;for(let e=0;e<this.stateUser.usersInacrive.length;e++)n+=`<li>\n                <div class="sidebar__user">\n                    <div class="sidebar__user-status"></div>\n                    <div class="sidebar__user-name">${this.stateUser.usersInacrive[e].login}</div>\n                    <div class="sidebar__message-number"></div>\n                </div>\n            </li>`;return s.querySelector(".sidebar__users").innerHTML=n,s}}class d extends e{constructor(e,t){super(),this.ws=e,this.stateUser=t}render(){const e=new t({tag:"div",classNames:["main__container"]}),s=new t({tag:"header",classNames:["body__header"]}),n=new t({tag:"button",classNames:["btn","body__btn","body__btn-chat"],textContent:"Покинуть чат",callback:()=>{((e,t)=>{const s=sessionStorage.getItem("user"),n=JSON.parse(s),a={id:n.login,type:"USER_LOGOUT",payload:{user:{login:n.login,password:n.password}}};sessionStorage.removeItem("user"),t.isLogined=!1,e.send(JSON.stringify(a)),window.location.hash="#auth"})(this.ws,this.stateUser)}}),a=new t({tag:"div",classNames:["body__name-chat"],textContent:"Супер чат!"}),r=new t({tag:"button",classNames:["btn","body__btn","body__btn-about"],textContent:"About",callback:()=>{window.location.hash="#about"}});s.addInnerElement(a),s.addInnerElement(r),s.addInnerElement(n),e.addInnerElement(s);const i=new t({tag:"div",classNames:["body__info"]}),o=new t({tag:"div",classNames:["body__send-user-name"]}),c=new t({tag:"div",classNames:["body__send-user-status"]});i.addInnerElement(o),i.addInnerElement(c),e.addInnerElement(i);const l=new t({tag:"div",classNames:["body__container"]});return e.addInnerElement(l),e.getElement()}createChatsSender(e,s,n,a,r){const i=new t({tag:"div",classNames:["body__chats","body__chats-sender"],idData:r}),o=new t({tag:"div",classNames:["body__chats-info"]}),c=new t({tag:"span",classNames:["body__chats-name"],textContent:"Вы"}),l=new t({tag:"span",classNames:["body__chats-date"],textContent:s});o.addInnerElement(c),o.addInnerElement(l),i.addInnerElement(o);const d=new t({tag:"div",classNames:["body__messageSender"]}),h=new t({tag:"p",textContent:e});d.addInnerElement(h),i.addInnerElement(d);const u=new t({tag:"p",classNames:["body__messageSender-statuses"]}),g=new t({tag:"span",classNames:["body__messageSender-edit"],textContent:a||""});u.addInnerElement(g);const p=new t({tag:"span",classNames:["body__messageSender-status"],textContent:n});return u.addInnerElement(p),i.addInnerElement(u),i}createChatsRecipent(e,s,n,a){const r=new t({tag:"div",classNames:["body__chats","body__chats-recipent"],idData:a}),i=new t({tag:"div",classNames:["body__chats-info"]}),o=new t({tag:"span",classNames:["body__chats-name"],textContent:n}),c=new t({tag:"span",classNames:["body__chats-date"],textContent:s});i.addInnerElement(o),i.addInnerElement(c),r.addInnerElement(i);const l=new t({tag:"div",classNames:["body__messageRecipent"]}),d=new t({tag:"p",textContent:e});return l.addInnerElement(d),r.addInnerElement(l),r}}class h extends e{constructor(e,t){super(),this.ws=e,this.stateUser=t}render(){const e=new t({tag:"div",classNames:["messageBlock"]}),s=new t({tag:"form",classNames:["form"]}),n=new t({tag:"input",classNames:["userMessage"],attr:{type:"text",disabled:"disabled"}}),a=new t({tag:"button",classNames:["btn"],attr:{disabled:"disabled"},textContent:"Отправить"});s.addInnerElement(n),s.addInnerElement(a),e.addInnerElement(s);const r=e.getElement();return this.trackInput(r),this.btnClick(r),r}trackInput(e){const t=e.querySelector(".userMessage"),s=e.querySelector(".btn");t.addEventListener("input",(e=>{e.target.value.length>0?s.removeAttribute("disabled"):s.setAttribute("disabled","disabled")}))}btnClick(e){const t=e.querySelector(".userMessage");e.querySelector(".btn").addEventListener("click",(e=>{e.preventDefault();const s=t.value;t.value="",((e,t,s)=>{const n=sessionStorage.getItem("user"),a={id:JSON.parse(n).login,type:"MSG_SEND",payload:{message:{to:s,text:t}}};e.send(JSON.stringify(a))})(this.ws,s,this.stateUser.sendUser)}))}}class u extends e{constructor(e,t){super(),this.ws=e,this.stateUser=t;const s=sessionStorage.getItem("user");this.user=JSON.parse(s)}render(){if(this.user&&(this.stateUser.isLogined||(n(this.ws),this.stateUser.isLogined=!0),a(this.ws)),!this.user){const e=document.createElement("div");return e.classList.add("chat__noAuth"),e.innerHTML='<div class="chat__noAuth-container">\n                <div class="chat__noAuth-text">Вы не авторизованы!</div>\n                <a class="chat__noAuth-link" href="/rs-fun-chat/">Перейти на страницу авторизации!</a>\n            </div> ',this.app.innerHTML="",this.app.append(e),null}const e=document.createElement("div");e.classList.add("chat");const s=new l(this.ws,this.stateUser).render();e.append(s);const r=document.createElement("main");r.classList.add("main"),this.BodyClass=new d(this.ws,this.stateUser),r.append(this.BodyClass.render()),r.append(new h(this.ws,this.stateUser).render());const i=new t({tag:"div",classNames:["chat__footer"]}).getElement();i.innerHTML='\n            <div class="chat__footer-rs"><img src="../img/rs-logo.webp">The Rolling Scopes School</div>\n            <div>Git Hub: <a href="https://github.com/vladimirovicp">Vladimirovicp</a></div>\n            <div>2024</div>\n        ',r.append(i),e.append(r),this.app.innerHTML="",this.app.append(e)}redrawingSidebar(){const e=this.app.querySelector(".sidebar");if(e){const t=new l(this.ws,this.stateUser).render();console.log("sidebarNew",t);const s=t.innerHTML;e.innerHTML=s,this.searchUser(e),this.clickUser(e,this.stateUser)}}searchUser(e){const t=e.querySelector(".search__input"),s=e.querySelector(".sidebar__users").getElementsByTagName("li");t.addEventListener("input",(e=>{const t=e.target.value.toLowerCase();Array.from(s).forEach((function(e){e.querySelector(".sidebar__user-name").textContent.toLowerCase().includes(t)?e.style.display="block":e.style.display="none"}))}))}clickUser(e,t){const s=e.querySelector(".sidebar__users").getElementsByTagName("li");Array.from(s).forEach((function(e){const s=e.querySelector(".sidebar__user");s.addEventListener("click",(()=>{const e=s.querySelector(".sidebar__user-name").textContent;t.sendUser=e}))}))}isSendUser(){if(this.stateUser.sendUser){const e=this.app.querySelector(".sidebar").querySelector(".sidebar__users").getElementsByTagName("li"),t=this.app.querySelector(".body__info"),s=t.querySelector(".body__send-user-name"),n=t.querySelector(".body__send-user-status");Array.from(e).forEach((e=>{const t=e.querySelector(".sidebar__user-name").textContent;this.stateUser.sendUser===t?(e.classList.add("active"),s.textContent=t,e.querySelector(".sidebar__user-status").classList.contains("sidebar__user-active")?n.innerHTML='<span class="status-active">В сети</span>':n.innerHTML="<span>Не в сети</span>"):e.classList.contains("active")&&e.classList.remove("active")})),this.app.querySelector(".userMessage").removeAttribute("disabled"),i(this.ws,this.stateUser.sendUser)}}mainNewMessage(e){const t=this.app.querySelector(".body__container");t.querySelector(".none-message")&&(t.innerHTML="");const s=this.formateDate(e.datetime),n=e.status.isReaded?"прочитано":"доставлено",a=e.status.isEdited?"изменено":null,r=this.BodyClass.createChatsSender(e.text,s,n,a,e.id);t.innerHTML+=r.getElement().outerHTML,t.scrollHeight>t.clientHeight&&t.scrollTo({top:t.scrollHeight-t.clientHeight,behavior:"smooth"})}interlocutorNewMessage(e){const t=this.app.querySelector(".body__container");t.querySelector(".none-message")&&(t.innerHTML="");const s=this.formateDate(e.datetime),n=t.querySelector(".body__chats-not-read");if(!n&&!e.status.isReaded){t.innerHTML+='<div class="body__chats body__chats-not-read">\n                    <span>Новые сообщения</span>\n                </div>';const r=this.app.querySelector(".main"),i=(t.querySelector(".body__chats-not-read"),this.changeStatusMain),o=this.ws;function c(){i(o),r.removeEventListener("click",c)}r.addEventListener("click",c)}const a=this.BodyClass.createChatsRecipent(e.text,s,this.stateUser.sendUser,e.id);t.innerHTML+=a.getElement().outerHTML,n?t.querySelector(".body__chats-not-read").scrollIntoView({behavior:"smooth",block:"start"}):t.scrollHeight>t.clientHeight&&t.scrollTo({top:t.scrollHeight-t.clientHeight,behavior:"smooth"})}formateDate(e){const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}.${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getFullYear()}, ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}updateMessageList(e){const t=this.app.querySelector(".body__container");t.innerHTML="";const s=e.payload.messages;if(0===s.length)t.innerHTML='<div class="none-message">Напишите ваше первое сообщение...</div>';else{let e=!1;s.forEach((t=>{this.stateUser.sendUser===t.from?this.interlocutorNewMessage(t,e):this.mainNewMessage(t)}))}}updateMessageNumber(e){const t=this.app.querySelector(".sidebar__users").getElementsByTagName("li");Array.from(t).forEach((function(t){if(t.querySelector(".sidebar__user-name").textContent===e){const e=t.querySelector(".sidebar__message-number");if(e.innerHTML){const t=e.querySelector("span");t.textContent=String(Number(t.textContent)+1)}else e.innerHTML="<span>1</span>"}}))}changeStatusMain(e){const t=document.querySelector(".body__container").querySelector(".body__chats-not-read");if(t){const a=document.querySelector(".sidebar__users").getElementsByTagName("li");if(Array.from(a).forEach((function(e){e.classList.contains("active")&&(e.querySelector(".sidebar__message-number").innerHTML="")})),t){for(var s=[],n=t.nextElementSibling;n;)s.push(n),n=n.nextElementSibling;s.forEach((t=>{((e,t)=>{const s={id:"mainMSG_READ",type:"MSG_READ",payload:{message:{id:t}}};e.send(JSON.stringify(s))})(e,t.dataset.id)}))}t.remove()}}updateSidebarMessageNumber(e){if(e.payload.messages.length>0){const t=sessionStorage.getItem("user"),s=JSON.parse(t).login,n=this.stateUser.historyWithUser.id.replace("history",""),a=document.querySelector(".sidebar__users").getElementsByTagName("li");Array.from(a).forEach((function(t){if(t.querySelector(".sidebar__user-name").textContent===n){let n=0;e.payload.messages.forEach((e=>{e.to===s&&!1===e.status.isReaded&&(n+=1)})),0!==n&&(t.querySelector(".sidebar__message-number").innerHTML=`<span>${n}</span>`)}}))}}interlocutorStatusMessage(e){const t=e.id;e.status.isReaded&&this.stateUser.sendUser&&this.app.querySelector(".body__container").querySelectorAll(".body__chats-sender").forEach((e=>{e.dataset.id===t&&(e.querySelector(".body__messageSender-status").textContent="прочитано")}))}}class g{constructor(e,t){this.url=e,this.socket=new WebSocket(this.url),this.connected=!1,this.stateUser=t,this.socket.onopen=()=>{console.log("Соединение установлено"),this.connected=!0,this.onOpenCallback()},this.socket.onmessage=e=>{console.log("Получено сообщение: "+e.data),((e,t,s)=>{const n=JSON.parse(e),i=n.type;if("USER_LOGIN"===i&&(window.location.hash="#main",a(s),r(s)),"ERROR"===i&&alert(n.payload.error),"USER_LOGOUT"===i&&(window.location.hash=""),"USER_EXTERNAL_LOGIN"===i&&(a(s),r(s)),"USER_EXTERNAL_LOGOUT"===i&&(a(s),r(s)),"USER_ACTIVE"===i){const e=n.payload.users,s=sessionStorage.getItem("user"),a=JSON.parse(s).login,r=e.findIndex((e=>e.login===a));-1!==r&&e.splice(r,1),t.usersActive=e}if("USER_INACTIVE"===i&&(t.usersInacrive=n.payload.users),"MSG_SEND"===i){const e=n.payload.message.from,s=n.payload.message.to,a=sessionStorage.getItem("user"),r=JSON.parse(a).login;n.payload.message.text,n.payload.message.datetime,r===e&&(t.mainLastMessage=n),r===s&&(t.sendUser===e&&(t.currentReceivedMessage=n),t.notificationMessage===e?(t.notificationMessage=null,t.notificationMessage=e):t.notificationMessage=e)}"MSG_FROM_USER"===i&&(t.historyWithUser=n),"MSG_READ"===i&&(t.msgRead=n.payload.message)})(e.data,this.stateUser,this.socket)},this.socket.onclose=()=>{console.log("Соединение закрыто"),this.reconnect()}}send(e){this.socket.send(e)}close(){this.socket.close()}reconnect(){console.log("Попытка переподключения..."),this.socket=new WebSocket(this.url),this.socket.onopen=()=>{console.log("Соединение восстановлено")},this.socket.onmessage=e=>{console.log("Получено сообщение: "+e.data)},this.socket.onclose=()=>{console.log("Соединение закрыто"),this.reconnect()}}onOpenCallback(){this.resolve&&this.resolve(this.socket)}connect(){return new Promise(((e,t)=>{this.connected?e(this.socket):(this.resolve=e,this.reject=t)}))}}new g("ws://127.0.0.1:4000");const p=".",m=Symbol("target"),_=Symbol("unsubscribe");function y(e){return e instanceof Date||e instanceof Set||e instanceof Map||e instanceof WeakSet||e instanceof WeakMap||ArrayBuffer.isView(e)}const f=Array.isArray;function b(e){return"symbol"==typeof e}const w={after:(e,t)=>f(e)?e.slice(t.length):""===t?e:e.slice(t.length+1),concat:(e,t)=>f(e)?(e=[...e],t&&e.push(t),e):t&&void 0!==t.toString?(""!==e&&(e+=p),b(t)?e+t.toString():e+t):e,initial(e){if(f(e))return e.slice(0,-1);if(""===e)return e;const t=e.lastIndexOf(p);return-1===t?"":e.slice(0,t)},last(e){if(f(e))return e.at(-1)??"";if(""===e)return e;const t=e.lastIndexOf(p);return-1===t?e:e.slice(t+1)},walk(e,t){if(f(e))for(const s of e)t(s);else if(""!==e){let s=0,n=e.indexOf(p);if(-1===n)t(e);else for(;s<e.length;)-1===n&&(n=e.length),t(e.slice(s,n)),s=n+1,n=e.indexOf(p,s)}},get(e,t){return this.walk(t,(t=>{e&&(e=e[t])})),e},isSubPath(e,t){if(f(e)){if(e.length<t.length)return!1;for(let s=0;s<t.length;s++)if(e[s]!==t[s])return!1;return!0}return!(e.length<t.length||e!==t&&(!e.startsWith(t)||e[t.length]!==p))},isRootPath:e=>f(e)?0===e.length:""===e};function v(e,t,s){return e.isUnsubscribed||t.ignoreSymbols&&b(s)||t.ignoreUnderscores&&"_"===s.charAt(0)||"ignoreKeys"in t&&t.ignoreKeys.includes(s)}class S{constructor(e){this._equals=e,this._proxyCache=new WeakMap,this._pathCache=new WeakMap,this.isUnsubscribed=!1}_getDescriptorCache(){return void 0===this._descriptorCache&&(this._descriptorCache=new WeakMap),this._descriptorCache}_getProperties(e){const t=this._getDescriptorCache();let s=t.get(e);return void 0===s&&(s={},t.set(e,s)),s}_getOwnPropertyDescriptor(e,t){if(this.isUnsubscribed)return Reflect.getOwnPropertyDescriptor(e,t);const s=this._getProperties(e);let n=s[t];return void 0===n&&(n=Reflect.getOwnPropertyDescriptor(e,t),s[t]=n),n}getProxy(e,t,s,n){if(this.isUnsubscribed)return e;const a=e[n],r=a??e;this._pathCache.set(r,t);let i=this._proxyCache.get(r);return void 0===i&&(i=void 0===a?new Proxy(e,s):e,this._proxyCache.set(r,i)),i}getPath(e){return this.isUnsubscribed?void 0:this._pathCache.get(e)}isDetached(e,t){return!Object.is(e,w.get(t,this.getPath(e)))}defineProperty(e,t,s){return!!Reflect.defineProperty(e,t,s)&&(this.isUnsubscribed||(this._getProperties(e)[t]=s),!0)}setProperty(e,t,s,n,a){if(!this._equals(a,s)||!(t in e)){const a=this._getOwnPropertyDescriptor(e,t);return void 0!==a&&"set"in a?Reflect.set(e,t,s,n):Reflect.set(e,t,s)}return!0}deleteProperty(e,t,s){if(Reflect.deleteProperty(e,t)){if(!this.isUnsubscribed){const n=this._getDescriptorCache().get(e);n&&(delete n[t],this._pathCache.delete(s))}return!0}return!1}isSameDescriptor(e,t,s){const n=this._getOwnPropertyDescriptor(t,s);return void 0!==e&&void 0!==n&&Object.is(e.value,n.value)&&(e.writable||!1)===(n.writable||!1)&&(e.enumerable||!1)===(n.enumerable||!1)&&(e.configurable||!1)===(n.configurable||!1)&&e.get===n.get&&e.set===n.set}isGetInvariant(e,t){const s=this._getOwnPropertyDescriptor(e,t);return void 0!==s&&!0!==s.configurable&&!0!==s.writable}unsubscribe(){this._descriptorCache=null,this._pathCache=null,this._proxyCache=null,this.isUnsubscribed=!0}}function M(e){return"[object Object]"===toString.call(e)}function C(){return!0}function U(e,t){return e.length!==t.length||e.some(((e,s)=>t[s]!==e))}const E=new Set(["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),k=new Set(["concat","includes","indexOf","join","keys","lastIndexOf"]),x={push:C,pop:C,shift:C,unshift:C,copyWithin:U,reverse:U,sort:U,splice:U,flat:U,fill:U},L=new Set([...E,...k,...Object.keys(x)]);function N(e,t){if(e.size!==t.size)return!0;for(const s of e)if(!t.has(s))return!0;return!1}const I=["keys","values","entries"],H=new Set(["has","toString"]),T={add:N,clear:N,delete:N,forEach:N},O=new Set([...H,...Object.keys(T),...I]);function q(e,t){if(e.size!==t.size)return!0;let s;for(const[n,a]of e)if(s=t.get(n),s!==a||void 0===s&&!t.has(n))return!0;return!1}const V=new Set([...H,"get"]),A={set:q,clear:q,delete:q,forEach:q},R=new Set([...V,...Object.keys(A),...I]);class P{constructor(e,t,s,n){this._path=t,this._isChanged=!1,this._clonedCache=new Set,this._hasOnValidate=n,this._changes=n?[]:null,this.clone=void 0===t?e:this._shallowClone(e)}static isHandledMethod(e){return E.has(e)}_shallowClone(e){let t=e;if(M(e))t={...e};else if(f(e)||ArrayBuffer.isView(e))t=[...e];else if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set([...e].map((e=>this._shallowClone(e))));else if(e instanceof Map){t=new Map;for(const[s,n]of e.entries())t.set(s,this._shallowClone(n))}return this._clonedCache.add(t),t}preferredThisArg(e,t,s,n){return e?(f(n)?this._onIsChanged=x[t]:n instanceof Set?this._onIsChanged=T[t]:n instanceof Map&&(this._onIsChanged=A[t]),n):s}update(e,t,s){const n=w.after(e,this._path);if("length"!==t){let e=this.clone;w.walk(n,(t=>{e?.[t]&&(this._clonedCache.has(e[t])||(e[t]=this._shallowClone(e[t])),e=e[t])})),this._hasOnValidate&&this._changes.push({path:n,property:t,previous:s}),e?.[t]&&(e[t]=s)}this._isChanged=!0}undo(e){let t;for(let s=this._changes.length-1;-1!==s;s--)t=this._changes[s],w.get(e,t.path)[t.property]=t.previous}isChanged(e){return void 0===this._onIsChanged?this._isChanged:this._onIsChanged(this.clone,e)}isPathApplicable(e){return w.isRootPath(this._path)||w.isSubPath(e,this._path)}}class D extends P{static isHandledMethod(e){return L.has(e)}}class J extends P{undo(e){e.setTime(this.clone.getTime())}isChanged(e,t){return!t(this.clone.valueOf(),e.valueOf())}}class W extends P{static isHandledMethod(e){return O.has(e)}undo(e){for(const t of this.clone)e.add(t);for(const t of e)this.clone.has(t)||e.delete(t)}}class G extends P{static isHandledMethod(e){return R.has(e)}undo(e){for(const[t,s]of this.clone.entries())e.set(t,s);for(const t of e.keys())this.clone.has(t)||e.delete(t)}}class B extends P{constructor(e,t,s,n){super(void 0,t,s,n),this._argument1=s[0],this._weakValue=e.has(this._argument1)}isChanged(e){return this._weakValue!==e.has(this._argument1)}undo(e){this._weakValue&&!e.has(this._argument1)?e.add(this._argument1):e.delete(this._argument1)}}class j extends P{constructor(e,t,s,n){super(void 0,t,s,n),this._weakKey=s[0],this._weakHas=e.has(this._weakKey),this._weakValue=e.get(this._weakKey)}isChanged(e){return this._weakValue!==e.get(this._weakKey)}undo(e){const t=e.has(this._weakKey);this._weakHas&&!t?e.set(this._weakKey,this._weakValue):!this._weakHas&&t?e.delete(this._weakKey):this._weakValue!==e.get(this._weakKey)&&e.set(this._weakKey,this._weakValue)}}class z{constructor(e){this._stack=[],this._hasOnValidate=e}static isHandledType(e){return M(e)||f(e)||y(e)}static isHandledMethod(e,t){return M(e)?P.isHandledMethod(t):f(e)?D.isHandledMethod(t):e instanceof Set?W.isHandledMethod(t):e instanceof Map?G.isHandledMethod(t):y(e)}get isCloning(){return this._stack.length>0}start(e,t,s){let n=P;f(e)?n=D:e instanceof Date?n=J:e instanceof Set?n=W:e instanceof Map?n=G:e instanceof WeakSet?n=B:e instanceof WeakMap&&(n=j),this._stack.push(new n(e,t,s,this._hasOnValidate))}update(e,t,s){this._stack.at(-1).update(e,t,s)}preferredThisArg(e,t,s){const{name:n}=e,a=z.isHandledMethod(s,n);return this._stack.at(-1).preferredThisArg(a,n,t,s)}isChanged(e,t,s){return this._stack.at(-1).isChanged(e,t,s)}isPartOfClone(e){return this._stack.at(-1).isPathApplicable(e)}undo(e){void 0!==this._previousClone&&this._previousClone.undo(e)}stop(){return this._previousClone=this._stack.pop(),this._previousClone.clone}}const $={equals:Object.is,isShallow:!1,pathAsArray:!1,ignoreSymbols:!1,ignoreUnderscores:!1,ignoreDetached:!1,details:!1},K=(e,t,s={})=>{s={...$,...s};const n=Symbol("ProxyTarget"),{equals:a,isShallow:r,ignoreDetached:i,details:o}=s,c=new S(a),l="function"==typeof s.onValidate,d=new z(l),h=(e,t,n,a,r)=>!l||d.isCloning||!0===s.onValidate(w.concat(c.getPath(e),t),n,a,r),u=(t,n,a,r)=>{v(c,s,n)||i&&c.isDetached(t,e)||g(c.getPath(t),n,a,r)},g=(e,s,n,a,r)=>{d.isCloning&&d.isPartOfClone(e)?d.update(e,s,a):t(w.concat(e,s),n,a,r)},M=e=>e?e[n]??e:e,C=(t,a,o,l)=>{if(function(e){return("object"==typeof e?null===e:"function"!=typeof e)||e instanceof RegExp}(t)||"constructor"===o||r&&!z.isHandledMethod(a,o)||v(c,s,o)||c.isGetInvariant(a,o)||i&&c.isDetached(a,e))return t;void 0===l&&(l=c.getPath(a));const d=w.concat(l,o),h=c.getPath(t);return h&&U(d,h)?c.getProxy(t,h,E,n):c.getProxy(t,d,E,n)},U=(e,t)=>{if(b(e)||e.length<=t.length)return!1;if(f(t)&&0===t.length)return!1;const s=f(e)?e:e.split(p),n=f(t)?t:t.split(p);return!(s.length<=n.length||n.some(((e,t)=>e!==s[t])))},E={get(e,t,s){if(b(t)){if(t===n||t===m)return e;if(t===_&&!c.isUnsubscribed&&0===c.getPath(e).length)return c.unsubscribe(),e}const a=y(e)?Reflect.get(e,t):Reflect.get(e,t,s);return C(a,e,t)},set(e,t,s,r){s=M(s);const i=e[n]??e,o=i[t];if(a(o,s)&&t in e)return!0;const l=h(e,t,s,o);return l&&c.setProperty(i,t,s,r,o)?(u(e,t,e[t],o),!0):!l},defineProperty(e,t,s){if(!c.isSameDescriptor(s,e,t)){const n=e[t];h(e,t,s.value,n)&&c.defineProperty(e,t,s,n)&&u(e,t,s.value,n)}return!0},deleteProperty(e,t){if(!Reflect.has(e,t))return!0;const s=Reflect.get(e,t),n=h(e,t,void 0,s);return n&&c.deleteProperty(e,t,s)?(u(e,t,void 0,s),!0):!n},apply(t,s,r){const i=s[n]??s;if(c.isUnsubscribed)return Reflect.apply(t,i,r);if((!1===o||!0!==o&&!o.includes(t.name))&&z.isHandledType(i)){let n=w.initial(c.getPath(t));const o=z.isHandledMethod(i,t.name);d.start(i,n,r);let u=Reflect.apply(t,d.preferredThisArg(t,s,i),o?r.map((e=>M(e))):r);const p=d.isChanged(i,a),_=d.stop();if(z.isHandledType(u)&&o&&(s instanceof Map&&"get"===t.name&&(n=w.concat(n,r[0])),u=c.getProxy(u,n,E)),p){const s={name:t.name,args:r,result:u},a=d.isCloning?w.initial(n):n,o=d.isCloning?w.last(n):"";h(w.get(e,a),o,i,_,s)?g(a,o,i,_,s):d.undo(i)}return(s instanceof Map||s instanceof Set)&&"object"==typeof(l=u)&&"function"==typeof l.next?function(e,t,s,n,a){const r=e.next;if("entries"===t.name)e.next=function(){const e=r.call(this);return!1===e.done&&(e.value[0]=a(e.value[0],t,e.value[0],n),e.value[1]=a(e.value[1],t,e.value[0],n)),e};else if("values"===t.name){const i=s[m].keys();e.next=function(){const e=r.call(this);return!1===e.done&&(e.value=a(e.value,t,i.next().value,n)),e}}else e.next=function(){const e=r.call(this);return!1===e.done&&(e.value=a(e.value,t,e.value,n)),e};return e}(u,t,s,n,C):u}var l;return Reflect.apply(t,s,r)}},k=c.getProxy(e,s.pathAsArray?[]:"",E);return t=t.bind(k),l&&(s.onValidate=s.onValidate.bind(k)),k};K.target=e=>e?.[m]??e,K.unsubscribe=e=>e?.[_]??e;const F=K;new class{routes=[{path:"#auth",view:o},{path:"#about",view:c},{path:"#main",view:u}];stateUser={login:null,password:null,isLogined:!1,usersActive:[],usersInacrive:[],sendUser:null,mainLastMessage:null,currentReceivedMessage:null,historyWithUser:null,notificationMessage:null,msgRead:null};constructor(){window.addEventListener("hashchange",this.route.bind(this)),this.stateUser=F(this.stateUser,this.stateUserHook.bind(this)),this.ws=new g("ws://127.0.0.1:4000",this.stateUser),this.route()}stateUserHook(e){"usersActive"!==e&&"usersInacrive"!==e||"MainView"===this.currentView.constructor.name&&this.currentView.redrawingSidebar(),"sendUser"===e&&this.stateUser.sendUser&&"MainView"===this.currentView.constructor.name&&this.currentView.isSendUser(),"mainLastMessage"===e&&this.stateUser.mainLastMessage&&"MainView"===this.currentView.constructor.name&&this.currentView.mainNewMessage(this.stateUser.mainLastMessage.payload.message),"currentReceivedMessage"===e&&"MainView"===this.currentView.constructor.name&&this.currentView.interlocutorNewMessage(this.stateUser.currentReceivedMessage.payload.message),"historyWithUser"===e&&(this.stateUser.historyWithUser.id.replace("history","")===this.stateUser.sendUser?"MainView"===this.currentView.constructor.name&&this.currentView.updateMessageList(this.stateUser.historyWithUser):"MainView"===this.currentView.constructor.name&&this.currentView.updateSidebarMessageNumber(this.stateUser.historyWithUser)),"notificationMessage"===e&&null!==this.stateUser.notificationMessage&&"MainView"===this.currentView.constructor.name&&this.currentView.updateMessageNumber(this.stateUser.notificationMessage),"msgRead"===e&&"MainView"===this.currentView.constructor.name&&this.currentView.interlocutorStatusMessage(this.stateUser.msgRead)}route(){const e=location.hash;if(!e||"#auth"===e){const e=sessionStorage.getItem("user"),t=JSON.parse(e);location.hash=t?"#main":"#auth"}const t=this.routes.some((e=>e.path===location.hash));this.ws.connect().then((e=>{if(t){const t=this.routes.find((e=>e.path==location.hash)).view;this.currentView=new t(e,this.stateUser)}else this.currentView=new s;this.currentView.render()}))}}})();