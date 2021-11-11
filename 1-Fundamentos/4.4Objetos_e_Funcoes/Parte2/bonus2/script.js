/* 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função. */

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let list=[];

function arrayOfNumbers(array){ 
    for(let number of array){
        for(let i=0; i<number.length; i++){
            
            if(number[i]%2==0){
                list.push(number[i])
            }
        }


    }
    return list;
}




console.log(arrayOfNumbers(vector))