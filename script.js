

var sonidoBoton = new Audio('boton.mp3')

function openClose() {	
	
	sonidoBoton.play();

	if (!document.querySelector('.forma2') && !document.querySelector('.forma3')) {
		document.querySelector('.btn').style.display = 'none';
		document.querySelector('.forma0').className = 'forma2';
		document.querySelector('.guido').style.display = 'flex';
	} else if (document.querySelector('.forma2')) {
		document.querySelector('.forma2').className = 'forma3';
		setTimeout(function() {
			document.querySelector('.forma3').className = 'forma0';
			document.querySelector('.btn').style.display = 'flex';
			document.querySelector('.guido').style.display = 'none';
		},400);
	}
}