const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

const curiosidades = [
    "💡 O primeiro computador eletrônico de uso geral, o ENIAC, ocupava uma sala inteira e pesava cerca de 30 toneladas.",

    "🌐 A World Wide Web foi criada por Tim Berners-Lee em 1989 para facilitar o compartilhamento de informações entre pesquisadores.",

    "🤖 A inteligência artificial é uma área da computação que busca criar sistemas capazes de realizar tarefas que normalmente exigem inteligência humana.",

    "📱 Atualmente, um smartphone possui uma capacidade de processamento muito superior à dos computadores usados nas primeiras missões espaciais.",

    "🔐 A criptografia é utilizada para proteger informações e tornar dados ilegíveis para pessoas que não possuem a chave correta.",

    "💻 JavaScript é uma das principais linguagens utilizadas para criar páginas web interativas."
];

function mostrarCuriosidade() {
    const numeroAleatorio = Math.floor(Math.random() * curiosidades.length);

    mensagem.textContent = curiosidades[numeroAleatorio];

    contador++;

    contadorElemento.textContent = contador;
}

botao.addEventListener("click", mostrarCuriosidade);
