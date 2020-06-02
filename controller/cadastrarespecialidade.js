function voltar(){
    document.getElementById("frmcadastrarespecialidade").action = "consultarespecialidade.html";
    document.getElementById("frmcadastrarespecialidade").submit();
}
function salvar(){
    if(document.getElementById("descricao").value.length == 0) {
        document.getElementById("descricao").focus();
        window.alert('Campo descrição obrigátorio!')
        return false;
    }
    document.getElementById("frmcadastrarespecialidade").action = "#";
    document.getElementById("frmcadastrarespecialidade").submit();
    window.alert('Especialidade foi salva com sucesso!')
    return true;
}