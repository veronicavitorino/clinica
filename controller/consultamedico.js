function confirmacao(nome) {
        var resposta =  window.confirm("Tem certeza que deseja excluir o(a) médico(a)" + nome + "?" )
    
        if (resposta == true) {
            window.location.href = "#";
            window.alert("O(a) médico(a) " + nome  + " foi excluido com sucesso!")
       }
        
        
}
function novo(){
    document.getElementById("cadastrarmedico").action = "incluireditarmedico.html";
    document.getElementById("cadastrarmedico").submit();
}
