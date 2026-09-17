function calcular(){
    let numeros= document.getElementById("numeros").value;
    if (numeros === "") {
        alert("Ingresa los números separados por comas");
        return;
    }
    let arreglo = numeros.split(",");
    let numeros2=arreglo.map(Number);
    let maximo = Math.max(...numeros2);
    let minimo = Math.min(...numeros2);
    let suma = numeros2.reduce((a, b) => a + b, 0);
    let promedio = suma / numeros2.length;
    document.getElementById("resultado1").value=maximo;
    document.getElementById("resultado2").value=minimo;
    document.getElementById("resultado3").value=promedio;

}