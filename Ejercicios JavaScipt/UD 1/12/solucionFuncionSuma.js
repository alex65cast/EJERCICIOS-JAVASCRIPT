// Declaramos la funcion clásica
function suma(n1,n2){
	
	var res=n1+n2;
	
	return res;
}

// Declaramos la funcion anónima
var suma_anonima = function (n1,n2){
	
	var res=n1+n2;
	
	return res;
}

// Declaramos la funcion flecha
var suma_flecha = (n1,n2) => n1+n2;


// Probando las funciones:
alert("La suma de 2 y 3 es: " + suma(2,3));
alert("La suma(anonima) de 2 y 3 es: " + suma_anonima(2,3));
alert("La suma(flecha) de 2 y 3 es: " + suma_flecha(2,3));
