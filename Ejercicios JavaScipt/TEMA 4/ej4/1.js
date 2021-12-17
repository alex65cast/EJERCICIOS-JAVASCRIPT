
let div;
let p;
function agregar() {
    
    var txt="";
    
    p = document.createElement('p');
    p.innerText = "Nuevo numero: " + Math.random();
    div=document.getElementById("div");     
    div.appendChild(p);
    


}

function eliminar() {
    
    div.removeChild(p);
}