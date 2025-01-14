---
title: Comandos
description: Comandos básicos de Docker
---

Listar las imagenes
```bash
docker images
```

Buscar una imagen 
```bash
docker search nginx
```

Descargar una imagen
```bash
docker pull nginx
```

Crear y ejecutar un contenedor a partir de una imagen en modo detach
```bash
docker run -d --name nginx_container nginx
```

Mostrar los contenedores en ejecución
```bash
docker ps
```

Mostrar todos los contenedores independientemente  de su estado
```bash
docker ps -a
```

Parar un contenedor
```bash
docker stop nginx_container
```

Ejecutar un contenedor
```bash
docker start nginx_container
```

Eliminar un contenedor (primero debe de estar stop)
```bash
docker rm nginx_container
```

Forzar la eliminación de contenedor
```bash
docker rm -f nginx_container
```

Entrar dentro de un contenedor (debe estar en ejecución)
```bash
docker exec -it nginx_container bash
```

Ejecutar un contenedor en un puerto diferente
```bash
docker run -d --name nginx_container -p 3000:80 nginx
```

Ver los ids de los contenedores
```bash
docker ps -aq
```

Poner en stop los contenedores 
```bash
docker stop (docker ps -aq)
```

Eliminar todos los contenedores (solo los que estan corriendo)
```bash
docker rm (docker ps -aq)
```

Forzar la eliminación de todos los contenedores
```bash
docker rm -f (docker ps -aq)
```

Ver variables de entorno de un contenedor
```bash
docker exec nginx_container env
```