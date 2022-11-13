import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ReturnButton.module.scss";

const ReturnButton = () => {
  return (
    <Link href={"/jobs/1"} className={styles.return__button}>
      <ArrowBackIosIcon />
      <span className={styles.return__text}>RETURN TO JOB BOARD</span>
    </Link>
  );
};

export default ReturnButton;
