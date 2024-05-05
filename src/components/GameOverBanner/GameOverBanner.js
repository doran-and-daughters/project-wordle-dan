import React from "react";
import Banner from "../Banner";

function GameOverBanner({ answer }) {
  return (
    <Banner className={["banner", "sad"].join(" ")}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default GameOverBanner;
