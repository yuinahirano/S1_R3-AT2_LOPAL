const numTentativa = parseFloat(prompt("Insira um número"));

//usa o isnan para caso utilizem uma informação não numérica
if (isNaN(numTentativa)) {

    //mostra um recado de que não digitou um número
    alert("Erro: você não digitou um número")

    //caso a informação que foi inserida não seja não numérica, usa o else
} else {
    
    //se o número for igual a 0 ele é neutro
    if (numTentativa == 0) {
        alert("O número que você escreveu é NEUTRO!")

        //se não for igual e sim maior que 0 então é positivo
    } else if (numTentativa > 0) {
        
        alert("O número que você escreveu é POSITIVO!")
        
        //se não for igual e nem maior que 0 então é negativo
    }else {
        alert("O número que você escreveu é NEGATIVO!")

    }

}

