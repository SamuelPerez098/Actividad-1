
    function obtenerTareas(){
        let datos=localStorage.getItem("misTareas");
        if(datos==null){
            return []
        }
        return JSON.parse(datos);
    }   

    function renderizarTareas(){
        let tareas = obtenerTareas();
        let contenedor = document.getElementById("contenedorTarea");

        if(tareas.length ==0){
            contenedor.innerHTML=  " <p> no hay tareas pendientes </p>"
            return;
        }
        let html="";
        for (let i=0; i< tareas.length; i++){
            html += "<p>" + tareas[i]+ "<button type='button' onclick ='eliminarTarea("+i+")'>Eliminar</button></p>";
        }
        contenedor.innerHTML= html;
    }

    function Agg(){
        let input = document.getElementById("Tarea");
        let texto = input.value.trim();
        if(texto==""){
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: 'Escribe una tarea primero'
            });
            return;
        }
        let tareas = obtenerTareas();
        tareas.push(texto);
        localStorage.setItem("misTareas", JSON.stringify(tareas));
        input.value="";
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
                let tareas= obtenerTareas();
                tareas.splice(posicion,1);
                localStorage.setItem("misTareas", JSON.stringify(tareas));
                renderizarTareas();
            }
        });
    }
    renderizarTareas();