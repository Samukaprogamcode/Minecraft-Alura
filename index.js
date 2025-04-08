document.getElementById("refinar").onclick = function() {
    let valor = prompt("Coloque sua quantidade de madeira bruta ou a quantidade das linhas aqui:");
    alert("O resultado dos blocos refinados são: " + (valor * 4) + " Unidades!");
};