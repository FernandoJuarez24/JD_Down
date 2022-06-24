/*Boton Abajo*/
let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 900;
  document.documentElement.scrollTop = 900;
});