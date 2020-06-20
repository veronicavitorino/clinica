function selecionar(){
    if(document.getElementById("medico").value.length == 0 && document.getElementById("paciente").value.length == 0 ) {
        //document.getElementById("consultar").focus();
        window.alert('Favor selecionar um médico ou paciente!')
        return false;
    }

        document.getElementById("consultaragendamento").action = "#";
        document.getElementById("consultaragendamento").submit();
        window.alert('Consulta salva com sucesso!')
        return true;
}
function selecionarmedico(){
    var medico = document.getElementById('medico');
 }
 function virar(){
    document.getElementById("consultaragendamento").action = "consultamedica-secretaria.html";
    document.getElementById("consultaragendamento").submit();
}
