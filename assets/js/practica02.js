/** 
 * Condincional if / else 
 * 
 * */

// let nombrePersona = prompt("Ingresa tu, nombre: ");
let edad = prompt("Ingresa tu edad: ");

// if (edad >= 18) {
//     console.log("Puedes ver peliculas clasifición R.");
// } else {
//     console.log("No puedes ver estas peliculas.");
// }

switch (edad) {
    case "18":
        console.log("Puedes ver películas R.")
        break;
    default:
        console.log("No puedes ver estas películas")
        break;
}