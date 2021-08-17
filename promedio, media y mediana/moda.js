const lista1 = [1, 3, 2, 1, 4, 15, 12, 1, 4, 31, 21, 2, 3, 1, 3, 2, 2, 2];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];

console.log(`La moda de tu lista es ${moda[0]}`);
