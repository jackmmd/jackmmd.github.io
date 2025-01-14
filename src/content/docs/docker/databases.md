---
title: Bases de datos
description: Contenedores de bases de datos con docker 
---
#### MySQL
Crear y ejecutar un contenedor de base de datos
```bash
docker run --name mymysql -p 3306:3306  -e MYSQL_ROOT_PASSWORD=mi-secret -d mysql
```
Iniciar contenedor de base de datos (si esta en stop)
```bash
docker start mymysql
```

Entrar dentro del contenedor de base de datos
```bash
docker exec -it mymysql bash
```

##### Para una base de datos local

```bash
mysql -u root -p
# Enter password: mi-secret
```

Exportar una base de datos local desde un contenedor
```bash
docker exec mymysql /usr/bin/mysqldump -u root --password=duberly2004 db_digcru > backup.sql
```

Importar una base de datos a un contenedor
```bash
cat db_digcru_script.sql | docker exec -i mymysql /usr/bin/mysql -u root --password=duberly2004 db_digcru
```

##### Para una base de datos en producción
Conectarse a la base de datos
```bash
mysql -u root -pmi-password-example -h example.proxy.rlwy.net -P 41805 -D db_example
# -u -> Usuario
# -p -> Contraseña
# -h -> Nommbre del host o dirección ip
# -P -> Puerto
# -D -> Nombre de la base de datos
```

Exportar una base de datos (backup), este comando se debe ejecutar fuera de contenedor y el contenedor debe estar corriedo
```bash
docker exec mymysql /usr/bin/mysqldump -u root --password=mi-password-example -h example.proxy.rlwy.net -P 41804 db_example > backup_example.sql
# Salida del comando pwd -> /home/kali
# El backup se creará en el directorio actual, para verlo podemos usar: cat backup_example.sql
```

Importar una base de datos a otra existente pero debe estar vacía
```bash
# create database db_example_2; -> Nos aseguramos de que la base de datos exista en nuestro servidor
cat backup_example.sql | docker exec -i mymysql /usr/bin/mysql -u root --password=mi-password-example -h example.proxy.rlwy.net db_example_2
```

