let btnEsc = document.getElementById("btnEsc");
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
let btnComilla = document.getElementById("btnComilla");
let btnQuestion = document.getElementById("btnQuestion");

let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
let btnApostro = document.getElementById("btnApostro");
let btnMas = document.getElementById("btnMas");

let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnÑ = document.getElementById("btnÑ");
let btnPar1 = document.getElementById("btnPar1");
let btnPar2 = document.getElementById("btnPar2");

let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnGuion = document.getElementById("btnGuion");

// Teclas con funciones especiales
let btnDelete = document.getElementById("btnDelete");
let btnEspacio = document.getElementById("btnEspacio");
let btnEnter = document.getElementById("btnEnter");

let texto = document.getElementById("texto");
texto.innerHTML = "";

const escribir = (a) => {
  texto.innerHTML += a;
};
const btnDeletef = () => {
  if (texto.innerHTML === "") {
    alert("No hay nada que borrar");
  } else {
    texto.innerHTML = texto.innerHTML.substring(0, texto.innerHTML.length - 1);
  }
};
btn1.onclick = () => {
  escribir(this.btn1.innerHTML);
};
btn2.onclick = () => {
  escribir(this.btn2.innerHTML);
};
btn3.onclick = () => {
  escribir(this.btn3.innerHTML);
};
btn4.onclick = () => {
  escribir(this.btn4.innerHTML);
};
btn5.onclick = () => {
  escribir(this.btn5.innerHTML);
};
btn6.onclick = () => {
  escribir(this.btn6.innerHTML);
};
btn7.onclick = () => {
  escribir(this.btn7.innerHTML);
};
btn8.onclick = () => {
  escribir(this.btn8.innerHTML);
};
btn9.onclick = () => {
  escribir(this.btn9.innerHTML);
};
btn0.onclick = () => {
  escribir(this.btn0.innerHTML);
};
btnComilla.onclick = () => {
  escribir(this.btnComilla.innerHTML);
};
btnQuestion.onclick = () => {
  escribir(this.btnQuestion.innerHTML);
};
btnEspacio.onclick = () => {
  escribir(" ");
};

btnQ.onclick = () => {
  escribir(this.btnQ.innerHTML);
};
btnW.onclick = () => {
  escribir(this.btnW.innerHTML);
};
btnE.onclick = () => {
  escribir(this.btnE.innerHTML);
};
btnR.onclick = () => {
  escribir(this.btnR.innerHTML);
};
btnT.onclick = () => {
  escribir(this.btnT.innerHTML);
};
btnY.onclick = () => {
  escribir(this.btnY.innerHTML);
};
btnU.onclick = () => {
  escribir(this.btnU.innerHTML);
};
btnI.onclick = () => {
  escribir(this.btnI.innerHTML);
};
btnO.onclick = () => {
  escribir(this.btnO.innerHTML);
};
btnP.onclick = () => {
  escribir(this.btnP.innerHTML);
};
btnApostro.onclick = () => {
  escribir(this.btnApostro.innerHTML);
};
btnMas.onclick = () => {
  escribir(this.btnMas.innerHTML);
};
btnA.onclick = () => {
    escribir(this.btnA.innerHTML);
}
btnS.onclick = () => {
    escribir(this.btnS.innerHTML);
}
btnD.onclick = () => {
    escribir(this.btnD.innerHTML);
}
btnF.onclick = () => {
    escribir(this.btnF.innerHTML);
}
btnG.onclick = () => {
    escribir(this.btnG.innerHTML);
}
btnH.onclick = () => {
    escribir(this.btnH.innerHTML);
}
btnJ.onclick = () => {
    escribir(this.btnJ.innerHTML);
}
btnK.onclick = () => {
    escribir(this.btnK.innerHTML);
}
btnL.onclick = () => {
    escribir(this.btnL.innerHTML);
}
btnÑ.onclick = () => {
    escribir(this.btnÑ.innerHTML);
}
btnPar1.onclick = () => {
    escribir(this.btnPar1.innerHTML);
}
btnPar2.onclick = () => {
    escribir(this.btnPar2.innerHTML);
}
btnZ.onclick = () => {
    escribir(this.btnZ.innerHTML);
}
btnX.onclick = () => {
    escribir(this.btnX.innerHTML);
}
btnC.onclick = () => {
    escribir(this.btnC.innerHTML);
}
btnV.onclick = () => {
    escribir(this.btnV.innerHTML);
}
btnB.onclick = () => {
    escribir(this.btnB.innerHTML);
}
btnN.onclick = () => {
    escribir(this.btnN.innerHTML);
}
btnM.onclick = () => {
    escribir(this.btnM.innerHTML);
}
btnComa.onclick = () => {
    escribir(this.btnComa.innerHTML);
}
btnPunto.onclick = () => {
    escribir(this.btnPunto.innerHTML);
}
btnGuion.onclick = () => {
    escribir(this.btnGuion.innerHTML);
}
// Funcion Enter Pendiente
btnEnter.onclick = () => {
    escribir("\n");
}
btnDelete.onclick = () => {
  btnDeletef();
};
