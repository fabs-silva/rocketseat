function exercicio1(){
    alert("Hello World!");
}

function exercicio2(){
    const numero1 = 1;
    const numero2 = 2;

    alert(`A soma dos números ${numero1} e ${numero2} é ${numero1 + numero2}`);
}

function exercicio3(){
    const variavel = 5;

    alert(`A variável ${variavel} ${typeof(variavel) === "number" ? "é um número" : "não é um número"}`);

}

function exercicio4(){
    const variavel = "a";

    alert(`A variável ${variavel} ${typeof(variavel) === "string" ? "é uma string" : "não é um string"}`);

}

function exercicio5(){
    const variavel = false;

    console.log(typeof(variavel))

    alert(`A variável ${variavel} ${typeof(variavel) === "boolean" ? "é um booleano" : "não é um booleano"}`);

}

function exercicio6(){
    const numero1 = 1;
    const numero2 = 2;

    alert(`A subtração dos números ${numero1} e ${numero2} é ${numero1 - numero2}`);
}

function exercicio7(){
    const numero1 = 1;
    const numero2 = 2;

    alert(`A subtração dos números ${numero1} e ${numero2} é ${numero1 * numero2}`);
}

function exercicio8(){
    const numero1 = 1;
    const numero2 = 2;

    alert(`A subtração dos números ${numero1} e ${numero2} é ${numero1 / numero2}`);
}

function exercicio9(){
    const numero = 2;

    alert(`O ${numero} ${(numero % 2) === 0 ? "é um número par" : "não é um número par"}`);
}

function exercicio10(){
    const numero = 1;

    alert(`O ${numero} ${(numero % 2) === 1 ? "é um número ímpar" : "não é um número ímpar"}`);
}

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
exercicio8();
exercicio9();
exercicio10();