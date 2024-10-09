import React from "react";

import { Rules } from "./rules";
import { Credits } from "./credits";

import "../../styles/footer.css";

export const Footer: React.FC = () => (
  <footer>
    <Rules />
    <Credits />
  </footer>
);
