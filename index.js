const valorCompra = parseFloat (prompt("Insira o valor da compra:"));

//caso o valor seja não numérico
if (isNaN(valorCompra)) {

    alert("ERRO: este número é inválido!")
    
  //se for diferente de um valor não numérico  
} else {

    //se a compra for diferente de um valor maior ou igual de 100, então não ganha desconto
    if (!(valorCompra >= 100)) {

        alert("Você não ganhou desconto...")
        
       //caso o valor seja maior ou igual a 100, então recebe um desconto de 10% 
    } else {

        //Para descobrir 10% de um valor é preciso multiplicar por 0,1. Mas como precisamos saber apenas do valor da compra depois que foi aplicado o desconto podemos multiplicar por 0,9
        const valorTotal = valorCompra * 0.9;
        //uso de toFixed para simplificar o valor para apenas 2 números depois da vírgula
        alert(`Você ganhou 10% de desconto! O valor total da compra a pagar é de R$ ${valorTotal.toFixed(2)}`) 

    }
}
