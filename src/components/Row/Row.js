import React from "react";
import { checkGuess } from "../../game-helpers";
import Cell from "../Cell";

function Row({ guess, setResult, answer }) {
  if (
    checkGuess(guess, answer).filter(({ status }) => status === "correct")
      .length === guess.length
  ) {
    setResult("won");
  }

  const isPlaceholderRow = guess === "     ";

  return (
    <p className="guess">
      {(isPlaceholderRow ? Array.from(guess) : checkGuess(guess, answer)).map(
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

export default Row;
