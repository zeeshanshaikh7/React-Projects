import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import './index.css'
import Github, { githubInfoLoader } from './components/Github.jsx'
import ErrorPage from './components/ErrorPage.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {path:'', element:<Home/>},
//       {path:'about', element:<About/>},
//       {path:'contact', element:<Contact/>}
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
