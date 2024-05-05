import React from "react";
import { NUM_OF_GUESSES_ALLOWED as ROW_COUNT } from "../../constants";
import Row from "../Row";

function Board({ guesses, setResult, answer }) {
  const rows = [...guesses, ...Array(ROW_COUNT - guesses.length).fill("     ")];

  return (
    <div className="guess-results">
      {rows.slice(0, ROW_COUNT).map((guess) => (
        <Row
          key={window.crypto.randomUUID()}
          guess={guess}
          setResult={setResult}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default Board;
