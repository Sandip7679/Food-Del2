// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import StoreContextProvider from './Context/StoreContext'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>,
// )

import React from 'react'

import ReactDOM, { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'
// import { HelmetProvider } from 'react-helmet-async'

hydrateRoot(
  document.getElementById('root'),
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  ,
)
