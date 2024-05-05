import React from "react";
import {
  NUM_OF_GUESSES_ALLOWED as ROW_COUNT,
  NUM_OF_CHARACTERS as CELL_COUNT,
} from "../../constants";
import { range, key } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GameBoard({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(ROW_COUNT).map((ndx) => (
        <Row key={key()} guess={guesses[ndx]} answer={answer} />
      ))}
    </div>
  );
}

export default GameBoard;

function Row({ guess, answer }) {
  const letterStats = guess
    ? checkGuess(guess, answer)
    : Array(CELL_COUNT).fill({ letter: " ", status: undefined });

  return (
    <p className="guess">
      {range(CELL_COUNT).map((ndx) => (
        <Cell key={key()} letterStat={letterStats[ndx]} />
      ))}
    </p>
  );
}

function Cell({ letterStat }) {
  return (
    <span className={["cell", letterStat.status].join(" ")}>
      {letterStat.letter.toLocaleUpperCase()}
    </span>
  );
}
