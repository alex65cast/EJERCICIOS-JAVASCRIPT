function color(event){
    r = parseInt(Math.random()*255);
    g = parseInt(Math.random()*255);
    b = parseInt(Math.random()*255);

    if(event.target.type=="submit"){

        document.body.style.backgroundColor= `rgb(${r},${g},${b})`;
    }else{
        document.body.style.backgroundColor="white";
    }
    event.preventDefault();
    //event.stopPropagation();
}

document.onclick=color;
document.getElementById("idBoton").addEventListener("click",color);