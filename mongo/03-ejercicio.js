// Ejercicio 2: Crear y poblar una colección

//vamos a utilizar los comandos del ejercicio anterior, es decir el 02.

// En primer lugar utilizamos mongod
mongod,

//En segundo lugar utilizamos el mongohs
mongosh,

//Mostramos la base de datos presente

show dbs;

//Creamos una base de datos

use base_datos;

//Vamos a crear y poblar nuestra base de datos

db.base_datos.insertMany([{nombre: "Pepe", edad: 40, sexo: "masculino", esTrabajador: true, telefono: 123456789}, 
                        {nombre: "Luis", edad: 14, sexo: "masculino", esTrabajador: false }, 
                        {nombre: "Ana", edad: 32, sexo: "femenino"}])

// Se han ido quitando datos, porque se puede hacer en este caso asi, no hace falta añadir todos los parametros

