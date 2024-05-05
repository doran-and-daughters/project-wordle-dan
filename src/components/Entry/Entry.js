import React, { useState } from "react";

function Entry({ result, guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        setGuesses([...guesses, guess]);

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        id="guess-input"
        minLength={5}
        maxLength={5}
        type="text"
        required={true}
        disabled={result !== "still playing"}
      />
    </form>
  );
}

export default Entry;
