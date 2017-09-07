/*
· Crea una clase con 3 propiedades cualquiera con el tipo que quieras
· Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.

· Crea una clase con el nombre "Matematicas" con una función "suma"y un constructor con dos parámetros de tipo numérico cada uno. 
· Crea un objeto de tipo "Matematicas" y muestra por consola el resultado de la llamada a la construcción del objeto y de la función suma.

· Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". Añade una función "nombreCompleto" que combine el 
nombre y los apellidos.
· Crea un objeto de la clase "Persona", setea los atributos y muestra por consola la llamada a la función "nombreCompleto".

*/
// Vamos!
console.log("Vamos!");

class Ejercicio {
    private tipo: string = "Videojuego";
    private nombre: string = "Zelda";
    private antiguedad: number = 5;
}

console.log(Ejercicio);

class Matematicas{

    constructor(public a:number, public b:number){
        this.a=a;
        this.b=b;
    }

    suma() {
        return this.a+this.b;
    }

}
let sams:Matematicas = new Matematicas(5,10);

console.log(sams.suma());

/*
Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". Añade una función "nombreCompleto" que combine el 
nombre y los apellidos.
· Crea un objeto de la clase "Persona", setea los atributos y muestra por consola la llamada a la función "nombreCompleto".
*/

class Persona{
    constructor(public nombre: string, public apellidos:string, public email:string){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
    }

    nombreCompleto(){
        return `Nombre Completo: ${this.nombre} ${this.apellidos}`;
    }

}

let person:Persona = new Persona("Dariana","Pérez Albarran","dari_p@msn.com");

console.log(person.nombreCompleto());