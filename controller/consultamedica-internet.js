function selecionarmedico(){
    var medico = document.getElementById('medico');
    var x = medico.options[medico.selectedIndex].value
    var crm = document.getElementById('crm')
    crm.value =  medico.options[medico.selectedIndex].value
 }
 function salvar(){
    if(document.getElementById("medico").value.length == 0) {
        document.getElementById("medico").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    document.getElementById("frmconsultamedica").action = "#";
    document.getElementById("frmconsultamedica").submit();
    window.alert('Consulta cadastrada com sucesso!')
    return true;
}