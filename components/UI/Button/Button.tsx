import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
