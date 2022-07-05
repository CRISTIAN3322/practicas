// ! Instrucciones - 1
/*
** Encuentra la última letra de un string **

La función findLastLetter() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener el último caracter e imprimirlo usando console.log()

Ejemplo: Si el string que recibe es "Hola, me llamo Erik", en el console.log deberás imprimir la letra k
*/

// ? let data = "Hola, me llamo Erik";
// ? let texto = data[data.length - 1];
// ? console.log(texto);


// ! Instrucciones - 2
/*
** Encuentra la última palabra de un string **

La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra e imprimirla usando console.log()

Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con console.log() deberás imprimir la palabra Erik
*/

// ? let data = "Hola, me llamo Erik";
// ? let ultimaPalabra = data.split(' ');
// ? console.log(ultimaPalabra.pop());


// ! Instructions - 3
/*
** Encuentra la segunda palabra de un string **

La función findSecondWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string, obtener la segunda palabra e imprimirla usando console.log()

Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con console.log() deberás imprimir la palabra me
*/

// ? let data = "Hola, me llamo Erik";
// ? let ultimaPalabra = data.split(' ' , ',');
// ? console.log(ultimaPalabra[1]);


// ! Instrucciones - 4
/*
** Suma los elementos de un arreglo **

La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los 3 valores y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.

Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 que es la suma de todos los elementos.
*/

// let numero = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < numero.length; i++) {
//     sum += numero[i];
// }
// console.log(sum);

// TODO: SOLUCION 1

// ? let array = [1, 2, 3, 4];
// ? let resultado = 0;

// ? function suma(resultado) {

// ?     for (let i = 0; i < array.length; i++) {
// ?         resultado += array[i];
// ?     }

// ?     return resultado;
// ? }

// ? suma(array);
// ? console.log(suma(resultado));

// TODO: SOLUCION 2

// ? let resul = parseInt(array[0] + array[1] + array[2] + array[3]);
// ? console.log(resul);

// ! Instrucciones - 5
/*
** Obtén el correo de un usuario **

La función getEmail() recibe como parámetro un objeto con las propiedades email y age, tu labor es obtener el correo y retornarlo utilizando return.

Ejemplo: Si el objeto que recibe es
{ name: Erik, "email": "erik@academlo.com" }
deberás utilizar return para devolver "erik@academlo.com".

*/

let user = {
    name: 'Erik',
    email: 'erik@academlo.com'
};

let mail = '';

function getEmail(mail) {
    mail = user.email;
    return mail;

}

getEmail(mail);



// TODO: Crear una funcion que reciba un nombre como parametro, en caso de que no se le asigne valor al parametro al momento de llamar a la función, tendra que trabajar con un valor default. La funcion se encargara de mostrar en la terminal un mensajee de bienvenida, personalizado

// ? function saludoUsuario(nombre) {
// ?     console.log(`Hola Usuario ${nombre || "USER 1"}`);
// ? }

// ? saludoUsuario("Cristian");