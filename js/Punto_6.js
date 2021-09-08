

    
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
            sumaNumeros = sumaNumeros + arregloNumerico[i];
        }

        for (var i = 0; i < arregloNumerico.length; i++) {
            
        }

        
        console.log("La Suma de los numeros es:" + " " +  sumaNumeros);
    }
