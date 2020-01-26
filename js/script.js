function iniciarJogo() {
	var nivel = document.getElementById('nivel').value

	if (nivel === '') {
		alert('Selecione um nível para iniciar o jogo')
		return false
	}

	window.location.href = 'app.html?' + nivel
}

if (document.getElementById('jogo')) {
	document.body.onresize = function() {
		ajustarTamanhoPalcoJogo()
	}

	document.getElementById('cronometro').innerHTML = tempo + ' s'
	document.getElementById('cronometro').style.color = '#28a745'

	document.getElementById('mosquitos_mortos').innerHTML = qtd_mortes
	document.getElementById('mosquitos_mortos').style.color = '#dc3545'

	var criar_mosquito = setInterval(function() {
		posicaoRandomica()
	}, tempo_mosquito)
}
