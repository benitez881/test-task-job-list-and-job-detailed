import React from "react";
import AdditionalBlock from "../../../AdditionalBlock/AdditionalBlock";
import styles from "./Additional.module.scss";

enum BenefitsBlockStyles {
  color = "#988B49",
  backgroundColor = "rgba(255, 207, 0, 0.15)",
  borderColor = "#FFCF00",
}
enum EmploymentBlockStyles {
  color = "#55699E",
  backgroundColor = "rgba(161, 177, 219, 0.317343)",
  borderColor = "rgba(85, 105, 158, 0.3)",
}
enum Themes {
  EmploymentBlockStyles,
  BenefitsBlock,
}

type AdditionalProps = {
  benefits: string[];
  employment_type: string[];
};

const Additional = ({ benefits, employment_type }: AdditionalProps) => {
  const boolean = benefits[0] && employment_type[0];
  return boolean ? (
    <div className={styles.job__additional}>
      <div className={styles.job__additional_title}>Additional info</div>
      <div className={styles.job__additional_underline}></div>
      <AdditionalBlock
        data={employment_type}
        title="Employment type"
        theme={EmploymentBlockStyles}
      />
      <AdditionalBlock
        data={benefits}
        title="Benefits"
        theme={BenefitsBlockStyles}
      />
    </div>
  ) : (
    <></>
  );
};

export default Additional;
