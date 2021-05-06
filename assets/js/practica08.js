/** Práctica 08 - 5 de mayo de 2021
 * DOM - Document Object Model
*/
let btnPrueba = document.getElementById("btnPrueba");
let tituloPagina = document.getElementById("tituloPagina");

const mensajeAlerta = () => {
    console.log("Prueba");
};

// Onclicks: siempre se llaman en la parte final del código
btnPrueba.onclick = () => {
    mensajeAlerta();
};

tituloPagina.onclick = () => {
    mensajeAlerta();
};