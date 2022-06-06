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
}****

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

![Box Model](imagen/Box_Model_Curso.png)


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

5. **MARGIN:** Permite establecer una sepracion en 4 direcciones entre dos o mas cajas.
   5.1. ***margin-top:*** Define el margen superiror.
   5.2. ***margin-right:*** Define el margen derecho.
   5.3. ***margin-bottom:*** Define el margen inferior.
   5.4. ***margin-left:*** Define el margen izquierdo.

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

### Colapso de Margenes
Los márgenes Top (en-US) y bottom de los bloques a veces están combinados (colapsados) en un solo margen cuyo tamaño es el mayor de los márgenes combinados, un comportamiento conocido como colapso de margen. Ten en cuenta que los márgenes de flotantes y elementos con posición absoluta nunca colapsan.

El colapso de margen ocurre en tres casos básicos:

Hermanos adjacentes
Los márgenes de los hermanos adjacentes son colapsados (excepto cuando el último hermano necesita ser limpiado después de usar los flotantes).
Padre y primer/último hijo
Si no hay un borde, padding, contenido en línea, block formatting context creado, o un limpiado para separar el margin-top (en-US) de un bloque del margin-top (en-US) de su primer bloque hijo; o no hay borde, padding, contenido en línea, height, min-height, o max-height para separar el margin-bottom de un bloque del margin-bottom de su último hijo, entonces esos márgenes colapsan. El margen colapsado termina fuera del padre.
Bloques vacíos
Si no hay borde, padding, contenido en línea, height, o min-height para separar el margin-top (en-US) de un bloque de su margin-bottom, entonces sus márgenes superiores e inferiores colapsan.
Cosas a tener en cuenta:

Cuando estos casos están combinados ocurrirá un colapso de márgenes más complejo (de más de dos márgenes).
Estas reglas se aplican incluso a márgenes con valor cero, así que el margen del primer/último hijo siempre termina fuera de su padre (de acuerdo a las reglas de arriba) independientemente de que el margen del padre sea o no sea cero.
Cuando se trata de márgenes negativos, el tamaño del margen colapsado es la suma del margen positivo más grande y el margen negativo más pequeño (el más negativo).
Cuando todos los márgenes son negativos, el tamaño del margen colapsado es el margen más pequeño (el más negativo). Esto se aplica tanto a los elementos adyacentes como a los elementos anidados.

### Box-sizing
La propiedad CSS box-sizing como el user agent (en-US) debe calcular el ancho y alto total de un elemento.

Por defecto en el modelo de caja de CSS, el ancho y alto asignado a un elemento es aplicado solo al contenido de la caja del elemento. Si el elemento tiene algun borde (border) o relleno (padding), este es entonces añadido al ancho y alto a alcanzar el tamaño de la caja que es desplegada en pantalla. Esto significa que cuando se definen el ancho y alto, se tiene que ajustar el valor definido para permitir cualquier borde o relleno que se pueda añadir.

La propiedad box-sizing puede ser usada para ajustar el siguiente comportamiento:

***content-box:*** es el comportamiento CSS por defecto para el tamaño de la caja (box-sizing). Si se define el ancho de un elemento en 100 pixeles, la caja del contenido del elemento tendrá 100 pixeles de ancho, y el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.
***border-box:*** le dice al navegador tomar en cuenta para cualquier valor que se especifique de borde o de relleno para el ancho o alto de un elemento. Es decir, si se define un elemento con un ancho de 100 pixeles. Esos 100 pixeles incluíran cualquier borde o relleno que se añadan, y la caja de contenido se encogerá para absorber ese ancho extra. Esto típicamente hace mucho más fácil dimensionar elementos.

### Display
La propiedad CSS display especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos, como flow layout(Diseño de Flujo), grid(Cuadricula) o flex(Flexible). 

Formalmente la propiedad display establece los tipos de visualización interna y externa de un elemento. La tipo externa establece la participacion de un elemento en flow layout; la tipo interna establece el layout(Diseño) de los hijos. Algunos valores de display estan totalmente definidos con sus especificaciones propias; por ejemplo el detalle de que pasa cuando display: flex es declarado y definido en la especificacion de Modelo Flexible de Caja(Flexible Box Model specification) de CSS. Vea la siguientes tablas para mas especificaciones individuales.

Además de los Diferentes Tipos de caja de Visualizacion, el valor de none permite Desactivar la Visualizacion DE UN Elemento; cuando no se utiliza none, todos los elementos descendentes también quedan desactivados. El documento se procesa como si el elemento no existiera en el árbol de documentos.

#### Valores:
1. ***block*** El elemento genera un cuadro de elemento de bloque.
2. ***inline*** El elemento genera uno o más cuadros de elemento en línea.

### Border radius
Es la propiedad que nos permite redondear vértices de forma independiente.
Es un shorthand que engloba 4 propiedades:
***border-top-left-radius ->*** Radio del borde superior izquierdo
***border-top-right-radius ->*** Radio del borde superior derecho
***border-bottom-right-radius ->*** Radio del borde inferior derecho
***border-bottom-left-radius ->*** Radio del borde inferior izquierdo

Si sólo recibe un valor dibujará un círculo en el vértice que especifiquemos

**border-top-right-radius: 50px; ->** Círculo con 50px de radio

Si recibe dos valores dibujará una elipse en el vértice que especifiquemos

**border-top-right-radius: 50px 100px; ->** Elipse con 50px en el radio X y 100px en el radio Y

Si utilizamos el border-radius como shorthand hay diferencias entre si queremos dar un valor a cada lado (círculo) o dos (elipse)

Con un solo valor:
***border-radius: 50px; ->*** Círculo de 50px a cada vértice
***border-radius: 50px 100px; ->*** Círculo de 50px en el vértice superior izquierdo y en el inferior derecho y de 100px en el superior derecho y el inferior izquierdo
***border-radius: 50px 100px 200px; ->*** Círculo de 50px en el vértice superior izquierdo, de 100px en el superior derecho y el inferior izquierdo y de 200px en el inferior derecho.
***border-radius: 50px 100px 200px 300px; ->*** Círculo de 50px en el vértice superior izquierdo, de 100px en el superior derecho, de 200px en el inferior derecho y de 300px en el inferior izquierdo.

Si le damos 2 valores separados por una barra dibujará una elipse en cada vértice con los radios que le especifiquemos.
border radius: 50px / 100px; -> Elipse con 50px en el radio X y 100px en el radio Y

Con dos valores:
Al tener dos radios debemos agrupar los radios y separarlos por una barra.
border-radius: 25px / 50px; -> Elipse de 25px en Y y 50px en X a cada vértice.

***border-radius: 25px 50px / 50px 100px; ->*** Elipse de 25px en Y y 50px en X a los vértices superior izquierdo e inferior derecho y una elipse de 50px en Y y 100px en X en los vértices superior derecho e inferior izquierdo.

***border-radius: 25px 50px 75px / 50px 100px 150px; ->***
Elipse de 25px en Y y 50px en X al vértice superior izquierdo, una elipse de 50px en Y y 100px en X en los vértices superior derecho e inferior izquierdo y una elipse de 75px en Y y de 150px en X al vértice inferior derecho.

***border-radius: 25px 50px 75px 100px / 50px 100px 150px 200px; ->*** Elipse de 25px en Y y 50px en X al vértice superior izquierdo, una elipse de 50px en Y y 100px en X en el vértice superior derecho, una elipse de 75px en Y y de 150px en X al vértice inferior derecho y una elipse de 100px en X y 200px en Y en el vértice inferior izquierdo.

### Box Shadow
La propiedad box-shadow se creó para añadir efectos de sombra a nuestra caja.

En esencia lo que hace es crear un clon de la caja respetando la forma de su box-model (ancho, alto, redondez)

La sintaxis de box-shadow se puede escribir de distintas formas según lo que queramos conseguir.
Los valores que le podemos poner son:
***offset-x ->*** Desplazamiento en x (obligatorio)
***offset-y ->*** Desplazamiento en y (obligatorio)
***blur-radius ->*** Desenfoque de la sombra
***spread-radius ->*** Expansión de la sombra
***color ->*** El color de la sombra, si no lo especificamos lo heredará del elemento al que pertenece
***inset ->*** Determina si la sombra será interior o exterior

### Colores
La mayoría las pantallas funcionan con un modo de color aditivo. La suma de RGB da como resultado un blanco
Tenemos varias formas de dar color en CSS

Keywords -> Palabras clave que representan colores https://www.w3.org/wiki/CSS/Properties/color/keywords
    
#### IMPORTANTE:  Recordad que existe el color "transparent"

CurrentColor: Es una palabra clave que se puede usar en lugar de cualquier valor de color y usará el valor ya sea establecido o heredado en la propiedad color.

**RGB/RGBA**
En el modo RGB tenemos tres canales (Red, Green, Blue) y tenemos 8 bits de color por canal, (cada bit tiene dos posibles valores 0 ó 1) lo que significa que tenemos 2^8 posibles valores, que van desde 0 hasta 255.
    
Esto nos da un total de 255 * 255 * 255 = 16.581.375 colores.

Su sintaxis es rgb(R,G,B)

Si ponemos todos los canales a 0 tendremos un negro puro y si los ponemos a 255 tendremos un blanco.

Para movermos por la gama de grises debemos poner los 3 canales con el mismo valor, si ponemos los 3 canales a 128 tendremos el gris puro.

    
El modo RGB nos da la opción de utilizar un cuarto canal que correspondería al canal alpha, es decir, la transparencia, y su valor va desde 0 a 1. Tenemos dos sintaxis para utilizar el canal aplha
***rgba(R,G,B,A)***
***rgb(R G B / A)***

**Hexadecimal**
La notación hexadecimal es la más común en desarrollo web, se basa en los mismos principios que el RGB pero escrito en notación hexadecimal.

El sistema hexadecimal es un sistema basado en 16 valores del 0 al 15
Utiliza los dígitos del 0 al 9 y las letras de la A a la F
    
En este tipo de notacíon también necesitamos 256 valores.

Se compone de 16 caracteres en parejas ya que 16*16 = 256
0 1 2 3 4 5 6 7 8 9 A B C D E F
0 1 2 3 4 5 6 7 8 9 A B C D E F

Para indicar que vamos a usar notación hexadecimal debemos usar el símbolo de hash/almohadilla # y a continuación usaremos esta notación por parejas.
`#RRGGBB`
Cuando una pareja usa el mismo valor se puede omitir el segundo valor, siempre que se haga en las 3 parejas.

rgb(255,255,255) -> #FFFFFF -> #FFF
rgb(0,0,0) -> #000000 -> #000

También tenemos la opción de usar transparencias en hexadecimal añadiendo un cuarto canal que sigue las mismas normas.

rgb(0 0 0 / .5) -> #00000080 ~> #0007

***HSL / HSLA***
El modo de color HSL es el más intuitivo para los humanos. Su nombre viene de las siglas Hue (tono) Saturation (saturación) y Lightness (luminancia)
    
El primer valor es el ángulo en el círculo cromático donde 0 y 360 será el color rojo. Hay ciertos valores que os pueden servir como referencia para relacionar mejor los colores con sus ángulos.
0 -> rojo
60 -> amarillo
120 -> verde
180 -> cyan
240 -> azul
300 -> magenta

El segundo valor es la saturación o intensidad del color.
0% -> gris
100% -> color puro

El tercer valor es la luminosidad del color
0% -> negro, nada de luz
100% -> blanco, luz máxima

#### Nota: Es importante que aunque el valor de saturación o luminancia sea 0 hay que poner 0% si no, no funcionará

El modo HSL también admite transparencia y su sintaxis es la misma que la del modo RGB. Tenemos dos sintaxis disponible.
hsla(h,s,l,a)
hsl(h s l / a)
En ambos casos el valor alpha va de 0 a 1

Existen otros cuatro modos de color en los que está trabajando que serían CMYK (Cyan, Magenta, Yellow y Black), HWB (Hue, Whiteness, Blackness), lab(Lightness, distance a, distance b) y lch(Lightness, chroma, hue), todos están en el borrador del modulo de color de nivel 4 pero aún no es estándar.

### Fuentes e Iconos
La tipografía es la ciencia que estudia el diseño y uso de los tipos de letra

Las fuentes son tipos específicos de letra

  1. Los glifos son cada uno de los dibujos que representan cada símbolo de la fuente, incluidos los espacios.

  2. Los estilos de fuente son las modificaciones que se hacen a las fuentes, como el grosor o la inclinación.

  3. Familia tipográfica, son las diferentes fuentes que pertenecen a una misma fuente base.

  Cuando usamos una propiedad text-* estamos afectando a un bloque completo

  Cuando utilizamos una propiedad font-* afectamos a la fuente del texto.

  Fuentes predeterminadas, son las fuentes que se consideran seguras ya que son genéricas y no establecen una familia tipográfica, si no un estilo de fuente.
    serif: Fuentes que tienen serifas (adornos en los caracteres)

    sans-serif: Fuentes sin serifas

    monospace: Fuentes que tienen el mismo espaciado entre todos sus caracteres.

    cursive: Fuentes que pretenden emular escritura a mano, con ligaduras y trazos fluidos

    fantasy: Fuentes que suelen ser decorativas

  Fuentes desde un servidor remoto, son fuentes que se encuentran en un servidor y que nosotros descargamos para su uso, la más famosa es Google Fonts

  Siempre que utilicemos fuentes no genéricas, debemos poner fuentes genéricas de fallback (respaldo)
    
  **Google Icons**
    Material Icons
       https://fonts.googleapis.com/css?family=Material+Icons
    Material Icons Outlined
       https://fonts.googleapis.com/css?family=Material+Icons+Outlined
    Material Icons Two Tone
       https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone
    Material Icons Rounded
       https://fonts.googleapis.com/css?family=Material+Icons+Round
    Material Icons Sharp
       https://fonts.googleapis.com/css?family=Material+Icons+Sharp
      
    Nota: Si vas a usar una gran cantidad de iconos en tu web compensa usar la librería remota
    Si sólo usarás unos pocos es mejor descargarlos en formato svg y utilizarlos como imágenes

   **Formatos para fuentes**
      True Type Font (TTF) -> Fue el primer formato estándar.

      Open True Type Font (OTF) -> Facilita o implementa la creación de las curvas.

      Web Open Font Format (WOFF) (WOFF2) -> Es un formato mucho más ligero y mejora el rendimiento. Funciona a través de metadatos. WOFF tiene soporte total y WOFF2 no funciona en internet explorer.

      Scalable Vector Graphics (SVG) -> Para efectos y animaciones sobre el texto, no es recomendable usarlo en el texto genérico de la web, tiene muchos problemas.

      Embedded Open Type (EOT) -> Primer formato digital propuesto para sitios WEB y es comprimido. Se quedó como una propuesta pero no pasó a ser un estándar.

   **Regla @font-face**
      Esta es la forma de utilizar fuentes que tenemos descargadas y que no traemos de un servidor remoto, cuando usamos google fonts, esto es lo que está pasando por detrás.

La sintaxis es:

    @font-face {
    font-family: Nombre de la familia, se lo asignamos nosotros;
        src: aquí pondremos dos tipos de valores.
        local() -> pondremos el nombre de la fuente para buscarla en el ordenador del usuario, de esa forma podremos evitar descargarla
        url() -> Si no encontramos esa fuente procederemos a descargarla.
        Existe otro valor, menos usado que es format
        format() -> Este valor lo pasaremos de forma opcional si queremos ser más específicos con la fuente que vamos a buscar o descargar, si no lo ponemos cogerá el primer formato soportado, si lo ponemos sólo usará el que hemos establecido, y si no lo encuentra no hará nada. 
         }```

Podemos añadirle más valores como font-style, font-weight y font-display(experimental), pero esos son opcionales.

**Transformaciones de texto**
*Text-transform:* Esta propiedad nos permite hacer transformaciones ESTÉTICAS en nuestro texto.
Admite los valores:

         1. none: No se aplicará ninguna transformación.
         2. uppercase: El texto se pondrá en mayúsculas
         3. lowercase: El texto se pondrá en minúsculas
         capitalize: Transforma la primera letra de cada palabra en mayúscula.
**Adornos en el texto**
*Text-decoration:* Esta propiedad nos permite controlar la línea que podemos poner en los textos.
Admite los valores:

         1. none: Elimina cualquier línea.
         2. underline: Coloca una linea bajo el texto.
         3. overline: Coloca una linea sobre el texto.
         4. line-through: Coloca una linea tachando el texto.

**Text-shadow:** Funciona exáctamente igual que box-shadow, con la única diferencia de que no admite el valor inset ni la expansión de la sombra.

Los valores son:

         1.offsetX: desplazamiento horizontal.
         2. offsetY: desplazamiento vertical
         3. blur: desenfoque.
         4. color: color, por defecto coge el del texto.
   
**Espaciado en fuentes y textos**

    1. letter-spacing: Establece la separación entre caracteres, se puede establecer en cualquier medida válida para CSS

    2. word-spacing: Establece la separación entre palabras,
    se puede establecer en cualquier medida válida para CSS

    3. line-height: Establece el alto de cada línea, se puede dar una medida concreta o se puede poner un número que se multipliará por el font size del texto al que se lo estemos aplicando.

**Orientación del texto.**

   *writing-mode:* Establece la dirección del texto









