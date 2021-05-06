// MiniCalculadora
const miniCalculadora = () => {
    // Creamos opción de menú
    let op = prompt("Ingrese el número correspondiente a la operación: \n A - Sumar \n B - Restar \n C - Multiplicar \n D - Dividir");
    if (op == null) {
        console.log("Ingrese un número por favor...");
    } else {
        op = op.toLowerCase();
        if ((op != "a" && op != "b" && op != "c" && op != "d") || op == null){
            console.log("Ingrese una opción válida...");
        } else {
            
            let num1 = parseFloat(prompt("Ingrese el primer número: "));
            let num2 = parseFloat(prompt("Ingrese el segundo número: "));
            let result = 0;
            if (op == "a") result = num1 + num2;
            if (op == "b") result = num1 - num2;
            if (op == "c") result = num1 * num2;
            if (op == "d"){
                if (num2 === 0){
                    return alert("No se puede dividir por 0!");
                } else {
                    let result = num1 / num2;
                }
            }
            alert("El resultado es: " + result);
        }
    }
    // switch (op) {
    //     case "a":
    //         break;
    //     case "b":
    //         break;
    //     case "c":
    //         break;
    //     case "d":
    //         break;
    //     default:
    //         alert("Ingrese una opción válida...");
    //         break;
    // }
};