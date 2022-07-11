// ? String : Cadenas de texto - Metodos y Propiedades
// TODO: String.lenght --> Propiedad que muestra la longitud del String.
console.log(" **** Metodo .lenght **** ");
let texto1 = `Hola`;
console.log(texto1.length);
// TODO: Propiedaded String
console.log(" **** Propiedad .toLowerCase() - todo el texto en minusculas **** ");
let minusculas = "HOLA";
console.log(minusculas.toLowerCase());
console.log(" **** Propiedad .toUpperCase() - todo el texto en mayusculas **** ");
let mayusculas = "hola";
console.log(minusculas.toUpperCase());
console.log(" **** Propiedad .includes() - busca si incluye una palabra ****");
let lorem1 = `Lorem ipsum dolor sit amet`;
console.log(lorem1.includes(`amet`));
console.log(lorem1.includes(`jon`));
console.log(" **** Propiedad .trim() - quita los espacios arrededor del texto ****");
let lorem2 = `   Lorem ipsum dolor sit amet   `;
console.log(lorem2);
console.log(lorem2.trim());
console.log(" **** Propiedad .split(separador) - covierte una cadena de texto en arreglo ****");
let lorem3 = `Lorem ipsum dolor sit amet`;
console.log(lorem3.split(" "));