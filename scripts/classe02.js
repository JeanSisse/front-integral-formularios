const formulario = document.querySelector('form');
const inputDeSenha = document.querySelector('#senha');
const inputDeSenha2 = document.querySelector('#repita-senha');

formulario.addEventListener('submit', function (event){
	if (inputDeSenha.value !== inputDeSenha2.value) {
		event.preventDefault();
	}
});