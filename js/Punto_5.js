
function texto(fraseUser){
var respuesta = (fraseUser == fraseUser.split("").reverse().join(""));

document.getElementById("PalabraCompleta").innerHTML = respuesta;
 
console.log("Es un palindromo? " + respuesta);
}