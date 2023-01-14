import React from "react";
import { ButtonStyle, SelectStyle } from "./button.styles";

const buttonType = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, variant = "primary" }) => {
  return (
    <ButtonStyle className={`button--${buttonType[variant]}`}>
      {children}
    </ButtonStyle>
  );
};

export const SelectButton = ({ children, ...rest }) => {
  return <SelectStyle>{children}</SelectStyle>;
};
export default Button;
