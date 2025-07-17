import React from 'react'
import Maqueta from './components/Maqueta'
import './App.css'

function App() {
  return (
    <>
      <Maqueta 
        nombre={"Collar Colgante D&D"}
        descripcion={`Un colgante hecho en porcelana fria con la figura de un simpatico dragon que sostiene un dado de veinte caras. Ideal como regalo para tu director de mesa`}  
        stock={4}
        precio={1000}
        sdk={4562879}
      />
    </>
  )
}

export default App
