import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
const routes= createBrowserRouter(
  [
    {
    path: '/',
    element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
      }
  ]
)

  return (

   <>
    <RouterProvider router={routes}>
    </RouterProvider>
    </>
  )
}

export default App
