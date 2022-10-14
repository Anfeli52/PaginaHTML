function cuadrado() {
    var numero = parseInt(document.getElementById("numCuadrado").value);
    var resultado = numero * numero;
    if (numero > 0) {
        swal("Potenciación", "El cuadrado de " + numero + " es igual a : " + resultado, "success");
    } else {
        if (numero = "" || numero != 0) {
            swal("¡¡ERROR!!", "No se permiten espacios vacios", "error");
        } else {
            if (numero == 0) {
                swal("¡¡ERROR!!", "No se puede potenciar 0", "warning");
            }
        }
    }
}
function suma() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    swal("Suma", "La Suma es: " + resultado, "success");
}
function resta() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 - num2;
    swal("Resta", "La Resta es: " + resultado, "success");
}
function multiplicacion() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 * num2;
    swal("Multiplicación", "La Multiplicación es: " + resultado, "success");
}
function division() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 / num2;
    if (num2 == 0) {
        swal("¡¡ERROR!!", "No se puede dividir por 0", "error");
    } else {
        swal("División", "La División es: " + resultado, "success");
    }
}
function pesoDolar() {
    var num1 = parseInt(document.getElementById("pesos").value);
    var resultado = num1 * 0.00025;
    if (num1 > 0) {
        swal("Pesos a Dolares", "$" + num1 + " pesos, equivalen a: " + resultado + " dolares", "success");
    } else {
        if (num1 = "" || num1 != 0) {
            swal("¡¡ERROR!!", "No se permiten espacios vacios", "error");
        } else {
            if (num1 == 0) {
                swal("¡¡ERROR!!", "Ingrese un número distinto de 0", "warning");
            }
        }
    }
}
function pesoEuro() {
    var num1 = parseInt(document.getElementById("pesos").value);
    var resultado = num1 * 0.00024;
    if (num1 > 0) {
        swal("Pesos a Euros", "$" + num1 + " pesos, equivalen a: " + resultado + " euros", "success");
    } else {
        if (num1 = "" || num1 != 0) {
            swal("¡¡ERROR!!", "No se permiten espacios vacios", "error");
        } else {
            if (num1 == 0) {
                swal("¡¡ERROR!!", "Ingrese un número distinto de 0", "warning");
            }
        }
    }
}
function gradosFahrenheit() {
    var centigrado = parseInt(document.getElementById("fahrenheit").value);
    var resultado = (centigrado * 9 / 5) + 32;
    if (centigrado >= 0) {
        swal("Grados Centígrados a Fahrenheit", +centigrado + "°C equivalen a: " + resultado + "°F (Fahrenheit)", "success");
    } else {
        if (centigrado = "" || centigrado != 0) {
            swal("¡¡ERROR!!", "No se permiten espacios vacios", "error");
        }
    }
}
/*function registro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const edad = document.getElementById("edad");

    const calcularEdad = (fechaNacimiento) => {
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());

        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad = edad - 1;
        } else if (mesActual == mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad = edad - 1;
            }
        }
        return edad;
    };
    swal("Registro", `La edad es: ${calcularEdad(this.value)}`, "success");
}
*/

function registro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var categoria = document.getElementById("categoria").value;
    var horas = parseInt(document.getElementById("horasLaboradas").value);
    var salario = 0;
    switch (categoria) {
        case "1":
            salario = horas * 50000;
            break;
        case "2":
            salario = horas * 42000;
            break;
        default:
            salario = horas * 35000;
            break;
    }
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaActual = new Date();
    var anoActual = parseInt(fechaActual.getFullYear());
    var mesActual = parseInt(fechaActual.getMonth()) + 1;
    var diaActual = parseInt(fechaActual.getDate());

    var anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    var mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    var diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad = edad - 1;
    } else if (mesActual == mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad = edad - 1;
        }
    }
    swal("Registro", "Nombre Completo: " + nombre + " " + apellido
        + "\n\nEdad: " + edad
        + "\n\nSalario: " + salario, "success");
}

function electrodomesticos() {
    var TV = document.getElementById("check1");
    var Computador = document.getElementById("check2");
    var Celular = document.getElementById("check3");
    var producto = "";

    if (TV.checked && Computador.checked && Celular.checked) {
        producto = "TV"
            + "\nComputador"
            + "\nCelular";
    } else if (TV.checked && Computador.checked && Celular.checked == false) {
        producto = "TV"
            + "\nComputador";
    } else if (TV.checked == false && Computador.checked && Celular.checked == false) {
        producto = "Computador";
    } else if (TV.checked == false && Computador.checked == false && Celular.checked) {
        producto = "Celular";
    } else if (TV.checked && Computador.checked == false && Celular.checked == false) {
        producto = "TV";
    } else if (TV.checked && Computador.checked == false && Celular.checked) {
        producto = "TV"
            + "\nCelular";
    } else if (TV.checked == false && Computador.checked && Celular.checked) {
        producto = "Computador"
            + "\nCelular";
    }
    if (producto == "") {
        swal("Anfeli's Corp", "No se ha seleccioando nada aún", "error");
    } else {
        swal("Anfeli's Corp", producto, "success");
    }
}
function generos(){
    var female = document.getElementById("femenino");
    var male = document.getElementById("masculino");
    var indefinned = document.getElementById("indefinido");
    var other = document.getElementById("otro");
    var mostrarResultado = "";

    if(female.checked){
        mostrarResultado="Femenino";
    }else if(male.checked){
        mostrarResultado="Masculino";
    }else if(indefinned.checked){
        mostrarResultado="Indefinido";
    }else{
        mostrarResultado="Otro";
    }
    if(female.checked==false && male.checked==false && indefinned.checked==false && other.checked==false){
        swal("Genero", "No se ha seleccionado nada aún", "error");
    }else{
        swal("Genero", "Genero: "+mostrarResultado, "success");
    }
}