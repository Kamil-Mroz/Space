import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import { DataProvider } from './context/DataContext'
import Destination from './Pages/destinations/Destination'
import DestinationRoot from './Pages/destinations/DestinationRoot'
import RootLayout from './layout/RootLayout'

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
        path="destination"
        element={<DestinationRoot />}
      >
        <Route
          path=":id"
          element={<Destination />}
        />
      </Route>

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
