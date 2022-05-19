<center><img src="./imagen/css.png"></center>

# Curso CSS

## ¿Qué es y para qué sirve CSS?

CSS (Cascading Style Sheets) es un lenguaje de estilos en cascada, este lenguaje nos
permite darle estilos a nuestro código HTML por medio de una regla de estilos, que
conlleva un selector, propiedad y valor. En pocas palabras, servirá para darle estilos a
nuestro código HTML.
***
## ¿Cuál es la estructura de CSS?

CSS es muy sencillo,trabaja con bloques de estilos que definen a que elementos se
les aplicarán los estilos de dicho bloque. Esto se hace con un selector, propiedad y
valor.

```css
<!-- Estructura -->

selector{
    propiedad:valor;
    propiedad:valor;
}

<!-- Ejemplo --->

.cuadrado {
    height: 10cm; // Definide el alto.
    width: 10cm; // Definide el ancho.
    background-color: steelblue; // Define elcolor de fondo.
    color: white; // Define elcolor de texto.
    border: 2px solid black; // Borde.
}

```
## **Selectores**

Los selectores es la primero parte de una regla **CSS** define que elementos **HTML** va a ser modificados. 

### Tipo de Selectores
1. **Selectores de Tipo:** Selecciona de nombre o de etiqueta.
   ```css
   body{
       color: green;
   }
   ``` 
2. **Selector de Clases:** Selecciona todos los nombres que este en el atributo **class**, se llama con un punto.
   ```html
   <!-- HTML -->
    <p class="bold">Negrilla</p>
   ``` 
   ```css
   <!--css-->
   .bold{
       color: green;
   }
   ```
3. **Selector de ID:** Selecciona todos los nombres que este en el atributo **id**, se llama con un #.
   **PD:** Los id son idetificadores unicos de cada elemento.

    ```html
   <!-- HTML -->
    <p id="bold">Negrilla</p>
   ``` 
   ```css
   /*css*/
   #bold{
       color: green;
   }
   ```

4. **Selector Universal:** Selecciona todos los elemetos del HTML, se coloca al principio de la hoja de estilos se utiliza un asterisco *.
```css
*{
    font-size:16px;
}
```

5. **Selectores Combinadores:** Son la combinación de dos o mas selectores basicos del mismo tipo. 

    5.1. **Combinador de descendiente:** Este Combinador es representado por un espacio en blanco, combina dos selectores donde el primero debe ser el acentro del segundo selector.

    5.2.**Combinador de Hijos directos:** Este combinador es representado por un `>`, combina dos selectores donde el primero debe ser el padre directo del segundo selector.

    5.3.**Combinador de Hermano Adyacente:** Este combinador es representado por un `+`, combina dos selectores donde el primero debe ser el hermano adyacente.

     5.4.**Combinador de Hermanos Generales:** Este combinador es representado por una virgulilla `~` ó ALT + 126, combina dos selectores donde el segundo selector debe ser el hermano siguiente del primero selector.

6. **Selector de Atributo:** Selecciona un atributo y se repreneta con los []  y dentro el atributo.

 ```css
 [value="holamundo"]{
     color: yellow;
 }
/*Se utiliza para encontrar una palabra expecifica*/
 [value~="hola"]{
     color: yellow;
 }
/*no permite encontrar la palabra al principio o inicie - ALT + 94*/
  [value^="hola"]{
     color: yellow;
 }
/*no permite encontrar la palabra al final o termine*/
[value$="hola"]{
     color: yellow;
 }
/*no permite encontrar que contenga el elemento*/
 [value*="hola"]{
     color: yellow;
 }
 ``` 

## HERENCIA, ESPECIFICIDAD Y CASCADAD

**La cascada** es una manera de determinar que selectores van aplicar los estilos en caso que haya más de un selector que cambia un mismo elemento y de un diferente estilo.

El ultimo estilo declarado sera el que se tome.

**La Especificidad** es el metodo primodial que define que estilos se aplicaran primero.

![Especificidad](imagen/especificida.png)

El valor `!important` rompe la especificidad pero no es recomendable porque es una mala practica, igual que los ID y los estilos en lineas.

**La herencia** es la caractericas que nos permite hereda los estilos del contenedor principal a los hijos.

`inherit` es el valor que fuerza la herencia del padre.

## Metodología CSS: (BEM) Block Element Modifier

BEM (Block Element Modifier) es una metodología que nos proporciona una manera
de nombrar a nuestras clases en HTML para posteriormente poder usarlo en CSS,
BEM nos ayudará a mantener nuestro código flexible, modular y sencillo. Sobre todo
a lidiar con problemas sobre especificidad.
BEM significa Block Element Modifier, esto es debido a que todas las clases que
escribiremos se regirán por estas 3 partes.

### Bloque

Es una parte independiente en nuestro HTML, no necesita de otros elementos para
existir. Por ejemplo, una galería de imágenes o un menú, no necesita de otros
elementos para existir.
Los bloques tienen el nombre de lo que representará, ejemplo "header, menu,
galeria, footer"

```html
    <nav class="nav">
    </nav>
```

### Elemento

Un elemento siempre estará dentro de un bloque, debido a que es parte de él y es
dependiente del bloque, por ejemplo una imágen necesita una galería de imagenes
para existir, o un enlace necesita un menu para existir.
Los elementos tendrán el nombre primero de el bloque al que pertenece, dos
guiones bajos y despues el nombre de lo que representará ejemplo: "header__title,
menu__item, galeria__img, footer__img"

```html
    <nav class="nav">
        <img src="logo.svg" class="nav__logo">
    </nav>   
        
```

### Modificador

Los modificadores son usados en elementos o bloques, se usan para representar una
característica diferente que tendrá el modificador o elemento.
Los modificadores tendrán el nombre del bloque o del elemento, después otra vez el
nombre del elemento, dos guiones medios y la característica diferente que tendrá
este bloque o elemento.
Ejemplo: "boton—active" "header—wave".

```html
    <a href="#" class="nav__link">Inicio</a>
    <a href="#" class="nav__link">Acerca de</a>
    <a href="#" class="nav__link nav__link--active">Contacto</a>
```

## Box Model

Todos los elementos debe ser tratados como cajas, rectangulos y cuadrados.
Es la estructura que compone una caja o elmento en css que se divide en capas.

![Box Model](imagen/Box%20Model%20Curso.png)


### Propiedades Box Model

1. **WIDTH:** Nos permite dar una anchura al elemento o cajas.
1.1. ***max-width:*** Nos permite dar un ancho maximo al elemento.
1.2. ***min-width:*** Nos permite dar un ancho minimo del elemento.
2. **HEIGHT:** Nos permita dar una altura al elemento o cajas.
2.1. ***max-height:*** Nos permite dar una altura maxima al elemento.
2.1. ***min-height:*** Nos permite dar una altura minima del elemento.
3. **PADDING:** Es una capa de relleno que separa el borde de la caja del contenido.
   3.1. ***padding-top:*** Nos permite agregar relleno en la parte superior del elemento.
   3.2. ***padding-right:*** Nos permite agregar relleno en la parte derecha del elemento.
   3.3. ***padding-bottom:*** Nos permite agregar relleno en la parte inferior del elemento.
   3.4. ***padding-left:*** Nos permite agregar relleno en la parte izquierda del elemento.
4. **BORDER:** Es una capa que modifica el tamaño de los elementos es decir el tamño de la linea del borde de la caja.
El borde en CSS tiene 3 caracteristica en alcho el estido y el color, y para que funcione bien debe tener dos carcteristicas fundamentales que son el ancho y el estilo del borde.
4.1. ***border-top:*** Cambiar el borde superior.
4.2. ***border-right:*** Cambia el borde derecho.
4.3. ***border-bottom:*** Cambia el borde inferior.
4.4. ***border-left:*** Cambia el borde izquierdo.
4.5. ***border-width:*** Nos permite definir el ancho del borde y es un shorthand.
4.5.1. ***thin:*** Es un valor de border-width que crea un linea fina casi inpersectible.
4.5.2. ***medium:*** Es un valor de border-width que crea una linea un poco mas gruesa.
4.5.3. ***thick:*** Es un valor de border-width que crea una linea mas gruesa.
4.6. ***border-style:*** Define el estilo de la linea.
4.6.1. ***solid:*** Crea una linea solida.
4.6.2. ***dotted:*** Crea una linea punteada.
4.6.3. ***dashed:*** Crea una linea en guiones.
4.6.4. ***double:*** Crea una linea con lineas dobles.
4.6.5. ***groove:*** Crea un efecto de que estamos sumerjiendo el elemento.
4.6.6. ***ridge:*** Crea un efecto de como si estuvieramos sacandolo.
4.7. ***border-color:*** Define el color de la linea.

**Shorthand:** Los shorthand es una caracteristica que nos permite abreviar una propiedad padding o margin en una linea. 
```css
/* 4 Valores */
    padding: top right bottom left;
    margin: top right bottom left;
/* 3 valores */
    padding: top right/left bottom;
    margin: top right/left bottom;
/* 2 valores */
    padding: top/bottom right/left;
    margin: top/bottom right/left;
```










