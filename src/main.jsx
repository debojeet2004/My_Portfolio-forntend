import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {ErrorPage, Home, Each_Projects,Project, Experiences, Each_Experience} from './Pages/routes.js'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>  
  </React.StrictMode>,
)
