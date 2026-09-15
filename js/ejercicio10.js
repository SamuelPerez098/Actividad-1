function convertirAFahrenheit() {

    let entrada = document.getElementById("celsius").value;
    if (entrada === "") {
        alert("Ingresa una temperatura");
        return;
    }
    let celsius = parseFloat(entrada);
    if (isNaN(celsius)) {
        alert("Ingresa un valor numérico");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
}