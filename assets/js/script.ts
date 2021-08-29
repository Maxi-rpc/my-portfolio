console.log("Hola Mundo desde TS");

// mostrar fecha actual
var fecha: HTMLElement = document.getElementById("fecha");
var hoy: Date = new Date();
var anio: number = hoy.getFullYear();
fecha.innerText = anio.toString();

//head-content dinamico
var head: HTMLElement = document.getElementById("head-content");
var tab: HTMLElement = document.getElementById("myTab");

tab.addEventListener("click", function (e) {
	var tabName: string = e.target.name.toString();
	if (tabName != null) {
		head.innerText = tabName;
	}
});

//text-dinamico
var textDin: HTMLElement = document.getElementById("text-dinamico");
var listaText: Array<string> = [
	"Programador",
	"Desarrollador",
	"Backend",
	"Frontend",
];

var contador: number = 0;
var maximo: number = listaText.length;

setInterval(function () {
	if (contador >= maximo) {
		contador = 1;
	} else {
		contador++;
	}

	textDin.textContent = listaText[contador - 1];
}, 5000);

console.log(listaText.length);
