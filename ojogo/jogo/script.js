var nome = localStorage.getItem('nomeusuario');
document.getElementById('mostrarnome').textContent = nome;

var min = 1;
var max = 10;
var gerar = Math.floor(Math.random() * (max-min+1)) + min;
var adivinhar = document.getElementById("adivinhar");
var campo = parseInt(document.getElementById("digitar").value);
var mensagem = document.getElementById("mensagem");
var tentativa = 0;
console.log(gerar);

adivinhar.addEventListener("click", function(){
    var campo = parseInt(document.getElementById("digitar").value);
    tentativa++;
   
    if(campo < gerar) {
        mensagem.textContent = "O número é muito baixo!" 
    }else if (campo > gerar) {
        mensagem.textContent = "O número é muito alto!"
    }else if (campo === gerar) {
 
        var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
       
        listajogadores.push({nome: nome, tentativa: tentativa});
        
        localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
       
        localStorage.setItem('tentativas', tentativa);

    }
});