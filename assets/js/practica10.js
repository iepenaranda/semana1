// ciclo for
let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () => {
    for (let i = 0; i < 5; i++) {
        window.open("https://en.wikipedia.org/wiki/Bring_Me_the_Horizon");    
    }
};

// EventListener, otra forma de recibir eventos del HTML
// ("evento a recibir", callback)
// es necesario realizar los callbacks, si se pone la función directamente se ejecutara sin esperar al evento asignado.
// otro problema con el EventListener es que no funciona en algunos navegadores viejos o "raros" no son capaces de entenderlo
// Idealmente usar EventListener para eventos diferentes al click, para eventos de click mejor usar el onclick
btnPrueba.addEventListener("click", () => {
    spamLink();
})

// Un callback es un llamado de una función dentro de otra función a modo de parametro
