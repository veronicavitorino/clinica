function salvar(){
    if(document.getElementById("medico").value.length == 0) {
        document.getElementById("medico").focus();
        window.alert('Todos os campos são de preenchimento obrigatório!')
        return false;
    }
    document.getElementById("consultamedica").action = "#";
    document.getElementById("consultamedica").submit();
    window.alert('Consulta salva com sucesso!')
    return true;
}

function selecionarmedico(){
   var medico = document.getElementById('medico');
   var x = medico.options[medico.selectedIndex].value
   var crm = document.getElementById('crm')
   crm.value =  medico.options[medico.selectedIndex].value
}
function selecionarpaciente(){
    var paciente = document.getElementById('paciente');
    var v = paciente.options[paciente.selectedIndex].value
    var cpf = document.getElementById('cpf')
    cpf.value =  paciente.options[paciente.selectedIndex].value
 }