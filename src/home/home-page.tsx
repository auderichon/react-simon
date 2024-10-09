import React from "react";

import { Input } from "../components/input";
import { Button } from "../components/button";

import "../styles/home.css";

export const HomePage: React.FC = () => {
  return (
    <div className="home">
      <h1>
        Welcome to the <br />
        <span>COOLEST SIMON GAME!</span>
      </h1>

      <section className="playerName">
        <Input type="text" name="playerName" placeholder="Enter your name" />
        <p>(if you want to)</p>
      </section>

      <section className="level">
        <div className="title">
          <p>& choose your level</p>
          <img src="./images/arrow.png" alt="arrow" />
        </div>
        <div className="buttons">
          <Button
            text={
              <div>
                Easy <span>&#9996;&#65039;</span>
              </div>
            }
            className="easy"
          />
          <Button
            text={
              <div>
                Medium <span>&#9996;&#65039;</span>
              </div>
            }
            className="medium"
          />
          <Button
            text={
              <div>
                Hard <span>&#127947;&#127997;</span>
              </div>
            }
            className="hard"
          />
        </div>
      </section>
    </div>
  );
};
