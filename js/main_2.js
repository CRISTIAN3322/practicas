console.log(" ************************************ Arreglos ************************************ ");
// ? Arreglos
console.log(" **** [] - Declaración de arreglo **** ");

const arr = []; // Arreglo vacio
const arr1 = [1, true, "hola", [1, 2, 3, 5]];
console.log(arr);
console.log(arr1);
console.log(" **** [].legth - Devuelve cantidad de elementos del arreglo **** ");
console.log(arr1.length);
console.log(" **** [posicion] - las posicion siempre comienza en 0 **** ");
console.log(arr1[2]);
console.log(" **** [posicion][posicion del arreglo interno] **** ");
console.log([arr1[3][1]]);
console.log(" **** variable = Array.of() - otra forma de cvrear arreglo **** ");
const arr2 = Array.of(1, 2, 3);
console.log(arr2);
console.log(" ****  varible = Array(cantidad de posiciones).fill() - propiedad que permite llenar un array por defecto **** ");
const arr3 = Array(100).fill(false);
console.log(arr3);
console.log(" **** .push() - Agrega un nuevo elemento al objeto al final **** ");
const colores = ["Rojo", "Amarrillo", "Azul"];
console.log(`sin .push - `, colores);
colores.push("Verde");
console.log(`con .push - `, colores);
console.log(" **** .pop() - Elimina el ultimo elemento al array **** ");
colores.pop();
console.log(`.pop`, colores);
console.log(" **** .forEach - recorre el arreglo y lo llena.**** ");
// e - elemento
// i - index o indice
colores.forEach(function(e, i) {
    console.log(`<li class="${i}"> ${e} </li>`);
});
console.log(" ************************************ Objetos ************************************ ");
// ? Objetos
const datos1 = {
    nombre: `cristian`,
    apellido: `poveda`,
    edad: 34,
    pasatiempos: [`jugar`, `corre`],
    contacto: {
        correo: "ccpoveda@gmail.com",
        instagram: "ccpoveda3322"
    },
    saludar: function() {
        console.log(`hola`);
    },
    decirMinombre: function() {
        console.log(`Hola mi Nombres es ${this.nombre.toUpperCase()} ${this.apellido}`)
    }
}
console.log(datos1);
console.log(datos1["pasatiempos"]);
console.log(datos1.edad);
console.log(datos1.contacto.correo);
datos1.saludar();
datos1.decirMinombre();
console.log(" **** Object.keys(objeto) - crea un arreglo con las llaves del objeto **** ");
console.log(Object.keys(datos1));
console.log(" **** Object.values(objeto) - crea un arreglo con los valores del objeto **** ");
console.log(Object.values(datos1));
console.log(" **** objeto.hasOwnProperty(propiedad) - devuelve true o false si objeto tiene o no la propiedad **** ");
console.log(datos1.hasOwnProperty("nombre"));

console.log(" ************************************ Estructura de control ************************************ ");
console.log(" ========== if - else ========== ");
let edad = 25;
if(edad >= 17){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}
if(edad <= 17){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}
if(edad > 17){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}
if(edad < 17){
    console.log(`Eres mayor de edad`);
}else{
    console.log(`Eres menor de edad`);
}
console.log(" ========== if anidados ========== ");
let hora = 14;
if(hora >= 0 && hora <= 5){
    console.log(`Déjame dormir`);
}else if(hora >= 6 && hora <= 11){
    console.log(`Buenos dias`);
}else if(hora >= 12 && hora <= 18){
    console.log(`Buenos tardes`);
}else{
    console.log(`Buenos noches`);
}
console.log(" ========== operador ternario - (condicion) ? verdadero:falso Nota : solo ejecuta una linea de codigo ========== ");
let eresMayor = (edad >= 18) 
    ? `Eres mayor` 
    : `Eres menor`;
console.log(eresMayor);
console.log(" ************************************ switch - case ******************** ");
let dia = 8;
switch(dia){
    case 0:
        console.log(`domingo`);
        break;
    case 1:
        console.log(`lunes`);
        break;
    case 2:
        console.log(`martes`);
        break;
    case 3:
        console.log(`miercoles`);
        break;
    case 4:
        console.log(`jueves`);
        break;
    case 5:
        console.log(`viernes`);
        break;
    case 6:
        console.log(`sabado`);
        break;
    default:
        console.log(`No es un dia`);
        break;    
}
console.log(" ************************************ ciclos ************************************ ");