console.log("Hola mundo");

var saludar = function (p){
  p = p.toLowerCase();
  if (p == "dia"){
    console.log("hola es de dia");
  } else if (p == "noche"){
    console.log("hola es de noche");
  } else {
    console.log("Hola que hace");
  }
};
saludar("noche");

var suerte = function(number){
  if (number === 7) {
    console.log("Buena suerte");
  } else if (number === "13"){
    console.log("Sentido pesame");
}
};
suerte(13);

var numero = 1;
while (numero <= 10){
  console.log(numero);
  numero++;
}
var casa = { altura : 100, ancho : 100 };
var casota = Object.create(casa);
casota.ventanas = 100;
for (var prop in casota) {
  console.log(prop + ": " + casota[prop]);
}

var arreglo = ["a", 5, true, "abc"];
for (var el in arreglo) {
  console.log(arreglo[el]);
}

var entrada = prompt("mensaje");
console.log("Hola mi perro " + entrada);
