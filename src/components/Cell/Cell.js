import React from "react";

function Cell({ char, isPlaceholderRow }) {
  return (
    <span
      className={["cell", ...(isPlaceholderRow ? [] : [char.status])].join(" ")}
    >
      {isPlaceholderRow ? char : char.letter.toLocaleUpperCase()}
    </span>
  );
}

export default Cell;
