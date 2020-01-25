document.body.onresize = function() {
	ajustarTamanhoPalcoJogo()
}

document.getElementById('cronometro').innerHTML = tempo

var criar_mosquito = setInterval(function() {
	posicaoRandomica()
}, 2000)
