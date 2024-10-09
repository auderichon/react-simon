import React from "react";

import "../styles/input.css";

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputInterface> = ({
  className,
  ...otherProps
}) => {
  return <input {...otherProps} className={className} />;
};
