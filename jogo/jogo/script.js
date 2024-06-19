document.addEventListener("DOMContentLoaded", function() {
    var nome = localStorage.getItem('nomeusuario');
    document.getElementById('mostrarnome').textContent = nome;

    var min = 1;
    var max = 10;
    var gerar = Math.floor(Math.random() * (max - min + 1)) + min;
    var adivinhar = document.getElementById("adivinhar");
    var campo = document.getElementById("digitar");
    var mensagem = document.getElementById("mensagem");
    var tentativa = 0;

    console.log(gerar);

    campo.focus(); 

    adivinhar.addEventListener("mousedown", function() {
        realizarVerificacao();
    });

    campo.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            realizarVerificacao();
        }
    });

    function realizarVerificacao() {
        var palpite = parseInt(campo.value);
        tentativa++;

        if (palpite < gerar) {
            mensagem.textContent = "O número é muito baixo!";
            ajustarCorTexto(palpite);
        } else if (palpite > gerar) {
            mensagem.textContent = "O número é muito alto!";
            ajustarCorTexto(palpite);
        } else if (palpite === gerar) {
            ajustarCorTexto(palpite);

            var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
            listajogadores.push({ nome: nome, tentativa: tentativa });
            localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
            localStorage.setItem('tentativas', tentativa);

            //proxima pagina
            window.location.href = "file:///C:/Users/motog/Downloads/jogo/pontuaçao/index.html";
        }
    }

    function ajustarCorTexto(palpite) {
        var distancia = Math.abs(palpite - gerar);
        var maxDistancia = max - min;
        var percentual = distancia / maxDistancia;

        var corR, corG, corB;

        if (distancia === 1) {
            // Laranja se errar por 1
            corR = 255; // Vermelho
            corG = 165; // Verde
            corB = 0;   // Azul
        } else {
            // Calcula cores entre azul e vermelho
            corR = 255 - percentual * 255; // Vermelho
            corG = 0;                       // Verde
            corB = 50 + percentual * 205;   // Azul
        }

        var cor = "rgb(" + corR + ", " + corG + ", " + corB + ")";
        mensagem.style.color = cor;

        
        if (palpite === gerar) {
            mensagem.textContent = "Parabéns! Você acertou!";
        } else {
            
            if (distancia === 1) {
                mensagem.textContent = "Errou Por pouco.";
            } else if (distancia <= 2) {
                mensagem.textContent = "Muito perto!";
            } else if (distancia <= 4) {
                mensagem.textContent = "Está perto.";
            }
        }
    }
});
