
    function calcularMedia() {
        var arregloNumeros = [];
        var cadenaNumeros = document.getElementById("numeros").value;
        arregloNumeros = cadenaNumeros.split(",");
        var arregloNumerico = [];
        var sumaNumeros = 0;
        var media = 0;
        
        for (var i = 0; i < arregloNumeros.length; i++) {
            var unidadNumero = parseInt(arregloNumeros[i], 10);
            arregloNumerico.push(unidadNumero);
        }

        for (var i = 0; i < arregloNumerico.length; i++) {
            sumaNumeros = sumaNumeros + arregloNumerico[i];
        }

        
        console.log("La Suma de los numeros es:" + " " +  sumaNumeros);
    }
