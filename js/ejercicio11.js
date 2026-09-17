function convertirAKilometros() {

    let entrada = document.getElementById("kilometros").value;
    if (entrada === "") {
        alert("Ingresa una distancia");
        return;
    }
    let kilometros = parseFloat(entrada);
    if (isNaN(kilometros)) {
        alert("Ingresa un valor numérico");
        return;
    }
    let millas = kilometros * 0.621371;
    document.getElementById("millas").value = millas;
}