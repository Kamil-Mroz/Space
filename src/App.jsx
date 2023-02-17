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
import Crew from './Pages/crew/Crew'
import CrewRoot from './Pages/crew/CrewRoot'
import TechnologyRoot from './Pages/technology/TechnologyRoot'
import Technology from './Pages/technology/Technology'
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
        path="crew"
        element={<CrewRoot />}
      >
        <Route
          path=":id"
          element={<Crew />}
        />
      </Route>
      <Route
        path="technology"
        element={<TechnologyRoot />}
      >
        <Route
          path=":id"
          element={<Technology />}
        />
      </Route>
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
