/*Creación de 3 constantes para capturar la navegación y las respectivas clases de abrir y cerrar 
que son las que se encargaran de crear el movimiento.*/
const navegar = document.querySelector("nav");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");

/*Una vez se seleccione el enlace dentro de la clase abrir, se bloqueará la función del enlace de navegar
y se le añadirá la opción desplegar creada previamente en css con las características necesarias. Este 
menu aparecera desde la parte derecha de la página con una transición.*/
abrir.addEventListener("click",function(evento){
	evento.preventDefault();
	navegar.classList.add("desplegar");
});

/*Aquí ocurre lo mismo pero de forma contrario, cuando esté la clase abrir activa, podrás seleccionar el enlace 
dentro de la clase cerrar para que se remueva la clase que se ha añadido antes. Tambien se bloquea el enlace 
para que no haya navegación*/
cerrar.addEventListener("click",function(evento){
	evento.preventDefault();
	navegar.classList.remove("desplegar");
});

