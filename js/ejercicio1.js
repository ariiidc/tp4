const auto={
  color:"verde",
  marca:"bmw",
  modelo:"x6",
  encendido:true,
  encender: function encender(){
    encendido=true
    texto.innerText+="Auto encendido"
  },
  apagar: function apagar(){
    encendido=false
    texto.innerText+="Auto apagado"
  }
}

let texto= document.getElementById("pantalla")
auto.encender()

auto.apagar()