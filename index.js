const numero = parseInt (prompt("Insira um número:"));

//se o valor inserido for verdadeiro para tais declarações, então o valor deve ser considerado inválido
//isNan para caso o valor inserido não for númerico
if (isNaN(numero)) {

    alert("ERRO: este número não é válido")

//se for diferente de um valor não numérico, então é um número válido
} else {

    //se o resto da divisão o número por 2 for igual a 0, então o número é par
    if ((numero % 2) == 0) {
        
        alert("O número que você escreveu é PAR!")

    //caso o resto da divisão não seja igual a 0, então é ímpar
    } else {

        alert("O número que você escreveu é ÍMPAR!")
    }
}