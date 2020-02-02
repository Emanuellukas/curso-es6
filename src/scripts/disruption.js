const usuario = {
    nome: 'Lucas',
    idade: 22,
    endereco: {
        cidade: 'Ceilândia',
        estado: 'DF'
    }
};

const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome, idade, cidade);

function mostraDados({ endereco: {estado}, idade }){
    console.log(estado, idade)
}

mostraDados(usuario)