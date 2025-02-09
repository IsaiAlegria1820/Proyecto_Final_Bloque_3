 recetas = [];


document.getElementById("agregar-receta").addEventListener("submit", function (event) { //escuchando evento para guardar la recetea
    event.preventDefault();
    const form = document.getElementById("agregar-receta");
    const titulo = document.getElementById("titulo").value;
    const ingredientes = document.getElementById("ingredientes").value.split(","); //agregamos ingredientes indicando que sean separados por comas
    const instrucciones = document.getElementById("instrucciones").value.split("\n"); //agregamos instrucciones indicando que sean separados con un salto de linea
    const categoria = document.getElementById("categoria").value;
    const foto = document.getElementById("foto").value
    agregarReceta(titulo, ingredientes, instrucciones, categoria, foto);
    form.reset(); // limpiamos el formulario por motivos esteticos aun cuando no se agrega la receta
});

//Creando funcion para agregar recetas
function agregarReceta(titulo, ingredientes, instrucciones, categoria, foto) {
    //el if verifica si la receta ya existe
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

//renderizamos o dibujamos las recetas 
function mostrarRecetas() {
    const listaRecetas = document.getElementById("recetasAgregadas");
    listaRecetas.innerHTML = ""; //limpiamos el espacio donde se ven las recetas

    recetas.forEach(receta => {
        const elementoLista = document.createElement("li");

        elementoLista.innerHTML = `
        <div class="container card p-sm">
            <img src="${receta.foto}" alt="..." >
            <div>
                <h5>${receta.titulo}</h5>
                <p>${receta.ingredientes}</p>
                <p>${receta.instrucciones}</p>
                <p>${receta.categoria}</p>
            </div>
            <button onclick="eliminarReceta('${receta.titulo}')" class="btn p-sm">Eliminar</button>
        </div>
        `;
        listaRecetas.appendChild(elementoLista);
    });
}

//se elimina la receta
function eliminarReceta(id){
    for (let i = 0; i < recetas.length; i++) {
        if(recetas[i].titulo===id){
            recetas.splice(i ,1);
            mostrarRecetas();
        }
    }     
}   

function buscarReceta() {
    //se genera la busqueda
    const busqueda = document.getElementById("busqueda").value.toLowerCase();//con el toLowerCase() hacemos que la busqueda no sea sensible a mayusculas y minusculas
    const resultadoBusqueda = recetas.filter(receta => receta.titulo.toLowerCase().includes(busqueda)); // con el toLowerCase permite que la busqueda no sea sensible a mayusculas y minusculas
    
    //se renderiza la busqueda
    const listaRecetasEncontradas = document.getElementById("recetas-encontradas");
    listaRecetasEncontradas.innerHTML = "";
    resultadoBusqueda.forEach(receta => {
        const elementoLista = document.createElement("li");
        elementoLista.innerHTML = `
        <div class="container card p-sm">
            <img src="${receta.foto}" alt="...">
            <div>
                <h5>${receta.titulo}</h5>
                <p>${receta.ingredientes}</p>
                <p>${receta.instrucciones}</p>
                <p>${receta.categoria}</p>
            </div>
            <button onclick="eliminarReceta('${receta.titulo}')" class="btn p-sm">Eliminar</button>
        </div>
        `;
        listaRecetasEncontradas.appendChild(elementoLista);
        //limpiamos el input de busqueda
        const formBusqueda=document.getElementById("buscar-receta");
        formBusqueda.reset(); 
    });
}

//funcion creaada para que cuando se de click a inicio se borre los elementos buscados
function inicio(){
    const inicio= document.getElementById("recetas-encontradas");
    inicio.innerHTML="";
}

