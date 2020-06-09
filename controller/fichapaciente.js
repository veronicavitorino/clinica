function acao() {
    var resposta = confirm("Tem certeza que deseja excluir esse paciente?");
    if (resposta == true) {
         window.location.href = "#";
         window.alert("Paciente foi excluído com sucesso!");
    }
}
function pront(){
    document.getElementById("fichapaciente").action = "prontuariopaciente.html";
    document.getElementById("fichapaciente").submit();
}
function novo(){
    document.getElementById("fichapaciente").action = "incluirfichapaciente.html";
    document.getElementById("fichapaciente").submit();
}