
import './App.css'
import Lotery from './lotery'

 let iswin=(ticket)=>{
   return ticket[0]===0;
 }

function App() {
  

  return (
    <>
 
    <Lotery n={3} iswin={iswin}/>
    </>
  )
}

export default App
