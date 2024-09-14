var estatura= Number(prompt("Por favor introduce tu estatura en metros"))
var peso= Number(prompt("Por favor introduce tu peso en kilos"))
var imc= peso/(estatura*estatura)
var tuIMC=document.querySelector(".tuIMC")
tuIMC.innerHTML="Tu IMC es " + imc

if(imc>= 18.5 && imc<=24.9){
    resultado=document.querySelector(".resultado")
    resultado.innerHTML="Tu IMC es normal"
} else if(imc>=25){
    resultado=document.querySelector(".resultado")
    resultado.innerHTML="Tu IMC es alto"
} else if(imc<=18.4){
    resultado=document.querySelector(".resultado")
    resultado.innerHTML="Tu IMC es bajo"
}


