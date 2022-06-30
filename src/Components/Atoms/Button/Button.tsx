import styles from "./Button.module.css";
import React, { FC } from "react";
import { ButtonProps } from "./Button.type";

export const Button: FC<ButtonProps> = ({ onClick, text, rounded }) => {
  const className = rounded
    ? `${styles.button} ${styles.button_rounded}`
    : styles.button;
  // console.log(text);
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
