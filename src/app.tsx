import React from "react";

import { Routing } from "./core/routing";
import { Footer } from "./core/footer";

export const App: React.FC = () => (
  <div>
    <Routing />
    <Footer />
  </div>
);
