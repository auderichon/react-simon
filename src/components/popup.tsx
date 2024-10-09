import React from "react";
import classnames from "classnames";

import "../styles/popup.css";

export interface PopupInterface {
  children?: React.ReactNode;
  position: "bottom" | "center";
  onClose: () => void;
}

export const Popup: React.FC<PopupInterface> = ({
  children,
  position,
  onClose,
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup">
      <div className={classnames("content", position)} ref={ref}>
        <div className="close bold" onClick={onClose}>
          &times;
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
