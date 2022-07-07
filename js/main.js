// let numero = 5;
// let numero2 = 8;
// ! Suma
// let resultado = numero + numero2;
// ! Decremento
// numero--
// ! Division
// let resultado = numero / numero2;
// ! Exponecializacion
// resultado = numero ** 3
// ! Incremento
// numero++;
// ! Resto
//let resultado = numero % numero2;
// alert(numero);
// alert(resultado);

// TODO: prompt -> funcion que nos permite ingresar un dato y almacenados en un avariable.

/*
let nombre = prompt("Escribe tu nombre:");
alert(nombre);
*/

// ? concatenación
// saludo = "hola Cristian";
// pregunta = " ¿como estas?";

// frase = saludo + pregunta;

// concatenecion2 = "" + numero + numero2;

// TODO: document.write(VARIABLE); -> Permite ver en pantalla
// document.write(frase);
// let numero1 = "34"
// let numero2 = 5
// resultado = numero1.concat(numero2);
// document.write(resultado);

// ? Backtick
/*
nombre = "Cristian";
frase = `Hola soy ${nombre} y tengo 34 años.`;
document.write(frase);
*/

// ! Operadores
// ? Logicos
// let valor = true;
// let valor2 = true;
// * AND
// let resultado = valor && valor2;
// * OR
// let resultado2 = valor || valor2;
// * NOT
// let resultado3 = !valor;

// ! Condicionales
// ? if..else
/*
let nombre = "pedro";
if (nombre == "pedro") {
    console.log(`tu Nombres es ${nombre}`); // Primer condicion
} else if (nombre == "dario") {
    console.log(`Tu nombres es ${nombre}`); // segunda condicion si la primera no se cumple
} else {
    console.log(`Tu nombres es otro`); //terceta condicion si las otras dos no se cumple
}
*/

// ! Arrays
// ? let frutas = ["pera", "mango", "manzanas"];
// ? console.log(frutas);
// ? console.log(frutas[2]);
// ? console.log(frutas.length);

// ? Escribir una funcion que reciba una frase y retorne la frase pero con la ultima palabra modificada. La ultima palabra se reemplazara con la palabra "gato"

// ? function reemplanzarPalabra(frase) {
// ?     let ultimoEspacio = frase.lastIndexOf(" ");
// ?     let fraseSinPalabra = frase.slice(0, ultimoEspacio + 1);
// ?     let nuevaFrase = fraseSinPalabra + "gato";

// ?     return nuevaFrase;
// ? }

// ? console.log(reemplanzarPalabra("frase cualquiera "));

/* 
MANIPULACIONES BASICAS DE OBJETOS
    const objeto = {
        propiedad : valor,
        key: value,
        clave: valorDeLaClave
    }
​
    ¡IMPORTANTE! en los objetos no existen los indices ni el concepto de orden 
​
​
*/
const user = {
    nombre: "Fulanito Sanchez",
    edad: 30,
}
const banda = {
        nombre: "Nightwish",
        formacion: 1996,
        pais: "Finlandia",
        activo: true,
        genero: "Metal Sinfonico",
        integrantes: ["Toumas Holopainen", "Emppu Vuorinen", "Troy Donockley", "Kai Hatho", "Floor Jansen"],
        discografia: [{
                nombre: "Angels Fall First",
                lanzamiento: 1997
            },
            {
                nombre: "Oceanborn",
                lanzamiento: 1998
            },
            {
                nombre: "Wishmaster",
                lanzamiento: 2000
            },
            {
                nombre: "Century Child",
                lanzamiento: 2002
            },
            {
                nombre: "Angels Fall First",
                lanzamiento: 1997
            },
            {
                nombre: "Once",
                lanzamiento: 2004
            },
            {
                nombre: "Dark Passion Play",
                lanzamiento: 2007
            },
            {
                nombre: "Imaginaerum",
                lanzamiento: 2011
            },
            {
                nombre: "Endless Forms Most Beauttiful",
                lanzamiento: 2015
            },
            {
                nombre: "Human :||: Nature",
                lanzamiento: 2020
            }
        ],
        vocalistaActual: "Tarja Turunen"
    }
    //  1.  ¿Cuantos integrantes tiene la banda?

console.log(banda.integrantes.length);

//  2.  ¿Cuál es el nombre del tercer disco de la banda?

console.log(banda.discografia[2].nombre);

//  3.  ¿En que año se lanzo el ultimo disco?

console.log(banda.discografia[banda.discografia.length - 1].lanzamiento);

/*
ACCEDER A UNA PROPIEDAD
    objeto.propiedad
    objeto["propiedad"]
*/

/*
MODIFICAR UNA PROPIEDAD
    objeto.propiedad = "Nuevo valor"
    objeto["propiedad"] = "Nuevo valor"
*/

/*
AGREGAR UNA NUEVA PROPIEDAD
    objeto.nuevaPropiedad = valorInicial
    objeto["nuevaPropiedad"] = valorInicial
​
    selloDiscografico: "Nuclear Blast Records"
*/

/*
ELIMINAR UNA PROPIEDAD
    delete objeto.propiedad
    delete objeto["propiedad"]
​
*/

//  1. Declara un arreglo vacio. Guarda como elementos de ese arreglo los nombres de cada uno de los discos de la banda
// [ "Angels fall first", "Oceanborn"...  ]

let discos = [];
discos.push(banda.discografia[0].nombre);
discos.push(banda.discografia[1].nombre);
discos.push(banda.discografia[2].nombre);
discos.push(banda.discografia[3].nombre);
discos.push(banda.discografia[4].nombre);
discos.push(banda.discografia[5].nombre);
discos.push(banda.discografia[6].nombre);
discos.push(banda.discografia[7].nombre);
discos.push(banda.discografia[8].nombre);
discos.push(banda.discografia[9].nombre);
console.log(discos);


//  2. Agrega una nueva propiedad donde almacenes tu cancion favorita de la banda, en caso de que no conozcas ninguna puedes guardar un dato null 

banda["favorito"] = "Wishmaster";

//  3.  Elimina al primer integrante de la banda

banda.integrantes.shift();
console.log(banda.integrantes);




/*
-----------  ESTRUCTURAS DE CONTROL-------------
Permiten manipular el flujo de ejecucion del codigo 
​
​
CICLOS  
Nos permiten repetir un bloque de codigo mientras la condicion evaluada se mantenga verdadera
Repetir acciones n cantidad de veces
    ->for
    ->while 
    ->do... while
Cada vuelta o ejecucion de un ciclo se conoce como "Iteración"
​
​
​
CONDICIONALES
Nos permiten ejecutar diferentes acciones derivado de alguna condicion
    ->if
    ->else... if
    ->operador ternario
​
*/