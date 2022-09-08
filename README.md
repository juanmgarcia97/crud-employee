# crud-employee

## Configuración del ambiente
Se deben ingresar las variables de entorno para poder conectarse a la base de datos de la siguiente forma:
  - DB_HOST=`<host>`: host de la base de datos.
  - DB_USERNAME=`<username>`: usuario de postgres.
  - DB_PASSWORD=`<password>`: contraseña de postgres.
  - DB_PORT=`<puerto>`: puerto de la base de datos.
  - DB_NAME=`<name>`: puede ser cualquier nombre.
  - API_PORT=`<port>`: puerto de ejecución del proyecto.

De igual manera este archivo se encuentra en el repositorio, con los respectivos datos usados en el desarrollo.

## Intrucciones Backend

- ### Instalación
El proyecto fue desarrollado en Node.js con TypeScript y Express, es necesario tener Node en una versión actualizada, yo utilicé la [16](https://nodejs.org/es/download/) y el gestor de paquetes de Node, NPM, mayor a la 8 (que viene con Node por defecto). De igual forma, el proyecto utiliza [PostgreSQL](https://www.postgresql.org/about/news/postgresql-11-released-1894/) en su versión 11.

- ### Ejecución
El proyecto corre por defecto en el puerto `1234`, si requiere cambiar este puerto deberá ingresar al archivo `index.ts` dentro de la carpeta `src`. Si no es el caso puede seguir a instalar las dependencias del proyecto usando el comando `npm install` en la consola, ubicándose dentro de la carpeta `crud-employee`. Al finalizar la instalación resta usar el comando `npm start` para correr el proyecto.

- ### Pruebas
Para probar el funcionamiento de la API hice una pequeña colección de Postman con la información pertinente para crear, obtener, actualizar y eliminar empleados. [Aquí](https://www.getpostman.com/collections/c9d859a34ccc00081dd9) se puede descargar la colección.
