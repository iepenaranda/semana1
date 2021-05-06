let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");

const registroNombre = () => {
    let nombre = prompt("Ingrese su nombre: ");
    this.nombre.innerHTML = "Nombre: " + nombre;
    // this en una función en JS siempre hace referencia a las variables globales.
};


// onclick
btnPrueba.onclick = () => {
    registroNombre();
};