const regressiva = document.querySelector("h1")
let contador = 10

const botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    const regressivaContador = setInterval(() => {
    regressiva.innerText = contador
    contador--

    if (contador < 0) {
        clearInterval(regressivaContador)
        regressiva.innerText = "RELEASE *BOOOOOOOOOOM.MP4*"
    }
}, 1000)
})
