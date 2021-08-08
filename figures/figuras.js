//codigo del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//codigo del cirsulo

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

// funciones de HTML

function calcularPerimetroCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;
  let area = areaCuadrado(value);
  alert(area);
}

function calcularDiametroCirculo() {
  let input = document.getElementById("inputCircle");
  let value = input.value;
  let diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularAreaCirculo() {
  let input = document.getElementById("inputCircle");
  let value = input.value;
  let diametro = areaCirculo(value);
  alert((Math.round(diametro * 10) / 10).toFixed(2));
}

function calcularPerimetroCirculo() {
  let input = document.getElementById("inputCircle");
  let value = input.value;
  let perimetro = perimetroCirculo(value);
  alert((Math.round(perimetro * 10) / 10).toFixed(2));
}

function calcularPerimetroTriangulo() {
  let inputTriangulo1 = document.getElementById("inputTriangulo1"),
    lado1 = Number(inputTriangulo1.value);
  let inputTriangulo2 = document.getElementById("inputTriangulo2"),
    lado2 = Number(inputTriangulo2.value);
  let inputTriangulo3 = document.getElementById("inputTriangulo3"),
    base = Number(inputTriangulo3.value);
  let perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAlturaTriangulo() {
  let inputTriangulo1 = document.getElementById("inputTriangulo1"),
    lado1 = Number(inputTriangulo1.value);
  let inputTriangulo2 = document.getElementById("inputTriangulo2"),
    lado2 = Number(inputTriangulo2.value);
  let inputTriangulo3 = document.getElementById("inputTriangulo3"),
    base = Number(inputTriangulo3.value);
  let baseParaLaAltura = base / 2;
  if (lado1 === lado2) {
    altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(base / 2, 2));
    console.log(altura);
  } else {
    alert("no soy un triangulo isoceles");
  }
}
