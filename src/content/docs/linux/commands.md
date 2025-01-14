---
title: Comandos
description: Comandos Básicos en linux
---

Crear un archivo y asignar contenido
```bash
touch index.html && echo '<h1>index</h1>'>index.html
```

Forma corta de crear archivos y asignar contenido
```bash
echo '<h1>index</h1>' >> index.html
```

Ver las últimas dos líneas de un archivo
```bash
tail -n 2 /etc/passwd
```

Listar los dispositivos USB conectados
```bash
lsusb
```

#### Controlar pantalla

Lista los monitores conectados
```bash
xrandr
```

Habilitar el monitor llamado `eDP`
```bash
xrandr --output eDP --auto
```

Deshabilitar el monitor llamado `eDP`
```bash
xrandr --output eDP --off
```

#### Controlar volumen

Subir el volumen un 10%
```bash
amixer sset Master 10%+
```

Bajar el volumen un 10%
```bash
amixer sset Master 10%-
```

Desactivar sonido al cometer errores o al tomar capturas
```bash
xset -b
