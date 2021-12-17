//AUTOR
let autor={
    nombre:"agus",
    apellido:"aguilera",
    edad:"64",
    identificador:"1811818",
    github:"http://GithupAutor",
    lenguaje:"javaScript",
    version:"1.0",

    infoAutor:function(){

        return ("Nombre: "+this.nombre+", Apellido: "+this.apellido+", edad: "+this.edad+", identificador: "+this.identificador+", Github: "+this.github+", lenguaje: "+this.lenguaje+", version: "+this.version);
    } 

};
//JUGADOR
let jugador={
    nombre:"jugador1",
    apellido:"apellido1",
    edad:"65",
    puntuacion:"0",
    aciertos:"0",
    fallos:"0",

    informacionJugador:function(){

        return ("Nombre: "+this.nombre+", Apellido: "+this.apellido+", edad: "+this.edad+", puntuacion: "+this.puntuacion+", Aciertos: "+this.aciertos+", fallos: "+this.fallos);

    }

};