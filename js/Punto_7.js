function procesoFrutas(){

    var frutasTotal = [
        {nombre:'papaya', Precio: 1800},
        {nombre:'manzana', Precio: 3200},
        {nombre:'pera', Precio: 1200},
        {nombre:'melocoton', Precio: 650}
        ];
        var frutaDisponible=document.getElementById("fruta").value;
        var kgsDisponible=document.getElementById("kgs").value;
        var total = 0;

        for (let i = 0; i < frutasTotal.length; i++){
            if (frutaDisponible == frutasTotal[i].nombre){
                total = (frutasTotal[i].Precio * kgsDisponible);}
            }

            if(total == 0 ){
                    console.log("ESA FRUTA NO ESTA DISPONIBLE")}
                else{
                    console.log("El total es:" + total);
                }
}
