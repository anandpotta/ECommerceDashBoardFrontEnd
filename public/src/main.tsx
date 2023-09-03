import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
          token:{
            colorPrimary: "#2123bf"
          },
        }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
