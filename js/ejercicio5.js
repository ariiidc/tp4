const personas=[]
let confirmar=true
let nombre=""
let edad=0
let dni=0 
let sexo=0
let peso=0
let altura=0
texto=document.getElementById("pantalla")
function hacerPersona(){

  do{
      nombre=prompt("Dime tu nombre")
      if(!isNaN(nombre))
        {alert("Ingrese un nombre valido")}
    }while(!isNaN(nombre))
  do{
      edad=parseInt(prompt("Dime tu edad"))
      if(isNaN(edad)||edad<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(edad)||edad<1)
  do{
      sexo=(prompt("Dime tu sexo M o H ")).toUpperCase()
      if(sexo.toUpperCase()!=="M"&&sexo.toUpperCase()!=="H")
        {alert("Ingrese una opcion valida")}
    }while(sexo.toUpperCase()!=="M"&&sexo.toUpperCase()!=="H")
  do{
      peso=parseInt(prompt("Dime tu peso "))
      if(isNaN(peso)||peso<1)
        {alert("Ingrese un peso valido")}
    }while(isNaN(peso)||peso<1)
  do{
      altura=parseInt(prompt("Dime tu altura "))
      if(isNaN(altura)||altura<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(altura)||altura<1)
      const persona={
        nombre:nombre,
        edad:edad,
        dni:edad,
        sexo:sexo,
        peso:peso,
        altura:altura,
        imprimir: function imprimir(){ texto.innerHTML+=`
          <h2>Informacion de la persona</h2>
          <p>Nombre: ${this.nombre}</p>
          <p>Edad: ${this.edad}</p>
          <p>DNI: ${this.dni}</p>
          <p>Sexo: ${this.sexo}</p>
          <p>Altura: ${this.altura}</p>
          <p>Peso: ${this.peso}</p>
          ` },
        mostrarGen: function mostrarGen(){
          let gen=2026-this.edad
          switch (true) {
            case gen >= 2025 && gen <= 2039:
              texto.innerHTML += `<p>${this.nombre} eres generación Beta y tu rasgo es la Adaptabilidad</p>`
              break
            case gen >= 2011 && gen <= 2024:
                texto.innerHTML += `<p>${this.nombre} eres generación Alfa y tu rasgo es la Hiperconectividad</p>`
                break

            case gen >= 1994 && gen <= 2010:
                texto.innerHTML += `<p>${this.nombre} eres generación Z y tu rasgo es la Irreverencia</p>`

                break
            case gen >= 1981 && gen <= 1993:
                texto.innerHTML += `<p>${this.nombre} eres Millennial y tu rasgo es la Frustración</p>`
                break
            case gen >= 1969 && gen <= 1980:
                texto.innerHTML += `<p>${this.nombre} eres generación X y tu rasgo es la Obsesión por el éxito</p>`
                break

            case gen >= 1949 && gen <= 1968:
                texto.innerHTML += `<p>${this.nombre} eres Baby Boom y tu rasgo es la Ambición</p>`
                break
            case gen >= 1930 && gen <= 1948:
                texto.innerHTML += `<p>${this.nombre} eres generación Silent y tu rasgo es la Austeridad</p>`
                break
            default:
                texto.innerHTML += `<p>${this.nombre}: no se encontró una generación para el año ${gen}</p>`
                break
}
        },
        esMayor: function esMayor(){
          if(this.edad>=18){
            texto.innerHTML+=`
            <p>${this.nombre} eres mayor de edad</p>`
          }
          else{
            texto.innerHTML+=`
            <p>${this.nombre} eres menor de edad</p>`
          }
        },
        generarDni: function generarDni(){
          dni= Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000)
          texto.innerHTML+=`
            <p>${this.nombre} tu DNI es: ${this.dni}</p>`
        }

      }
      personas.push(persona)
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
  hacerPersona()
  confirmar=seguir()
}while(confirmar===true)

do{
  respuesta=parseInt(prompt("1: Muestra la informacion; 2 Muestra la Generacion; 3 Muetra si es mayor de edad; 4: Genera un DNI"))
  switch(respuesta){
    case 1:
      for (let i = 0; i < personas.length; i++) {
      personas[i].imprimir()
}
    break
    case 2:
      for (let i = 0; i < personas.length; i++) {
      personas[i].mostrarGen()
}
    break
    case 3:
      for (let i = 0; i < personas.length; i++) {
      personas[i].esMayor()
}
    break
    case 4:
      for (let i = 0; i < personas.length; i++) {
      personas[i].generarDni()
}
    break
    default:
      alert("ingrese algo valido")
  }
  confirmar=seguir()
}while(confirmar===true)
console.log(productos)
for (let i = 0; i < productos.length; i++) {
  productos[i].imprimir();
}