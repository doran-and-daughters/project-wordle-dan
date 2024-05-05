import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner";
import Board from "../Board";
import Entry from "../Entry";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer }); // @TODO REMOVE

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState("still playing");

  return (
    <>
      {result !== "still playing" && (
        <Banner result={result} guesses={guesses} />
      )}

      <Board guesses={guesses} setResult={setResult} answer={answer} />

      <Entry result={result} guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
