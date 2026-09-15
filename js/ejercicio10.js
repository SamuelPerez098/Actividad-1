function convertirAFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Asigna el texto directamente a la etiqueta
    document.getElementById("resultado").textContent = "Grados Fahrenheit: " + fahrenheit + "°F";
}