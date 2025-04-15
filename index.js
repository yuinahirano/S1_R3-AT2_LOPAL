const numero = parseInt (prompt("Insira um número:"));

//caso o valor seja não numérico
if (isNaN(numero)) {

    alert("ERRO: este número é inválido")

//se for diferente de um valor não númerico
} else {

    //se o número divido por 5 for igual a 0, então é um múltiplo de 5
    if ((numero % 5) == 0) {
        
        alert("O número que você escreveu é múltiplo de 5!")

    //caso resto da divisão do número por 5 não for igual a 0, então não é um múltiplo de 5
    }else {

        alert("O número que você escreveu NÃO é múltiplo de 5")
    }

}
