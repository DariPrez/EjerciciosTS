/*
Diferencias entre los bucles "for in" y "for .. of"

· Create a list named “items” and add random values to it then output “items” to the console. 
· Create a “for…in” loop over the “items” list and ouput the results to the console. 
· Create a “for…of” loop over the “items” list and output the results to the console.

NOTE: Notice “for…in” only works against the index of the list while “for…of” works against the value of each item in the list.
*/
// Vamos!
console.log("Vamos!");

let items: Array<number> = [1, 5, 3];
console.log(items);

for (var key in items) {
    if (items.hasOwnProperty(key)) {
        var element = items[key];
        console.log(`Posición: ${key}`);
    }
}

for (var key2 of items) {
    console.log(`Valores: ${key2}`);
}