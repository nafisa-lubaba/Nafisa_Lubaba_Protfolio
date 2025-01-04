import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    children:[
      {
        path: '/',
        element:<Home></Home> ,
        
       
      },
      {
        path: 'about',
        element:<About></About>,
        
       
      },
      {
        path: 'projects',
        element:<Projects></Projects>,
        
       
      },
      {
        path: 'contact',
        element:<Contact></Contact>,
        
       
      },
      {
        path: 'skills',
        element:<Skills></Skills>,
        
       
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
