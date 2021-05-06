// Operaciones
const sumaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    console.log(num1, num2);
    let result = num1 + num2;
    console.log(result);
};

const restaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    console.log(num1, num2);
    let result = num1 - num2;
    console.log(result);
};

const multDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    console.log(num1, num2);
    let result = num1 * num2;
    console.log(result);
};

const divDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    console.log(num1, num2);
    

    // Operador ternario
    let res = num2 == 0 ? console.log("No se puede dividir por 0") : console.log(num1 / num2);
};


