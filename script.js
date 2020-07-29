

var sonidoBoton = new Audio('boton.mp3')

function openClose1() {	
	
	sonidoBoton.play();

	if (!document.querySelector('.forma12') && !document.querySelector('.forma13')) {
		document.querySelector('.btn1').style.display = 'none';
		document.querySelector('.forma11').className = 'forma12';
		document.querySelector('.guido1').style.display = 'flex';
	} else if (document.querySelector('.forma12')) {
		document.querySelector('.forma12').className = 'forma13';
		setTimeout(function() {
			document.querySelector('.forma13').className = 'forma11';
			document.querySelector('.btn1').style.display = 'flex';
			document.querySelector('.guido1').style.display = 'none';
		},400);
	}
}

function openClose2() {	
	
	sonidoBoton.play();

	if (!document.querySelector('.forma22') && !document.querySelector('.forma13')) {
		document.querySelector('.btn2').style.display = 'none';
		document.querySelector('.forma21').className = 'forma22';
		document.querySelector('.guido2').style.display = 'flex';
	} else if (document.querySelector('.forma22')) {
		document.querySelector('.forma22').className = 'forma23';
		setTimeout(function() {
			document.querySelector('.forma23').className = 'forma21';
			document.querySelector('.btn2').style.display = 'flex';
			document.querySelector('.guido2').style.display = 'none';
		},400);
	}
}