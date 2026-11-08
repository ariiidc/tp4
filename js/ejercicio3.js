const rectangulos=[]
let confirmar=true
let ladoA=0
let ladoB=0
function hacerRectangulos(){
  do{
      ladoA=parseInt(prompt("Dime el alto del rectangulo"))
      if(isNaN(ladoA)||ladoA<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(ladoA)||ladoA<1)
  do{
      ladoB=parseInt(prompt("Dime el ancho del rectangulo"))
      if(isNaN(ladoB)||ladoB<1)
        {alert("Ingrese un numero valido")}
    }while(isNaN(ladoB)||ladoB<1)
      const rectangulo={
        lado1:ladoA,
        lado2:ladoB,
        area: function calcularArea(){ return this.lado2*this.lado1 },
        perimetro:function calcularPerimetro(){return (2*this.lado2)+(2*this.lado1)}
      }
      rectangulos.push(rectangulo)
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
  hacerRectangulos()
  confirmar=seguir()
}while(confirmar===true)
console.log(rectangulos)