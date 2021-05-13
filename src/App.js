import React from 'react'
import Navbar from './Navbar'
import { AppContext } from './context'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { AppProvider, useGlobalContext } from './context'

function App() {
  const data = useGlobalContext()
  console.log(data);
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  )
}

export default App
