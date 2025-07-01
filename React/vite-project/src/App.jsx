import './App.css'
import { Button } from './Button';
function Cart(){
  return (
    <div>
      <img src="/vite.svg" alt="" />
      <h3>this is cart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempora.</p>
    </div>
  )
}

function App() {
 

  return(
  <div>
    <Cart />
    <Button />
    </div>
    );
}

export default App
