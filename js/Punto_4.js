
    function calcularSuma() {
        var arregloNum1 = document.getElementById("num1").value;
        var arregloNum2 = document.getElementById("num2").value;
        var arregloNum3 = document.getElementById("num3").value;
        var arrayDatosString = [ arregloNum1, arregloNum2, arregloNum3]
        var arrayDatosNumber = [];
        var sumaNumeros = 0;
        
        for (let i = 0; i < arrayDatosString.length; i++) {
            arrayDatosNumber.push(parseInt(arrayDatosString[i],10));
            sumaNumeros = sumaNumeros += arrayDatosNumber[i];
        }
        
        console.log("La suma de los numeros es:" + " " + sumaNumeros);
    }
