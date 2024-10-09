import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../home";
import { GamePage } from "../game";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
