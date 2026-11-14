const contactos=[]
let confirmar=true
let nombre=""
let telefono=0
let Noagregar=true
let Acontacto=""
texto=document.getElementById("pantalla")
function hacerContactos(){
  do{
      nombre=prompt("Dime el nombre del contacto")
      if(nombre==null)
        {alert("Ingrese nombre")}
    }while(nombre===null)
  do{
      telefono=parseInt(prompt("Dime el numero del contacto"))
      if(isNaN(telefono)||telefono<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(telefono)||telefono<1)
      const contacto={
        telefono:telefono,
        nombre:nombre,     
      }
      contactos.push(contacto)
}

function seguir(siono){
  resultado=confirm("desea continuar sus operaciones?")
  if(resultado==true){
    return siono=true
  }
  else{
    return siono=false
  }
}

function agregarContacto(){

}

function existeContacto(){
  
}
function listarContacto(){
  respuesta=""
  if(contactos.length<1){
    alert("Tu agenda esta vacia")
  }
  else{
  respuesta+="<ul>"
  for(i=0;i<contactos.length;i++){
    respuesta+="<li>"+contactos[i].nombre+"+"+ contactos[i].telefono+"</li>"
  }
  respuesta+="</ul>"
  texto.innerHTML+=respuesta
  }
  
}
function buscarContacto(){
  
}
function eliminarContacto(){
  
}
function agendaLlena(){
  if(contactos.length>=9){
    return true
  }
  else{
    return false
  }
  
}
function espaciosLibres(){
  alert(" tienes "+10-contactos.length+" espacios libres")
  
}
do{
  respuesta=parseInt(prompt("1: Agrega un Contacto; 2 Lista tus Contactos ;3 Busca un Contacto;4 Elimina un Contacto;5 Indica cuantos espacios te quedan"))
  switch(respuesta){
    case 1:
      const agendallena=agendaLlena()

      if (agendaLlena===false){
        do{
          agregarContacto()
          respuesta=confirm("Desea continuar sus operaciones")
        }while(respuesta===true)
      }
      else{
        alert("Tu agenda esta llena")
      }
    break
    case 2:
      listarContacto()
    break
    case 3:
      eliminarContacto()
    break
    case 4:
      buscarContacto()
    break
    case 5:
      espaciosLibres()
    break
    default:
      alert("ingrese algo valido")
  }
  confirmar=seguir()
}while(confirmar===true)

