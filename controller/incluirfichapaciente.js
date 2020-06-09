function visualizar(){
    document.getElementById("incluirpaciente").action = "prontuariopaciente.html";
    document.getElementById("incluirpaciente").submit();
}
function salvar() {
    var resposta = confirm("Paciente foi salvo com sucesso");
    if (resposta == true) {
         window.location.href = "#";
    }
}