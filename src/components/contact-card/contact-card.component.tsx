import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledContactCard } from "./contact-card.styles";
import { IContactCard } from "./contact-card.interfaces";

const ContactCard = ({ href, icon, text, backgroundColor, onClick }: IContactCard) => {
  return (
    <StyledContactCard
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      backgroundColor={backgroundColor}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FontAwesomeIcon className="icon" icon={icon} />
      {text && <p className="text">{text}</p>}
    </StyledContactCard>
  );
};

export default ContactCard;
