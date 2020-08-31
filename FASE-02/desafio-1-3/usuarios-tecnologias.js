const usuarios = [
    {nome: 'Poul', tecnologias: ['HTML','CSS'] },
    {nome: 'Hans', tecnologias: ['JavaScript', 'CSS'] },
    {nome: 'Toshio', tecnologias: ['HTML', 'Node.js'] }
    
]

function UsuarioUsaCss (usuario) {
    let index = 0;
    let value = 0
    
    for (index in usuario)
    for (value in usuario[index].tecnologias)
        
    if (usuario[index].tecnologias[value] === 'CSS') {
    console.log(`O usuario ${usuario[index].nome} trabalha com CSS`)
    }

}

const mensagem = UsuarioUsaCss(usuarios)

console.log(mensagem)
