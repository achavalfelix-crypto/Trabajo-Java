console.log("Bienvenidos a la primera actividad");
console.log("Ahora vamos a comenzar con la primera actividad");


const botonSaludo = document.querySelector("#boton-saludo");
const mensajeSaludo = document.querySelector("#mensaje");
const botonTema = document.querySelector("boton-tema");


const miNombre = "Felix";
const miEdad = 19;


console.log("Resultado de la busqueda:");
console.log(mensajeSaludo);


botonSaludo.addEventListener("click", function () {
    console.log("Apretaste el boton");
    mensajeSaludo.innerText = "Hola" + miNombre;
});

botonTema.addEventListener("click", function () {
    console.log("Apretaste el boton tema");
    console.log(document.body.classList.add());
})
