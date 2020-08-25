const pessoa = {
    nome: 'Yusuke',
    peso: 70.7,
    altura: 1.86
}

function checarPeso (pessoa) {
    let imc = pessoa.peso / (pessoa.altura * pessoa.altura)
        return imc >= 30
    }

const vericarPeso = checarPeso(pessoa)

if ( vericarPeso == true) {
    console.log(`${pessoa.nome} você està acima do peso.`)
} else {
    console.log(`${pessoa.nome} você não está acima do peso.`)
}