/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };

const damageWarrior = (obj) =>{
    const { strength } = obj;
    const { weaponDmg } = obj;
    return Math.floor(Math.random() * ((strength * weaponDmg) - strength + 1)) + strength ; 
}

warrior.damage = damageWarrior(warrior);
console.log(warrior)