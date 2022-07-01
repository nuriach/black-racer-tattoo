/*Creamos dos constantes donde guardamos los dos li que representan las opciones y por otro lado ambos paneles,
estén visibles o no.*/

const tabs = document.querySelectorAll(".tabs li");
const panel = document.querySelectorAll(".panel");

/*Primero crearemos una función con click, bloqueando en enlace para que no navegue y crearemos un bucle for
para remover la clase activo y en caso contrario, que se añada. Esto ha´ra que cuando la clase activo se añada,
el li obtendrá las características asignadas en el css y su correspondiente panel aparecerá.*/
tabs[0].addEventListener("click",function(enlace){
	enlace.preventDefault();

	for(var i = 0; i < tabs.length; i++){
		tabs[i].classList.remove("activo");
		panel[i].classList.remove("activo");
	}

	tabs[0].classList.add("activo");
	panel[0].classList.add("activo");

});

/*Esto mismo ocurre con esta opción pero correspondiente al segundo enlace.*/
tabs[1].addEventListener("click",function(enlace){
	enlace.preventDefault();

	for(var i = 0; i < tabs.length; i++){
		tabs[i].classList.remove("activo");
		panel[i].classList.remove("activo");
	}

	tabs[1].classList.add("activo");
	panel[1].classList.add("activo");

});

