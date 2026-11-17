let edadActual = Number(prompt("¿Cuántos años tenés?"));
let edadMaxima = Number(prompt("¿Hasta qué edad estimás que vas a vivir?"));
let snack = prompt("¿Cuál es tu snack favorito?");
let snacksPorDia = Number(prompt("¿Cuántos snacks comés por día?"));

let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " de " + snack + " para que
te alcancen hasta los " + edadMaxima + " años.");

let precioPorSnack = Number(prompt("¿Cuánto cuesta cada snack?"));

let gastoTotal = snacksRestantes * precioPorSnack;

alert("Gastarás $" + gastoTotal + " en snacks durante el resto de tu vida.");
