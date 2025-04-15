const valorCompra = parseFloat (prompt("Insira o valor da compra:"));

if (isNaN(valorCompra)) {

    alert("ERRO: este número é inválido!")
    
} else {

    if (!(valorCompra >= 100)) {

        alert("Você não ganhou desconto...")
        
    } else {

        const valorTotal = valorCompra * 0.9;
        alert(`Você ganhou 10% de desconto! O valor total da compra a pagar é de R$ ${valorTotal.toFixed(2)}`) 

    }
}
