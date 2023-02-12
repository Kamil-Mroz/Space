import React, { createContext, useContext } from 'react'
import Data from '../data/data.json'

const DataContext = createContext(Data)

export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={Data}>{children}</DataContext.Provider>
}

export default DataContext
