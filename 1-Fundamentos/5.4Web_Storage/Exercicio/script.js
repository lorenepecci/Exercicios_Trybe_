/* As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
 */

window.onload = function(){
    
    //cor de fundo
    let selectCor= document.querySelector('select');
    selectCor.addEventListener("change",function(){
        let objetoSelecionado = selectCor.selectedOptions[0];
        document.body.style.backgroundColor = objetoSelecionado.value;
        localStorage.setItem("cor-fundo", objetoSelecionado.value);
    });
    //dor da fonte
    let selectFonte= document.querySelectorAll('select')[1];
    selectFonte.addEventListener("change", function(){
        let objetoSelected = selectFonte.selectedOptions[0];
        document.body.style.color = objetoSelected.value;
        localStorage.setItem("fonte-color", objetoSelected.value);
    });
    //tamanho da fonte
    let inputFonte= document.querySelector('input[name="font-size"]');
    inputFonte.addEventListener("change",function(){
        let num = inputFonte.value+"px";
        document.body.style.fontSize = num; 
        localStorage.setItem("tam-fonte", num);  
    });
    //espaçamento entre as linhas 
    let inputEsp= document.querySelector('input[name="espaco"]');
    inputEsp.addEventListener("change",function(){
        let num = inputEsp.value+"px";
        document.body.style.lineHeight = num;   
        localStorage.setItem("espaco", num); 
    });
    //google fonts dos tipos de fontes
    let selectTipo= document.querySelectorAll('select')[2];
    selectTipo.addEventListener("change",function(){
        let objetoSelected = selectTipo.selectedOptions[0];
        document.body.style.fontFamily = objetoSelected.value;
        localStorage.setItem("google-font", objetoSelected.value); 
    });
    
    document.body.style.backgroundColor= localStorage.getItem("cor-fundo");
    document.body.style.color= localStorage.getItem("fonte-color");
    document.body.style.fontSize= localStorage.getItem("tam-fonte");
    document.body.style.lineHeight= localStorage.getItem("espaco");
    document.body.style.fontFamily= localStorage.getItem("google-font");
};

