# Final UTN - Diplomatura Web Full Stack 🎞️

Este proyecto es una API REST desarrollada como trabajo final para la Diplomatura en Desarrollo Web Full Stack de la UTN. La API permite realizar operaciones CRUD sobre los siguientes modelos: Film, Genre y User.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB con Mongoose
- jsonwebtoken
- bcrypt
- dotenv

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/agrange7/the_thing_api_project
```

### 2. Instalar dependencias

Accede a la carpeta raíz del proyecto y ejecuta:

```bash
npm i
```

### 3. Configurar variables de entorno

Asegúrate de que el archivo `.env` del proyecto esté configurado con las credenciales correctas para conectar a MongoDB. Un ejemplo del archivo `.env` podría ser:

```env
PORT=3000
MONGODB_URI="mongodb://127.0.0.1:PORT/DATABASE_NAME"
SESSION_SECRET=
```

### 4. Configurar la base de datos

- Abre MongoDB Compass u otra herramienta para gestionar MongoDB.
- Conecta a tu instancia de MongoDB y verifica que la base de datos mencionada en el `.env` esté accesible.

### 5. Iniciar el servidor

Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:

```bash
npm run dev
```

## 📌 Endpoints disponibles

### User

- **GET** - `/api/user/get`: Obtener todos los usuarios.
- **POST** - `/api/user/create`: Crear un nuevo usuario.
- **PUT** - `/api/user/update/:id`: Actualizar un usuario por su ID.
- **DELETE** - `/api/user/delete/:id`: Eliminar un usuario por su ID.

### Film

- **GET** - `/api/film/get`: Obtener todas las películas.
- **GET** - `/api/film/get-by-id/:id`: Obtener una película por su ID.
- **POST** - `/api/film/get-by-name/:name`: Obtener una película por su nombre.
- **POST** - `/api/film/create`: Crear una nueva película. **Nota:** Para crear una película, primero debes crear un género (Genre) y vincularlo mediante su ID.
- **PUT** - `/api/film/update/:id`: Actualizar una película por su ID.
- **DELETE** - `/api/film/delete/:id`: Eliminar una película por su ID.

### Genre

- **GET** - `/api/genre/get`: Obtener todos los géneros.
- **GET** - `/api/genre/get-by-id/:id`: Obtener un género por su ID.
- **POST** - `/api/genre/create`: Crear un nuevo género.
- **PUT** - `/api/genre/update/:id`: Actualizar un género por su ID.
- **DELETE** - `/api/genre/delete/:id`: Eliminar un género por su ID.

## 🧪 Comandos para probar la aplicación

### Iniciar el servidor:

```bash
npm run dev
```

### Probar los endpoints:

Usa herramientas como Postman u otro cliente para enviar solicitudes a los endpoints listados anteriormente.

## 🔧 Datos mock de ejemplo

### User

Para probar la creación de un usuario con **POST** `/api/user/create`, puedes usar el siguiente ejemplo:

```json
{
  "username": "john_carpenter",
  "password": "Masterofhorror33",
  "email": "jcarpenter@gmail.com",
  "dateOfBirth": "1948-01-16",
  "favGenre": "Slasher"
}
```

### Genre

Para probar la creación de un género con **POST** `/api/genre/create`, puedes usar el siguiente ejemplo:

```json
{
  "name": "Slasher"
}
```

### Film

Para probar la creación de una película con **POST** `/api/film/create`, primero crea un género y utiliza su ID para vincularlo al crear una película. Ejemplo:

1. Crear un género:

   ```json
   {
     "name": "Slasher"
   }
   ```

   Supongamos que el género creado tiene el siguiente ID:

   ```json
   "_id": "64a67f50bcf1e8b1a2c12345"
   ```

2. Crear una película utilizando el ID del género:
   ```json
   {
     "name": "Scream",
     "year": 1996,
     "genre": "64a67f50bcf1e8b1a2c12345",
     "team": {
       "director": "Wes Craven",
       "screenWriter": "Kevin Williamson"
     }
   }
   ```

## 🩸 Agradecimientos

Gracias por tomarte el tiempo de explorar esta API.
