// const lista = [100, 200, 300, 600, 4000, 800, 8, 56];

function calCularMediana(lista) {
  let mediana;
  const mitadLista = parseInt(lista.length / 2);

  lista.sort(function (a, b) {
    return a - b;
  });

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1],
      elemento2 = lista[mitadLista];
    mediana = (elemento1 + elemento2) / 2;
  } else {
    mediana = lista[mitadLista];
  }
  console.log(`La mediana de tu lista de numeros es ${mediana}`);
}
