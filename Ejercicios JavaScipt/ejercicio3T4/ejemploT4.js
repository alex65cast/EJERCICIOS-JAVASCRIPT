function calcular(){
    //recuperamos el div
    let div = document.getElementById("idDiv");

    //sacamos el resultado por pantalla con el id
    document.getElementById("idResultado").innerHTML= div.childNodes.length;

    div.childNodes.forEach(function(e){
        document.getElementById("idTipo").innerHTML += e.nodeName+" ,"
    })
}
    