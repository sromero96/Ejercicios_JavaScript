function tiendaDulces(){

    let barraDulce = 450;
    let barraDescuento = (450 * 0.50);
    let cantidad = document.getElementById("noSondelDia").value;
    let ventaTotal = (cantidad * barraDescuento);

        console.log('El precio de la barra por no ser del dia es:' + " " + barraDulce);
        console.log('El Descuento de la barra es de:' + " " + barraDescuento);   
        console.log('El Precio total de la venta es:' + " " + (ventaTotal));
        
}
