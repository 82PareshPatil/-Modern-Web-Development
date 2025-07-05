import { useState } from 'react'
import './App.css'
import { Cart } from './cart'

function App() {
  
    let subject=["BEE","BME","ES","MATHS-1","PHYSICS-1","PRESENTATION"]

  return (
    <>
  
   <Cart title="1st Sem" subject={subject} price={250}/>
   <Cart title="2nd Sem" subject={["BE","EGD","ENGLISH","MATHS-2","PPS","WORKSHOP"]} price={350}/>
   </>
  )
}

export default App
