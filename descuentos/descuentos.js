const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
  return precioConDescuento;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajeDelPrecioConDescuento,
//   precioConDescuento,
// });
