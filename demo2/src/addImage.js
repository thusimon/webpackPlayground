import Cartman from '../resources/img/icon.png';

const addCartman = function() {
    const img = document.createElement('img');
    img.alt = 'Cartman';
    img.src = Cartman;

    document.body.appendChild(img);
}

export default addCartman;
