const lista1 = [1, 3, 4, 5, 6];
var mediaGeo;

function calcularMediaGeo(lista) {
  let acumulado = 0;
  for (let index = 0; index < lista.length; index++) {
    acumulado = acumulado + lista[index];
  }
  mediaGeo = Math.pow(acumulado, 1 / lista.length);
  console.log(mediaGeo);
}

calcularMediaGeo(lista1);
