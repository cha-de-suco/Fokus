function alteraTexto(texto) {
    titulo.innerHTML = texto
}

function alteraContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function(contexto) {
        contexto.classList.remove("active")
    });

    html.setAttribute("data-contexto" , contexto)
    banner.setAttribute("src" ,`./imagens/${contexto}.png`)
    switch (contexto) { //troquei key para contexto
        case "foco": //troquei case para "foco"


        alteraTexto(`
        Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
        
        `)

            break;

            case "descanso-curto":
                alteraTexto(`Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`)                

            break;

            case "descanso-longo":
                alteraTexto(`Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`)

        default:
            break;
    }
}

focoBotao.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500
    alteraContexto("foco") //tem como colocar mais de um evento dentro do add
    focoBotao.classList.add('active')
})


//() => {
    //    é função de seta
//}

// .setAttribute("data-contexto" , "foco") serve para alterar um elemento, no caso, altera data-contexo para foco.

curtoBotao.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 5
    alteraContexto("descanso-curto") // contexto recebe descanso-curto
    curtoBotao.classList.add('active')
    
})

longoBotao.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900
    alteraContexto("descanso-longo") // contexto recebe descanso-longo
    longoBotao.classList.add('active')
})

musica.loop = true

musicaFocoInput.addEventListener("click" , () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

function alteraImg(imagem) {
    img.setAttribute("src" , `/imagens/${imagem}.png`)
}

function iniciarOuPausar() {
    if(intervaloId) {
        zerar()
        pause.play()
        return
    }
    play.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    alteraImg("pause") // erro meu: tentei concatenar um play_arrow sem ela ser uma string, no caso, para concatenar usando template o parametro tem que estar entre "", sendo assim, play_arrow deve estar "play_arrow"
}


startPauseBt.addEventListener('click', iniciarOuPausar)


    //intervaloId = setInterval(contagemRegressiva, 1000)
    //Metodo setInterval executa em milissegundos, logo é nescessário mil para dar um segundo
    //Tambem serve para executar algo em determinado periodo de tempo
    
    function zerar() {
        clearInterval(intervaloId)
        iniciarOuPausarBt.textContent = "Começar"
        intervaloId = null
        alteraImg("play_arrow")
    }

// Diferenças entre metódos de escrever:

// document.write() escreve textos porem em lugares aleatorios do DOM e não em variaveis específicas como fizemos com iniciarOuPausarBt

// innerHTML escreve não só textos mais tags e sua formatação, além de poder ser usada como metodo para variaveis específicas

// textContent é usada para escrever textos em variáveis específicas.

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos* 1000)
    const tempoFormato = tempo.toLocaleTimeString("pt-Br", {minute: "2-digit", second: "2-digit"})
    tempoNaTela.innerHTML = `
        ${tempoFormato}
    `
}

mostrarTempo()

mostrarTempo()