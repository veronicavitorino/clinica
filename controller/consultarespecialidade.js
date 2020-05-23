function novo(){
    document.getElementById("frmconsultarespecialidade").action = "cadastrarespecialidade.html";
    document.getElementById("frmconsultarespecialidade").submit();
}
function confirmacao(id) {
    var resposta = confirm("Deseja remover esse registro?");
    if (resposta == true) {
         window.location.href = "#";
         window.alert(id);
    }
}