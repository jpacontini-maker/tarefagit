function calcularIMC(){

    //entrada de dados
    let pesoQuilos = document.getElementById("quilos").value;
    let alturaMetro = document.getElementById("metros").value;
    //processamento
    let IMC = pesoQuilos / (alturaMetro * alturaMetro)
    //saída
    document.getElementById("valorIMC").textContent = "valor do IMC: " + IMC + "quilos.";

    if (IMC > 30) {
        document.getElementById("Clasificacao").textContent = "sobrepeso"
    } else if (IMC > 25){
        document.getElementById("Clasificacao").textContent = "Peso normal"
    } else {
        document.getElementById("Clasificacao").textContent = "peso baixo"
    }
}