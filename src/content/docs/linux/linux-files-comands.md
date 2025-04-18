---
title: Comandos para archivos linux
description: Comandos importantes para trabajar con archivos en linux
---
## Comprimir
```bash
# Comprimir todos los archivos de una carpeta
zip -r my-app.zip dist

# Descomprimir 
unzip my-app.zip
```

## Compartir archivos entre dos maquinas
### Con python
Desde la máquina donde tenemos el archivo a compartir
```bash
python -m http:server 8080
```
Desde la otra máquina se descarga el archivo 
```bash
# Descargar con curl
curl -O http://192.168.200.28:4040/my-app.zip

# Descargar con wget
wget http://192.168.200.28:4040/my-app.zip
```

### Con scp (vía SSH)
```bash
# Verificar el servicio de ssh
service ssh status

# Activar el servicio ssh
service ssh start

# Enviar el archivo, perirá la contraseña de la máquina de destino
scp archivo.zip usuario@IP_DESTINO:/ruta/de/destino

scp my-app.zip kali@192.168.500.39:/home/kali
```
### Con rsync (más control y resumes)
```bash
# Enviar el archivo, perirá la contraseña de la máquina de destino
rsync -avz archivo.zip usuario@IP_DESTINO:/ruta/destino

rsync -avz my-app.zip kali@192.168.500.39:/home/kali
```