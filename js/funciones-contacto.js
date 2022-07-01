/*Capturamos como constante los li que representan las opciones a elegir.*/

const opcion = document.querySelectorAll(".opciones li");

/*Esto funciona de la misma forma que el js explicado en la página de nuestro equipo con los tabs. Se crea un 
bucle for y se añaden o se ocultan clases, que en este caso lo único que cambia a nivel visual es los colores 
de la opcion seleccionada.*/
opcion[0].addEventListener("click",function(enlace){
	enlace.preventDefault();

	for(var i = 0; i < opcion.length; i++){
		opcion[i].classList.remove("activo");
	}
	opcion[0].classList.add("activo");

});

opcion[1].addEventListener("click",function(enlace){
	enlace.preventDefault();

	for(var i = 0; i < opcion.length; i++){
		opcion[i].classList.remove("activo");
	}
	opcion[1].classList.add("activo");
});