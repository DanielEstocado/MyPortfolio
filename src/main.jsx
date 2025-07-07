import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllProjects from './pages/AllProjects.jsx'
import Guestbook from './pages/Guestbook.jsx'
import AllContacts from './pages/AllContacts.jsx'
import AllAbout from './pages/AllAbout.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/about" element={<AllAbout />} />
      <Route path="/guestbook" element={<Guestbook />} />
      <Route path="/contact" element={<AllContacts />} />
      <Route path="*" element={<App />} /> 
    </>
  ),
  {
    basename: '/MyPortfolio',
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
