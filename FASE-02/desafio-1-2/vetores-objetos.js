const usuario = {
    nome: 'Toshio',
    idade: 7,
    tecnologias: [
        {nome: 'Javascript', especialidade: 'Web/mobile'},
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'}
    ]
    
}

console.log(`O usuario ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`)
