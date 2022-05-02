# <span style="color:red; font-size:100px;">MARKDOWN</span>



## <span style="color:blue">ENCABEZADOS</span> 
Los encabezados se utiliza el caracter # y el titulo.

# H1 
## H2 
### H3
#### H4
##### H5
###### H6

## LISTAS
Las listas se utiliza el caracter * y el item.

* Primero
* Segundo
* Tercero
    * Tercero uno
    * Tercero dos

### LISTAS NUMERADAS
Las listas numeradas se utliza 

1. Arroz
2. Cereales
   2.1. Aritos
   2.2. Choco Choc

## IMAGENES
Para las imagenes usamos la estructura `![texto Alt](url)`

![Sintaxis Markdown](img/markdown_edteam.png)
![Poster][Markdown]

## ENLACES
Para los enlances usamos la misma estructura de las imagenes sin el !.

[Ir a curso de Markdown](https://app.ed.team/cursos/markdown/01/01)

### Truco enlances
Para ir a otro enlace con una palabra clave, usamos [Palabra] , encerramos la palabra clave entre llaves [Palabra].

Esta estructura se utiliza al final del documento. 
`[Palabra clave]: enlance`

### ESCRIBIR CODIGO EN LINEA
Para escribir codigo usamos `ALT + 96` que nos saca el asento invertido o Backtick.

`<div>`

### ESCRIBIR CODIGO EN BLOQUE
Para escribir codigo en bloque usamos 3 Backtick de apertura + el tipo de lenguaje y 3 de cierre.
Libreria para colorear Markdown es https://prismjs.com

```HTML
<div class="contenedor">
    <img alt="Poster" src="https://app.ed.team/cursos/markdown/01/01">
</div>

```

### NEGRITAS
Para colocar **NEGRITAS** usamos doble **.

### ITALICAS
Para colocar *Italicas* usamos un solo *.

### ITALICA EN NEGRITA
Para colocar ***Italica en Negrita*** usamos ***.

### CITAS TEXTUALES
Para colocar citas utilizamos `>`.
> Pra salir de un bloque de Markdown usamos dos saltos de linea.

### TABLA
Para crear una tabla usamos la estructura para una celda  `|---|`, dos celdas `|---|---|` y asi la cantidad de celdas de la tabla.
Para alinear el contenido se utiliza `:` si lo queremos a la izquierza o a la derecha y `: texto :` si lo queremos centrado..

| UNO  |  DOS  | TRES |
| :--- | :---: | ---: |

#### Estructura
```Markdown
<!-- Antes es el titulo de la tabla-->
| CELDA UNO | CELDA DOS | CELDA TRES |
| :-------: | :-------: | :--------: |
<!-- Despues es la informacion de la tabla -->
ITEM 1 | ITEM 2 | ITEM 3
```

### SEPARACION

Para realizar una linea de separación utilizamos `****`
****



[Palabra]: https://app.ed.team/cursos/markdown/01/01
[Markdown]: https://edteam-media.s3.amazonaws.com/courses/big/59e86529-71d1-4016-b0c8-c181a05443e9.jpg



