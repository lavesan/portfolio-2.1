import React from "react";

import { StyledProjectSection } from "./project-section.styles";
import { ISection } from "../inicio.interfaces";
import { SlideShowComponent } from "../../../components/slide-show";
import projectsJSON from "../../../../public/static/projects.json";
import frameworksJSON from "../../../../public/static/frameworks.json";

const ProjectSection = ({}: ISection) => {
  return (
    <StyledProjectSection>
      <SlideShowComponent projects={projectsJSON} frameworks={frameworksJSON} />
    </StyledProjectSection>
  );
};

export default ProjectSection;
