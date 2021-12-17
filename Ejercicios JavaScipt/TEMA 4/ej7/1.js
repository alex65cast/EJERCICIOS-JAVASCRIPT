array = new Array();
array2 = new Array();
function hora() {
    

    for (var i = 0; i < 3;i++) {
        array[i] = prompt("Introduzca el nombre");
        array2[i] = prompt("Introduzca la edad");
    }
    

}

function long(){
    document.write(array.length);
    document.write(array2.length);
}

function nombres() {

    let div = document.getElementById("div");
    let p;
    for (var i = 0; i < array.length; i++) {
       p= document.createElement("p");
        p.innerText=array[i]+" "+array2[i];
        div.appendChild(p)
    }
    
    
    
}

function media() {
    let edades;
    for (let index = 0; index < array2.length; index++) {
        
        edades=array2[index];
        edadfin = edades
                
    }
    document.write(edades);

}