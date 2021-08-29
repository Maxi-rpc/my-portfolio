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
console.log(textDin.textContent);
