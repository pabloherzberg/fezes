const largura = window.innerWidth
const altura = window.innerHeight

const desenho = document.querySelector('desenho')

const tamanhoDesenho = 70
const translateY = 100-tamanhoDesenho

if(largura > altura){
    desenho.style.width=`${tamanhoDesenho}vh`
    desenho.style.height=`${tamanhoDesenho}vh`
}else{
    desenho.style.width=`${tamanhoDesenho}vw`
    desenho.style.height=`${tamanhoDesenho}vw`
}
desenho.style.transform=`translateY(${translateY}%)`

const balao = document.querySelector('balao')
const boca = document.querySelector('boca')
const labio = document.querySelector('labio')

const reconhecimento = new window.webkitSpeechRecognition()
reconhecimento.lang ='pt-BR'
reconhecimento.continuous = true //continua recebendo os inputs sem parar
reconhecimento.interimResults = true //pega todos resultados parciais até terminar de falar
reconhecimento.onresult = event=>{
    balao.innerHTML=event.results[event.results.length-1][0].transcript
    boca.style.animation='falar .5s'
    labio.style.animation='balbuciar .5s'
}
reconhecimento.start()