import { useState, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./JokeSwiper.css";

const emojis = ["😂", "🤣", "😹", "😆", "😜", "😛", "😅"];

export default function JokeSwiper() {
  const [jokes, setJokes] = useState([]);
  const childRefs = useRef([]);

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    return {
      setup: data.setup,
      punchline: data.punchline,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };
  };

  const addNewJoke = async () => {
    const joke = await fetchJoke();
    setJokes((prev) => [joke, ...prev.slice(0, 4)]);
  };

  useEffect(() => {
    const loadInitial = async () => {
      for (let i = 0; i < 5; i++) await addNewJoke();
    };
    loadInitial();
  }, []);

  const swiped = async () => {
    await addNewJoke();
  };

  const swipe = (dir) => {
    if (childRefs.current[0]) {
      childRefs.current[0].swipe(dir);
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
                "--i": jokes.length - index,
                zIndex: jokes.length - index,
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

      {/* Swipe Buttons */}
      <div className="swipe-buttons">
        <button onClick={() => swipe("left")} className="btn left">👈 Swipe Left</button>
        <button onClick={() => swipe("right")} className="btn right">Swipe Right 👉</button>
      </div>
    </div>
  );
}
