import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom'
import {AuthProvider} from "./services/context/AuthContext.jsx";
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
