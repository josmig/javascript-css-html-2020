//POO
/**
 * Clases  -> Modelo a seguir
 * Objetos -> Es una instancia de una clase
 *  Atributos : Caracteristicas o propiedades del objeto(son variables dentro de un objeto)
 *  Metodos : Metodos son las acciones que un objeto puede realizar
 *
 * Es un mecanismo por el cual un objeto va heredar gracias al objeto Padre , atributos y metodos.
 * */

/**const animal = {
    nombre : "Mafi",
    sonar(){
        console.log("Hago sonidos por que estoy vivo!");
    }
}
const animal1 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago otro sonido");
    }
}
console.log(animal);
console.log(animal1);
 */

/*Funcion constructora - metodo*/
/* function Animal(nombre,genero){
    //this dentro de una funcion hace referencia a los atributos
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //cuando tengamos un objeto dentro de un constructor tiene que llevar la palabra reservada this,
    // muy aparte no se puede usar los arrow functions  si o los normal
    //metodos
    this.sonar= function(){
    console.log('Hago sonidos porque estoy vivo!!');   
    }
    this.saludar = function(){
        console.log('Hola desde el metodo constructor');
    }
} */

function Animal(nombre,genero){
    this.nombre = nombre;
    this.genero= genero;
}

/**Es recomendable poner los metodos como prototipo del objeto para mejor rendimiento */
Animal.prototype.sonido= function(){
    console.log('Hago sonidos porque estoy vivo!!');
}

Animal.prototype.saludar = function(){
    console.log(`Hola  me llamo ${this.nombre}`);
}

//Herencia Prototipica
function Perro(nombre,genero,tamanio){
    //Manda a  llamar al constructor padre super();
    this.super = Animal;
    this.super(nombre , genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de aniaml    
Perro.prototype = new Animal();
Perro.prototype.constructor= Perro;

//Sobre escritura de métodos del Padre en un hijo
Perro.prototype.sonido= function(){
    console.log('Soy un perro y mi sonido es un ladrido');
}
Perro.prototype.ladrar = function(){
    console.log('Guuuaauu Guauaauu');
}


const perro = new Perro('Mafi','Hembra','Mediano'),
    perro1 = new Animal('Boby','Macho');


console.log(perro,perro1);
perro.sonido();
perro.saludar();


