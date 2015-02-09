/**
 * @author Víctor Jesús Temprano Hernández
 */

function agregar(n, pantalla) {

	var div = document.getElementById(pantalla);
	if (n=='+' && div.innerHTML.contains('+')){
		div.innerHTML = 'secuencia incorrecta!!-> introduce bin+bin';
		resultado = 1;
		return;
	}
	if ((n == '+' && first == 1) || n != '+') {
		if(first==0 && n != '+'){
			first=1;
		}
		if (resultado == 1) {
			div.innerHTML = String(n);
			resultado = 0;
		} else {
			div.innerHTML = div.innerHTML + String(n);
		}
	}
	if (n == '+' && first == 0) {
		div.innerHTML = 'secuencia incorrecta!!-> introduce bin+bin';
		resultado = 1;
	}

}

function cambiar(contenido, pantalla) {
	var div = document.getElementById(pantalla);
	div.innerHTML = String(contenido);
}


function calcularSumaBinaria(n1, n2) {

	var n1int = parseInt(n1, 2);
	var n2int = parseInt(n2, 2);
	var res = n1int + n2int;
	return res.toString(2);
}


function sumar(pantalla) {
	var div = document.getElementById(pantalla);
	var sumandos = div.innerHTML.split('+');
	var res = calcularSumaBinaria(sumandos[0], sumandos[1]);
	cambiar(res, pantalla);
	resultado = 1;
	first=0;

}

var resultado = 1;
var first = 0;
document.getElementById('pantalla').innerHTML = "Introduce los números binarios tan largos como creas a sumar";
