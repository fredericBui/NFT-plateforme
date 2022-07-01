import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
  return <button {...rest}></button>;
};

export default Button;
