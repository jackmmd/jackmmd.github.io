--- 
title: Docker apacher container volume
description: Contenedor de react con apache usando un volumen
---
Crear contenedor de un frontend con apache usando un volumen del servidor
```bash
docker run -d --name my_app_container -p 80:80 -v /home/kali/projects/my_app/my_app:/usr/local/apache2/htdocs httpd
```
Crear un contenedor para una api usando un volumen del servidor 
```bash
docker run -d --name my_app_api_container -p 3000:3000 -v /home/kali/projects/my_app/my_app_api:/home/app my_app_api_image
```