function voltar(){
    document.getElementById("fichapaciente").action = "fichapaciente.html";
    document.getElementById("fichapaciente").submit();
}
function excluir() {
    var resposta = confirm("Deseja cancelar o prontuário do paciente?");
    if (resposta == true) {
         window.location.href = "#";
         window.alert("O prontuário foi cancelado!");
    }
}
function editar(){
    document.getElementById("fichapaciente").action = "detalheprontuario.html";
    document.getElementById("fichapaciente").submit();
}
