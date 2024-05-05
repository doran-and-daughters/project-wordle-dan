import React from "react";

function Banner({ children, ...delegated }) {
  return <div {...delegated}>{children}</div>;
}

export default Banner;
