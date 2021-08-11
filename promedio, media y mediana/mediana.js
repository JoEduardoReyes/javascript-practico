const lista = [100, 200, 300, 600, 400000, 800];

const mitadLista = parseInt(lista.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediaAritmetica(lista1) {
  const sumaLista = lista1.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista1.length;

  return promedioLista;
}

let mediana;

if (esPar(lista.length)) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];
  const promedioDeElementos = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioDeElementos;
} else {
  mediana = lista[mitadLista];
}
