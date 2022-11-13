import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ReturnButton.module.scss";
import { useRouter } from "next/router";

const ReturnButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className={styles.return__button}>
      <ArrowBackIosIcon />
      <span className={styles.return__text}>RETURN TO JOB BOARD</span>
    </div>
  );
};

export default ReturnButton;
