//Ejercicio 3: Consultar documentos

//Vamos a aprovechar los datos de los ejercicios anteriores


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

// Se han ido quitando datos, porque se puede hacer en este caso asi, no hace falta añadir todos los parametros


//Vamos a consultar todos los datos
//Realiza una consulta para mostrar todos los usuarios en la colección usuarios.

db.base_datos.find() //Con esto consultamos todos los datos

//Filtra los usuarios que sean mayores de 30 años.
db.base_datos.find({edad{$gt: 30}})

//Filtra los usuarios que tengan la profesión "Ingeniera".
db.base_datos.find({profesion:"Ingeniera"})


