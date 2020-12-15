let vermelho = document.querySelector('.vermelho');
let amarelo = document.querySelector('.amarelo');
let azul = document.querySelector('.azul');
let verde = document.querySelector('.verde');

let styleVermelho = document.createElement('style');
let styleAmarelo = document.createElement('style');
let styleAzul = document.createElement('style');
let styleVerde = document.createElement('style');

let reset = document.createElement('style');
let trocaVermelho = true;
let trocaAmarelo = true;
let trocaAzul = true;
let trocaVerde = true;

styleVermelho.textContent = `
.vermelho-efeito {
    box-shadow: crimson 2px 2px 40px;
    transition: 0.5s;
}
`;

styleAmarelo.textContent = `
.amarelo-efeito {
    box-shadow: yellow 2px 2px 40px;
}
`;

styleAzul.textContent = `
.azul-efeito {
    box-shadow: turquoise 2px 2px 40px;
}
`;

styleVerde.textContent = `
.verde-efeito {
    box-shadow: yellowgreen 2px 2px 40px;
}
`;

reset.textContent = `
.circulo {
    box-shadow: black 2px 2px 40px;
}
`;

vermelho.appendChild(styleVermelho);
amarelo.appendChild(styleAmarelo);
azul.appendChild(styleAzul);
verde.appendChild(styleVerde);


setInterval(piscaVermelho, 1000);
setInterval(piscaAmarelo, 1000);
setInterval(piscaAzul, 1000);
setInterval(piscaVerde, 1000);


function piscaVermelho() {

    if (trocaVermelho) {

        vermelho.appendChild(styleVermelho);
        trocaVermelho = false;
    } else {

        vermelho.appendChild(reset);
        trocaVermelho = true;
    }
}

function piscaAmarelo() {

    if (trocaAmarelo) {

        amarelo.appendChild(styleAmarelo);
        trocaAmarelo = false;
    } else {

        amarelo.appendChild(reset);
        trocaAmarelo = true;
    }
}

function piscaAzul() {

    if (trocaAzul) {

        azul.appendChild(styleAzul);
        trocaAzul = false;
    } else {

        azul.appendChild(reset);
        trocaAzul = true;
    }
}

function piscaVerde() {

    if (trocaVerde) {

        verde.appendChild(styleVerde);
        trocaVerde = false;
    } else {

        verde.appendChild(reset);
        trocaVerde = true;
    }
}