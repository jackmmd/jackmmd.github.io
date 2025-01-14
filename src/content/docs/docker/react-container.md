---
title: Contenedor de react
description: Crear un contenedor de react 
---

1. Crear el Dockerfile

```bash
nano Dockerfile
```
```bash
FROM node:20
WORKDIR /my_app
COPY . . 
RUN npm install
RUN npm run build 
RUN npm install -g serve 
EXPOSE 3000 
CMD ["serve", "-s" ,"dist"]
```

2. Crear la imagen
```bash
docker build -t my_app_image .
```
```bash
docker images
```

3. Crear el contenedor basado en la imagen

```bash
docker run -d -p 80:3000 --name my_app_container my_app_image
```
```bash
docker ps
```

¡Listo! Ya podemos visitar 🚀
http://[tu_dominio_o_ip]