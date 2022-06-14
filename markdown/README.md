<center><img src="./img/descargar.png"></center>

Markdown es un lenguaje de marcado ligero creado en 2004 por John Gruber, trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

Facilita la aplicación de formato y estilo a texto plano empleando una serie de caracteres de forma especial.

El objetivo de su creador fue hacer que la gente pudiera escribir usando un formato de texto plano fácil de leer, fácil de escribir y con la posibilidad de convertir su documento en HTML válido.

La gran simpleza de su sintaxis hizo que tuviera una rápida adopción y popularidad en la comunidad de desarrolladores.

Actualmente aparte de permitir generar contenido HTML de forma dinámica, también se emplea (casí de forma estándar) para la creación de documentación técnica y con la proliferación de la arquitectura JAM Stack para la creación de sitios estáticos a través de herramientas de tipo SSG (Static Site Generator) y SSR (Server Side Rendering) como Hugo, Gatsby, Eleventy, Next.js, Sergey, Astro, entre otros, Markdown se ocupa para la generación de contenido editorial (artículos de blog) de forma dinámica.


# Sintaxis Markdown
La sintaxis es muy sencilla y cuenta con varias opciones para algunos de sus elementos. Básicamente se trata de añadir ciertos caracteres al inicio o final de la línea o el elemento al que vamos a aplicar el formato.


# Encabezado
Los encabezados se utiliza el caracter # y el titulo.

# Encabezado de nivel 1

## Encabezado de nivel 2

### Encabezado de nivel 3

#### Encabezado de nivel 4

##### Encabezado de nivel 5

###### Encabezado de nivel 6


# Textos
Podemos aplicar algunos estilos al texto como: cursiva, negritas y tachado.

```markdown
_cursiva_

**negrita**

~~tachado~~

**_cursiva y negrita_**

_~~cursiva y tachado~~_

**~~negrita y tachado~~**

**_~~cursiva, negrita y tachado~~_**
```

### Contenido Markdown
_cursiva_

**negrita**

~~tachado~~

**_cursiva y negrita_**

_~~cursiva y tachado~~_

**~~negrita y tachado~~**

**_~~cursiva, negrita y tachado~~_**

# Divisiones
En HTML se tiene la etiqueta <hr> para definir una división o ruptura semántica entre bloques de contenido. Se visualiza como una línea horizontal.

```markdown
Un bloque de contenido.

---

Otro bloque de contenido.
```

# Listas
Podemos utilizar listas ordenadas y desordenadas en Markdown.

## Lista Numeradas
Las listas numeradas se utliza 

1. Arroz
2. Cereales
   2.1. Aritos
   2.2. Choco Choc

## Listas desordenadas

- Primavera
- Verano
- Otoño
- Invierno

## Listas anidadas
Si quieres generar listas anidadas (sublistas), usa la indentación para controlar los niveles de los elementos de la lista.

```markdown
- Primavera
  - Abril
  - Mayo
  - Junio
- Verano
  - Julio
  - Agosto
  - Septiembre
- Otoño
  1. Octubre
  2. Noviembre
     - Día de Muertos
     - _Black Friday_
  3. Diciembre
- Invierno
  1. Enero
  2. Febrero
```

# Citas
Podemos dar formato de cita a un texto, anteponiendo a la línea de texto un carcater de mayor qué (>).

Podemos declarar citas en una sóla línea o en bloque.

## Citas en línea
```markdown
> Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad. - Marco Aurelio.
```
### Contenido Markdown

> Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad. - Marco Aurelio.

## Citas en bloque
```markdown
> Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.
>
> Marco Aurelio.
```
### Contenido Markdown

> Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.
>
> Marco Aurelio.

# Anclas Internas
Para hacer un ancla internar en Markdown en el parentesis se conla la almuadilla y el encabezado.

*Nota:* Si en elnace tiene varias palabra cada espacio ultilizamos el guion.

```markdown
[Arriba](#encabezado)
[Varias-Palabras](#citas-en-bloque)

```
[Arriba](#encabezado)
[Citas en Bloque](#citas-en-bloque)



# Imagenes
Para las imagenes usamos la estructura `![texto Alt](url)`

![Sintaxis Markdown](img/markdown_edteam.png)
![Poster][Markdown]


# Enlaces
Para los enlances usamos la misma estructura de las imagenes sin el !.

[Ir a curso de Markdown](https://app.ed.team/cursos/markdown/01/01)

## Truco enlances
Para ir a otro enlace con una palabra clave, usamos [Palabra] , encerramos la palabra clave entre llaves [Palabra].

Esta estructura se utiliza al final del documento. 
`[Palabra clave]: enlance`

# Escribir Código en Linea
Para escribir codigo usamos `ALT + 96` que nos saca el asento invertido o Backtick.

`<div>`

# Escribir Código en bloque
Para escribir codigo en bloque usamos 3 Backtick de apertura + el tipo de lenguaje y 3 de cierre.
Libreria para colorear Markdown es https://prismjs.com

```HTML
<div class="contenedor">
    <img alt="Poster" src="https://app.ed.team/cursos/markdown/01/01">
</div>

```

# Tablas
Para crear una tabla usamos la estructura para una celda  `|---|`, dos celdas `|---|---|` y asi la cantidad de celdas de la tabla.
Para alinear el contenido se utiliza `:` si lo queremos a la izquierza o a la derecha y `: texto :` si lo queremos centrado..

| UNO  |  DOS  | TRES |
| :--- | :---: | ---: |

## Estructura
```Markdown
<!-- Antes es el titulo de la tabla-->
| CELDA UNO | CELDA DOS | CELDA TRES |
| :-------: | :-------: | :--------: |
<!-- Despues es la informacion de la tabla -->
ITEM 1 | ITEM 2 | ITEM 3
```

# Separación

Para realizar una linea de separación utilizamos `****`
****

# Divisiones
En HTML se tiene la etiqueta `<hr>` para definir una división o ruptura semántica entre bloques de contenido. Se visualiza como una línea horizontal.

```markdown
Un bloque de contenido.

---

Otro bloque de contenido.
```
---

# Escape de caracteres
Se le llama escape de caracteres al proceso que hace un lenguaje de marcado o programación para omitir los caracteres especiales que usa para la definición de su sintaxis. Al escapar caracteres, el lenguaje los interpretará como simple texto plano.

Por ejemplo Markdown usa los siguientes caracteres especiales: guión bajo, medio, asterísco, corchetes cuadrados, paréntesis, almohadilla, acento grave, barra invertida, etc.

Para escapar un caracter en Markdown sólo tenemos que anteponerle un barra invertida `\`.

## Código Markdown
```markdown
Texto en \_cursiva\_ y \*\*negrita\*\*.
```
## Contenido Markdown
Texto en \_cursiva\_ y \*\*negrita\*\*.


[Palabra]: https://app.ed.team/cursos/markdown/01/01
[Markdown]: https://edteam-media.s3.amazonaws.com/courses/big/59e86529-71d1-4016-b0c8-c181a05443e9.jpg



