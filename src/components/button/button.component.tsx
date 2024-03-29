import React from "react";

import { IStyledIconButton } from "./button.interfaces";
import { StyledIconButton } from "./button.styles";
import { IChildren } from "../../layouts/header/header.interfaces";

const ButtonComponent = ({
  children,
  ...attrs
}: IChildren &
  IStyledIconButton &
  React.HTMLAttributes<HTMLAnchorElement> &
  any) => <StyledIconButton {...attrs}>{children}</StyledIconButton>;

export default ButtonComponent;
