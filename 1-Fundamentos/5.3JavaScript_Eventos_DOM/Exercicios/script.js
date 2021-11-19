function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */



function putDaysOfWeek() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ulDay = document.getElementById('days');
    for (let i of dezDaysList) {
        let liCreate = document.createElement('li');
        liCreate.innerText = i;
        liCreate.classList.add('day');
        if (i === 24 | i === 25 | i === 31) {
            liCreate.classList.add('holiday');
        }
        if (i === 4 | i === 11 | i === 18 | i === 25) {
            liCreate.classList.add('friday');
        }
        ulDay.appendChild(liCreate);
    };
};
putDaysOfWeek()

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function addBtnHoliday(string) {
    const botaoFeriados = document.createElement('button');
    botaoFeriados.innerHTML = string;
    botaoFeriados.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(botaoFeriados);
}
addBtnHoliday("Feriados");

/* Exercício 3
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

function colorFeriados() {
    const dayList = document.getElementsByClassName('holiday');
    for (let i of dayList) {
        if (i.style.backgroundColor === "blue") {
            i.style.backgroundColor = "rgb(238,238,238)";
        } else {
            i.style.backgroundColor = "blue";
        }
    }
}
document.getElementById('btn-holiday').addEventListener("click", colorFeriados);

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function addBtnSexta(string) {
    const botaos = document.createElement('button');
    botaos.innerHTML = string;
    botaos.id = 'btn-friday';
    document.getElementsByClassName('buttons-container')[0].appendChild(botaos);
}
addBtnSexta("Sexta-feira");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 */

function colorSexta() {
    const dayList = document.getElementsByClassName('friday');
    for (let i of dayList) {
        if (i.style.backgroundColor === "blue") {
            i.style.backgroundColor = "rgb(238,238,238)";
        } else {
            i.style.backgroundColor = "blue";
        }
    }
}
document.getElementById('btn-friday').addEventListener("click", colorSexta);

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */


let dayss = document.querySelector('#days'); // to pegando o ul que tem todos os li de dias ;
function zooms(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
}
function zoomn(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
}

dayss.addEventListener("mouseover", zooms);
dayss.addEventListener("mouseout", zoomn);

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function adicionarSpanTarefa(tarefa){
    const spanTarefa = document.createElement('span');
    spanTarefa.innerHTML = tarefa;
    document.querySelector('.my-tasks').appendChild(spanTarefa);
}

adicionarSpanTarefa("Cozinhar");

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function newTaskDiv(color) {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');

/* Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
 */


const divCor = document.querySelector(".task");
const selectedTask = document.getElementsByClassName('task selected');
function func(event) {
    if(selectedTask.length === 0) {
        event.target.classList.add('selected');
    } else {
        event.target.classList.remove('selected');
    }
}
divCor.addEventListener("click", func);

/* Exercício 10
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */

const dayUl= document.querySelector("#days");
function colorDaySelected(event) {
    const selectedTask = document.querySelectorAll('.selected');//lista 
    const task= document.querySelector(".task");// um item task
    const color = task.style.backgroundColor;
    console.log(selectedTask.length);
    if(event.target.style.color !== color && selectedTask.length > 0){
        event.target.style.color = color;
    }else {
        event.target.style.color = "rgb(119,119,119)";
    } 
}
dayUl.addEventListener("click", colorDaySelected);
 


/* Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key .
 */
const input = document.querySelector("#task-input");
const botaoAdd = document.querySelector("#btn-add");
const task = document.querySelector(".task-list");
function addCompromissos(event){
    if(input.value.length > 0){
        const liCompromisso = document.createElement("li");
        liCompromisso.innerText = input.value;
        task.appendChild(liCompromisso);
        input.value = '';
    } else {
        alert("erro!");
    }
}

function addCompromissos2(event){
    if(event.key === 'Enter' && input.value.length > 0 ){
        const liCompromisso = document.createElement("li");
        liCompromisso.innerText = input.value;
        task.appendChild(liCompromisso);
        input.value = '';
    }
}
botaoAdd.addEventListener("click", addCompromissos);
input.addEventListener("keyup", addCompromissos2);



