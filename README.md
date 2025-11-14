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

## Desarrollo

1. En una terminal: `npm run api` (API fake)
2. En otra terminal: `npm run dev` (Vite)

El router protege `/home` y sus rutas hijas si no hay sesión. Tras login, verás el dashboard y podrás navegar a Stock, Orders, Suppliers y Stores (Manage Store) con datos de la fake API.
