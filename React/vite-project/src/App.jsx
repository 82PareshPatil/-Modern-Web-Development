import './App.css';
import { Cart } from './cart';
import { Tag } from './tag';

function App() {
  return (
    <div>
    <Tag name="Paresh" tcolor="blueviolet" />
    <Tag name="Jayesh" tcolor="Red" />

      <Cart title="Interview" btext="See" img="/interview.png" features={{ a: "calling", b: "offline" }} price = {850}/>
      <Cart title="Lecture" btext="Enroll" img="/lecture.png" features={["coding", "maths", "oops"]} price={400} />
    </div>
  );
}

export default App;
