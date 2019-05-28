/* eslint-disable no-console */
import './HelloWorldBtn.scss';
import _ from 'lodash';

class HelloWorldBtn {
    // class property, which is es6 syntax
    defaultClassName = 'helloWorldBtn';

    constructor(options){
        options.el = options.el ? options.el : document.body;
        this.options = options;
        this.$el = document.createElement('button');
        const imgSpan = document.createElement('span');
        const textSpan = document.createElement('span');
        textSpan.innerHTML = _.upperFirst(options.text);
        this.$el.appendChild(textSpan);
        this.$el.appendChild(imgSpan);
        this.$el.addEventListener('click', this._clickHandler, false);
        this.$el.className = this.defaultClassName;
    }
    _clickHandler(){
        const log = (message)=>{
            console.log(message);
        }
        log("click button");
    }
    render(){
        this.options.el.appendChild(this.$el);
    }
}

export default HelloWorldBtn;
