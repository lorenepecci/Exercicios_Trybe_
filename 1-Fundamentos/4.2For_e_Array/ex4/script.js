/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let sum = 0;
for(let num of numbers){
    sum += num;
}

let arit = sum/(numbers.length);
if (arit>20){
    console.log("Valor maior que 20:", arit, "de média")
}else{
    console.log("Valor menor que 20:", arit, "de média")
}
