import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  //startFetching();
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`
      );
      const fetchedJoke = await response.json();
      setJoke(fetchedJoke);
    }

    startFetching();
  }, [id]);

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={() => setId(joke.nextId)}>
        Next Joke
      </button>
    </>
  );
}
