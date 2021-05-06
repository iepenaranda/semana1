/** Ejercicio 9 
 * Día de la semana
 */

let dia = prompt("Ingresa día de la semana");
// como "dia" recibe un dato de prompt, JS reconoce que debe ser un string.

// if (dia == null) {
//     console.log("Dato nulo.")
// } else {
//     dia = dia.toLowerCase()
//     console.log("Dato válido")

//     if (dia == "sabado" || dia == "domingo") {
//         console.log("Es fin de semana");
//     } else {
//         if (dia == "lunes" ||
//         dia == "martes" ||
//         dia == "miercoles" ||
//         dia == "jueves" ||
//         dia == "viernes") {
//             console.log("Es un día entre semana");
//         }
//         else {
//             console.log("Ingrese un día a la semana válido.");
//         }
//     }
// }

switch (dia) {
    case null:
        console.log("Por favor ingrese un dato válido")
        break;
    case "sabado":
    case "domingo":
        console.log("Es fin de semana")
    default:
        console.log("Ingrese un día válido")
        break;
}