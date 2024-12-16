# App Cactus Web

## Descripción

**App Cactus Web** es una aplicación frontend desarrollada en **React.js** utilizando **Vite.js** como entorno de desarrollo rápido. Permite a los usuarios explorar un catálogo de productos, registrarse, iniciar sesión, agregar productos al carrito y realizar compras mediante PayPal.

## Despliegue en producción

El eCommerce está desplegado en producción en la siguiente URL: [https://app-cactus-api.onrender.com](https://app-cactus-web.onrender.com/login)

## Instrucciones de uso

1) Para ingresar por primera vez al sitio, debes registrarte en el menú "Crear Cuenta" con tu correo electrónico, contraseña y el resto de los datos solicitados en el formulario.

![image](https://github.com/user-attachments/assets/daff69c4-b88b-4269-9619-f1b9ecfdba63)

2) Una vez registrado, acceder con la página Login.

![image](https://github.com/user-attachments/assets/e9f2150c-fcdb-4b20-a7fb-4eb13c9df692)

3) Ya lista la autenticación, puedes navegar por las opciones del sitio.

4) Para realizar el pago por la versión de pruebas de PayPay, es recomendable usar la opción pago con tarjeta con el siguiente número: 0000-0000-0000-0000


## Tecnologías Utilizadas

- **React.js**: Biblioteca para construir interfaces de usuario.
- **Vite.js**: Herramienta de desarrollo rápida.
- **React Router DOM**: Manejo de rutas.
- **Axios**: Realización de solicitudes HTTP.
- **Bootstrap**: Estilos y componentes UI.
- **CSS Modules**: Estilos personalizados.
- **PayPal SDK**: Integración de pagos en línea.

## Requisitos Previos

1. **Node.js** instalado (v16 o superior).
2. **Cuenta de Render.com** o servicio de despliegue compatible.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/app-cactus-web.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd app-cactus-web
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno creando un archivo **.env** en la raíz del proyecto:

   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_PAYPAL_CLIENT_ID=tu_client_id_de_paypal
   ```

## Integración de PayPal

La integración de PayPal se realiza utilizando el SDK de PayPal. Asegúrate de tener una cuenta de desarrollador en [PayPal Developer](https://developer.paypal.com) y generar un **Client ID**. Este ID debe configurarse en el archivo **.env** como se muestra arriba.

La configuración básica de PayPal en el archivo **App.jsx** incluye:

```javascript
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      {/* Aplicación React */}
    </PayPalScriptProvider>
  );
}
```

## Scripts Disponibles

- **Iniciar el servidor en desarrollo:**

  ```bash
  npm run dev
  ```

- **Construir para producción:**

  ```bash
  npm run build
  ```

- **Previsualizar la versión de producción:**

  ```bash
  npm run preview
  ```

## Estructura del Proyecto

```
app-cactus-web/
│
├── src/
│   ├── components/  # Componentes compartidos
│   ├── context/     # Manejo de estado global
│   ├── pages/       # Páginas principales
│   ├── routes/      # Configuración de rutas
│   ├── styles/      # Archivos de estilo
│   └── App.jsx      # Componente principal
│
├── public/          # Archivos públicos
├── .env             # Variables de entorno
├── vite.config.js   # Configuración de Vite.js
└── package.json     # Configuración del proyecto
```

## Despliegue

1. Configura las variables de entorno en la plataforma de despliegue.
2. Define los siguientes comandos en **Render.com** o servicios similares:

   - **Build Command:**
     ```bash
     npm run build
     ```

   - **Publish Directory:**
     ```bash
     dist
     ```

## Contribución

1. Crea un fork del repositorio.
2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y confirma los commits.
4. Envía una solicitud de extracción (Pull Request).

## Licencia

Este proyecto está bajo la **Licencia MIT**.
