function hijos() {
    let obj = document.getElementById("div");
    let p = obj.getElementsByTagName("p");
    document.getElementById("uno").innerHTML=obj.childNodes.length;
    var txt = "";
    for (i = 0; i < p.length; i++) {
        txt = txt + p[i].nodeName + "<br>";
    }
    
    document.getElementById("dos").innerHTML=txt;
}