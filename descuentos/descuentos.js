function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice"),
    priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount"),
    discountValue = inputDiscount.value;
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = `El presio con descuento son: $${precioConDescuento} dolares`;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajeDelPrecioConDescuento,
//   precioConDescuento,
// });
