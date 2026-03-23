# Ahorra Comprando

## Descripción
Ahorra Comprando es una aplicación web full-stack que permite a los usuarios ahorrar dinero mientras compran productos. La aplicación consta de un frontend desarrollado en React con Vite y un backend API en Node.js con Express.

## Tecnologías Utilizadas
- **Frontend**: React, Vite, Tailwind CSS, React Router DOM, Firebase
- **Backend**: Node.js, Express, MySQL, JWT, bcryptjs
- **Base de Datos**: MySQL

## Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- MySQL
- npm o yarn

### Instalación del Backend
1. Navega al directorio del backend:
   ```
   cd ahorra-comprando-api
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura la base de datos MySQL y actualiza las variables de entorno en un archivo `.env`:
   ```
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=ahorra_comprando
   JWT_SECRET=tu_secreto_jwt
   ```
4. Ejecuta el script de inicialización de la base de datos (si existe `init.sql`):
   ```
   mysql -u tu_usuario -p ahorra_comprando < init.sql
   ```
5. Inicia el servidor:
   ```
   npm start
   ```

### Instalación del Frontend
1. Navega al directorio raíz del proyecto:
   ```
   cd ..
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura Firebase en `src/firebase.js` con tus credenciales.
4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

## Uso
1. Inicia el backend en el puerto 3000.
2. Inicia el frontend en el puerto por defecto de Vite (generalmente 5173).
3. Abre tu navegador y ve a `http://localhost:5173` para acceder a la aplicación.

## Estructura del Proyecto
```
Proyecto_Ahorra_comprando/
├── ahorra-comprando-api/     # Backend API
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   └── package.json
├── src/                      # Frontend React
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## API Endpoints
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrarse
- (Agrega más endpoints según sea necesario)

## Contribución
1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia ISC.