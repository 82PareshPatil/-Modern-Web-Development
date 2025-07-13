import { useState, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./JokeSwiper.css";

export default function JokeSwiper() {
  const [jokes, setJokes] = useState([]);
  const childRefs = useRef([]);
  const [allJokes, setAllJokes] = useState([]);

  const fetchLocalJokes = async () => {
    const res = await fetch("/jokes.json"); // ✅ make sure jokes.json is in public/
    const data = await res.json();
    setAllJokes(data);
  };

  const getRandomJoke = () => {
    return allJokes[Math.floor(Math.random() * allJokes.length)];
  };

  const addNewJoke = () => {
    const joke = getRandomJoke();
    setJokes((prev) => [...prev, joke]); // ✅ last is topmost
  };

  useEffect(() => {
    fetchLocalJokes();
  }, []);

  useEffect(() => {
    if (allJokes.length > 0) {
      for (let i = 0; i < 5; i++) addNewJoke();
    }
  }, [allJokes]);

  const swiped = () => {
    addNewJoke();
  };

  const swipe = (dir) => {
    const topIndex = jokes.length - 1;
    if (childRefs.current[topIndex]) {
      childRefs.current[topIndex].swipe(dir);
    }
  };

  return (
    <div className="joke-wrapper">
      <div className="joke-swiper">
        {jokes.map((joke, index) => (
          <TinderCard
            key={index}
            onSwipe={swiped}
            preventSwipe={["up", "down"]}
            ref={(el) => (childRefs.current[index] = el)}
          >
            <div
              className="card"
              style={{
                zIndex: index,
                transform: `
                  scale(${1 - (jokes.length - index - 1) * 0.05})
                  translateX(${(jokes.length - index - 1) * 20}px)
                  translateY(${(jokes.length - index - 1) * 18}px)
                `,
              }}
            >
              <span className="emoji">{joke.emoji}</span>
              <h3>{joke.setup}</h3>
              <p>{joke.punchline}</p>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="swipe-buttons">
        <button onClick={() => swipe("left")} className="btn left">
          👈 Swipe Left
        </button>
        <button onClick={() => swipe("right")} className="btn right">
          Swipe Right 👉
        </button>
      </div>
    </div>
  );
}
