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



