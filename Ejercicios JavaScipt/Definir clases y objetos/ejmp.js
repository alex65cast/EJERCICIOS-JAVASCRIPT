class Productos{

    constructor(n, c, u, p){

        this.nombre = n;
        this.categoria = c;
        this.unidades = u;
        this.precio = p;
        
    }
  

     n   
    get categoria(){
        return this._categoria;
    }
    set categoria(c){
        this._categoria=c;
    }
    get unidades(){
        return this._unidades;
    }
    set unidades(u){
        this._unidades=u;
    }
    get precio(){
        return this._precio;
    }
    set precio(p){
        this._precio=p;
    }
    importe(){
        return(this.precio*this.unidades);
    }
    getInf(){
        document.write("Nombre: "+this._nombre);
        document.write("El importe sera: "+this._unidades+ " x "+this._precio+" = " +this.importe());
    }
}

class televisor extends Productos{

    constructor(n,c,u,p,t){
        super(n,c,u,p,t);
    
        this.tamano=t;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(t){
        this._tamano=t;
    }

}
var televisor1 = new televisor("saman","oled",5,100,55);
televisor1.getInf();
document.write("Nombre: "+televisor1.nombre+ " tamaño: "+televisor1.tamano);

