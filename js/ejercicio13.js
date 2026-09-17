function verificarVotacion() {
    let edad = document.getElementById("edad").value;
    if (edad === "") {
        alert("Tu edad");
        return;
    }
    edad = parseInt(edad);
    if (isNaN(edad)) {
        alert("Edad-Voto");
        return;
    }
    let resultado = document.getElementById("resultado");
    if (edad >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }
}