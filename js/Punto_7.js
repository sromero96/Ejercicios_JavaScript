function procesoFrutas(){

    var frutasTotal = [
        {nombre:'Papaya', Precio: 1800},
        {nombre:'Manzana', Precio: 3200},
        {nombre:'Pera', Precio: 1200},
        {nombre:'Melocoton', Precio: 650}
        ];
        var frutaDisponible=document.getElementById("fruta").value;
        var kgsDisponible=document.getElementById("Kgs").value;
        //var frutasNuevas =[disponible];

        for (let i = 0; i < frutasTotal.length; i++)
            if (frutaDisponible === frutasTotal[i]){
            var Total = Precio * kgsDisponible}
                else if(frutaDisponible != frutasTotal[i] ){
                    console.log("ESA FRUTA NO ESTA DISPONIBLE")
                }
            

        console.log(Total);

}