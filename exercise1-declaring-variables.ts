/*
· Crear las variables “variableA”, “variableB”, y “variableC” de tipo number. 
   Inicialízalas con valores por defecto, como por ejemplo 2, 3 y 4.
· Crea una variable "inferred", es decir, que no tiene tipo. Con un valor por defecto que podría ser 5.
· Crea otra variable cuyo tipo es definido pero no se inicializa a ningún valor.
· Muestra el contenido de las variables por consola.

*/
// Vamos!
console.log("Vamos!");
//Variables
let variableA: number =2;
let variableB: number=3;
let variableC: number=4;
//Inferred
let variable2: any = 5;
//Sin Valor
let variable3: string;

console.log(`Variebles: A ${variableA}, B ${variableB}, C ${variableC}`);
console.log("Inferred: "+variable2);
console.log("Sin Valor: "+variable3);
