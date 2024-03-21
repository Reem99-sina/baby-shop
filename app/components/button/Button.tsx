"use client";
import { Button } from "@mui/material";
import clsx from "clsx";
import React from "react";
interface InputProps {
  fullWidth?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  required?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  [x: string]: any;
}
const ButtonCustom: React.FC<InputProps> = ({
  fullWidth,
  type,
  required,
  onClick,
  children,
  secondary,
  danger,
  disabled,
  ...x
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        ...x?.sx,
      }}
      {...x}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
