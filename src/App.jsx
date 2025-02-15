import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/member",
      element:<Login/>
    },
    {
      path:"/about",
      element:<About/>
    },
  ])

  return (
  <RouterProvider router={router}/>
  )
}

export default App
