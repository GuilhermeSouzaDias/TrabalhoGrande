import { verificarTema, trocarTema } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button") //certo
const body = document.querySelector("body") //certo

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)