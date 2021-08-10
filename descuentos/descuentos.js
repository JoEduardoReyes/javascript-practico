const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice"),
    priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("InputCoupon"),
    couponValue = inputCoupon.value;

  let descuento;

  switch (couponValue) {
    case "JuanDC_es_Batman":
      descuento = 15;
      break;
    case "pero_no_le_digas_a_nadie":
      descuento = 30;
      break;
    case "es_un_secreto":
      descuento = 25;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("resultPrice");
  resultP.innerText = `El presio con descuento son: $${precioConDescuento} dolares`;
}
