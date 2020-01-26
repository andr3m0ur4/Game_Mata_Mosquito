var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var tempo_mosquito
var qtd_mortes = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

switch (nivel) {
	case 'normal':
		tempo_mosquito = 1500
		break

	case 'dificil':
		tempo_mosquito = 1000
		break

	case 'chucknorris':
		tempo_mosquito = 750
		break
}

function ajustarTamanhoPalcoJogo () {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo--

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criar_mosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo + ' s'
		document.getElementById('cronometro').style.color = '#28a745'
	}
}, 1000)

function posicaoRandomica() {

	// remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('Elemento selecionado foi: v' + vidas)
		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// criar o elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		document.getElementById('mosquitos_mortos').innerHTML = qtd_mortes
		document.getElementById('mosquitos_mortos').style.color = '#dc3545'
		qtd_mortes = parseInt(document.getElementById('mosquitos_mortos').innerHTML) + 1
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}
