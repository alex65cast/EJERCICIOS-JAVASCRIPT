



//Lectura de valor de entrada
var n=parseInt(prompt("Introduzca el valor numerico de N"));

// Realizar Validación!!!!!

var resultado = `Los números pareas hasta el ${n} son : `;

// For de 2 en 2
for(var i=2;i<=n;i+=2){	 
	resultado += `${i},`
}

// Mostramos el resultado final
// -----------------------------------------
	// Imprimimos el resultado obtenido
	//------------------------------------------
	window.onload = function(){
		
		// ¿Comprobar que se ha obtenido un valor nulo?
		document.getElementById("valor_entrada").innerHTML = n;
		document.getElementById("valor_salida").innerHTML = resultado;
	}