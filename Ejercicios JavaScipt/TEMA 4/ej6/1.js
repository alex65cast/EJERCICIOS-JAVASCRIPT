function buscar() {
    var idA;
    if(idA=="-1"){
        let div = document.getElementsById("div");
        let p = document.createElement("p");
        p.innerText=idA;
        div.appendChild(p);
    }else{
        idA=setInterval("prompt('DNI');",10000);
    }
}


