import React from "react";
import Banner from "../Banner";

function GameWonBanner({ guessCount }) {
  return (
    <Banner className={["banner", "happy"].join(" ")}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessCount} guesses</strong>.
      </p>
    </Banner>
  );
}

export default GameWonBanner;
