
let nombre1 = prompt("Introduzca nombre: ");
let nombre2 = prompt("Introduzca nombre: ");
let nombre3 = prompt("Introduzca nombre: ");
let nombre4 = prompt("Introduzca nombre: ");
let nombre5 = prompt("Introduzca nombre: ");
let nombre6 = prompt("Introduzca nombre: ");
let nombre7 = prompt("Introduzca nombre: ");
let nombre8 = prompt("Introduzca nombre: ");
let nombre9 = prompt("Introduzca nombre: ");
let nombre10 = prompt("Introduzca nombre: ");

let personas = new Array(nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, nombre8, nombre9, nombre10);


function nombres(){
    
    nuevaVentana = window.open("", "Informacion", "height=400 , width=400");
    nuevaVentana.document.write("Los nombres son: "+personas.join(" , "));
} 
function numero(){

    nuevaVentana2 = window.open("", "Informacion", "height=400 , width=400");
    nuevaVentana2.document.write("El numero de usuarios es: "+personas.length);

}
    
function ordenalfabetico(){
    
    nuevaVentana3 = window.open("", "Informacion", "height=400 , width=400");
    nuevaVentana3.document.write("Los usuarios ordenados alfabeticamente seria: "+personas.sort());

} 
function inverso(){

    nuevaVentana4 = window.open("", "Informacion", "height=400 , width=400");
    nuevaVentana4.document.write("Los socios en orden inverso seria: "+personas.reverse());

}