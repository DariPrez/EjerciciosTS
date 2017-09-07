/*
· Crear una función simple que dados dos atributos numéricos, los sume. Mostrar  el resultado de la llamada por consola.
· Crear una función "anónima" (var variable = function (parametros...) ) que sume dos números. Mostrar el resultado 
de la llamada por consola.
· Crear una función del tipo "arrow"que haga lo mismo que los dos puntos anteriores. Mostrar resultado por consola
var variable = (parametros): tipo => {
  return loquesea;
}

*/
// Vamos!
console.log("Vamos!");

function suma(a:number,b:number){
  return a+b;
}
console.log(suma(5,8));

var variable = function suma2(a:number,b:number){
  console.log(a+b);
}

variable(2,4);

var variable2 = (a,b): number => {
  return a+b;
}
console.log(variable2(1,2));

