
// FORMATO DE NUMEROS
const formato = new Intl.NumberFormat("es-AR");
const moneda = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
});


// FUNCION PARA OBTENER VALORES
function obtener(id) {
    return Number(document.getElementById(id).value) || 0;
}


// 1. CALCULADORA DE SNACKS

function calcularSnacks() {

    let edad = obtener("edadActual");
    let edadMaxima = obtener("edadMaxima");
    let snacksDia = obtener("snacksPorDia");
    let precio = obtener("precioPorUnidad");

    let snack = document.getElementById("snackFavorito").value;

    let anios = Math.max(edadMaxima - edad, 0);
    let cantidad = Math.round(anios * 365 * snacksDia);
    let gasto = cantidad * precio;

    document.getElementById("cantidadFinal").textContent =
        formato.format(cantidad);

    document.getElementById("nombreSnack").textContent =
        snack || "Snacks";

    document.getElementById("gastoTotal").textContent =
        moneda.format(gasto);

    document.getElementById("fraseSnacks").textContent =
        "Calculado para los próximos " + anios + " años.";

}


// 2. CALCULADORA DE VIAJE

function calcularViaje() {

    let dias = obtener("diasDeViaje");
    let presupuesto = obtener("presupuestoMaximo");
    let comidas = obtener("comidasTotales");

    let porComida = comidas > 0 ? presupuesto / comidas : 0;

    document.getElementById("tDias").textContent = dias;

    document.getElementById("tPresupuesto").textContent =
        moneda.format(presupuesto);

    document.getElementById("tComidas").textContent = comidas;

    document.getElementById("tPorComida").textContent =
        moneda.format(porComida);

    document.getElementById("fraseViaje").textContent =
        "Podés gastar " + moneda.format(porComida) +
        " por comida durante tu viaje.";

}


// 3. BOTONES

document.getElementById("alertSnacks").addEventListener("click", function() {

    calcularSnacks();

    alert("¡Vas a necesitar " +
        document.getElementById("cantidadFinal").textContent +
        " snacks!");

});


document.getElementById("alertViaje").addEventListener("click", function() {

    calcularViaje();

    alert("Tu presupuesto por comida es de " +
        document.getElementById("tPorComida").textContent);

});


// 4. ACTUALIZACION AUTOMATICA

document.querySelectorAll("#formSnacks input").forEach(function(input) {
    input.addEventListener("input", calcularSnacks);
});

document.querySelectorAll("#formViaje input").forEach(function(input) {
    input.addEventListener("input", calcularViaje);
});


// 5. CALCULOS INICIALES

calcularSnacks();
calcularViaje();
