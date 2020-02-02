const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((item, index) => {
    return item + index;
    //[1, 4, 6, 8, 12, 14]
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
    return total + next;
    //30
});

console.log(sum);

/* 
    Função que carrega exige um retorno em boolean para preencher o novo array
*/
const filter = arr.filter(item => item % 2 === 0);
    //[4, 8]

console.log(filter);

//Retorna a primeira ocorrencia de acordo com a condição imposta no return
const find = arr.find(item => {
    return item > 1;
    //5, 8, 9
});

console.log(find);