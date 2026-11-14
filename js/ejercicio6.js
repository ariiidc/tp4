const libros=[]
let confirmar=true
let titulo=""
let isbn=0
let autor=""
let paginas=0
texto=document.getElementById("pantalla")
function hacerLibros(){
  do{
      titulo=prompt("Dime el titulo del libro")
      if(titulo==null)
        {alert("Ingrese un titulo valido")}
    }while(titulo===null)
  do{
      isbn=parseInt(prompt("Dime el isbn del libro"))
      if(isNaN(isbn)||isbn<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(isbn)||isbn<1)
  do{
      autor=prompt("Dime el autor del libro")
      if(!isNaN(autor))
        {alert("Ingrese un autor valido")}
    }while(!isNaN(autor))
    do{
      paginas=parseInt(prompt("Dime tu paginas"))
      if(isNaN(paginas)||paginas<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(paginas)||paginas<1)
      const libro={
        isbn:isbn,
        titulo:titulo,
        autor:autor,
        paginas:paginas,
        mostrarLibro: function mostrarLibro(){ texto.innerHTML+=`
          <h2>Informacion del libro</h2>
          <h3>El libro: ${this.titulo}</h3>

          <small>con ISBN:${this.isbn}</small>
          
          <p><strong>del autor: ${this.autor}</strong></p>
          
          <p>tiene ${this.paginas} paginas</p>

          
          ` },

      }
      libros.push(libro)
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
function Maspaginas (){
  let LibroMayor=libros[0]
  for(i=0;i<libros.length;i++){
    if(libros[i].paginas > LibroMayor.paginas){
      LibroMayor=libros[i]
    }
  }
  texto.innerHTML+=`<strong>El libro mayor es: ${LibroMayor.titulo}</strong>`
  return LibroMayor
}
do{
  hacerLibros()
  confirmar=seguir()
}while(confirmar===true)
do{
  respuesta=parseInt(prompt("1: Muestra la informacion del libro; 2 Muestra el libro con mas paginas"))
  switch(respuesta){
    case 1:
      for (let i = 0; i < libros.length; i++) {
      libros[i].mostrarLibro()
}
    break
    case 2:
      Maspaginas()

    break
    default:
      alert("ingrese algo valido")
  }
  confirmar=seguir()
}while(confirmar===true)
