//Estrutura de Classes no ES6+

class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();//Função que chama o constructor da classe Pai
    }
}

var MinhaLista = new TodoList();

document.getElementById('novo_todo').onclick = function(){
    MinhaLista.add('Novo ToDo');
}

class Matematica {
    //Função estática é independente na classe.
    //Ela não enxerga o outros componentes da classe
    static soma(a, b){
        return a + b;
    }
}
