const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

// ejercicio

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// ahora sin else

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//Ahora como array

var suscrpripcion = ["Free", "Basic", "Expert", "ExpertPlus"];

switch (tipoDeSuscripcion) {
  case suscrpripcion[0]:
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case suscrpripcion[1]:
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case suscrpripcion[2]:
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case suscrpripcion[3]:
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
    break;
  default:
    console.log("Parece que no tienes ninguna suscripcion");
    break;
}

// ciclos

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

var i = 0;

while (i <= 5) {
  console.log("El valor de i es: " + i);
  i++;
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

var i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

//Preguntar al usuario

var respuestaUsuario = prompt("Cual es el resultado de 2 +2?");

if (respuestaUsuario == 4) {
  alert("Respuesta correcta");
} else {
  alert("La respuesta es incorrecta, puedes intentar de nuevo");
}

//arrays

var soyUnArray;

function elPrimojenito(elArray) {
  console.log(elArray[0]);
}

soyUnArray = ["Hola", "Adios"];

elPrimojenito(soyUnArray);

//todo el array

var soyUnArray;

function elPrimojenito(elArray) {
  for (let index = 0; index < elArray.length; index++) {
    console.log(elArray[index]);
  }
}

soyUnArray = ["Hola", "Adios", "hello", "hi", "bye bye"];

elPrimojenito(soyUnArray);
