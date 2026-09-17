function obtenerTareas() {
    let datos = localStorage.getItem("misTareas");
    if (datos == null) {
        return [];
    }
    return JSON.parse(datos);
}   

function renderizarTareas() {
    let tareas = obtenerTareas();
    let contenedor = document.getElementById("contenedorTarea");

    if (tareas.length == 0) {
        contenedor.innerHTML = "<p class='text-muted mt-2'>No hay tareas pendientes</p>";
        return;
    }

    // Uso de clases de Bootstrap (list-group, d-flex, btn-danger)
    let html = "<ul class='list-group w-100 mt-2'>";
    for (let i = 0; i < tareas.length; i++) {
        html += `<li class='list-group-item d-flex justify-content-between align-items-center bg-light text-dark p-2 mb-1 border-0 shadow-sm'>
                    <span>${tareas[i]}</span>
                    <button type='button' class='btn btn-danger btn-sm' onclick='eliminarTarea(${i})'>Eliminar</button>
                 </li>`;
    }
    html += "</ul>";
    contenedor.innerHTML = html;
}

function Agg() {
    let input = document.getElementById("Tarea");
    let texto = input.value.trim();

    if (texto == "") {
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
    input.value = "";
    renderizarTareas();
}

function eliminarTarea(posicion) {
    Swal.fire({
        title: '¿Eliminar tarea?',
        text: 'Se borrará de la lista',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            let tareas = obtenerTareas();
            tareas.splice(posicion, 1);
            localStorage.setItem("misTareas", JSON.stringify(tareas));
            renderizarTareas();
        }
    });
}

renderizarTareas();