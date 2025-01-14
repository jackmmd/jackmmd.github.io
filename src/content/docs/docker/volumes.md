---
title: Volumes
description: Creación y uso de Volumes 
---

#### Crear un Volume
Crea un volume:
```bash
docker volume create my_volume
```

Lista todos los volumes creados:
```bash
docker volume ls
```

Inspecciona un volume para ver detalles:
```bash
docker volume inspect my_volume
```
Ejemplo de salida:
```json
[
    {
        "CreatedAt": "2024-10-28T11:39:35-05:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/my_volume/_data",
        "Name": "my_volume",
        "Options": null,
        "Scope": "local"
    }
]
```

#### Usar un Volume en un Contenedor
Más detalles para configurar un contenedor de Apache con Docker:

```bash
docker run -d --name my_apache_container -p 8080:80 -v my_volume:/usr/local/apache2/htdocs httpd
```

Accede al contenedor:
```bash
docker exec -it my_apache_container bash
```

Navega al directorio `htdocs`:
```bash
cd /usr/local/apache2/htdocs
ls
```
Deberías ver:
```
index.html
```

Verifica los archivos del volume desde el host:
```bash
sudo ls /var/lib/docker/volumes/my_volume/_data
```
Salida:
```
index.html
```

Si creas archivos dentro del contenedor, se reflejarán en el volume:
```bash
echo '<h1>about</h1>' >> about.html
ls
```
Salida:
```
about.html  index.html
```
Verifica nuevamente desde el host:
```bash
sudo ls /var/lib/docker/volumes/my_volume/_data
```
Salida:
```
about.html  index.html
```

##### Eliminar un Volume
Si el volume está en uso, no se podrá eliminar. Detén y elimina el contenedor primero:
```bash
docker stop my_apache_container
docker rm my_apache_container
docker volume rm my_volume
```

#### Usar un Directorio del Host como Volume
Crea un directorio y dos archivos dentro:
```bash
mkdir /home/jackmmd/my_host_directory && cd my_host_directory
echo '<h1>index</h1>' >> index.html
echo '<h1>about</h1>' >> about.html
ls
```
Salida:
```
about.html  index.html
```

Crea un contenedor usando `my_host_directory` como volume:
```bash
docker run -d --name my_apache_container -p 8080:80 -v /home/jackmmd/my_host_directory:/usr/local/apache2/htdocs httpd
```

Accede al contenedor y navega al directorio `htdocs`:
```bash
docker exec -it my_apache_container bash
cd /usr/local/apache2/htdocs
ls
```
Deberías ver:
```
about.html  index.html
```
Los archivos también estarán disponibles en:
- [http://localhost:8080](http://localhost:8080)
- [http://localhost:8080/about.html](http://localhost:8080/about.html)

#### Crear un Volume desde un Dockerfile
Dentro del directorio `my_host_directory`, crea un archivo `Dockerfile`:
```bash
nano Dockerfile
```
Contenido:
```Dockerfile
FROM httpd
VOLUME /usr/local/apache2/htdocs
COPY . /usr/local/apache2/htdocs
```

Construye la imagen:
```bash
docker build -t my_apache_image .
docker images
```
Ejemplo de salida:
```
REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
my_apache_image          latest    e216491dd672   21 minutes ago   148MB
```

Crea un contenedor a partir de la imagen:
```bash
docker run -d --name my_apache_container -p 8080:80 my_apache_image
```

Accede al contenedor y navega al directorio `htdocs`:
```bash
docker exec -it my_apache_container bash
cd /usr/local/apache2/htdocs
ls
```
Deberías ver:
```
Dockerfile  about.html  index.html
```

Inspecciona el contenedor para verificar la propiedad `Mounts`:
```bash
docker inspect my_apache_container
```
Ejemplo de salida:
```json
"Mounts": [
    {
        "Type": "volume",
        "Name": "20fea354ff012ab676ce9b27fc7ba41627e469ec78aa7f290fa5af6bfd7ebeda",
        "Source": "/var/lib/docker/volumes/20fea354ff012ab676ce9b27fc7ba41627e469ec78aa7f290fa5af6bfd7ebeda/_data",
        "Destination": "/usr/local/apache2/htdocs",
        "Driver": "local",
        "Mode": "",
        "RW": true,
        "Propagation": ""
    }
],
```

Lista los archivos del nuevo volume creado desde el host:
```bash
sudo ls /var/lib/docker/volumes/20fea354ff012ab676ce9b27fc7ba41627e469ec78aa7f290fa5af6bfd7ebeda/_data
```
Salida:

```bash
Dockerfile  about.html	index.html
```