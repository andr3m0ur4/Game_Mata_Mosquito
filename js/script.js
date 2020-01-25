document.getElementsByTagName('body')[0].onresize = function() {
	ajustarTamanhoPalcoJogo()
}

setInterval(function() {
	posicaoRandomica()
}, 1000)
