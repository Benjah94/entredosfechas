let key = 'b0guUnf4BeGhlql7UYesZsz739sYAFvYIyEIbXge'
let botonFecha = document.querySelector("#botonFecha");
let imagenFecha = document.querySelector("#imagenFecha");
let fecha1 = document.querySelector("#fecha1");
let fecha2 = document.querySelector("#fecha2");
let titulo = document.querySelector("#titulo");


botonFecha.onclick = function (){
    console.log(fecha1)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${fecha1.value}&end_date=${fecha2.value}`)


.then(res => res.json())
.then(fotoFecha => (
    imagenFecha.src = fotoFecha[0].hdurl
))
.then(fotoFecha => (
    titulo.innerHTML = fotoFecha[0].titulo
))
for (let i = 0; i < fotoFecha.length; i++) {
        imagenSeleccionada = fotoFecha[i]; 
    }
}
