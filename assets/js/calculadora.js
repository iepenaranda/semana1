// Calculadora
// variables
let casilla = document.getElementById("casilla");
let mensajes = document.getElementById("mensajes");
let hitorial = document.getElementById("historial");

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

// operaciones
let btnSum = document.getElementById("btnSum");
let btnRest = document.getElementById("btnRest");
let btnMult = document.getElementById("btnMult");
let btnDiv = document.getElementById("btnDiv");
let bunIgual = document.getElementById("btnIgual");
let btnClear = document.getElementById("btnClear");
let btnC = document.getElementById("btnCE");
let punto = document.getElementById("punto");

// Variables temporales
let num1Temp = "";
let num2Temp = "";
let op = "";
let hist = "";

// Funciones
const btn1f = () => {
  if (op === "") {
    num1Temp += "1";
    casilla.innerHTML = num1Temp;

  } else {
      if (num1Temp !== "") {
        num2Temp += "1";
        casilla.innerHTML = num2Temp;
      }
    }
};

const btn2f = () => {
  if (op === "") {
    num1Temp += "2";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "2";
        casilla.innerHTML = num2Temp;
    }
  }
};

const btn3f = () => {
  if (op === "") {
    num1Temp += "3";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "3";
        casilla.innerHTML = num2Temp;
    }
  }
};

const btn4f = () => {
  if (op === "") {
    num1Temp += "4";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
        num2Temp += "4";
        casilla.innerHTML = num2Temp;
    }
  }
};

const btn5f = () => {
  if (op === "") {
    num1Temp += "5";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "5";
    casilla.innerHTML = num2Temp;
    }
  }
};

const btn6f = () => {
  if (op === "") {
    num1Temp += "6";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "6";
    casilla.innerHTML = num2Temp;
    }
  }
}
const btn7f = () => {
  if (op === "") {
    num1Temp += "7";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "7";
    casilla.innerHTML = num2Temp;
    }
  }
};

const btn8f = () => {
  if (op === "") {
    num1Temp += "8";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "8";
    casilla.innerHTML = num2Temp;
    }
  }
};

const btn9f = () => {
  if (op === "") {
    num1Temp += "9";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "9";
    casilla.innerHTML = num2Temp;
    }
  }
};

const btn0f = () => {
  if (op === "") {
    num1Temp += "0";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
    num2Temp += "0";
    casilla.innerHTML = num2Temp;
    }
  }
};

const limpiarMensaje = () => {
    setTimeout(() => {
        mensajes.innerHTML = ""
    }, 2000);
};

const clearF = () => {
  casilla.innerHTML = "";
  historial.innerHTML = "";
  num1Temp = "";
  num2Temp = "";
  op = "";
  hist = "";
};

const btnCEf = () => {
  if (num1Temp === "") {
    mensajes.innerHTML = "No hay nada que borrar";
    limpiarMensaje();
  } else {
    if (op === "") {
      num1Temp = num1Temp.substring(0, num1Temp.length - 1);
      casilla.innerHTML = num1Temp;
    } else {
      num2Temp = num2Temp.substring(0, num2Temp.length - 1);
      casilla.innerHTML = num2Temp;
    }
  }
};

const puntof = () => {
  if (num1Temp.includes(".") && op === "") { // Num1 ya tiene punto
    mensajes.innerHTML = "No se puede poner . en operador 1";
    limpiarMensaje();
  } else {
    if (op === "" && num1Temp === "") { // si no hay punto ni num1
      num1Temp += "0.";
      casilla.innerHTML = num1Temp;
    } else {
      if (op === "") { // Si no hay punto en num1
        num1Temp += ".";
        casilla.innerHTML = num1Temp;
      } else {
        if (num2Temp.includes(".") && op !== "") {
          mensajes.innerHTML = "No se puede poner . en operador 2";
          limpiarMensaje();
        } else {
          if (num2Temp === "") {
            num2Temp += "0.";
            casilla.innerHTML = num2Temp;
          } else {
            num2Temp += ".";
            casilla.innerHTML = num2Temp;
          }
        }
      }
    }
  }
};

const btnIgualf = () => {
  if (num1Temp === ""){
    mensajes.innerHTML = "No hay números"
    limpiarMensaje();
  }
  else {
    if (num2Temp === "") {
      mensajes.innerHTML = "No segundo hay número"
      limpiarMensaje();
    } else {
      let numero1 = parseFloat(num1Temp);
      let numero2 = parseFloat(num2Temp);
      let resultado = 0;
      switch (op) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          if (numero2 === 0) {
            return mensajes.innerHTML = "No se puede dividir por 0";
          } else {
            resultado = numero1 / numero2;
          }
          break;
      }
      casilla.innerHTML = resultado;
      historial.innerHTML = resultado;
    }
  }
};

const btnSumf = () => {
  if (num1Temp === "") {
      mensajes.innerHTML = "Por favor digite un número"
      limpiarMensaje();
  } else {
    casilla.innerHTML = "";
    op = "+";
    hist = num1Temp + op;
    historial.innerHTML = hist;
  }
};

const btnRestf = () => {
  if (num1Temp === "") {
      mensajes.innerHTML = "Por favor digite un número"
      limpiarMensaje();
  } else {
    casilla.innerHTML = "";
    op = "-";
    hist = num1Temp + op;
    historial.innerHTML = hist;
  }
};

const btnMultf = () => {
  if (num1Temp === "") {
      mensajes.innerHTML = "Por favor digite un número"
      limpiarMensaje();
  } else {
    casilla.innerHTML = "";
    op = "*";
    hist = num1Temp + op;
    historial.innerHTML = hist;
  }
};

const btnDivf = () => {
  if (num1Temp === "") {
      mensajes.innerHTML = "Por favor digite un número"
      limpiarMensaje();
  } else {
    casilla.innerHTML = "";
    op = "/";
    hist = num1Temp + op;
    historial.innerHTML = hist;
  }
};

// onlick
btn1.onclick = () => {
  btn1f();
};
btn2.onclick = () => {
  btn2f();
};
btn3.onclick = () => {
  btn3f();
};
btn4.onclick = () => {
  btn4f();
};
btn5.onclick = () => {
  btn5f();
};
btn6.onclick = () => {
  btn6f();
};
btn7.onclick = () => {
  btn7f();
};
btn8.onclick = () => {
  btn8f();
};
btn9.onclick = () => {
  btn9f();
};
btn0.onclick = () => {
  btn0f();
};
btnSum.onclick = () => {
  btnSumf();
};
btnRest.onclick = () => {
  btnRestf();
};
btnMult.onclick = () => {
  btnMultf();
};
btnDiv.onclick = () => {
  btnDivf();
};
btnIgual.onclick = () => {
  btnIgualf();
};
btnClear.onclick = () => {
  clearF();
};
btnC.onclick = () => {
  btnCEf();
}
punto.onclick = () => {
  puntof();
}