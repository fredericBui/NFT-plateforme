import React from "react";
import LoadingSpinner from "./loading-spinner";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
  return (
    <button {...rest} disabled={isLoading}>
      {isLoading && <LoadingSpinner />}
      {children}
    </button>
  );
};

export default Button;