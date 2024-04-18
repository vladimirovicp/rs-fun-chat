export default class ElementCreator {
    constructor(params) {
        this.element = null;
        this.createElement(params);
    }

    getElement() {
        return this.element;
    }

    addInnerElement(element) {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    createElement(params) {
        this.element = document.createElement(params.tag);
        this.setCssClasses(params.classNames);
        this.setTextContent(params.textContent);
        this.setCallback(params.callback);
        this.setId(params.id);
        this.setAttr(params.attr);
    }

    setId(id) {
        if(id){
            this.element.setAttribute('id', id);
        }
    }

    setCssClasses(cssClasses = []) {
        cssClasses.map((cssClass) => this.element.classList.add(cssClass));
    }

    setAttr(attr = {}){
        for (let i = 0; i < Object.keys(attr).length; i += 1) {
            const key = Object.keys(attr)[i];
            this.element.setAttribute(key, attr[key]);
          }
    }

    setTextContent(text = '') {
        this.element.textContent = text;
    }

    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('click', (event) => callback(event));
        }
    }
    
}