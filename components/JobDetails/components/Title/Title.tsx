import React from "react";
import styles from "./Title.module.scss";

type Props = {
  title: string;
  salary: string;
  postedAgo: string;
};
const Title = ({ title, salary, postedAgo }: Props) => {
  return (
    <div className={styles.job__title}>
      <div className={styles.job__title_text}>{title}</div>
      <div className={styles.job__title_salary_container}>
        <div className={styles.job__title_salary}>{salary}</div>
        <div className={styles.job__title_brutto}>Brutto, per year</div>
      </div>
      <div className={styles.job__title_ago}>{postedAgo}</div>
    </div>
  );
};

export default Title;
