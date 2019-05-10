const _ = require('lodash');
import './styles/style.css';
import icon from './img/icon.png';

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack'], " ");
	element.classList.add('hello');
	
	let myIcon = new Image();
	myIcon.src = icon;
	element.appendChild(myIcon);
	return element;
}

document.body.appendChild(component());