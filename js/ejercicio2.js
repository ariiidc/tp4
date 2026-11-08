let opciones=0
let seguir=true

const cuenta={
  titular:"Alex",
  saldo:0,

  ingresar: function ingresar(monto){
    do{
      monto=parseInt(prompt("Ingrese un monto"))
      if(isNaN(monto)||monto<1)
        {alert("Ingrese un monto valido")}
    }while(isNaN(monto)||monto<1)
    this.saldo+=monto
    return monto
  },
  extrer: function extraer(monto){
    do{
      monto=parseInt(prompt("Cuanto quiere extraer?"))
      if(isNaN(monto)||monto<1||monto>this.saldo)
        if(monto>this.saldo){
        alert("Lo siento saldo insuficiente")
        confirmar()
      }
        else{
          alert("Ingrese un monto valido")
          confirmar()
        }
    }while(isNaN(monto)||monto<1||monto>this.saldo)
    this.saldo-=monto
    return monto
  },
  informacion: function informacion(){
    alert(`Su saldo actual es${this.saldo}`)
  }
}
function confirmar(siono){
  resultado=confirm("desea continuar sus operaciones?")
  if(resultado==true){
    return siono=true
  }
  else{
    return siono=false
  }
}
do{
      opciones=parseInt(prompt("Que accion quiere realizar? seleccione 1 para ingresar 2 para extraer 3 para mas informacion"))
      
      switch(opciones){
        case 1:
          cuenta.ingresar()
          seguir=confirmar()
          break
        case 2:
          cuenta.extrer()
          seguir=confirmar()
          break
        case 3:
          cuenta.informacion()
          seguir=confirmar()
          break
        default:
          alert("Por favor seleccione alguna d las opciones")
          break
      }
    }while(seguir===true)
