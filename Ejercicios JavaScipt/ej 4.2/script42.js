let numero = prompt("Cuantos alumnos quiere registrar");

var personas = new Array();

for(let a=1;numero>=a;a++){
        let alumno = prompt("Ingresa el nombre del alumno "+a);
        let nota = prompt("Ingresa la nota del alumno " + a);
    
        personas.push([alumno , nota]);
        //console.log(personas[1]);
        //console.log(personas[1][1]);
    }

function ver(){
    nuevaVentana = window.open("", "Informacion", "height=400 , width=400");
    //nuevaVentana.document.write(personas.join());
    for(let a=0;numero>a;a++){
        nuevaVentana.document.write(personas[a]+"<br>");
    }
}