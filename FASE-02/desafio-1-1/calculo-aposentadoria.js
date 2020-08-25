const pessoa = {
    nome: 'Yashiro',
    sexo: 'M',
    idade: 48,
    contribui: 23
}

function checarSeAposenta (pessoa) {
    let somaIdadeContribui = pessoa.idade + pessoa.contribui
    return (pessoa.contribui >= 35 && somaIdadeContribui >= 95 && pessoa.sexo == 'M') || 
        (pessoa.contribui >= 30 && somaIdadeContribui >= 85 && pessoa.sexo == 'F')
}

const possoAposentar = checarSeAposenta(pessoa)

if (possoAposentar == true) {
    console.log(`${pessoa.nome}, você pode se aposentar.`)
} else {
    console.log(`${pessoa.nome}, você não pode se aposentar.`)
}