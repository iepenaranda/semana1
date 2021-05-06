let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
let letrasCompletas = false; // Indicara si ya se completaron las letras

// Inicialización
letras.innerHTML = "Letras: ";
numeros.innerHTML = "Números: ";

//  botones
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

const btn1f = () => {
  if (letrasCompletas) {
    // Poner números
    if (numeros.innerHTML.slice(-1) === " ") numeros.innerHTML += "1";
    else {
      alert("Este número ya esta");
    }
  } else {
    // Poner letras
    if (letras.innerHTML.slice(-1) === " ") letras.innerHTML += "A";
    else {
      alert("Esta letra ya se puso");
    }
  }
};

const poner = (letter, number) => {
  if (letrasCompletas) { // Poner números
    let currentChar = number.charCodeAt(0);
    let lastChar = numeros.innerHTML.slice(-1).charCodeAt(0);
    if (lastChar === currentChar - 1) {
      numeros.innerHTML += number;
    } else {
      let presente = numeros.innerHTML.search(number);
      if (presente === -1) {
        if (number === "0" && numeros.innerHTML.slice(-1) === "9") {
          numeros.innerHTML += number;
          alert("Terminado!");
        } else {
          alert("Faltan números");
        }
      } else {
        alert("Este número ya esta");
      }
    }
  } else {
    let currentLetter = letter.charCodeAt(0);
    let lastLetter = letras.innerHTML.slice(-1).charCodeAt(0);
    if (lastLetter === currentLetter - 1) {
      letras.innerHTML += letter;
    } else {
      let presente = letras.innerHTML.search(letter);
      if (presente === -1) {
        alert("Faltan letras");
      } else {
        alert("Esta letra ya esta");
      }
    }
    if (letter === "J") letrasCompletas = true;
  }
};

// onclicks
btn1.onclick = () => {
  btn1f();
};
btn2.onclick = () => {
  poner("B", "2");
};
btn3.onclick = () => {
  poner("C", "3");
};
btn4.onclick = () => {
  poner("D", "4");
};
btn5.onclick = () => {
  poner("E", "5");
};
btn6.onclick = () => {
  poner("F", "6");
};
btn7.onclick = () => {
  poner("G", "7");
};
btn8.onclick = () => {
  poner("H", "8");
};
btn9.onclick = () => {
  poner("I", "9");
};
btn0.onclick = () => {
  poner("J", "0");
};
