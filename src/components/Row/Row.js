import React from "react";
import { checkGuess, fillBlank } from "../../game-helpers";
import Cell from "../Cell";
import { key } from "../../utils";

function Row({ guess, answer }) {
  const isPlaceholderRow = guess === fillBlank();

  return (
    <p className="guess">
      {(isPlaceholderRow ? Array.from(guess) : checkGuess(guess, answer)).map(
        (char) => (
          <Cell key={key()} char={char} isPlaceholderRow={isPlaceholderRow} />
        )
      )}
    </p>
  );
}

export default Row;
