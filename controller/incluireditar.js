function salvar(){
    var tabela = document.getElementById("listaespecialidade");
    console.log(tabela.rows.length);

    if(document.getElementById("nome").value.length == 0) {
        document.getElementById("nome").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    if(document.getElementById("crm").value.length == 0) {
        document.getElementById("crm").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    if(document.getElementById("cpf").value.length == 0) {
        document.getElementById("cpf").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    if(document.getElementById("telefone").value.length == 0) {
        document.getElementById("telefone").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    if(tabela.rows.length < 2) {
        window.alert('Selecione ao menos uma especialidade!')
        return false;
    }
       document.getElementById("cadastrarmedico").action = "#";
       document.getElementById("cadastrarmedico").submit();
       window.alert('Médico(a) foi salvo com sucesso!');
       return true;
       

}



function incluirregistro(listaespecialidade) {
    var table = document.getElementById("listaespecialidade");
    var especialidades = document.getElementById("especialidades")
    var numerolinhas = table.rows.length;
    var linha = table.insertRow();
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    celula1.innerHTML = especialidades.value
    celula2.innerHTML = '<img src="/view/telahome/image/delete.png" alt="Excluir" onclick="removelinha(this)"></img>'

}
function removelinha(remover) {
    var tabela = document.getElementById("listaespecialidade");
    var linha  =  remover.parentNode.parentNode.rowIndex;
    tabela.deleteRow(linha);

}
 