function buscar() {
    let obj = document.getElementById("buscar")
    let busqueda = obj.value;
    if (window.find(busqueda)) {
        alert('Se ha encontrado → ' + busqueda);
    } else {
        alert('No se ha encontrado → ' + busqueda);
    }
}

