document.addEventListener("DOMContentLoaded", function() {
    var parabens = localStorage.getItem('nomeusuario');
    document.getElementById('parabens').textContent = parabens;
    var tentativas = localStorage.getItem('tentativas');
    document.getElementById('tentativas').textContent = tentativas;

    var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
    var listadejogadores = document.getElementById('listadejogadores');

    listajogadores.forEach(function(entry) {
        var nomejogador = document.createElement('li');
        nomejogador.textContent = `${entry.nome}: ${entry.tentativa} tentativas`;
        listadejogadores.appendChild(nomejogador);
    });

    var botao = document.getElementById('botao');
    botao.addEventListener("click", jogarNovamente);

    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            jogarNovamente();
        }
    });

    function jogarNovamente() {
        localStorage.removeItem('listajogadores'); // Limpa os dados de jogadores
        localStorage.removeItem('tentativas');    // Limpa as tentativas
        window.location.href = "http://127.0.0.1:5500/Formulario/index.html"; // volta pro inicio
    }
});