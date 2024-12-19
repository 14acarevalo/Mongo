// Este primer ejercicio, nos serviría como comienzo para poder trabajar en mongo desde nuestra terminal

// Comando a utilizar

// Primer lugar: Iniciar el servidor MongoDB
mongod // Con este cargamos nuestra base de datos NoSQL

// Segundo lugar: Conectarse a la shell de MongoDB
mongosh // Para cargar nuestros datos

// Tercer lugar: Mostrar las bases de datos existentes
show dbs // Nos mostrará las bases de datos creadas y/o presentes

// Comando use
use base_datos_prueba // Con esto se selecciona una base de datos en juego, pero hasta que no insertamos datos no aparecerá en el resultado de show dbs

// Insertar datos en nuestra base de datos
// insertOne para insertar un solo documento
db.base_datos_prueba.insertOne({nombre: "Alberto", edad: 30, profesion: "Gestor deportivo"})

// insertMany para insertar varios documentos
db.base_datos_prueba.insertMany([
  {nombre: "Alberto", edad: 30, profesion: "Gestor deportivo"},
  {nombre: "Oliver", edad: 3, profesion: "ninguna"}
])

// Borrar una base de datos
// El comando correcto es drop(), no dropp()
db.base_datos_prueba.drop()

// Filtrar, seleccionar o buscar con find()
db.base_datos_prueba.find() // Muestra todos los documentos en la colección

// Actualizar documentos con update
// updateOne para actualizar un solo documento
db.base_datos_prueba.updateOne(
  {nombre: "Alberto", edad: 30, profesion: "Gestor deportivo"}, 
  {$set: {profesion: "Entrenador Deportivo"}} // Actualiza el campo "profesion"
)

// updateMany para actualizar varios documentos
db.base_datos_prueba.updateMany(
  { profesion: "Gestor deportivo"},
  {$set: {profesion: "Entrenador Deportivo"}} // Actualiza todos los documentos que coinciden
)

// Contador con countDocuments (recomendado en lugar de count)
db.base_datos_prueba.countDocuments()

// Eliminar con deleteOne (eliminar un solo documento)
db.base_datos_prueba.deleteOne({nombre: "Alberto"})

// Eliminar con deleteMany (eliminar varios documentos que coincidan con el filtro)
db.base_datos_prueba.deleteMany({nombre: "Alberto"})



