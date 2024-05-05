import React, { useState } from "react";
import { NUM_OF_CHARACTERS } from "../../constants";

function Entry({ guesses, setGuesses, gameOver }) {
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
        minLength={NUM_OF_CHARACTERS}
        maxLength={NUM_OF_CHARACTERS}
        type="text"
        required={true}
        disabled={gameOver}
      />
    </form>
  );
}

export default Entry;
