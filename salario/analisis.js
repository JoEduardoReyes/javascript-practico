// helpers

function esPar(numerito) {
  return numerito % 2 === 0;
}

// Variables

const salariosGt = guatemala.map(function (personita) {
  return personita.salary;
});

const salariosGtSorted = salariosGt.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

// Mediana general

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1],
      personitaMitad2 = lista[mitad];
    const mediana = (personitaMitad1 + personitaMitad2) / 2;
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

const medianaGeneralGt = medianaSalarios(salariosGtSorted);

// mediana del top 10%
const spliceStart = (salariosGtSorted.length * 90) / 100;
const spliceCount = salariosGtSorted.length - spliceStart;

const salariosGtTop10 = salariosGtSorted.splice(spliceStart, spliceCount);

const medianaGtTop10 = medianaSalarios(salariosGtTop10);

console.log({
  medianaGeneralGt,
  medianaGtTop10,
});
