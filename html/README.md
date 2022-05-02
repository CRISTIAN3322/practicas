# ETIQUETAS HTML

****
### `<a></a>` - Anchor 
#### Descripción
Para hacer enlaces en **HTML** utilizamos la etiqueta  `<a>`.
#### Ejemplo
```html
<a href="http://www.google.com" target="_blank">Ir a Google</a>
```

#### Atributos
`target="_blank"`: Con este atributo abrimos el enlace en una nueva pestaña.

****
### `<abbr></abbr>` - Abrebiación
#### Descripción
Para las abrebiaciones en **HTML** utilizamos la etiqueta `<abbr>`.
#### Ejemplo
```html
<abbr title="HiperText Mackup Lenguaje"> HTML </abbr>
```

#### Atributos
`title="Descripción"`: Crea un pequeño texto con la descripción de la abrebiación.

****
### `<address></address>` - Direcciones
#### Descripción
Es una Etiqueta semantica de **HTML** que utlizamos esclusivamente para direcciones.
#### Ejemplo
```html
<address>
    Carrera 1 Este 26 - 31 sur<br>
    Bogotá - Colombia
</address>
```

****
### Etiquetas map y area
#### Descripción
<a href="https://www.youtube.com/watch?v=lQczRyrQJV8&list=PLJubkp8BnTJtgC2QRHCpvLSWPJNaQv2SI&index=7">Video</a>

#### Recurso
<a href="https://www.image-map.net">sacar corrdenadas imagen</a>

#### Ejemplo 
```html
<!-- Imaagen de a utilizar con el atributo usermap que toma como valor el name de map. -->
<img src="./img/FB_IMG_1489835934153.jpg" alt="" usemap="#imagen-map">
<!-- etiqueta map con el atributo name como identificador  -->
    <map name="imagen-map">
        <!-- etiqueta area cuyo requisitos idespensabables son el atributo coords que toma las cooordenadas de la imagen y hrfe que no dice a donde no tiene que llevar esas coordenadas. -->
        <area target="" alt="" title="" href="https://www.youtube.com/watch?v=w1WAu_CpKAA" coords="218,217,220,279,244,311,254,332,265,341,282,343,290,334,303,312,327,278,320,261,330,247,326,216,310,227,280,194,250,214,244,237" shape="poly">
    </map>
```