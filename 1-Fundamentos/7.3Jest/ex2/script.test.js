/* 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */


const myRemove = require('./script');
describe('Função myRemove, remove um numero de um array', ()=>{
    it('myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', ()=>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
}) 
