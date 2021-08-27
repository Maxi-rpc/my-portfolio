console.log("Hola Mundo DOM");

// mostrar fecha actual
var fecha = document.getElementById("fecha");
var hoy = new Date();
fecha.innerText = hoy.getFullYear();

//head-content dinamico
var head = document.getElementById("head-content");
var tab = document.getElementById("myTab");

tab.addEventListener("click", function (e) {
  var tabName = e.target.name;
  if (tabName != null) {
    head.innerText = tabName;
  }
});
