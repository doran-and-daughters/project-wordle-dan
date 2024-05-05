import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameBoard from "../GameBoard";
import GameInput from "../GameInput";
import GameWonBanner from "../GameWonBanner";
import GameOverBanner from "../GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, cueGuesses] = useState([]);
  let gameStatus;
  if (
    guesses.some((guess) =>
      checkGuess(guess, answer).every(({ status }) => status === "correct")
    )
  ) {
    gameStatus = "won";
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    gameStatus = "over";
  } else {
    gameStatus = "still playing";
  }

  return (
    <>
      {gameStatus === "won" ? (
        <GameWonBanner guessCount={guesses.length} />
      ) : gameStatus === "over" ? (
        <GameOverBanner answer={answer} />
      ) : undefined}

      <GameBoard guesses={guesses} answer={answer} />

      <GameInput
        guesses={guesses}
        cueGuesses={cueGuesses}
        gameOver={["won", "over"].includes(gameStatus)}
      />
    </>
  );
}

export default Game;
