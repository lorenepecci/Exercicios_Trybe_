/* 
1-Acesse o elemento elementoOndeVoceEsta .
2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4-Acesse o primeiroFilho a partir de pai .
5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
8-Agora acesse o terceiroFilho a partir de pai . */

let elementoOndeEsta= document.getElementById("elementoOndeVoceEsta");

let pai = elementoOndeEsta.parentElement;
pai.style.backgroundColor = "red";

let primeiroFilhoDoFilho = elementoOndeEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'oi';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeEsta.previousElementSibling;

const textElement = elementoOndeEsta.nextSibling;
const terceiroFilho = elementoOndeEsta.nextElementSibling;
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


