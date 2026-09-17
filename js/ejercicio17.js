function obtenerTareas(){
    let datos = localStorage.getItem("misTareas");

    if(datos == null){
        return [];
    }

    return JSON.parse(datos);
}


/* CLOSURE */
function crearGestorTareas(){

    let tareas = obtenerTareas();

    function guardar(){
        localStorage.setItem("misTareas", JSON.stringify(tareas));
    }

    function agregar(texto){
        tareas.push(texto);
        guardar();
    }

    function eliminar(posicion){
        tareas.splice(posicion, 1);
        guardar();
    }

    function obtener(){
        return tareas;
    }

    return {
        agregar: agregar,
        eliminar: eliminar,
        obtener: obtener
    };
}


let gestor = crearGestorTareas();


function renderizarTareas(){

    let tareas = gestor.obtener();

    let contenedor = document.getElementById("contenedorTarea");

    if(tareas.length == 0){
        contenedor.innerHTML = "<p> no hay tareas pendientes </p>";
        return;
    }

    let html = "";

    for(let i = 0; i < tareas.length; i++){
        html += '<div class="tarea"><span> '+tareas[i]+'</span>'+' <button type="button" onclick ="eliminarTarea('+i+')" >Eliminar</button>'+' </div>';
    }

    contenedor.innerHTML = html;
}


function Agg(){

    let input = document.getElementById("Tarea");

    let texto = input.value.trim();

    if(texto == ""){
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Escribe una tarea primero'
        });

        return;
    }

    gestor.agregar(texto);

    input.value = "";

    renderizarTareas();
}


function eliminarTarea(posicion){

    Swal.fire({
        title: 'Eliminar tarea?',
        text: 'Se borrara de la lista',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'si, borrar',
        cancelButtonText: 'cancelar'

    }).then((resultado)=>{

        if(resultado.isConfirmed){

            gestor.eliminar(posicion);

            renderizarTareas();
        }

    });
}


renderizarTareas();
