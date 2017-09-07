/*
· Create an array named “list1” with the values 1, 2, 3. Send result to the console.
· Create an array named “list2” with values 1,2,3. This time use a generic array. Send result to the console.
· Create an array named “anyList” with values 1,true,”three”. This time use type any to create the array. Send result to the console.
· Create an array named “list3” of type “string” and set its length to 10. Send result to the console.
*/
// Vamos!
console.log("Vamos!");

let list1: Array<number> = [1, 2, 3];
console.log(`List1: ${list1}`);
let list2: Array<any> = [1, 2, 3];
console.log(`List2: ${list2}`);
let anyList: Array<any> = [1, true, "three"];
console.log(`anyList: ${anyList}`);
let list3: Array<string>= ["a","s","d","f","g","h","j","a","a","d"];
console.log(`List3: ${list3}`);
