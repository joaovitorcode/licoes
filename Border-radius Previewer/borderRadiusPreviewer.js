let topLeft = document.querySelector('#top-left');
let bottomLeft = document.querySelector('#bottom-left');
let topRight = document.querySelector('#top-right');
let bottomRight = document.querySelector('#bottom-right');
let caixa = document.querySelector('.caixa');

topLeft.addEventListener('keyup', atualiza);
bottomLeft.addEventListener('keyup', atualiza);
topRight.addEventListener('keyup', atualiza);
bottomRight.addEventListener('keyup', atualiza);

function atualiza() {

    caixa.style.borderTopLeftRadius = `${topLeft.value}px`;
    caixa.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
    caixa.style.borderTopRightRadius = `${topRight.value}px`;
    caixa.style.borderBottomRightRadius = `${bottomRight.value}px`;
}