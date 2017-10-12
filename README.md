# conexionBD
Pequeño ejemplo de conexión a una base de datos MYSQL usando Express y Angular 2
Ahora agregando SequelizeJS para manejar las consultas a la BD
## Instrucciones de Ejecución

- Clonar este repositorio
- Instalar los paquetes vía terminal con el siguiente comando
~~~
npm install
~~~
- Ejecuta la aplicación con el siguiente comando
~~~
ng build && node server
~~~

## Creación de modelos de Sequelize a partir de una base de datos ya creada
Pueden crear los modelos utilizados por Sequelize a partir de su base de datos.
- Instalar Sequelize-auto.
~~~
npm install -g sequelize-auto
~~~
- Crear los modelos con el siguiente comando.
~~~
sequelize-auto -o "[CarpetaModelos]" -d [BaseDeDatos] -h [host] -u [Usuario] -p [Puerto] -x [Password] -e mysql

#Ejemplo
sequelize-auto -o "./models" -d test -h localhost -u root -p 3306 -x admin -e mysql

~~~

## Importante
- Recuerda importar la base de datos del archivo db.sql (en el caso del tutorial se usa MYSQL Workbench para esto)
- Revisar si el servidor de MYSQL se encuentra arriba (se puede ver con el mismo MYSQL Workbench)
- Cambia los datos de conexión por los suyos en el archivo api.js
