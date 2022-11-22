import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import styles from "./StarsIcon.module.scss";

type StarsIconProps = {
  maxAmount?: number;
  amount?: number;
};
const StarsIcon = ({ maxAmount = 5, amount = maxAmount }: StarsIconProps) => {
  return (
    <>
      {Array(maxAmount)
        .fill(false)
        .map((_, index) =>
          // use index as key, because the list is immutable
          index >= amount ? (
            <StarBorderRoundedIcon
              viewBox="3 3 18 18"
              key={index}
              className={styles.star__item}
            />
          ) : (
            <StarRoundedIcon
              viewBox="3 3 18 18"
              key={index}
              className={styles.star__item}
            />
          )
        )}
      {/* {Array(amount).fill(<StarRoundedIcon />)} */}
      {/* {Array(maxAmount - amount).fill(<StarBorderRoundedIcon />)} */}
    </>
  );
};

export default StarsIcon;
