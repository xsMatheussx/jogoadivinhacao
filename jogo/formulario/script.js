document.addEventListener("DOMContentLoaded", function() {
    var nomeInput = document.getElementById('nome');
    nomeInput.focus(); 

    var campoNumero = document.getElementById('digitar');
    campoNumero.focus(); 
});

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    if (nome.length >= 3 && nome.length <= 20) {
        localStorage.setItem('nomeusuario', nome);
        window.location.href = "file:///C:/Users/motog/Downloads/jogo/jogo/index.html"; // proxima pagina
        var campoNumero = document.getElementById('digitar');
        campoNumero.focus(); 
    } else {
        alert("O nome de usuário deve ter entre 3 e 20 caracteres.");
    }
});
