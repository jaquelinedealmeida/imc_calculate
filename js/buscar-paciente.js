let botaoBuscar= document.querySelector("#buscar-pacientes");


botaoBuscar.addEventListener("click", function(){
    console.log("Buscando Pacientes");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            //console.log(resposta);
            //console.log(typeof resposta);
            let pacientes = JSON.parse(resposta);
            //lê todo e devolve um obj js
          pacientes.forEach(function(paciente){
            adcionaPacienteNaTabela(paciente);
          });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
        
    });
    
    xhr.send();
    
    // objeto responsável por fazer requisição http
    
});