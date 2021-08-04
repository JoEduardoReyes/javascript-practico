//codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El areas del cuadrado es " + areaCuadrado + "cm");
console.groupEnd();

//codigo del triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo miden " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);

const alturaTriangulo = 5.5;

console.log("La altura del triangulo es de " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.groupEnd();

//codigo del cirsulo
console.group("Circulos");

//radio

const radioCirculo = 4;

console.log("El radio del circulo es " + radioCirculo + "cm");

//diametro

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del circulo es " + diametroCirculo + "cm");

//pi

const PI = Math.PI;

console.log("El valor de PI es " + PI);

// circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log("El Radio del circulo es " + perimetroTriangulo + "cm");

//areas

const areaCirculo = radioCirculo * radioCirculo * PI;

console.log("El areas del circulko es " + areaCirculo + "cm");

console.groupEnd();
