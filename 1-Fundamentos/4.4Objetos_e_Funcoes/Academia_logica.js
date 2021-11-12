/* let i=95;
function fahrenheit_to_celsius(temp_fahrenheit) {
    // Write your code here
    let t; 
    t=temp_fahrenheit.toFixed(1);
    let resposta;
    resposta=((t-32)/1.8);
    return resposta.toFixed(1);
}

console.log(fahrenheit_to_celsius(i)); */
/* 
let i=15;
let f =Math.abs(10-i);
console.log(f) */
/* 
function count_down(x) {
    // Write your code here
    let list=[];
    let list2=[];
    for(let i=1; i<=x; i++){
        list.push(i);
        list.sort((a,b) => b-a);
    }
    for(let j of list){
        list2.push(j+'...'); 
    }
    return list2.join('')+'0!!!';
}
 */

/* function even_fibonacci_numbers(roof) {
    let list=[];
    let sum=0;
    let r=0;
    // Write your code here
    for(let i=1; i<roof; i++){
        if(r>(roof-r)){
            break;
        }
        if(i==1 || i==2 || i==3){
            list.push(i);
            r=list[i-1];
        }else if(i>3){
            list[i-1]=list[i-2]+list[i-3];
            r=list[i-1];
        }
        
    }
    for(let j of list){
        if(j%2==0){
            sum+=j;
        }
    }
    return list;
} */

/* function nth_prime(n) {
    let num=3;
    let sum=0;
    let list=[2];
    let ok=true;
    while(ok===true){
        for(let i=2; i<num; i++){
            if(num%i==0){
                sum+=1;
            }
        }
        if(sum==0){
            list.push(num);
        }
        num+=1;
        sum=0;
        
        if(list.length>=n){
            ok=false;
        }
    }
    return list[list.length-1];
}
console.log(nth_prime(6)); */
function nth_prime(n) {
    let num=3;
    let sum=0;
    let list=[];
    let ok=true;
    while(ok===true){
        if(num>n){
            ok=false;
        }
        for(let i=2; i<num; i++){
            if(num%i==0){
                sum+=1;
            }
        }
        if(sum==0 && n%num==0){
            list.push(num);
        }
        num+=1;
        sum=0;
        
        
    }

    return list;
}
console.log(nth_prime(13195));

