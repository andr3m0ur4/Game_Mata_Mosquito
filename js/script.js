function iniciarJogo() {
	var nivel = document.getElementById('nivel').value

	if (nivel === '') {
		alert('Selecione um nível para iniciar o jogo')
		return false
	}

	alert(nivel)
}

if (document.getElementById('jogo')) {
	document.body.onresize = function() {
		ajustarTamanhoPalcoJogo()
	}

	document.getElementById('cronometro').innerHTML = tempo

	var criar_mosquito = setInterval(function() {
		posicaoRandomica()
	}, 2000)
}
