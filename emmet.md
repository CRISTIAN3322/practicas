## div#rojo
```html
<div id="rojo"></div>
```
## div.cuadrado
```html
<div class="cuadrado"></div>
```
## div.cuadrado.cuadrado-fila
```html
<div class="cuadrado cuadrado-fila"></div>
```
## div.cuadrado.cuadrado-fila#rojo
```html
<div class="cuadrado cuadrado-fila" id="rojo"></div>
```
## div{Contenido}
```html
<div>Contenido</div>
```
## div.cuadrado.cuadrado-fila#rojo{Contenido}
```html
<div class="cuadrado cuadrado-fila" id="rojo">Contenido</div>
```
## a[href="#"]
```html
<a href="#"></a>
```
## a[href="#" title="Enlace"]
```html
<a href="#" title="Enlace"></a>
```
## a[href="#" title="Enlace" target="_blank"].cuadrado.cuadrado-fila#rojo{Contenido}
```html
<a href="#" title="Enlace" target="_blank" class="cuadrado cuadrado-fila" id="rojo">Contenido</a>
```
## header+main
```html
<header></header>
<main></main>
```
## header+main+footer
```html
<header></header>
<main></main>
<footer></footer>

```
## header>h1
```html
<header>
    <h1></h1>
</header>

```
## header>h1>a
```html
<header>
    <h1><a href=""></a></h1>
</header>
```
## (header>h1)+main
```html
<header>
    <h1></h1>
</header>
<main></main>
```
## (header>h1+nav)+(main>section>h2+p)+footer
```html
<header>
    <h1></h1>
    <nav></nav>
</header>
<main>
    <section>
        <h2></h2>
        <p></p>
    </section>
</main>
<footer></footer>
```
## ul>li*5
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```
## ul>li{$}*5
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```
## html:5>(header>(h1>a[href="#" title="Logo"]{Logo})+(nav>ul>(li>a[href="#"title="Item $"]{Item $})*5)+(ul.rrss>li>a[href="#" title="RRSS $"target="_blank" rel="noopener"]{rrss $}))+(main>(section>(hgroup>h2{Titular}+h3{Subtitular})+p{Lorem})*2)+(footer>(ul>(li>a[href="#" title="#"]{Contenido $})*3)*2)+(div.cookies>p{Lorem}+button{Aceptar})
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <header>
    <h1><a href="#" title="Logo">Logo</a></h1>
    <nav>
      <ul>
        <li><a href="#" title="Item 1">Item 1</a></li>
        <li><a href="#" title="Item 2">Item 2</a></li>
        <li><a href="#" title="Item 3">Item 3</a></li>
        <li><a href="#" title="Item 4">Item 4</a></li>
        <li><a href="#" title="Item 5">Item 5</a></li>
      </ul>
    </nav>
    <ul class="rrss">
      <li><a href="#" title="RRSS $" target="_blank" rel="noopener">rrss $</a></li>
    </ul>
  </header>
  <main>
    <section>
      <hgroup>
        <h2>Titular</h2>
        <h3>Subtitular</h3>
      </hgroup>
      <p>Lorem</p>
    </section>
    <section>
      <hgroup>
        <h2>Titular</h2>
        <h3>Subtitular</h3>
      </hgroup>
      <p>Lorem</p>
    </section>
  </main>
  <footer>
    <ul>
      <li><a href="#" title="#">Contenido 1</a></li>
      <li><a href="#" title="#">Contenido 2</a></li>
      <li><a href="#" title="#">Contenido 3</a></li>
    </ul>
    <ul>
      <li><a href="#" title="#">Contenido 1</a></li>
      <li><a href="#" title="#">Contenido 2</a></li>
      <li><a href="#" title="#">Contenido 3</a></li>
    </ul>
  </footer>
  <div class="cookies">
    <p>Lorem</p>
    <button>Aceptar</button>
  </div>
</body>
</html>
```