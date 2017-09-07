/*
· Crear una función que acepte varios parámetros requeridos y que los muestre por consola utilizando
la anotación "interpolated". Por ejemplo:  console.log(`nombre: $(atributoNombre) edad: $(atributoEdad)`);

· Crear una función con un par de parámetros requeridos y un par de parámetros opcionales (?). Que los muestre por consola utilizando
la anotación "interpolated".
· Crear una función con un par de parámetros requeridos y un par de parámetros con valores por defecto. 
Que los muestre por consola utilizando
la anotación "interpolated".
*/
// Vamos!
console.log("Vamos!");

function parament(atributoNombre: string, atributoEdad: number) {
    console.log(`nombre: ${atributoNombre} edad: ${atributoEdad}`);
 }

 function parament2(atributoNombre: string, atributoEdad: number, estCiv?: string, apellido?: string) {
    console.log(`nombre: ${atributoNombre} apellido: ${apellido} edad: ${atributoEdad} Estado Civil: ${estCiv}`);
 }

 function parament3(atributoNombre: string, atributoEdad: number) {
    let estCiv = "Soltera";
    let apellido = "Perez";
    console.log(`nombre: ${atributoNombre} apellido: ${apellido} edad: ${atributoEdad} Estado Civil: ${estCiv}`);
 }


 let v1 = new parament("Maria",8);
 let v2 = new parament2("Maria",8,"Soltera");
 let v3 = new parament3("Maria",8);