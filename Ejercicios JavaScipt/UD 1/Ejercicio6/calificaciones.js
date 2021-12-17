function obtenerCalificacion(nota){

// Comparamos los rangos de resultados
	if(nota>=0.0 && nota<3.0){
		resultado="Muy deficiente";
	} else if(nota>=3.0 && nota<5.0){
		resultado="Insuficiente";
	} else if(nota>=5.0 && nota<6.0){
		resultado="Bien";
	} else if(nota>=6.0 && nota<9.0){
		resultado="Notable";
	} else if(nota>=9.0 && nota<=10.0){
		resultado="Sobresaliente";
	} else if(nota<0.0 || nota >10){
		resultado="Fuera de rango"
	}

	// -----------------------------------------
	// Imprimimos el resultado obtenido
	//------------------------------------------
	window.onload = function(){
		
		// ¿Comprobar que se ha obtenido un valor nulo?
		document.getElementById("valor_entrada").innerHTML = nota;
		document.getElementById("valor_salida").innerHTML = resultado;
	}
}


// Leemos de la entrada estandar
var calificacion=parseFloat(prompt("¿Que calificación tienes?"));
var resultado="";

if( isNaN(calificacion) === false){

	obtenerCalificacion(calificacion);

}else{

	alert("Error, no es un número");
}


