// ? String : Cadenas de texto - Metodos y Propiedades
console.log(" ************************************ String ************************************ ");
// ! Propiedades String
// TODO: String.lenght --> Devuelve el número de carácteres de la variable de tipo string en cuestión.
console.log(" **** Metodo .lenght **** ");
let texto1 = `Hola`;
console.log(texto1.length);

// ! Metodos String
console.log(" **** Metodo .toLowerCase() - todo el texto en minusculas **** ");
let minusculas = "HOLA";
console.log(minusculas.toLowerCase());

console.log(" **** Metodo .toUpperCase() - todo el texto en mayusculas **** ");
let mayusculas = "hola";
console.log(minusculas.toUpperCase());

console.log(" **** Metodo .includes() - busca si incluye una palabra ****");
let lorem1 = `Lorem ipsum dolor sit amet`;
console.log(lorem1.includes(`amet`));
console.log(lorem1.includes(`jon`));

console.log(" **** Metodo .trim() - quita los espacios arrededor del texto ****");
let lorem2 = `   Lorem ipsum dolor sit amet   `;
console.log(lorem2);
console.log(lorem2.trim());
console.log(lorem2.trimStart()); // Sin espacios a la izquierda.
console.log(lorem2.trimEnd()); // Sin espacios a la derecha

console.log(" **** Metodo .split(separador) - covierte una cadena de texto en arreglo ****");
let lorem3 = `Lorem ipsum dolor sit amet`;
console.log(lorem3.split(" "));

console.log(" **** Metodo .charAt(posición) - devuelve el caracter que ocupa esa posición ****");
console.log("Manz".charAt(1)); // 'a'
console.log("Manz".charAt(0)); // 'M'
console.log("Manz".charAt(10)); // ''
console.log("Manz" [0]); // 'M'
console.log("Manz" [1]); // 'a'
console.log("Manz" [10]); // undefined

console.log(" **** Metodo .concat(string) - cancatena  ****");
console.log("Manz".concat("i", "to")); // 'Manzito'
console.log("Manz" + "i" + "to"); // 'Manzito'
console.log("Manz" + 4 + 5); // 'Manz45'
console.log(10 + 5 + 4 + 5); // 24

console.log(" **** Metodo .indexOf(str, from) - busqueda de caracteres desde el inicion o desde la posicion que indiquemos ****");
console.log("LenguajeJS, página de Javascript".indexOf("n")); // 2
console.log("LenguajeJS, página de Javascript".indexOf("n", 3)); // 16
console.log("LenguajeJS, página de Javascript".indexOf("n", 17)); // -1

console.log(" **** Metodo .lastIndexOf(str, from)  - busqueda de caracteres desde la ultima aparicion o desde la posicion que indiquemos ****");
console.log("LenguajeJS, página de Javascript".lastIndexOf("n")); // 16
console.log("LenguajeJS, página de Javascript".lastIndexOf("n", 3)); // 2

console.log(" **** Metodo .startsWith(s, from) - busqueda si el texto comienza con un caracter especifico devuelve true o falso ****");
console.log("Manz".startsWith("M")); // true ('Manz' empieza por 'M')
console.log("Manz".startsWith("a", 1)); // true ('anz' empieza por 'a')

console.log(" **** Metodo .endsWith() - busqueda si el texto finaliza con un caracter especifico devuelve true o falso ****");
console.log("Manz".endsWith("o")); // false ('Manz' no acaba en 'o')
console.log("Manz".endsWith("n", 3)); // true ('Man' acaba en 'n')

console.log(" **** Metodo .includes(string, from) - busqueda si el texto contiene un caracter especifico devuelve true o falso ****");
console.log("Manz".includes("an")); // true ('Manz' incluye 'an')
console.log("Manz".includes("M", 1)); // false ('anz' no incluye 'M')

console.log(" **** Metodo .search() - devuelve la posicion de un caracter ****");
// La expresión regular /o/g busca globalmente las "o" en el texto
console.log("Hola a todos".search(/o/g)); // 1, porque la primera "o" está en la posición 1

console.log(" **** Metodo .matches() - devuelve la posicion de un caracter en un array ****");
console.log("Hola a todos".match(/o/g)); // ['o', 'o', 'o'], las 3 "o" que encuentra)

console.log(" **** Metodo .repeat(n)  - Devuelve el texto de la variable repetido n veces. ****");
console.log("Na".repeat(5)); // 'NaNaNaNaNa')

console.log(" **** Metodo .replace(str, newstr) - Reemplaza Texto ****");
console.log("Amigo".replace("A", "Ene")); // 'Enemigo'
console.log("Dispara".replace("a", "i")); // 'Dispira' (sólo reemplaza la primera aparición)
console.log("Dispara".replace(/a/g, "i")); // 'Dispiri' (reemplaza todas las ocurrencias)

console.log(" **** Metodo .substring() o substr() - Extraer texto ****");
console.log("Submarino".substr(3)); // 'marino' (desde el 3 en adelante)
console.log("Submarino".substr(3, 1)); // 'm'      (desde el 3, hasta el 3+1)
console.log("Submarino".substring(3)); // 'marino' (desde el 3 en adelante)
console.log("Submarino".substring(3, 6)); // 'mar'    (desde el 3, hasta el 6)

console.log(" **** Metodo .padStart(len, str) o padEnd(len, str) - Rellenar con texto ****");
console.log("5".padStart(6, "0")); // '000005'
console.log("A".padEnd(5, "·")); // 'A····'
console.log(" ************************************ Number ************************************ ");
// ? Number

// Literales
let n1 = 4;
let n2 = 15.8;

// Objetos
let n3 = new Number(4);
let n4 = new Number(15.8);

let n5 = "34";

// ! Metodos Number
console.log(" **** Metodo .toFixed(cantidad de decimales) - Redondea un numero ****");
console.log(n3);
console.log(n3.toFixed(1));

console.log(" **** Metodo .parseInt() - Devuelve la parte entera de un numero y conveirte numero string en tipo number ****");
console.log(n4);
console.log(parseInt(n4));
console.log(" ==== el operador typerOf(variable) : devuelve el tipo de dato de una variable ====");
console.log(n5, typeof(n5));
console.log(parseInt(n5));
console.log(Number.parseInt(n5));
console.log(n3 + parseInt(n5));
console.log(" **** Metodo .parseFloat() - Devuelve la parte decimal de un numero y conveirte numero string en tipo number ****");
console.log(Number.parseFloat(n5));;
console.log(n4 + parseFloat(n5));

console.log(" **** Metodo .isFinite() - Comprueba si es un número finito. ****");
// ¿Número finito?
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false, es infinito

console.log(" **** Metodo .isInteger() - Comprueba si es un número entero. ****");
// ¿Número entero?
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(4.6)); // false, es decimal

console.log(" **** Metodo .isSafeInteger() - Comprueba si es un número seguro. ****");
// ¿Número seguro?
console.log(Number.isSafeInteger(1e15)); // true
console.log(Number.isSafeInteger(1e16)); // false, es un valor no seguro

console.log(" **** Metodo .isNaN() - Comprueba si no es un número. ****");
// ¿No es un número?
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false, es un número
console.log(" ************************************ Funciones ************************************ ");
// ? Funciones

console.log(" **** function(){} ****");
// * Desclaración de la funcion
function estoEsUnaFuncion() {
    console.log(`Primera Funcion`);
} // true
// * Invocar  la función
estoEsUnaFuncion();

console.log(" **** function(){ return} ****");

function funcionQueDevuelveValor() {
    console.log(`Primera Funcion`);
    return `Valor retornado`;
} // true
// * Llamar la función
let resultadoFuncion = funcionQueDevuelveValor();
console.log(resultadoFuncion);

console.log(" **** function(parametros){ return} ****");

function funcionConParametros(num_1, num_2) {
    let resultadoSuma = num_1 + num_2;
    return resultadoSuma;
}

console.log(funcionConParametros(5, 6));

console.log(" **** function(parametros){ return} - con parametros por defecto para evitar el undifined ****");

function funcionConParametrosPorDefecto(name = `Desconocido`, age = 0) {
    let saludar = `Hola! mi nombres es ${name} y tengo ${age}.`
    return saludar;
}

console.log(funcionConParametrosPorDefecto());

console.log(" **** Funcion Desclarada ****");
funcionDeclarada();

function funcionDeclarada() {
    let mensaje = `Esto es una funcion declarada despues de invocarla.`;

    return console.log(mensaje);
}

console.log(" **** Funcion Expresada o Anonima ****");
const funcionExpresada = function() {
    let mensaje = `Esto es una funcion expresada. No se puede declarar despues de invocarla`;

    return console.log(mensaje);
};

funcionExpresada();

console.log(" *** Ejemplo funcion *** ");
// Declaración de la función tablaDelUno()
function tablaDelUno() {
    for (i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);
};
// Bucle que ejecuta 3 veces la función tablaDelUno()
//for (i = 0; i < 3; i++) 
tablaDelUno();

console.log(" *** Ejemplo funcion con parametros *** ");

// Declaración
function tablaDelUno(hasta) {
    for (i = 0; i <= hasta; i++) console.log("1 x", i, "=", 1 * i);
};
// Ejecución
tablaDelUno(10);
tablaDelUno(5);

console.log(" *** Ejemplo funcion con parametros multiples *** ");
// Declaración
function tablaMultiplicar(tabla, hasta) {
    for (i = 0; i <= hasta; i++) console.log(tabla, "x", i, "=", tabla * i);
};
// Ejecución
tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5

