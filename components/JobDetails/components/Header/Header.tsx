import React from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.job__header}>
      <span className={styles.job__header_title}>Job Details</span>
      <div className={styles.job__header_buttons}>
        <div className={styles.job__header_button}>
          <BookmarkBorderRoundedIcon /> Save to my list
        </div>
        <div className={styles.job__header_button}>
          <ShareIcon /> Share
        </div>
      </div>
      <div className={styles.job__header_underline}></div>
    </div>
  );
};

export default Header;
