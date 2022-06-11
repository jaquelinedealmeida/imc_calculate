let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  let pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    //console.log("Tem algo digitado");

    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;

      let expressao = new RegExp(this.value, "i");
      //expressão regular para busca e como buscar
      //configura case sensite // i busca por maisulo e minusculo

      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
  //console.log(nome);
  //refere a variável
  //console.log(campoFiltro.value);
});
