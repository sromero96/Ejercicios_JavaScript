
function mostrar_salario(){

    let horas=document.getElementById("horas").value;
    let costo=document.getElementById("costo").value;
    let Salario = (horas * costo)

    console.log("Su Salario es: " + Salario);  
}

