import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Container } from './Components/compnents'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {ErrorPage, Home, Each_Projects,Project, Experiences, Each_Experience} from './Pages/routes.js'


const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "*",
    element: <ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container classes={`px-5 flex flex-col items-center justify-start cursor-default selection:bg-stone-500 `}>
      <RouterProvider router={router}/> 
    </Container>
  </React.StrictMode>,
)
