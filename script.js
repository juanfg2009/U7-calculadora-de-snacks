
const pesos = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
});

const numeros = new Intl.NumberFormat("es-AR");

function leer(id) {
    return document.getElementById(id).value;
}


// CALCULADORA DE SNACKS

function calcularSnacks() {

    let edadActual = Number(leer("edadActual"));
    let edadMaxima = Number(leer("edadMaxima"));

    let snackFavorito = leer("snackFavorito").trim() || "snacks";

    let snacksPorDia = Number(leer("snacksPorDia"));
    let precioPorUnidad = Number(leer("precioPorUnidad"));

    let aniosRestantes = Math.max(edadMaxima - edadActual, 0);

    let snacksRestantes = Math.round(aniosRestantes * 365 * snacksPorDia);

    let gastoTotal = snacksRestantes * precioPorUnidad;

    document.getElementById("cantidadFinal").textContent =
        numeros.format(snacksRestantes);

    document.getElementById("nombreSnack").textContent =
        snackFavorito;

    document.getElementById("gastoTotal").textContent =
        pesos.format(gastoTotal);

    document.getElementById("fraseSnacks").textContent =
        "Necesitarás " + numeros.format(snacksRestantes) +
        " de " + snackFavorito + " durante los próximos " +
        aniosRestantes + " años.";

}


// BOTON DE RESULTADO DE SNACKS

function ejercicio1() {

    let edadActual = Number(leer("edadActual"));
    let edadMaxima = Number(leer("edadMaxima"));

    let snackFavorito = leer("snackFavorito").trim() || "snacks";

    let snacksPorDia = Number(leer("snacksPorDia"));
    let precioPorUnidad = Number(leer("precioPorUnidad"));

    let snacksRestantes = Math.round(
        Math.max(edadMaxima - edadActual, 0) * 365 * snacksPorDia
    );

    let gastoTotal = snacksRestantes * precioPorUnidad;

    alert(
        "Necesitarás " + numeros.format(snacksRestantes) +
        " de " + snackFavorito + " para que te alcancen hasta los " +
        edadMaxima + " años."
    );

    alert(
        "Vas a gastar " + pesos.format(gastoTotal) +
        " en " + snackFavorito + " a lo largo de tu vida."
    );

    console.log("Gasto total: " + gastoTotal);

}


// CALCULADORA DE VIAJES

function calcularViaje() {

    let diasDeViaje = Number(leer("diasDeViaje"));

    let presupuestoMaximo = Number(leer("presupuestoMaximo"));

    let comidasTotales = Number(leer("comidasTotales"));

    let dineroPorComida = comidasTotales > 0
        ? presupuestoMaximo / comidasTotales
        : 0;

    document.getElementById("tDias").textContent =
        diasDeViaje;

    document.getElementById("tPresupuesto").textContent =
        pesos.format(presupuestoMaximo);

    document.getElementById("tComidas").textContent =
        comidasTotales;

    document.getElementById("tPorComida").textContent =
        pesos.format(dineroPorComida);

    document.getElementById("fraseViaje").textContent =
        "Podés gastar " + pesos.format(dineroPorComida) +
        " en cada comida durante tus " + diasDeViaje +
        " días de viaje.";

}


// BOTON DE RESULTADO DE VIAJE

function ejercicio2() {

    let diasDeViaje = Number(leer("diasDeViaje"));

    let presupuestoMaximo = Number(leer("presupuestoMaximo"));

    let comidasTotales = Number(leer("comidasTotales"));

    let dineroPorComida = comidasTotales > 0
        ? presupuestoMaximo / comidasTotales
        : 0;

    alert(
        "Podés gastar " + pesos.format(dineroPorComida) +
        " en cada comida para que te alcance la plata durante los " +
        diasDeViaje + " días de viaje."
    );

}


// EVENTOS

document.getElementById("formSnacks").addEventListener("input", calcularSnacks);

document.getElementById("formViaje").addEventListener("input", calcularViaje);

document.getElementById("alertSnacks").addEventListener("click", ejercicio1);

document.getElementById("alertViaje").addEventListener("click", ejercicio2);


// RESULTADOS INICIALES

calcularSnacks();

calcularViaje();
