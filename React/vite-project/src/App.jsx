import './App.css';
import { Cart } from './cart';

function App() {
  return (
    <div>
      <Cart title="Interview" btext="See" img="/interview.png" features={{ a: "calling", b: "offline" }} price = {850}/>
      <Cart title="Lecture" btext="Enroll" img="/lecture.png" features={["coding", "maths", "oops"]} price={400} />
    </div>
  );
}

export default App;
