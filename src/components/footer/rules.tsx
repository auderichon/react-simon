import React from "react";

import { LinkWithPopup } from "../link-with-popup";

import "../../styles/footer.css";

export const Rules: React.FC = () => {
  const content = (
    <div>
      <p className="rules">
        <span className="bold">Easy as &#129383;!</span>
        <br />
        <span className="bold">Click on start and repeat after Simon</span>{" "}
        (first 1 signal, then 2 and so on...).
        <br />
        <span className="bold">
          You win when you manage to repeat the last sequence of 20 signals
        </span>{" "}
        (25 for the medium level and 30 for the hard level).
        <br />
        <span className="bold">NB</span>: if you unselect the{" "}
        <span className="bold">strict</span> mode, you will be able to re-start
        from the last sequence you found,{" "}
        <span className="italic">
          (instead of starting back from the beginning of the game)
        </span>
        .
      </p>
    </div>
  );

  return (
    <LinkWithPopup
      link={"Rules"}
      popup={{
        position: "center",
        content,
      }}
    />
  );
};
