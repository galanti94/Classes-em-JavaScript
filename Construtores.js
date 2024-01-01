function construtor (nome) {
    const objeto = {};
    objeto.nome = nome;
    objeto.apresentar = function () {
        alert(`Olá, me chamo ${objeto.nome}`);
    };
    return objeto;
}

/**---------- Como usar---------

const pessoa = construtor('Guilherme');

pessoa.nome; //'Guilherme'
pessoa.apresentar; // 'Olá, me chamo Guilherme'
*/

function Pessoa(nome) {
    this.nome = nome;
    this.apresentar = function () {
        alert(`Olá, ${this.nome}`);
    };
}

/**
 const gui = new Pessoa('Gui');

gui.nome; // 'Gui'
gui.apresentar; //'Olá, Gui'
 */