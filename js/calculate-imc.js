let titulo = document.querySelector(".titulo");
//buscando pela class

titulo.textContent = "Aparecida Nutricionista";
//altera conteudo textual

let pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes.length);
for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  //intera todos os itens
  let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");

  let tdImc = paciente.querySelector(".info-imc");

  // pega a informação da class
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;

  let alturaValida = validaAltura(altura);
  let pesoValido = validaPeso(peso); //true or false

  if (!pesoValido) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso Inválido";
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
    //paciente.style.backgroundColor = "lightcoral";
  }

  if (!validaAltura) {
    console.log("Altura invalida");
    tdImc.textContent = "Altura inválida";
    alturaValida = false;
    paciente.classList.add("paciente-invalido");

    //paciente.style.backgroundColor = "lightcoral";
  }

  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }

  function validaPeso(peso) {
     if(peso >= 0  && peso < 1000) {
       return true;
     }else {
       return false;
     }
  }

  function calculaImc(peso, altura) {
    let imc = 0;
  
    imc = peso / (altura * altura);
  
    return imc.toFixed(2);
              //casa decimais
  }

}

function validaAltura (altura) {
  if(altura >= 0 && altura <= 3.00 ) {
    return true
  } else {
    return false
  }
}




//console.log(botaoAdicionar);

// Events

//funcao anonima
//titulo.addEventListener("click", function() {

//console.log("Olha só posso chamar")

//});

//function mostraMensagem() {
//console.log("Olá, eu fui clicado")

//console.log(pacientes.length[i]);

// intera a variavel e o tamanho dela
// i chama todos os paramentos

//console.log(pacientes);
//retorna todas as class .paciente

// pega o conteudo

// validacao dos dados testando condições
