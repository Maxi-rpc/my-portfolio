console.log("Hola Mundo desde TS");
// mostrar fecha actual
var fecha = document.getElementById("fecha");
var hoy = new Date();
var anio = hoy.getFullYear();
fecha.innerText = anio.toString();
//head-content dinamico
var head = document.getElementById("head-content");
var tab = document.getElementById("myTab");
tab.addEventListener("click", function (e) {
    var tabName = e.target.name.toString();
    if (tabName != null) {
        head.innerText = tabName;
    }
});
//text-dinamico
var textDin = document.getElementById("text-dinamico");
var listaText = [
    "Programador",
    "Desarrollador",
    "Backend",
    "Frontend",
];
var contador = 0;
var maximo = listaText.length;
setInterval(function () {
    if (contador >= maximo) {
        contador = 1;
    }
    else {
        contador++;
    }
    textDin.textContent = listaText[contador - 1];
}, 5000);
console.log(listaText.length);
