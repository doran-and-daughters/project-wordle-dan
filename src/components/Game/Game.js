import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner";
import Board from "../Board";
import Entry from "../Entry";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer }); // @TODO REMOVE

function Game() {
  const [guesses, setGuesses] = useState([]);

  const gameOver = guesses.length === NUM_OF_GUESSES_ALLOWED;
  const hasWon = guesses.some(
    (guess) =>
      checkGuess(guess, answer).filter(({ status }) => status === "correct")
        .length === guess.length
  );

  return (
    <>
      {(hasWon || gameOver) && (
        <Banner
          result={hasWon ? "won" : "lost"}
          guesses={guesses}
          answer={answer}
        />
      )}

      <Board guesses={guesses} answer={answer} />

      <Entry guesses={guesses} setGuesses={setGuesses} gameOver={gameOver} />
    </>
  );
}

export default Game;
