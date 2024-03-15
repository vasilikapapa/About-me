import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom'

import React from "react";
import { useNavigate } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import { Paper } from '@mui/material'
import {Hobbies} from './modules/pages'
import { AboutMe } from './modules/pages'
import './pageStyle.css'

// Define the router configuration using createBrowserRouter
const router = createBrowserRouter([

  { // Set the root path to directly load the AboutMe component
    path: '/',
    element: <AboutMe/>
  },
  { // Define the route for hobbies, linking to the Hobbies component
      path: '/hobbies',
      element: <Hobbies/>
  },
  {// Define the route for about, linking to the AboutMe component
    path: '/about',
    element: <AboutMe/>
},

])
// Define the main App component
const App = () => {
  return(
    // Use a div to center the content on the page
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center',
        background: 'lavender'}}>
          <Paper 
            elevation={24} 
            className='centerStyle' 
            style = {{background: 'lavenderBlush'}}>
              <RouterProvider router={router} />
          </Paper>
    </div>
  )
}
// Render the App component into the DOM
createRoot(document.getElementById('root') as Element).render(<App/>)
