//Rest

const usuario = {
    nome: "Lucas",
    idade: 22,
    altura: 1.73
}

const nums = [1, 2, 3, 4, 5];

const {nome, ...resto } = usuario;
const [ a, b, ...c] = nums;

console.log(nome, resto);
//Lucas, {idade: 22, altura: 1.73}

console.log(a, b, c);
//1, 2, [3, 4, 5]

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 5, 4))
//10

//Spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3)
//[1, 2, 3, 4, 5, 6]

const usuario2 = { ...usuario, nome: "Emanuel" };
console.log(usuario2)
//{nome: "Emanuel", idade: 22, altura: 1.73}


