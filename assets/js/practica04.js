/** 
 * Funciones
*/
// function prueba1() {
//     console.log("Prueba 1");
// }

/**
 * función flecha o función lambda: La función flecha 
 * 1. Es más segura, ya que al asignarla como const JS impide que el codigo sea alterado. 
 * 2. Su ejecución es más rápida.
 */

// const prueba2 = () => {
//     console.log("Prueba 2");
// }

const sumaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    console.log(num1, num2);
    let result = num1 + num2;
    console.log(result);
}