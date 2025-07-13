import { useEffect, useState } from "react";
import "./Hero.css";

const heroImages = [
  "/fun1.png",
  "/fun2.png",
  "/fun3.png",
  "/fun4.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <img src={heroImages[index]} alt="hero" className="hero-img" />
    </div>
  );
}
