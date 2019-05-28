import Heading1 from './components/heading/Heading1';
import HelloWorldBtn from './components/helloWorldBtn/HelloWorldBtn';
import './main.scss';

const heading1 = new Heading1({text:'Webpack is awesome'});
heading1.render();
const helloWorldBtn = new HelloWorldBtn({text:'Hello'});
helloWorldBtn.render();
