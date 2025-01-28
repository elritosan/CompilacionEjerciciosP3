# Usar la imagen base de nginx
FROM nginx:latest

# Instalar git para clonar el repositorio
RUN apt-get update && apt-get install -y git && apt-get clean

# Eliminar archivos existentes en el directorio de nginx
RUN rm -rf /usr/share/nginx/html/*

# Clonar el repositorio desde GitHub
RUN git clone https://github.com/elritosan/CompilacionEjerciciosP3.git /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80