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