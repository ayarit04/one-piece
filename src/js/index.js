const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
 botao.addEventListener("click", () => {
        const botaoselecionado = document.querySelector(".botao.selecionado");

        desselecionarbotao(botaoselecionado, botao);
        desselecionarpersonagem();

        personagens[indice].classList.add("selecionado")
    })
})


function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao(botaoselecionado, botao) {
    botaoselecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
}

