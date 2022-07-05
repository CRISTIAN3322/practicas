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
array.join("."); // Devuelve 'a.b.c'
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


