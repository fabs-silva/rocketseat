function calculaMedia (notas){

    let somaNotas = 0;

    for(let nota of notas){
        const notaVerificada = notANumber(nota);
        
        somaNotas += notaVerificada;
    }

    return somaNotas / notas.length;

}

function notANumber(numero){
    if(isNaN(numero)){
        throw new Error("O(s) valor(es) digitado(s) não é(são) numérico(s)");
    }

    return numero;
}

function calculaMediaListaAlunos(alunos){

    if(alunos.length == 0){
        alert(`Não existem alunos cadastrados.`)
        return;
    }

    for(let aluno of alunos){
        const media = calculaMedia(aluno.notas);
        alert(`Aluno: ${aluno.nome}
        Sua média foi ${media.toFixed(2)}. Você ${media >= 7 ? "" : "não "}foi aprovado no concurso.`)
    }
}

const listaAlunos = [
    { nome: "Rodrigo", notas: [ 5, 8 ] },
    { nome: "Fernanda", notas: [ 10, 9 ]},
    { nome: "Helena", notas: [ 3, 5 ] },
    { nome: "Marco", notas: [ 8, 6 ] },
]

calculaMediaListaAlunos(listaAlunos);

