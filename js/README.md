![javascript](./img/banner.png)

# Introducción - ¿Qué es JavaScript?

- Lenguaje de programación.
- Interpretado.
- Orientado a objetos.
- Impetativo.
- Case sensitive (Upper and Lower Case).
- Basado en prototipos / instancias / classless.
- Tipado débil.
- Lenguaje dinámico.
- ECMASCRIPT (5.1 y 6, 7, 8, Next).

**ES.NEXT:** ES.Next es nombre dinámico para referirse a cualquier próxima versión que se esté desarrollando. Las caracteristicas de ES.Next son conocidas maás correctamente como propuestas, porque, por definición, las especificación no ha sido aun finalizada. 

## ¿Para que se usa?
- Dinamísmo de los sitios web.
- Servidor en NodeJS.
- Tecnologías Frontend como angular, React o Vue.JS.

Otros usos no yan comunes:
- Itelegencia artificial.
- Placas electrónicas (Jhonny Five).
- Mobile Apps.
- Desktop Apps.
- Etc....

## Formas de enlazar Javascript
- En Linea.
  ```html
  <h1 onClick="alert('Hola')">Formas de enlazar</h1>
  ```
- como contenido en la etiqueta `<script>`
  ```html
    <script type="text/javascript">
        onClick="alert('Hola')"
    </script>
  ```
- Como contenido en un archivo de formato .js
  ```html
  <script src="archivo.js"></script>
  ```
- Como un Require

## Variables
- **Concepto:** Es un espacio que se guarda en memoria.
- **Tipos de datos en JavaScript**
*Primitivos:* Se accede directamente al valor.
- string = "cadenas de texto"
- number = 19
- boolean = true - false
- null -> Indica que la variable esta nula.
- undefined -> Error que nos indica que la variable no esta definida.
- NaN -> Error que nos indica que la variable no es un numero.
*Compuestos:* Se accede a la referencia del valor.
- object = {}
- array = []
- function () { }
- Class {}
- etc.
- **Tipos de variables:**
  - *var*
  - *const*
  - *let*
- **Scope.**
- **Hoisting.**
- **Crear multiples variables:** (separandolas con comas) ->
```javascript
let nombre1 = "Jorge" , nombre2 = "Pedro";
```

## Escritura de código
Los identificadores deben comenzar con:
- Una letra 
- Un signo de dolar $ 
- Un guión bajo _
- Nunca con números o caracteres especiales.

**Usa snake_case en:**

- *Nombre de archivos:*
```javascript
mi_archivo_javascript.js;
Usa UPPER_CASE en:
```

- *Constantes:*
```javascript
const UNA_CONSTANTE = "Soy una constante",
  PI = 3.141592653589793;
```

**Usa UpperCamelCase en:**

- *Clases:*
```javascript
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
```

**Usa lowerCamelCase en:**

- *Objetos:*
```javascript
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};
```
- *Primitivos:*
```javascript
let unaCadena = "Hola Mundo",
  unNumero = 19,
  unBoolean = true;
```
- *Funciones:*
```javascript
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");
```
- *Instancias:*
```javascript
const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Jonathan", "Hombre");
```
## Palabras reservadas
```javascript
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```
## Operadores De Asignación:

un *Operador de asignación+ asigna un *valor* al operando de la inzquierda basado en el valor del operando de la derecha.

| NOMBRE | Abreviaciones | Significado |
| --- | --- | --- |
| Asignación | x = y | x = y |
| Asignación de adicción | x += y | x = x + y |
| Asignación de sustración | x -= y | x = x - y |
| Asignación de multiplición | x *= y | x = x * y |
| Asignación de división | x /= y | x = x / y |
| Asignación de Resto | x %= y | x = x % y |
| Asignación de exponenciación | x ** y | x = x ** y |
| Asignación de desplazamiento izquierda | x <<= y | x = x << y |
| Asignación de desplazamiento derecha | x >>= y | x = x >> y |
| Asignación sin signo de desplazamiento a la derecha | x >>>= y | x = x >>> y |
| Asignación AND | x &= y | x = x & y |
| Asignación XOR | x ^= y | x = x ^ y |
| Asignación OR | x \|= y | x = x \| y |

**Nota:** Acento circunflejo (^) -> Alt + 94.


## Operadores Aritméticos:

Los *Operadores Aritméticos* toman valores numéricos (ya sena literales o variables) como su operandos y retornan un valor numérico *único*.

- Addition (+)
- Decrement (-)
- Division (/)
- Exponentiation (**)
- Increment (++)
- Multiplication (*)
- Remainder (%)
- Subtration (-)
- Unary negation (*)
- Unary plus (+)

## Concatenación 

Es unir dos o más cadenas de texto.

- con el signo +
- Para numeros forzados string ("" + 9 + 4)
- texto.concat() -> Es un metodo de cadena que requiere un string.
- Con backticks \` y la variable entre `${}`

### Backticks (Bloquote o Acento Grave) y Escape
```javascript
/* 
Sin backticks: "linea 1 ' n 'linea2" 
Con backticks: `linea1` 'escape de backticks con comillas simples' `linea2`
*/ 
```

## Operadores (intermedio)
**Operadores comparación:** Los *operadores de compración* comparan dos expresiones y devuelven un valor *Boolean* que representen la *relación* de sus valores (true o false).

- **Igual (==) :** Devuelve true si los operandos son iguales.
- **No es igual (!=) :** Devuelve true si los operandos no son iguales.
- **Estrictamente igual (===) :**	Devuelve true si los operandos son iguales y del mismo tipo.
- **Desigualdad estricta (!==) :**	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
- **Mayor que (>) :**	Devuelve true si el operando izquierdo es mayor que el operando derecho.	
- **Mayor o igual que (>=) :**	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
- **Menor que (<) :**	Devuelve true si el operando izquierdo es menor que el operando derecho.	
- **Menor o igual (<=) :**	Devuelve true si el operando izquierdo es menor o igual que el operando derecho.

**Operadores lógicos:** Los *operadores lógicos* nos devuelve un resultado a partir de que se cumpla (o no) una *condición*, su resultado es *booleano*, y sus  opeandos son valores lógicos o asimilables a ellos.

- **AND Lógico (&&) :**	| `expr1 && expr2` | Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
- **OR lógico (||) :** | `expr1 || expr2` |	Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
- **NOT lógico (!) :** | `!expr` |	Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.

## Condicionales

- **if...else:** Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

*Sintaxis:* 
```javascript
if (condición) sentencia1 [else sentencia2]
```

*Condición:* Una expresión que puede ser evaluada como verdadera o falsa.
*sentencia1:*
Sentencia que se ejecutará si condición es evaluada como verdadera. Puede ser cualquier sentencia, incluyendo otras sentenccias if anidadas. Para ejecutar múltiples sentencias, use una sentencia block ({ ... }) para agruparlas.
*sentencia2.*
Sentencia que se ejecutará si condición se evalúa como falsa, y exista una cláusula else. Puede ser cualquier sentencia, incluyendo sentencias block y otras sentencias if anidadas.

### Descripción:

Multiples sentencias if...else pueden ser anidadas para crear una cláusula else if:

```javascript
if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
...
else
   sentenciaN
```

Para entender como esto funciona, así es como se vería si el anidamiento hubiera sido indentado correctamente:

```javascript
if (condición1)
   sentencia1
else
   if (condición2)
      sentencia2
   else
      if (condición3)
        ...
```

Para ejecutar varias sentencias en una cláusula, use una sentencia block ({ ... }) para agruparlas. Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas:

```javascript
if (condición) {
   sentencia1
} else {
   sentencia2
}
```

No confundir los valores primitivos true y false con los valores true y false del objeto Boolean. Cualquier valor diferente de undefined, null, 0, -0, NaN, o la cadena vacía (""), y cualquier objecto, incluso un objeto Boolean cuyo valor es false, se evalúa como verdadero en una sentencia condicional. Por ejemplo:

```javascript
var b = new Boolean(false);
if (b) // Esta condición se evalúa como verdadera
```

## Arrays

### ¡Qué es un array?
Un *Array* es una colección o agrupación de elementos en una misma varible, cada uno de ellos ubicado por la posición que ocupa en el array. en javascript, se pueden definir de varias formas:

```javascript
// Forma tradicional
const array = new Array("a", "b", "c");

// Mediante literales (preferida)
const array = ["a", "b", "c"]; // Array con 3 elementos
const empty = []; // Array vacío (0 elementos)
const mixto = ["a", 5, true]; // Array mixto (string, number, boolean)
```

Al contrario que muchos otros lenguahes de programación, Javascript permite que se puedan realizar arryas de **tipo mixto**, no siendo obligatorio que todo los elementos sena de mismo tipo de dato.

- **new Array(tipo de dato):** Cra un array con un tipo de dato expecifico.
- **new Array(e1,e2...):** Crea un array con ninguno o varios elementos.
- **[e1,e2...]:** Simplementos los elemtos dentro de corchetes.[]


> **OJO:** Al crear un array con new Array(num), si solo indicamos un parámetro y num es un número, Javascript creará un array de num elementos sin definir. Es decir, a = new Array(3) sería equivalente a a = [undefined, undefined, undefined]. Esto no ocurre con su equivalente, a = [3], donde estamos creando un array con un único elemento: 3.

### Acceso a elementos

Al igual que los *string*, saber el número elemntos que tiene un arrat es muy sencillo. Sólo hay que acceder a la propiedad `.length` que nos devolverá el número de elementos existentes en un array:

- **.length:** Devuelve el número de elementos del array.
- **[posicion]:** Operador que devuelve que elemento hay en esa posición.

Por otro lado, si lo que queremos es acceder a un elemento especificado del array, no hay más que utilizar el operador `[]`, al igual que hacemos con los *string* para acceder a un caracter concreto. en este caso, accedemos a la posición de elemento que queremos recuperar sobre el array.

```javascript
let frutas = ["pera", "mango", "manzanas"];
console.log(frutas);
console.log(frutas[2]);
console.log(frutas.length);
```

Recuerda que las posiciones empienzan a contar desde 0 y que si intentamos acceder a una posicion que no existe (mayor del tamaño de array), nos devolverá un **UNDEFINDED**.

##3 Añadir o eliminar elementos

Existen varias formas de añadir elemetos a un array existente.
Veamos los métodos que podemos usar para ell:

- **.push(obj1,obj2...):** Añade uno o varios elementos al final del array. Devuelve tamaño del array.
- **.pop():** Elimina y devuelve el ultimo elemento de array.
- **.unshift(obj1,obj2...):** Añade uno o varios elementos al inicio del array. Devuelve tamaños de array.
- **.shift():** Elimina y devuelve el primer elemento del array.
- **.concat(obj1, objt2...):** concatena los elementos (0 elementos de los arrayas) pasados por parámetro. 

en los arrays, Javascript proporciona métodos tanto para insertar o eliminar elementos **por el final** del array:**push()** y **pop()**, como para insertar o eliminar elementos **por el principio** de array:**unshift()** y **shift()**. Salvo por esto, funcionan exactamente igual.

El método de inserción, **push()** o **unshift()** inserta los elementos pasados por parámetro en el array y devuelve el tamaño actualque tiene el array despúes de la inserción. Por otro lado, los métodos de extracción, **pop()** o **shift()**, extraen y devuelve el elemento.

```javascript
const array = ["a", "b", "c"]; // Array inicial

array.push("d"); // Devuelve 4. Ahora array = ['a', 'b', 'c', 'd']
array.pop(); // Devuelve 'd'. Ahora array = ['a', 'b', 'c']

array.unshift("Z"); // Devuelve 4. Ahora array = ['Z', 'a', 'b', 'c']
array.shift(); // Devuelve 'Z'. Ahora array = ['a', 'b', 'c']
```

Además, al igual que en los String; tenemos el me´todo **concat()**, que nos permite concatenar los elementos pasados por parámetro en un array. Se podria pensar que los métodos **.push()** y **concat()** funcionan de las misma forma, pero no es exactamente asi. 

```javascript
const array = [1, 2, 3];
array.push(4, 5, 6); // Devuelve 6. Ahora array = [1, 2, 3, 4, 5, 6]
array.push([7, 8, 9]); // Devuelve 7. Ahora array = [1, 2, 3, 4, 5, 6, [7, 8, 9]]

const array = [1, 2, 3];
array = array.concat(4, 5, 6); // Devuelve 6. Ahora array = [1, 2, 3, 4, 5, 6]
array = array.concat([7, 8, 9]); // Devuelve 9. Ahora array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Observa un detalle muy importante. El método **concat()**, a diferencia de **push()**, no modifica el array sobre el cuál trabajamos y al que le añadimos los elementos, sino que simplemente lo devuelve. Al margen de esto, observa que en el caso de pasar un array por parámetro, **push()** lo inserta como un array, mientras que **concat()** inserta cada uno de sus elementos.

> También hay que tener cuidado al utilizar el operador ** + ** con los arrays. A diferencia de lo que quizás puede parecer intuitivo, utilizando este operador no se añaden los elementos al array, sino que se convierten los arrays en string y luego se concatenan. Veremos más sobre estas conversiones implícitas en temas posteriores.

### Creación de arrays

Existen métodos para crear pequeños arrays derivados de otras varibales u objetos. Es el caso de los métodos **slice()** y **splice()**. Luegos, tambien hablaremos de método **join()** y el método estáticos **Array.from()**:

- **.slice(ini, end):** Devuelve los elementos desde posición *ini* hasta *end* (excluido).
- **.splice(ini, num):** Elimina y devuelve *num* elemenots desde posición *ini*.
- .**.splice(ini, num, 01,02...):** Además inserta *01,02...* en la posición *ini*.
- **.join(separador):** El método join concatena todos los elementos del vector en un único string.
  - *separador:* Opcional Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). Si el separador es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos.
- **Array.from(0, f, thisVal):** El método *Array.from()* crea una nueva instancia de Array a partir de un objeto iterable.
  

el método **slice()** devuelve los elementos de array desde la posición *ini* hasta la posición *end*, permitiendo crear un nuevo array más pequeño con ese grupo de elementos. Recuerda que las posiciones empienzan a contar desde 0. En el caso de que no se propocione el parámetro *end*, se devuelve todos los elementos desde la posición *ini* hasta el final del array.

Por otro lado, ten en cuenta que el array sobre el que realizamos el método *slice()* no sugfre ninguna modificación, sólo se devuelve por parámetro el array creado. diferente es el caso de método *splice()*, el cuál realiza alfo parecido a *slice()* pero con una gran diferencia: **modifica el array original**. en ek método *splice()* el segundo parámetro *num* noes la posición final del subarray, sino el tamaño de array final, es decir el número de elementos que se van a obtener desdr la posción *ini*.

Por lo tanto, con el método *splice()*, devolvemos u array con los elementos desde la posición *ini* hasta la posición *ini+num*. El array original es modificado, ya que se eliminan los elementos desde la posición *ini* hatsa la posición *ini+num*. Es posible también indicar una serie de parámetros opcionales después de los mencionados, que permitirán además de la extracción de elementos, *insertar dichos elementos* justo donde hicimos la extracción.

```javascript
const array = ["a", "b", "c", "d", "e"];

// .slice() no modifica el array
array.slice(2, 4); // Devuelve ['c', 'd']. El array no se modifica.

// .splice() si modifica el array
array.splice(2, 2); // Devuelve ['c', 'd']. Ahora array = ['a', 'b', 'e']
array.splice(1, 0, "z", "x"); // Devuelve []. Ahora array = ['a', 'z', 'x', 'b', 'e']
```
A raíz de este último ejemplo, también podemos insertar elementos en una posición concreta del array de estas dos formas alternativas: utilizando *slice()* y *concat()* o utilizando *splice()* y una caracteristica que veremos m{as adelante llamda **desestructuración**.

```javascript
const a = [1, 2, 3, 8, 9, 10];
a.slice(0, 3).concat([4, 5, 6, 7], a.slice(3, 6)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const a = [1, 2, 3, 8, 9, 10];
a.splice(3, 0, ...[4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> En ciertos casos, nos podría interesar reducir el tamaño de un array para quedarnos con sus primeros elementos y descartar el resto. Hay una forma muy sencilla y eficiente que es modificar directamente el tamaño del array mediante **.length**.

Por ejemplo, hacer un *a.length = 4* en un array de 8 elementos, reducirá el array a los primeros 4 elementos de una forma eficiente, ya que no crea un nuevo array, sino que reduce el tamaño del actual y descarta el resto de elementos.

Además, también tenemos otro método con el que es posible crear un  array a partir de un string. Se trata del método *split()* que vimos en el tema de los string. En este caso, el método *join()* es su contrapartida. Con *join()* podemos crear un string con todos los elementos del array, separándolo por el texto que le pasemos por parámetro:

```javascript
const array = ["a", "b", "c"];

array.join("->"); // Devuelve 'a->b->c'
array.join("."); // Devuelve 'a.b.
"a.b.c".split("."); // Devuelve ['a', 'b', 'c']
"5.4.3.2.1".split("."); // Devuelve ['5', '4', '3', '2', '1']
```
Ten en cuenta que, como se puede ver en el último ejemplo, split() siempre devolverá los elementos como string.

Por último, mencionar también el método estático *Array.from()*. Aunque ahora no le encontraremos mucha utilidad, nos resultará muy interesante más adelante. Este método se suele utilizar para convertir variables «parecidas» a los arrays (pero que no son arrays) en arrays reales. Este el caso de variables como  string (que pueden actuar como array de strings) o de nodos de un documento (elementos del DOM, como veremos en temas posteriores):

```javascript
Array.from("hola"); // ['h', 'o', 'l', 'a']
Array.from(document.querySelector("body")); // [body.document]
```
De forma opcional, *Array.from(obj)* puede recibir dos parámetros más, al margen de *obj*: una función *f* y un parámetro *thisVal*. El funcionamiento de estos parámetros es similar al del método *.map()* que veremos en un tema posterior de *Array functions*.

### Búsqueda y Comprobación

Existen varios métodos para realizar ciertas comprobaciones con arrays:

- **Array.isArray(obj):** Comprueba si *obj* es un array. Devuelve *true* o *false*.
- **.includes(obj,from):** Comprueba si *obj* es uno de los elementos incluidos en el array.
- **.index_Of(obj,from):** Devuelve la posicion de la primera aparicíón de *obj* desde *from*.
- **.lastIndexOf(obj,from):** Devuelve la posicion la +ultima aparicíón de *obj* desde *from*.

El primero de ellos, *Array.isArray(obj)* se utiliza para comprobar si *obj* es un *array* o no, devolviendo un booleano. Los otros tres métodos funcionan exactamente igual que sus equivalentes en los string.

El método *includes()* comprueba si el elemento *obj* pasado por parámetro es uno de los elementos que incluye el *array*, partiendo desde la posición *from*. Si se omite *from*, se parte desde 0.

```javascript
const array = [5, 10, 15, 20, 25];

Array.isArray(array); // true
array.includes(10); // true
array.includes(10, 2); // false
array.indexOf(25); // 4
array.lastIndexOf(10, 0); // -1
```
Por otro lado, tenemos *indexOf()* y *lastIndexOf()* dos funciones que se utilizan para devolver la posición del elemento *obj* pasado por parámetro, empezando a buscar en la posición *from* (o 0 si se omite). El primer método, devuelve la primera aparición, mientras que el segundo método devuelve la última aparición.

### Modificación de arrays

Es posible que tengamos un array específico al que queremos hacer ciertas modificaciones donde *slice()* y *splice()* se quedan cortos (o resulta más cómodo utilizar los siguientes métodos). Existen algunos métodos introducidos en **ECMAScript 6** que nos permiten crear una versión modificada de un array, mediante métodos como **copyWithin()** o **fill()**:

- **.copyWithin(pos, ini, end):** El primero de ellos, copyWithin(pos, ini, end) nos permite crear una copia del array que alteraremos de la siguiente forma: en la posición pos copiaremos los elementos del propio array que aparecen desde la posición ini hasta la posición end. Es decir, desde la posición 0 hasta pos será exactamente igual, y de ahí en adelante, será una copia de los valores de la posición ini a la posición end. Veamos algunos ejemplos:
  
```javascript
const array = ["a", "b", "c", "d", "e", "f"];

// Estos métodos modifican el array original
array.copyWithin(5, 0, 1); // Devuelve ['a', 'b', 'c', 'd', 'e', 'a']
array.copyWithin(3, 0, 3); // Devuelve ['a', 'b', 'c', 'a', 'b', 'c']
array.fill("Z", 0, 5); // Devuelve ['Z', 'Z', 'Z', 'Z', 'Z', 'c']
```

- **.fill(obj, ini, end) :** Por otro lado, el método fill(obj, ini, end) es mucho más sencillo. Se encarga de devolver una versión del array, rellenando con el elemento obj desde la posición ini hasta la posición end.

### Ordenaciones

En Javascript, es muy habitual que tengamos arrays y queramos ordenar su contenido por diferentes criterios. En este apartado, vamos a ver los métodos *reverse()* y *sort()*, utiles para ordenar un array:

- **.reverse():** Invierte el orden de elementos del array.
- **.sort():** Ordena los elementos del array bajo un criterio de *ordenación alfabética*.
- **.sort(func):** Ordena los elementos del array bajo un criterio de ordenación *func*.

En primer lugar, el método *reverse()* cambia los elementos del array en orden inverso, es decir, si tenemos [5, 4, 3] lo modifica de modo que ahora tenemos [3, 4, 5]. Por otro lado, el método *sort()* realiza una ordenación (por orden alfabético) de los elementos del array:

```javascript
const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];

// Ojo, cada línea está modificando el array original
array.sort(); // ['Alberto', 'Ana', 'Bernardo', 'Mauricio', 'Zoe']
array.reverse(); // ['Zoe', 'Mauricio', 'Bernardo', 'Ana', 'Alberto']
```

Un detalle muy importante es que estos dos métodos modifican el array original, además de devolver el array modificado. Si no quieres que el array original cambie, asegurate de crear primero una copia del array, para así realizar la ordenación sobre esa copia y no sobre el original.

Sin embargo, la ordenación anterior se realizó sobre string  y todo fue bien. Veamos que ocurre si intentamos ordenar un array de números:

```javascript
const array = [1, 8, 2, 32, 9, 7, 4];

array.sort(); // Devuelve [1, 2, 32, 4, 7, 8, 9], que NO es el resultado deseado
```
Esto ocurre porque, al igual que en el ejemplo anterior, el tipo de ordenación que realiza *sort()* por defecto es una ordenación alfabética, mientras que en esta ocasión buscamos una ordenación natural, que es la que se suele utilizar con números. Esto se puede hacer en Javascript, pero requiere pasarle por parámetro al *sort()* lo que se llama una función de comparación.

### Función de comparación

Como hemos visto, la ordenación que realiza *sort()* por defecto es siempre una ordenación alfabética. Sin embargo, podemos pasarle por parámetro lo que se conoce con los nombres de **función de ordenación** o **función de comparación**. Dicha función, lo que hace es establecer otro criterio de ordenación, en lugar del que tiene por defecto:

```javascript
const array = [1, 8, 2, 32, 9, 7, 4];

// Función de comparación para ordenación natural
const fc = function (a, b) {
  return a - b;
};

array.sort(fc); // Devuelve [1, 2, 4, 7, 8, 9, 32], que SÍ es el resultado deseado
```
Como se puede ver en el ejemplo anterior, creando la función de ordenación *fc* y pasándola por parámetro a *sort()*, le indicamos como debe hacer la ordenación y ahora si la realiza correctamente.

Si profundizamos en la tarea que realiza el *sort()*, lo que hace concretamente es analizar pares de elementos del array en cuestión. El primer elemento es *a* y el segundo elemento es *b*. Por lo tanto, al pasarle la función de comparación *fc*, dicha función se encargará de, si devuelve *true* cambia el orden de a y b, si devuelve *false* los mantiene igual. Esto es lo que se conoce como el método de la burbuja, uno de los sistemas de ordenación más sencillos.


## Array functions

Así como tenemos un conjunto de métodos para realizar sobre variables que sean strign u otro conjunto de métodos para variables que sean number, existe una serie de métodos que podemos utilizar sobre variables que sean de tipo array. Son las llamadas **array functions** que veremos a continuación.

### ¿Qué son las Array functions? 

Básicamente, son métodos que tiene cualquier variable que sea de tipo *array*, y que permite realizar una operación con todos los elementos de dicho array para conseguir un objetivo concreto, dependiendo del método. En general, a dichos métodos se les pasa por parámetro una **función callback** y unos parámetros opcionales.

Estas son las *Array functions* que podemos encontrarnos en Javascript:

- **.forEach (Cada uno):** Como se puede ver, el método *forEach()* no devuelve nada y espera que se le pase por parámetro una *function* que se ejecutará por cada elemento del array. Esa función, puede ser pasada en cualquiera de los formatos que hemos visto: como función tradicional o como función flecha:

```javascript
const arr = ["a", "b", "c", "d"];

// Con funciones por expresión
const f = function () {
  console.log("Un elemento.");
};
arr.forEach(f);

// Con funciones anónimas
arr.forEach(function () {
  console.log("Un elemento.");
});

// Con funciones flecha
arr.forEach(() => console.log("Un elemento."));
```

Sin embargo, este ejemplo no tiene demasiada utilidad. A la *fuction callback* se le pueden pasar varios parámetros opcionales:

* Si se le pasa un primer parámetro, este será el elemento del array.
* Si se le pasa un segundo parámetro, este será la posición en el array
* Si se le pasa un tercer parámetro, este será el array en cuestión.

Veamos un ejemplo:
```javascript
const arr = ["a", "b", "c", "d"];

arr.forEach((e) => console.log(e)); // Devuelve 'a' / 'b' / 'c' / 'd'
arr.forEach((e, i) => console.log(e, i)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
arr.forEach((e, i, a) => console.log(a[0])); // Devuelve 'a' / 'a' / 'a' / 'a'
```
En este ejemplo, he nombrado *e* al parámetro que hará referencia al elemento, *i* al parámetro que hará referencia al índice (posición del array) y *a* al parámetro que hará referencia al array en cuestión. Aún así, el usuario puede ponerle a estos parámetros el nombre que prefiera. Como se puede ver, realmente *forEach()* es otra forma de hacer un bucle (sobre un array), sin tener que recurrir a bucles tradicionales como *for* o *while*.

> Como vemos en la tabla anterior, al método *forEach()* se le puede pasar un segundo parámetro *arg*, que representa el valor que sobreescribiría a la palabra clave *this* en el código dentro de la función callback. De necesitar esta funcionalidad, recuerda que no puedes utilizar las funciones flecha, ya que el this no tiene efecto en ellas.

- **every(Todo):** El método *every()* permite comprobar si todos y cada uno de los elementos de un array cumplen la condición que se especifique en la function callback:

```javascript
const arr = ["a", "b", "c", "d"];
arr.every((e) => e.length == 1); // true
```
En este caso, la magia está en el *callback*. La condición es que la longitud de cada elemento function del array sea 1. Si dicha función devuelve *true*, significa que cumple la condición, si devuelve *false*, no la cumple. Por lo tanto, si todos los elementos del array devuelven *true*, entonces *every()* devolverá *true*.

```javascript
const arr = ["a", "b", "c", "d"];

// Esta función se ejecuta por cada elemento del array
const todos = function (e) {
  // Si el tamaño del string es igual a 1
  if (e.length == 1) return true;
  else return false;
};

arr.every(todos); // Le pasamos la función callback todos() a every
```

- **some(al menos uno):** De la misma forma que el método anterior sirve para comprobar si todos los elementos del array cumplen una determinada condición, con *some()* podemos comprobar si al menos uno de los elementos del array, cumplen dicha condición definida por el callback.

```javascript
const arr = ["a", "bb", "c", "d"];
arr.some((e) => e.length == 2); // true
```

Observa que en este ejemplo, el método *some()* devuelve *true* porque existe al menos un elemento del array con una longitud de 2 carácteres.

- **map(Transformaciones):** El método *map()* es un método muy potente y útil para trabajar con arrays, puesto que su objetivo es devolver un nuevo array donde cada uno de sus elementos será lo que devuelva la función callback por cada uno de los elementos del array original:

```javascript
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.map((e) => e.length);

nuevoArr; // Devuelve [3, 5, 5, 9, 9]
```
Observa que el array devuelto por *map()* es *nuevoArr*, y cada uno de los elementos que lo componente, es el número devuelto por el callback (e.length), que no es otra cosa sino el tamaño de cada string.

Este método nos permite hacer multitud de operaciones, ya que donde devolvemos *e.length* podriamos devolver el propio string modificado o cualquier otra cosa.

- **filter(filtrado):** El método *filter()* nos permite filtrar los elementos de un array y devolver un nuevo array con sólo los elementos que queramos. Para ello, utilizaremos la función callback para establecer una condición que devuelve *true* sólo en los elementos que nos interesen:

```javascript
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr.filter((e) => e[0] == "P");

nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio']
```
En este ejemplo, filtramos sólo los elementos en los que su primera letra sea *P*. Por lo tanto, la variable nuevoArr será un array con sólo esos elementos.

Ten en cuenta que si ningún elemento cumple la condición, *filter()* devuelve un Array vacío.

- **find(Búsqueda):** En **ECMAScript 6** se introducen dos nuevos métodos dentro de las Array functions: **find()** y **findIndex()**. Ambos se utilizan para buscar elementos de un array mediante una condición, la diferencia es que el primero devuelve el elemento mientras que el segundo devuelve su posición en el array original. Veamos como funcionan:

```javascript
const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

arr.find((e) => e.length == 5); // 'Pablo'
arr.findIndex((e) => e.length == 5); // 1
```
La condición que hemos utilizado en este ejemplo es buscar el elemento que tiene 5 carácteres de longitud. Al buscarlo en el array original, el primero que encontramos es Pablo, puesto que *find()* devolverá 'Pablo' y *findIndex()* devolverá 1, que es la segunda posición del array donde se encuentra.

En el caso de no encontrar ningún elemento que cumpla la condición, *find()* devolverá **undifined** , mientras que *findIndex()*, que debe devolver un , devolverá **-1**.

- **reduce(Acumuladores):** Por último, nos encontramos con una pareja de métodos denominados **reduce()** y **reduceRight()**. Ambos métodos se encargan de recorrer todos los elementos del array, e ir acumulando sus valores (o alguna operación diferente) y sumarlo todo, para devolver su resultado final.

En este par de métodos, encontraremos una primera diferencia en su función callback, puesto que en lugar de tener los clásicos parámetros opcionales *(e, i, a)* que hemos utilizado hasta ahora, tiene *(p, e, i, a)*, donde vemos que aparece un primer parámetro extra inicial: *p*.

En la primera iteración, *p* contiene el valor del primer elemento del array y *e* del segundo. En siguientes iteraciones, *p* es el acumulador que contiene lo que devolvió el callback en la iteración anterior, mientras que *e* es el siguiente elemento del array, y así sucesivamente. Veamos un ejemplo para entenderlo:

```javascript
const arr = [95, 5, 25, 10, 25];
arr.reduce((p, e) => {
  console.log(`P=${p} e=${e}`);
  return p + e;
});

// P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
// P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
// P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160
```
Gracias a esto, podemos utilizar el método *reduce()* como acumulador de elementos de izquierda a derecha y *reduceRight()* como acumulador de elementos de derecha a izquierda. Veamos un ejemplo de cada uno, realizando una resta en lugar de una suma:

```javascript
const arr = [95, 5, 25, 10, 25];
arr.reduce((p, e) => p - e); // 95 - 5 - 25 - 10 - 25. Devuelve 30
arr.reduceRight((p, e) => p - e); // 25 - 10 - 25 - 5 - 95. Devuelve -110
```

> Recuerda que en cualquiera de estas array functions puedes realizar operaciones o condiciones tanto con el parámetro e (elemento), como con el parámetro i (índice o posición) o con el parámetro a (array).

- **Iteradores:** En *ECMAScript 6* se introducen unos métodos muy útiles para utilizar como iteradores (objetos preparados para recorrer los elementos de un array y devolver información). Hablamos de los métodos **keys()**, **values()** y **entries()**. El primero de ellos permite avanzar en un array, mientras va devolviendo las posiciones, el segundo los valores (el elemento en sí) y el tercero devuelve un array con la posición en el primer elemento y el valor en el segundo elemento.
  
  - **.key():** Permite iterar un array e ir devolviendo sus índices o posiciones (keys).
  - **.values():** Permite iterar un array e ir devolviendo sus valores (elementos).
  - **.entries():** Permite iterar un array e ir devolviendo un array [índice, valor].

Estos métodos, combinados con un *for...of* por ejemplo, permiten recorrer los arrays y obtener diferente información del array rápidamente. En el siguiente ejemplo utilizamos una característica avanzada que veremos más adelante llamada desestructuración:

```javascript
const arr = ["Sonic", "Mario", "Luigi"];

// Obtiene un array con las keys (posiciones)
const keys = [...arr.keys()]; // [0, 1, 2]

// Obtiene un array con los valores (elementos)
const values = [...arr.values()]; // ['Sonic', 'Mario', 'Luigi']

// Obtiene un array con las entradas (par key, valor)
const entries = [...arr.entries()]; // [[0, 'Sonic'], [1, 'Mario'], [2, 'Luigi']]
```






