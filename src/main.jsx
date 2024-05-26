import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Container } from './Components/compnents'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {ErrorPage, Home, Each_Projects,Project, Experiences, Each_Experience} from './Pages/routes.js'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  {
    path: "project",
    element: <Project />,
  },
  {
    path: "project/:projectname",
    element: <Each_Projects />,
  },
  {
    path: "experiences",
    element: <Experiences />,
  },
  {
    path: "experiences/:experiencename",
    element: <Each_Experience />,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router}/> 
    
  </React.StrictMode>,
)
