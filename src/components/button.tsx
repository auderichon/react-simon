import React from "react";

import "../styles/button.css";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string | React.ReactNode;
}

export const Button: React.FC<ButtonInterface> = ({
  className,
  text,
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={className}>
      {text}
    </button>
  );
};
