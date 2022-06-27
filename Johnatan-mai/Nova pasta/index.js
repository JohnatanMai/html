
function criar(){
 let nome = document.getElementById ("campo-nome").value
 alert(nome)
 document.getElementById("cabeçalio").innerHTML="Olá, "+nome+" bem vindo."
}

function ParOuImpar(){
    let numero = document.getElementById ("campo-numero").value

    if (numero%2==0){ 
 document.getElementById("resultado-par-ou-impar").innerHTML= " O " +numero+ " É Par!"
  } else document.getElementById("resultado-par-ou-impar").innerHTML= " O " +numero+ " É Impar!"
  }