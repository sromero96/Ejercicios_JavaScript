
function calcular_Imc(){

    let Peso=document.getElementById("Peso").value;
    let Altura=document.getElementById("Altura").value;

    let metro2 = Altura * Altura;
    var imc = (Peso / metro2);
    imc = imc.toFixed(2);

    console.log('Tu Indice de Masa Corporal es' + " " + imc);
}

