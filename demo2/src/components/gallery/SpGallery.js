import './SpGallery.scss';

const imgWidth = 148;
const imgHeight = 148;
const icons = [[0,0], [0,1], [0,2],[3,0],[3,1],[2,0]];
class SpGallery {
    constructor(options){
        options.el = options.el ? options.el : document.body;
        this.options = options
        this.container = document.createElement('div');
        icons.forEach(icon=>{
            const $icon = document.createElement('div');
            $icon.className = 'spBgImg';
            let posx = `-${imgWidth*icon[1]}px`;
            let posy = `-${imgHeight*icon[0]}px`;
            $icon.style.backgroundPosition = `${posx} ${posy}`;
            this.container.appendChild($icon);
        });
    }
    render(){
        this.options.el.appendChild(this.container);
    }
}

export default SpGallery;