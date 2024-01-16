import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { StyledSocialLink } from "./social-link.styles";

const SocialLink = () => {
  return (
    <StyledSocialLink>
      <a
        href="https://github.com/lavesan"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className="nav-header--social-links-container--github"
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/valdery-alves-a32653160/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
        className="nav-header--social-links-container--linkedin"
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </StyledSocialLink>
  );
};

export default SocialLink;
