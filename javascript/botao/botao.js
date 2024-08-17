const focoBotao = document.querySelector(".app_card-button--foco")

const curtoBotao = document.querySelector(".app__card-button--curto")

//Repare que ele está utilizando a metodologia BEM nas nos elementos html

const longoBotao = document.querySelector(".app__card-button--longo");

const botoes = document.querySelectorAll('.app__card-button')

const musicaFocoInput = document.querySelector("#alternar-musica")

const musica = new Audio('./sons/luna-rise-part-one.mp3')

const play = new Audio ("./sons/play.wav")

const pause = new Audio("./sons/pause.mp3")

const tempoFinalizado = new Audio('./sons/beep.mp3')

let tempoDecorridoEmSegundos = 1500

let intervaloId = null

const startPauseBt = document.querySelector('#start-pause')

const iniciarOuPausarBt = document.querySelector("#start-pause  span") // usando essa técnica é possível selecionar o elemento atraves do id da tag pai, no caso, seria #start-pause, e pegar exatamente onde a palavra começar esta inserida.

const img = document.querySelector("#start-pause  img")

const tempoNaTela = document.querySelector("#timer")

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        tempoFinalizado.play()
        zerar()
        return //utlize o return para parar a execução do código, ou seja, sem o return o console mandaria a mesagem infinitamente
    }
    
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
    
}

//const contagemRegressiva = () => { é uma função de seta, ou seja, esse tipo de função tem retorno automatico e pode ser escrito assim:

const funcaoDeSeta = (a,b) => a + b;
funcaoDeSeta(5, 5)//saida 10

// const funcaoDeSeta = declaração de função

//(a, b) = parametros

// => = palavra chave return

// a + b = oque ira retornar apos o chamamamento.