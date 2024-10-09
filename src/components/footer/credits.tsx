import React from "react";

import { LinkWithPopup } from "../link-with-popup";

export const Credits: React.FC = () => {
  const content = (
    <div className="credits">
      <p>
        Rework of the{" "}
        <a href="https://github.com/auderichon/coolest-simon/">
          first Ironhack project
        </a>{" "}
        from my younger self
      </p>
      <p>
        Sound effects obtained from{" "}
        <a href="https://www.zapsplat.com">zapsplat.com</a> and{" "}
        <a href="https://www.musicradar.com/">musicradar.com</a>
      </p>
      <p>
        <a href="https://pixabay.com/fr/">Images obtained from pixabay.com</a>{" "}
        (Gabriela Ortega, Free-Photos, Pexels and Antonios Ntoumas)
      </p>
      <p>
        Special thanks to freeCodeCamp.org and Web Dev Junkie for sharing their
        videos on how to code a Simon game.
      </p>
    </div>
  );

  return (
    <LinkWithPopup
      link={"Credits"}
      popup={{
        position: "bottom",
        content,
      }}
    />
  );
};
