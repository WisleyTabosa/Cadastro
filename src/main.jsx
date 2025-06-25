import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import './index.css'

import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={ptBR}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
)
