/*Capturamos las dos constantes, una con el simbolo asociado al enlace de las peguntas y otro la respuesta*/
const botones = document.querySelectorAll(".pregunta a");
const respuesta = document.querySelectorAll(".respuesta");

/*Creamos un bucle ForEach para qeu se cree una función para cada uno de los elementos. Tras crear una función 
con el botón y el indice, creamos el bloqueo del enlace para que no navege, seguido de un condicional de If/Else.
Aquí se preguntará a la respuesta que si contiene la clase desplegado, se le quitará para que se oculte, y de
forma contraria, si tiene dicha clase, se le añadirá para que cree el efecto de desplegado.*/
botones.forEach(function(boton,indice){
	boton.addEventListener("click",function(evento){
		evento.preventDefault();
		
		if(respuesta[indice].classList.contains("desplegado")){
			respuesta[indice].classList.remove("desplegado");
		}else{
			respuesta[indice].classList.add("desplegado");
		}
	});
});