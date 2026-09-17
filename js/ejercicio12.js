function convertirADolares() {

    let entrada = document.getElementById("pesos").value;
    if (entrada === "") {
        alert("Ingresa una cantidad");
        return;
    }
    let pesos = parseFloat(entrada);
    if (isNaN(pesos)) {
        alert("Ingresa un valor numérico");
        return;
    }
    let dolares = pesos * 0.055; // Ejemplo de conversión, ajusta según la tasa real
    document.getElementById("dolares").value = dolares;
}