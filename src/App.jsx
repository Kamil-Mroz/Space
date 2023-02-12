import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/home/Home'
import { DataProvider } from './context/DataContext'
import Destination from './Pages/destinations/Destination'

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
      <Route
        path="destination/:id"
        element={<Destination />}
      />
      <Route
        path="crew/:id"
        element={<Home />}
      />
      <Route
        path="technology/:id"
        element={<Home />}
      />
    </Route>
  )
)

function App() {
  return (
    <DataProvider>
      <RouterProvider router={route} />
    </DataProvider>
  )
}

export default App
