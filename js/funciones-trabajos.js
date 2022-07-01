/*Creas dos constantes, una para capturar la clase del botón que hara salir las imagenes y la clase de la galería
que esta oculta en el css*/
const galeriaOculta = document.querySelector(".galeria-oculta");
const boton = document.querySelector(".boton-imagenes");

/*Una vez se seleccione el botón de "cargar más", el cual se ha guardado en la cosntante, se bloqueará su 
enlace y no podrá navegar. Una vez se haga click se le cambiará la función display al botón para que 
desaparezca y a la clase galeria-oculta se quitará para que sea visible la otra galería.*/
boton.addEventListener("click",function(evento){
	evento.preventDefault();
	boton.style.display = "none";
	galeriaOculta.classList.remove("galeria-oculta");
});