---
title: Contenedor de apache
description: Crear un contenedor de apache 
---
#### 1 Crear y ejecutar el contenedor

Crear un contenedor de Apache si la imagen de apache no existe la descargará:

```bash
docker run -d --name my_pache_container -p 8080:80 httpd
```

Entrar al contenedor:
```bash
docker exec -it my_apache_container bash
```

Navegar al directorio `htdocs` donde se encuentran los archivos servidos por Apache:
```bash
cd /usr/local/apache2/htdocs
```
Listar los archivos en el directorio:
```bash
ls
```
Deberías ver `index.html` por defecto. El contenedor está listo y corriendo en [http://localhost:8080](http://localhost:8080) y por defecto lee el archivo `index.html`.

#### 2 Crear un Archivo HTML
Dentro del contenedor, crear un archivo `about.html` en el directorio `htdocs`:

```bash
pwd
```
Salida:
```
/usr/local/apache2/htdocs
```
Crea el archivo:
```bash
touch about.html
ls
```
Salida:
```
about.html  index.html
```
Agregar contenido al archivo:
```bash
echo '<h1>About</h1>' > about.html
```

Luego, visitar [http://[tu_dominio_o_ip]](http://[tu_dominio_o_ip]) para ver el nuevo archivo creado.
