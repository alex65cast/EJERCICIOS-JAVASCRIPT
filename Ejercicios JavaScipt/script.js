function actualizar(){
    let hora = new Date();

    let horaCadena = hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds();


    document.title=horaCadena;

} 
        
    let w = window.setInterval(actualizar,1000);

    function parar(){

        window.clearInterval(w);

  
    }
    