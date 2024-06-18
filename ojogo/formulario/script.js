var botao = document.getElementById("botao");
var verificacao = document.getElementById("form");

verificacao.addEventListener("submit", function(event){
   
    event.preventDefault();
    if(this.checkVisibility()){
        var nome = document.getElementById('nome').value;
        localStorage.setItem('nomeusuario', nome);
     
    }
});