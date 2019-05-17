import './HelloWorldBtn.scss';

class HelloWorldBtn {
    // class property, which is es6 syntax
    defaultClassName = 'helloWorldBtn';

    constructor(options){
        options.el = options.el ? options.el : document.body;
        this.options = options;
        this.$el = document.createElement('button');
        const imgSpan = document.createElement('span');
        const textSpan = document.createElement('span');
        textSpan.innerHTML = options.text;
        this.$el.appendChild(textSpan);
        this.$el.appendChild(imgSpan);
        this.$el.addEventListener('click', this._clickHandler, false);
        this.$el.className = this.defaultClassName;
        this.range = Array.from('12345');
    }
    _clickHandler(){
        const log = (message)=>{
            console.log(message);
        }
        log("click button");
    }
    render(){
        this.options.el.append(this.$el);
    }
}

export default HelloWorldBtn;
