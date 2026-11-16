let edadActual = 16;
let edadMaxima = 85;
let snack = "papas fritas";
let snacksPorDia = 2;
let precioPorSnack = 1500;

// Calculamos los snacks que quedan
let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;

// Calculamos el gasto total
let gastoTotal = snacksRestantes * precioPorSnack;

// Mostramos los resultados
alert("Necesitarás " + snacksRestantes + " de " + snack + " para que te alcancen hasta los " + edadMaxima + " años.");

alert("Gastarás $" + gastoTotal + " en total durante el resto de tu vida.");