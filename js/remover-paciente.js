let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (Event) {
    //let alvoEvento = Event.target;
//let paiDoAlvo = alvoEvento.parentNode;
  console.log("Fui clicado com duplo clique");

  Event.target.parentNode.classList.add("fadeOut");
//esmaecemento do css

  setTimeout(function () {
      //funcao de tempo
    Event.target.parentNode.remove();
  }, 500);
});




//this.remove();
//a targetquem o evento está atrelado ao dono do evento, no caso  o paciente.
