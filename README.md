# CompilacionEjerciciosP3 - Imagen Docker

Esta imagen Docker contiene la aplicación web CompilacionEjerciciosP3, servida con nginx.

## Cómo usar

1. Descargar la imagen:

    docker pull elritosan/nginx-compilacionejerciciosp3:latest

2. Ejecutar el contenedor:

    docker run -d -p 8080:80 elritosan/nginx-compilacionejerciciosp3:latest
    
    Nota: Cuando se requiera actualizar a la version más nueva:

        docker stop <container_id>
        docker rm <container_id>
        docker run -d -p 8080:80 elritosan/nginx-compilacionejerciciosp3:latest

3. Abrir en el navegador:

    [http://localhost:8080](http://localhost:8080)