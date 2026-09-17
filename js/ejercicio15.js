
let listaE=[];

function Agregar(){
    let inputNom=document.getElementById("nombres");
    let inputNum=document.getElementById("numeros");

    let nombre=inputNom.value.trim();
    let calificacion= parseFloat(inputNum.value);

    if(nombre =="" || calificacion=="" ){
        alert("ingresa un nombre y calificación valida");
        return;
    }
    listaE.push({
        nombre:nombre,
        calificacion:calificacion
    });
    inputNom.value="";
    inputNum.value="";
    alert("estudiante agregado");
}
function calcular(){
    if(listaE.length==0){
        alert("primero agrega un estudiante");
        return;
    }
    //agarra las calificaciones, las suma y de ahi saca el promedio
    let total=listaE.reduce((suma,est)=> suma + est.calificacion,0);
    let promedio=total/listaE.length;

    let maxCalif= Math.max(...listaE.map(e => e.calificacion));
    let minCalif= Math.min(...listaE.map(e => e.calificacion));

    let mejor=listaE.find(e => e.calificacion==maxCalif);
    let peor=listaE.find(e => e.calificacion==minCalif);

    document.getElementById("resultado3").value = promedio.toFixed(2);
    document.getElementById("resultado1").value = mejor.nombre;
    document.getElementById("resultado2").value = peor.nombre;
}