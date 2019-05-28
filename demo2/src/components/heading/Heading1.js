import './Heading1.scss';
import _ from 'lodash';
import $ from 'jquery';

class Heading1 {
    constructor(options) {
        options.el = options.el ? options.el : $('body');
        this.options = options;
        const header = $('<h1>'); 
        header.addClass('heading1');
        header.text(_.upperFirst(options.text));
        this.$el = header;
    }
    render(){
        this.options.el.append(this.$el);
    }
}

export default Heading1;