const usuarios = [
    {nome: 'Poul', tecnologias: ['HTML','CSS'] },
    {nome: 'Hans', tecnologias: ['JavaScript', 'CSS'] },
    {nome: 'Toshio', tecnologias: ['HTML', 'Node.js'] }
    
]

const userCss = usuarios.filter((value, index, array) => {
    
    for (index in array)

    if (value.tecnologias[index] === 'CSS') {
        console.log(`O usuario ${value.nome} trabalha com CSS`)
    }
    
})