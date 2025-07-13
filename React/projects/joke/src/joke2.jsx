import { useState, useEffect } from "react";

export default function Joke2() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setJoke({ setup: json.setup, punchline: json.punchline });
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke({ setup: "Oops!", punchline: "Failed to load joke 😢" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // Get the first joke on mount
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h4>The Joke Was...</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
        </>
      )}
      <button onClick={fetchJoke} style={{ marginTop: "20px" }}>
        New Joke
      </button>
    </div>
  );
}

export { Joke2 };
