import { Button } from "./Button";
import "./cart.css";

function Cart({ title, btext, img, features, price }) {
  const featureList = Array.isArray(features)
    ? features.map((f, i) => <li key={i}>{f}</li>)
    : Object.values(features).map((f, i) => <li key={i}>{f}</li>);

  let style= {backgroundColor  : price>500?"#353534":""};

  return (
    <div className="cart" style={style}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>Lorem ipsum dolor amet consectetur adipisicing elit. Ratione, tempora.</p>
      <ul>{featureList}</ul>
      {price>500? <p>Get 5% off</p> : <a>Get Discount</a>}
      <Button btext={btext} />
    </div>
  );
}

export { Cart };
