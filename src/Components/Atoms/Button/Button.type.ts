import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> & {
  text: string;
  rounded?: true;
};
