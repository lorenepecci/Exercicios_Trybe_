/* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; */
let h1 = document.createElement('h1');
h1.innerText= " Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h1);

/* Adicione a tag main com a classe main-content como filho da tag body ; */
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main)

/* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

/* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */
let p = document.createElement('p');
p.innerText = "Você vai aprender a utilizar o DOM!"
section.appendChild(p);

/* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */
let section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

/* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */
let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

/* Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5; */
let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
section2.appendChild(img);

/* Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; */
let ul = document.createElement('ul');
let list = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<list.length; i++){
    let li = document.createElement('li');
    li.innerText = list[i];
    ul.appendChild(li);
}
section3.appendChild(ul);

/* Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */
for(let i=0; i<3; i++){
    let h3 = document.createElement('h3');
    h3.innerHTML = 'oi' + i;
    main.appendChild(h3);
}
/*  Adicione a classe title na tag h1 criada; */
h1.classList.add('title');

/* Adicione a classe description nas 3 tags h3 criadas; */
let h3nameClass = document.getElementsByTagName('h3');
for(let i=0; i<3; i++){
    h3nameClass[i].className = 'description';
}

/* Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ; */

let sectionLeftContent = document.getElementsByClassName('left-content')[0];
main.removeChild(sectionLeftContent);

/* Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; */
let sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

/* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;*/
let pai = document.getElementsByClassName('center-content')[0].parentElement;
pai.style.backgroundColor = 'green';

/* Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.  */
/* let removeItem1 = document.getElementsByTagName('li')[9];
let removeItem2 = document.getElementsByTagName('li')[8];
ul.removeChild(removeItem1);
ul.removeChild(removeItem2); */
ul.lastChild.remove();
ul.lastChild.remove();