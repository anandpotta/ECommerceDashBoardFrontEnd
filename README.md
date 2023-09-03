# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to run this ecommerce application

```js
   npm install
```

It will install the dependencies from the package.json

```js
   "@ant-design/charts": "^1.4.2",
    "antd": "^5.8.6",
    "axios": "^1.5.0",
    "date-fns": "^2.30.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "react-router-dom": "^6.15.0"
```

If you still face issues with the dependencies installation run

```sh
   npm install --force
```

### Architecture of the application

Polyrepo is the architecture because we can scale this application to a larger extent.

1) Simplified components
2) Reusable component approach
3) Ant Design and Ant Charts integration
4) With Type check

### Running the application

```sh
   npm run dev
```

Application will run on <br>
http://localhost:5173/