import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED as ROW_COUNT } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const ANSWER = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ ANSWER }); // @TODO REMOVE

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState("still playing");

  return (
    <>
      {result !== "still playing" && (
        <Banner result={result} guesses={guesses} />
      )}

      <Board guesses={guesses} setResult={setResult} />

      <Entry result={result} guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

function Banner({ result, guesses }) {
  const hasWon = result === "won";

  return (
    <div className={["banner", ...(hasWon ? ["happy"] : ["sad"])].join(" ")}>
      {hasWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{ANSWER}</strong>.
        </p>
      )}
    </div>
  );
}

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

function Board({ guesses, setResult }) {
  const rows = [...guesses, ...Array(ROW_COUNT - guesses.length).fill("     ")];

  return (
    <div className="guess-results">
      {rows.slice(0, ROW_COUNT).map((guess) => (
        <Row
          key={window.crypto.randomUUID()}
          guess={guess}
          setResult={setResult}
        />
      ))}
    </div>
  );
}

function Row({ guess, setResult }) {
  if (
    checkGuess(guess, ANSWER).filter(({ status }) => status === "correct")
      .length === guess.length
  ) {
    setResult("won");
  }

  const isPlaceholderRow = guess === "     ";

  return (
    <p className="guess">
      {(isPlaceholderRow ? Array.from(guess) : checkGuess(guess, ANSWER)).map(
        (char) => (
          <Cell
            key={window.crypto.randomUUID()}
            char={char}
            isPlaceholderRow={isPlaceholderRow}
          />
        )
      )}
    </p>
  );
}

function Cell({ char, isPlaceholderRow }) {
  return (
    <span
      className={["cell", ...(isPlaceholderRow ? [] : [char.status])].join(" ")}
    >
      {isPlaceholderRow ? char : char.letter.toLocaleUpperCase()}
    </span>
  );
}

export default Game;
