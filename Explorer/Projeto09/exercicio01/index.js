function realizaOperacoes(){
    
    let numero1;
    let numero2;

    while(isNaN(numero1)){
        numero1= parseInt(prompt("Digite um número: "));
    }

    while(isNaN(numero2)){
        numero2= parseInt(prompt("Digite outro número: "));
    }

    try {
        alert(`Os números digitados foram ${numero1} e ${numero2}.
        ${ehIgual(numero1, numero2)}`)
    } catch(e){
        console.log(e)
    }

    try {
        alert(`A soma desses números é ${numero1 + numero2}.
        A soma dos dois números é ${ehPar(numero1, numero2)}.
        A subtração desses números é ${numero1 - numero2}.
        A multiplicação desses números é ${numero1 * numero2}.
        A divisão desses números é ${numero1 / numero2}.
        O resto da divisão desses números é ${numero1 % numero2}.`)
    } catch(e){
        console.log(e)
    }

    return;

}

function ehPar(numero1, numero2){

    const numero1Verificado = notANumber(numero1);
    const numero2Verificado = notANumber(numero2);
   
    const resto = (numero1Verificado + numero2Verificado) % 2;

    return resto === 1 ? `impar` : `par`;

}

function ehIgual(numero1, numero2){
    const numero1Verificado = notANumber(numero1);
    const numero2Verificado = notANumber(numero2);
    
    if(numero1Verificado === numero2Verificado){
       return "Os valores digitados são iguais.";
    } else {
        return "Os valores digitados são diferentes.";
    }
}

function notANumber(numero){
    if(isNaN(numero)){
        throw new Error("O(s) valor(es) digitado(s) não é(são) numérico(s)");
    }

    return numero;
}

realizaOperacoes();