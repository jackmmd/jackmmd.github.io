---
title: Apache React Deploy
description: Desplegar un proyecto de react con apache
---

Instalar apache2
```bash
sudo apt update
sudo apt install apache2
sudo systemctl status apache2 
```

```bash
# Configuramos permisos correctos
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
mkdir /var/www/html/my-app
```

```bash
# En la carpeta de nuestro proyecto react compilamos la aplicación
npm run build
# Copiamos los archivos de la carpeta dist a la carpeta de apache
cp -r dist/* /var/www/html/my-app
```

```bash
# Hacemos una copia del archivo de configuración por defecto
cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/my-app.conf
```

```bash
# Editamos el archivo de configuración
nano /etc/apache2/sites-available/my-app.conf

# Contenido del archivo
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html/my-app
        <Directory /var/www/html>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
        </Directory>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

```bash
# Desactivamos el sitio por defecto
sudo a2dissite 000-default.conf

# Activamos nuestro sitio
sudo a2ensite my-app.conf 

# Recargar apache2
systemctl reload apache2
```

```bash
# Crear un archivo .htaccess 
nano /var/www/html/my-app/.htaccess

# Contenido del archivo .htaccess
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```

```bash
# Permitimos reescribir URLs
sudo a2enmod rewrite

# Recargamos
systemctl reload apache2
```

Listo la app estará disponible en:
[http://[mi_ip]:80]("")
