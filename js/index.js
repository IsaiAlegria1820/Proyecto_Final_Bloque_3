 recetas = [];

//Creando funcion para agregar recetas
function agregarReceta(titulo, ingredientes, instrucciones, categoria, foto) {
   if(recetas.some(receta => receta.titulo === titulo)){
        alert("La receta ya existe");
   }else{
    let  receta = { //se crea el objeto receta para una facil manipulacion de sus caracteristicas
        titulo,
        ingredientes,
        instrucciones,
        categoria,
        foto
    };    
    recetas.push(receta); //se agrega la receta a la lista
    mostrarRecetas(); //mando a llamar la renderizacion cada que se agregue 
    console.log(recetas); //comprobando que si se haya añadido a la lista XD
   }
}

document.getElementById("agregar-receta").addEventListener("submit", function (event) { //escuchando evento para guardar la recetea
    event.preventDefault();
    const form = document.getElementById("agregar-receta");
    const titulo = document.getElementById("titulo").value;
    const ingredientes = document.getElementById("ingredientes").value.split(",");
    const instrucciones = document.getElementById("instrucciones").value.split("\n");
    const categoria = document.getElementById("categoria").value;
    const foto = document.getElementById("foto").value
    agregarReceta(titulo, ingredientes, instrucciones, categoria, foto);
    form.reset(); // limpiamos el formulario por motivos esteticos
});

//renderizamos o dibujamos las recetas 
function mostrarRecetas() {
    const listaRecetas = document.getElementById("recetas");
    listaRecetas.innerHTML = ""; //limpiamos el espacio donde se ven las recetas

    recetas.forEach(receta => {
        const elementoLista = document.createElement("li");
        elementoLista.innerHTML = `
        <div>
            <img src="${receta.foto}" alt="...">
            <div>
                <h5 class="card-title" id="${receta.titulo}">${receta.titulo}</h5>
                <p class="card-text">${receta.ingredientes}</p>
                <p class="card-text">${receta.instrucciones}</p>
                <p class="card-text">${receta.categoria}</p>
            </div>
            <button onclick="eliminarReceta(${receta.id})">Eliminar</button>
        </div>
        `;
        listaRecetas.appendChild(elementoLista);
    });
}

function eliminarReceta(id){
    recetas = recetas.filter(receta => receta.id !== id);
    mostrarRecetas(); // Refresh the displayed list after deletion
    alert("Receta Eliminada");
}

function buscarReceta() {
    const titulo = document.getElementById("buscar-receta").value;
    const recetasEncontradas = recetas.filter(receta => receta.titulo === titulo);
    window.location.href = "#recetasEncontradas";
    
}

