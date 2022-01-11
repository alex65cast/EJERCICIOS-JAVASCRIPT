var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(evento){
    
    console.clear()
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Usando Event : %c${evento.target.value}`,color_css);
    
    let formulario= document.forms["idFormulario"]

    console.log(`Valor de input : %c${formulario.elements["idNombre"].value}`,color_css)
   

   let elementos = document.getElementsByName("radio");
   for (let i=0; i<elementos.length; i++){
       if(elementos[i].checked){
        console.log(`Ha sido seleccionado : %c${elementos[i].value}`,color_css)
       }
   }

  let elemenCond = formulario.elements["idCondiciones"]
  if(elemenCond.checked)
  {
    console.log(`Ha sido seleccionado : %c${formulario.elements["idCondiciones"].value}`,color_css)
  }

  let elemenPriv = formulario.elements["idPrivacidad"]
  if(elemenPriv.checked)
  {
    console.log(`Ha sido seleccionado : %c${formulario.elements["idPrivacidad"].value}`,color_css)
  }
  console.log(`Valor de la Lista : %c${formulario.elements["idLista"].value}`,color_css)
  console.log(`Valor del DataList: %c${formulario.elements["listaData"].value}`,color_css)
  
    evento.preventDefault( );
}


