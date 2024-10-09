import React from "react";

import { Popup, PopupInterface } from "./popup";

interface LinkWithPopupInterface {
  link: string;
  popup: {
    position: PopupInterface["position"];
    content: React.ReactNode;
  };
}

export const LinkWithPopup: React.FC<LinkWithPopupInterface> = ({
  link,
  popup,
}) => {
  const [isPopupDisplayed, setIsPopupDisplayed] = React.useState(false);

  return (
    <>
      <div
        onClick={(event) => {
          event.stopPropagation();
          setIsPopupDisplayed(!isPopupDisplayed);
        }}
        className="link"
      >
        {link}
      </div>
      {isPopupDisplayed && (
        <Popup
          position={popup.position}
          onClose={() => setIsPopupDisplayed(false)}
        >
          {popup.content}
        </Popup>
      )}
    </>
  );
};
