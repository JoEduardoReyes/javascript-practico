const salariosGt = guatemala.map(function (personita) {
  return personita.salary;
});

const salariosGtSorted = salariosGt.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function esPar(numerito) {
  return numerito % 2 === 0;
}

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

console.log(medianaSalarios(salariosGtSorted));
