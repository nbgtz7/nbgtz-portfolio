import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import Home from './routes/Home.jsx'
import AlbumDetail from './routes/AlbumDetail.jsx'
import Contact from './routes/Contact.jsx'
import About from './routes/About.jsx'


const router = createBrowserRouter([
{
path: '/',
element: <RootLayout />,
children: [
{ index: true, element: <Home /> },
{ path: 'album/:slug', element: <AlbumDetail /> },
{ path: 'contact', element: <Contact /> },
{ path: 'about', element: <About /> },
],
},
])


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
)