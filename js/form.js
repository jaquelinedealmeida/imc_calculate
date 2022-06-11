let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  //inclui event como parametro
  event.preventDefault();
  //evento padrão de recarregar página

  let form = document.querySelector("#form-adiciona");
  //Extraindo informacoes do paciente do form

  let paciente = obterPacienteDoForm(form);

  //Cria a tr a td do paciente
  l

  // validação do paciente

  let erros = validaPaciente(paciente);

  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  //console.log(paciente);

  //mensagem erro

  //adcionando o paciente na tabela
  
  adcionaPacienteNaTabela(paciente);

  form.reset();
  let mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

  //funcao reset do form para limpar a tela

  //console.log(nome);
  //console.log(peso);
  //console.log(peso);
});

function adcionaPacienteNaTabela(paciente) {
  let pacienteTr = criarTr(paciente);
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
    //insere mensagem de erro no html
  });
}

//objeto
function obterPacienteDoForm(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function criarTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //chamando funcao para paciente imc de novo paciente

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function criaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
    //adicionar msg de erro no array
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida.");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco.");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco.");
  }
  if (paciente.altura.length == 0) {
    erros.push("A alturanão pode ser em branco.");
  }

  return erros;
}

//quando o if é smiples, sem else, pode tirar as chaves
