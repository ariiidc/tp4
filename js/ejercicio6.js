const productos=[]
let confirmar=true
let titulo=""
let isbn=0
let autor=""
let paginas=0
texto=document.getElementById("pantalla")
function hacerLibros(){
  do{
      precio=parseInt(prompt("Dime el precio del producto"))
      if(isNaN(precio)||precio<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(precio)||precio<1)
  do{
      codigo=parseInt(prompt("Dime el codigo del producto"))
      if(isNaN(codigo)||codigo<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(codigo)||codigo<1)
  do{
      nombre=prompt("Dime el nombre del producto")
      if(!isNaN(nombre))
        {alert("Ingrese un nombre valido")}
    }while(!isNaN(nombre))
    do{
      edad=parseInt(prompt("Dime tu edad"))
      if(isNaN(edad)||edad<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(edad)||edad<1)
      const producto={
        codigo:codigo,
        precio:precio,
        nombre:nombre,
        imprimir: function imprimir(){ texto.innerHTML+=`
          <h2>Informacion del producto</h2>
          <p>nombre:${nombre}</p>
          <p>precio:${precio}</p>
          <p>codigo${codigo}</p>
          ` },

      }
      productos.push(producto)
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
do{
  hacerProductos()
  confirmar=seguir()
}while(confirmar===true)
console.log(productos)
for (let i = 0; i < productos.length; i++) {
  productos[i].imprimir();
}