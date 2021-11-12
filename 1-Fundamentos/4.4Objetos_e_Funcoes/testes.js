/* let valor1=true;
let valor2=false;
let resposta;


function compareTrue(v1,v2){
    if (v1==true){
        if(v2==true){
            resposta= true;
        }else if(v2==false){
            resposta=false;
        }
    
    }else{
        if(v2==true){
            resposta=false;
        }else if(v2==false){
            resposta=false;
        }
    
    }
    return resposta;
}
console.log(compareTrue(valor1,valor2)); */

/* let b=51;
let h=1;

function calcArea(b,h){
    resposta=b*h/2;
    return resposta;
}
console.log(calcArea(b,h)); */

/* let palavra="go trybe";

function splitSentence(array){
    resposta=array.split(' ');
    return resposta;
}
console.log(splitSentence(palavra)); */

/* let array =['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let a;
function concatName(arr){
    a=arr.length;
    let b=arr[a-1];
    let c=arr[0];
    resposta= b + ", "+ c + " .";
    return resposta;
}
console.log(concatName(array)) ; */

/* let pontos;
function footballPoints(wins,ties){
    pontos=(wins*3)+ties;
    return pontos;
}
console.log(footballPoints(3,1)); */

/* igual o ex 5 da tarefa */
/* let list= [-1,-1,-1];
let maior;
let count=0;

    for (let num of list){
        maior=list[list.length-1]
        if(num>=maior){
            maior=num;
        }
    }
    for(let i of list){
        if(i===maior){
            count+=1;
        }
    }
console.log(count)




 */
/* 
let lista=[];
let cat1=0;
let cat2=2;
let mouse=1;
let dist1;
let dist2;

function catAndMouse(mouse,cat1,cat2){
    lista[cat1-1]="cat1";
    lista[cat2-1]="cat2";
    lista[mouse-1]="mouse";
    dist1=lista.indexOf("mouse")-lista.indexOf("cat1");
    dist2=lista.indexOf("mouse")-lista.indexOf("cat2");

    if(dist1 <0 ){
        dist1=dist1*-1;
    }
    if(dist2 <0 ){
        dist2=dist2*-1;
    }
    if(dist2>dist1){
        returna="cat1";
    }else if(dist1>dist2){
        returna="cat2";
    }else{
        returna="os gatos trombam e o rato foge";
    }
    return returna;
}
console.log(catAndMouse(1,0,2));
 
 */
/*  
let lista=[9,25];
function fizzBuzz(list){
    for(let item of list){
        let i=list.indexOf(item);
        if(item%5===0 && item%3===0){
            list[i]='fizzBuzz';
        }else if(item%5===0){
            list[i]='buzz';
        }else if(item%3===0){
            list[i]='fizz';
        }else{
            list[i]='bug!';
        }
    }
    return list;
}
console.log(fizzBuzz(lista));

 */
/* let obj={
    'a':'1',
    'e':'2',
    'i':'3',
    'o':'4',
    'u':'5'
}

let string = "oi tudo bem ";
let encode_string;
function encode(string){
    encode_string=string.split('');
    for(let i in encode_string){
        for(let key in obj){
            if(encode_string[i]===key){
                encode_string[i]=obj[key];
            }
        }
    }
    console.log(encode_string);
}


let string_= "43 t5d4 b2m ";
let decode_string=string_.split('');
for(let i in decode_string){
    for(let key in obj){
        if(decode_string[i]===obj[key]){
            decode_string[i]=key;
        }
    }
    
}
console.log(decode_string)
 */

/* 
let nome= "Lucas";
let list=["React", "Jest", "HTML", "CSS", "JavaScript"];
function techList(list,nome) {
    let nova_lista=[];
    let resposta;
    if(list.length>0){
      for(let i of list){
        nova_lista.push({'tech': i, 'name': nome});
        resposta=nova_lista;
      }
      nova_lista.sort(function(a, b) {
        if(a.tech < b.tech) {
          return -1;
        } else {
          return true;
        }
      });
    }else{
      resposta="Vazio!";
    }
    return resposta;
  }
  console.log(techList(list,nome));

 */
  let list=[1, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1];
  function generatePhoneNumber(list) {
    let soma=0;
    if(list.length!==11){
      resposta="Array com tamanho incorreto.";
    }else{
      for(let n of list){   
        if(n<0 || n>9 ){
            resposta="não é possível gerar um número de telefone com esses valores";
            break;
        }else{
            for(let numbers of list){
                if(n===numbers){
                    soma+=1;
                }
            }
            console.log(soma);
            if(soma>2){
                resposta="não é possível gerar um número de telefone com esses valores";
                break;
            }else{
                resposta='('+list[0] +list[1]+ ') '+ list[2] +list[3]+ list[4] +list[5]+list[6] +'-' +list[7]+list[8]+list[9]+list[10];
            }
            soma=0;
        }
      }
    }
    return resposta;  
  }
/*   
let ok=0;
let list=[1, -2, 3, 4, 5, 10, 7, 8, 9, 0, 1];
  function generatePhoneNumber(list) {
        let soma=0;
        if(list.length!==11){
        resposta="Array com tamanho incorreto.";
        }else{
            for(let n of list){   
                for(let numbers of list){
                    if(n==numbers){
                        soma+=1;
                    }
                }
                console.log(soma);
                if(soma>=3){
                    ok+=1;
                }
                soma=0;
            }
        console.log(ok)
        if(n<0 || ok===0|| n>9 ){
            resposta="não é possível gerar um número de telefone com esses valores";
        }else{
            resposta='('+list[0] +list[1]+ ') '+ list[2] +list[3]+ list[4] +list[5]+list[6] +'-' +list[7]+list[8]+list[9]+list[10];
        }
   }
    return resposta;  
} */
    console.log(generatePhoneNumber(list));

/* let a=16;
let b=9;
let c=2;
function triangleCheck(a,b,c){
    let cond1=0;
    let cond2=0;
    if((a+b )> c && (a+c )>b && (b+c)>a){
        cond1=1;
    }
    if(Math.abs(a-b)<c && Math.abs(a-c)<b && Math.abs(b-c)<a){
        cond2=1;
    }
    if(cond1==1 && cond2==1){
        resposta= true;
    }else{
        resposta=false;
    }
    return resposta;
  }
  console.log(triangleCheck(a,b,c)); 
     */
/* 
var string = "border-radius:10px 20px 30px 40px";
var numbers = string.match(/\d+/g).map(Number);

console.log(numbers); */