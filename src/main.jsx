import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllProjects from './pages/AllProjects.jsx'
import Guestbook from './pages/Guestbook.jsx'
import AllContacts from './pages/AllContacts.jsx'
import AllAbout from './pages/AllAbout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/projects", element: <AllProjects/>},
  {path: "/about", element: <AllAbout/>},
  {path: "/guestbook", element: <Guestbook/>},
  {path: "/contact", element: <AllContacts/>},
  {
    basename: "/MyPortfolio",
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
