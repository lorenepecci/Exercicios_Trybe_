

// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? PORQUE ELE TEM A CLASSE TECH QUE MUDA A SUA POSIÇÃO .

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const input = document.getElementById('input');
const li1 = document.getElementById('first-li');
const li2 = document.getElementById('second-li');
const li3 = document.getElementById('third-li');


function receberClick(evento) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    evento.target.classList.add('tech');
    input.value = '';
}
li1.addEventListener('click', receberClick);
li2.addEventListener('click', receberClick);
li3.addEventListener('click', receberClick);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alterarText(event){
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
}
input.addEventListener('input', alterarText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
const myWebpage = document.getElementById('my-spotrybefy');

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});




