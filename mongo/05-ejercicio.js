//Ejercicio 4: Actualizar documentos

//Cargamos los datos de los ejercicios anteriores: 

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
                        {nombre: "Ana", edad: 32, sexo: "femenino", profesion: "Ingeniera"}])


//Vamos  a actualizar datos:

//Cambiar un nombre
db.base_datos.updateOne({nombre:"Alberto"}, {$set {nombre:"Fernando"}})

//Actualiza la edad de todos los usuarios mayores de 30 años y pon su edad en 40.
db.base_datos.updateMany({edad {$gt 30}}, {$set {edad: 40}})

