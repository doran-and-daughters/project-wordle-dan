import React from "react";
import { NUM_OF_GUESSES_ALLOWED as ROW_COUNT } from "../../constants";
import Row from "../Row";
import { range, key } from "../../utils";
import { fillBlank } from "../../game-helpers";

function Board({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(ROW_COUNT).map((ndx) => (
        <Row key={key()} guess={guesses[ndx] ?? fillBlank()} answer={answer} />
      ))}
    </div>
  );
}

export default Board;
