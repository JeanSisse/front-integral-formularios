const generoMusical = document.querySelector('select');
const formulario = document.querySelector('form');
const input = document.querySelector('input');
const inputMusica = document.querySelector('.input-musica');
const pesquisar = document.querySelector('button');

const kizomba = "Badoxa Me Toca [2015] By É Karga Eventz";
const kuduro = "Preto Show 150 bpm";
const gumbe = "Furkuntunda - Djunta Mon";

generoMusical.addEventListener('change', function (event){
	console.log(input.value);
	input.value = generoMusical.value === 'kizomba' ? kizomba : 
				  generoMusical.value === 'kuduro' ? kuduro :
				  generoMusical.value === 'gumbeh' ? gumbe : "";
	
	if (input.value) {
		inputMusica.style.display = 'block';
	} else {
		inputMusica.style.display = 'none';
	}
});


pesquisar.addEventListener('click', function (event){
	if (!input.value) {
		event.preventDefault();
	}
});