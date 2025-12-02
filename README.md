# logispe

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Fake API (JSON Server)

Este proyecto usa `json-server` para una API falsa.

- Inicia la API: `npm run api`
- URL base: `http://localhost:3001/`
- Endpoints: `/users`, `/stocks`, `/orders`, `/suppliers`, `/stores`

Para probar el login puedes usar:

- Email: `ana@example.com` — Password: `123456`

Si prefieres conectar el frontend con el backend desplegado en Railway en lugar de la fake API, crea un archivo `.env` en la raíz del proyecto con esta variable:

```env
VITE_API_BASE_URL=https://upc-pre-202520-1asi0730-7468-logispe-back-end-production.up.railway.app
```

Al arrancar `npm run dev` el frontend usará esa URL. Si no creas `.env`, el frontend ya está configurado para usar esa URL por defecto.

## Desarrollo

1. En una terminal: `npm run api` (API fake)
2. En otra terminal: `npm run dev` (Vite)

El router protege `/home` y sus rutas hijas si no hay sesión. Tras login, verás el dashboard y podrás navegar a Stock, Orders, Suppliers y Stores (Manage Store) con datos de la fake API.

Nota sobre CORS: si conectas el frontend al backend desplegado asegúrate de que el backend permite peticiones desde el origen donde sirves el frontend (por ejemplo `http://localhost:5173` durante `npm run dev`). En el backend .NET esto implica habilitar CORS en `Program.cs` o en los controladores.

Try it (local development):

1. Copia `.env.example` a `.env` (opcional, el proyecto ya usa la URL por defecto):

```powershell
copy .env.example .env
```

2. Instala dependencias e inicia Vite:

```powershell
npm install
npm run dev
```

Abre `http://localhost:5173` y prueba el login/CRUD; las llamadas irán al backend desplegado en Railway.
