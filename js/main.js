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

/*
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

/*
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


//Funcion que reciba dos parametros, el primero va a ser un arreglo de usuarios, el segundo, el nombre de un usuario.
//A partir del nombre llevaran a cabo una busqueda dentro del arreglo, y devolveran el elemento quue corresponda al usuario buscado

// const usuarios = [{
//         nombre: 'Erik',
//         edad: 29,
//         correo: 'erik@academlo.com',
//         social: [
//             { nombre: 'facebook', url: 'facebook/erik' },
//             { nombre: 'twitter', url: 'twitter/erik' }
//         ],
//         genero: 'Hombre'
//     },
//     {
//         nombre: 'Georg',
//         edad: 33,
//         correo: 'georg@academlo.com',
//         social: [
//             { nombre: 'facebook', url: 'facebook/georg' },
//             { nombre: 'twitter', url: 'twitter/georg' }
//         ],
//         genero: 'Hombre'
//     },
//     {
//         nombre: 'Andrea',
//         edad: 42,
//         correo: 'andrea@hotmail.com',
//         social: [
//             { nombre: 'facebook', url: 'facebook/andrea' },
//             { nombre: 'twitter', url: 'twitter/andrea' }
//         ],
//         genero: 'Mujer'
//     },
//     {
//         nombre: 'Oscar',
//         edad: 31,
//         correo: 'oscar@academlo.com',
//         social: [
//             { nombre: 'facebook', url: 'facebook/oscar' },
//             { nombre: 'twitter', url: 'twiter/oscar' }
//         ],
//         genero: 'Hombre'
//     },
//     {
//         nombre: 'Daniela',
//         edad: 22,
//         correo: 'andrea@uaq.mx',
//         social: [
//             { nombre: 'facebook', url: 'facebook/andrea' },
//             { nombre: 'twitter', url: 'twitter/andrea' }
//         ],
//         genero: 'Mujer'
//     }
// ]






// function hallarUsuario(user, name) {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].name === name) {
//             users = user[i]
//             return users[i]
//         }
//     }

// }

// console.log(usuarios, "Andrea");

let user = [{
        name: "Erik",
        email: "erik@academlo.com",
        age: 20
    },
    {
        name: "Georg",
        email: "georg@academlo.com",
        age: 30
    },
    {
        name: "Daniel",
        email: "daniel@academlo.com",
        age: 40
    }
]

// function getEmails() {
//     // escribe tu solución aquí
//     // Recuerda que en esta prueba debes "retornar" el resultado
//     // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
//     // return emails;
//     // for (let emails in user) {
//     //     console.log(user[emails].email);
//     // }
//     // return
//     let mail = []
//     for (let i = 0; i < user.length; i++) {
//         mail.push(user[i].email)
//     }
//     return mail
// }

// ? console.log(getEmails());


// ? Condiciones
/*
if( condicion ){
    //instrucciones si la condicion se cumple
}
*/

//plan B
/*
if( condicion ){
    //instrucciones si la condicion se cumple
} else{
    //instrucciones si la condicion no se cumple
}
*/
// let edad = 30


// function comprarAlcohol(edad) {
//     if (18 <= edad) {
//         return `Adelante, es mayor de edad y puede consumir alcohol`
//     } else {
//         return `No puede beber alcohol`
//     }
// }

// ? let retorno = comprarAlcohol(edad)
// ? console.log(retorno)
// ? console.log(comprarAlcohol(14))


//MAS DE UNA CONDICION
// else... if
/*
if( condicion1 ){
    //Se ejecuta si la condcion1 es true
}else if( condcion2 ){
    // La condcion1 NO se cumplió, pero la condcion2 SÍ
}else if( condicion3 ){
    //Las condiciones1 y 2 no se cumplieron, pero la condicion3 SÍ
}else{
    //Las instrucciones de default
}


if( condicion1 && condicion2 ){
    //se ejecuta solo cuando ambas condiciones se cumple
}
*/
//Saludo segun la hora

//Buenos dias: 4 - 12
//Tardes 12 - 19
//Noches 19 -> para adelante

// function saludarUsuario(hora, nombre) {

//     if (hora >= 0 && hora <= 24) {
//         if (hora >= 4 && hora < 12) {
//             return `Hola ${nombre}, buenos días!`
//         } else if (hora >= 12 && hora < 19) {
//             return `Hola ${nombre}, buenas tardes!`
//         } else {
//             return `Hola ${nombre}, buenas noches!`
//         }
//     } else {
//         return `La hora no esta en el formato adecuado`
//     }
// }

// ? console.log(saludarUsuario(11, "Kevin"))
// ? console.log(saludarUsuario(14, "Miguel"))
// ? console.log(saludarUsuario(30, "Marco"))


//TERNARIO ?
//condicion ? valorSiLaCondicionSeCumple : valorSiLaCondicionNoSeCumple

//Funcion que reciba un numero y determine si es par o impar, y devuelva esa informacion

// function parOImpar(numero) {
//     let residuo = numero % 2

//     /*
//     if( residuo === 0 ){
//         return "Es par"
//     }else{
//         return "Es impar"
//     }
//     */
//     return residuo === 0 ? "Es par" : "Es impar" // return "Es apar"
// }

// ? console.log(parOImpar(10))
// ? console.log(parOImpar(5))
// ? console.log(parOImpar(0))


//SWITCH
/*
switch (valor) {
  case valor1: // valor === valor1
    bloque de código
    break
  case valor2: //valor === valor2
    bloque de código
    break
default:
    bloque de código
}
*/

// chico : $20
// mediano: $35
// grande: $50



// switch ("Chico") {
//     case "Chico":
//         console.log("Tu total es de $20 pesos, gracias por tu compra!")
//         break
//     case "Mediano":
//         console.log("Tu total es de $35 pesos, gracias por tu compra!")
//         break
//     case "Grande":
//         console.log("Tu total es de $50 pesos, gracias por tu compra!")
//         break
//     default:
//         console.log("Lo sentimos, no manejamos ese tamaño de bebida")
//         break
// }

// Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".

// function determinarEstaciones(mes) {

//     if (mes === "marzo" || mes === "abril" || mes === "mayo") {
//         return "Primavera"
//     } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
//         return "verano"
//     } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
//         return "otoño"
//     } else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
//         return "invierno"
//     } else {
//         return "Mes invalido"
//     }
// }

// ? console.log(determinarEstaciones("mayo"));

// function determinarEstaciones2(mes) {
//     switch (mes) {
//         case "marzo":
//         case "abril":
//         case "mayo":
//             return "primavera"
//             break;
//         case "junio":
//         case "julio":
//         case "agosto":
//             return "verano"
//             break;
//         case "septiembre":
//         case "octubre":
//         case "noviembre":
//             return "otoño"
//             break;
//         case "diciembre":
//         case "enero":
//         case "febrero":
//             return "invierno"
//             break;
//     }
// }

// ? console.log(determinarEstaciones2("mayo"));

//Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

// function resultadoNumero(num) {
//     if (num > 10) {
//         return num
//     } else
//         return num * 2;;
// }

// ? console.log(resultadoNumero(1));

// const globos = [{
//         color: "Amarillo"
//     },
//     {
//         color: "Amarillo"
//     },
//     {
//         color: "Verde"
//     },
//     {
//         color: "Amarillo"
//     },
//     {
//         color: "Azul"
//     },
//     {
//         color: "Verde"
//     },
//     {
//         color: "Azul"
//     },
//     {
//         color: "Azul"
//     },
//     {
//         color: "Negro"
//     },
//     {
//         color: "Blanco"
//     },
//     {
//         color: "Negro"
//     }
// ]


// let contador = {}

// for (let i = 0; i < globos.length; i++) {

//     if (contador[globos[i].color]) {
//         contador[globos[i].color] += 1
//     } else {
//         contador[globos[i].color] = 1
//     }
// }
// console.log(contador);


// let colorMenosRepetido = null;
// let numeroMinimo = Infinity;
// for (let color in contador) {
//     if (contador[color] < numeroMinimo) {
//         colorMenosRepetido = color
//         numeroMinimo = contador[color]
//     }
// }
// console.log(colorMenosRepetido);

let deletUser = [{
        name: "Erik",
        email: "erik@academlo.com",
        age: 20
    },
    {
        name: "Georg",
        email: "georg@academlo.com",
        age: 30
    },
    {
        name: "Daniel",
        email: "daniel@academlo.com",
        age: 40
    }
]

function deleteUser(users, email) {
    let mail = []
    for (let i = 0; i < deletUser.length; i++) {
        mail.push(deletUser[i].email)
    }
    return mail
}

console.log(deleteUser());