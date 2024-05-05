import React from "react";

function Banner({ guesses, answer, result }) {
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
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
