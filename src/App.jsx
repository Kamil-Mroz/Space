import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/home/Home'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route
        index
        element={<Home />}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={route} />
}

export default App
