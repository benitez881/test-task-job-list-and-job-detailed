import React from "react";
import BlockList from "../BlockList/BlockList";
import { BlockStyles } from "../UI/Block/Block";
import styles from "./AdditionalBlock.module.scss";

type Props = {
  data: string[];
  title: string;
  theme: BlockStyles;
};

const EmploymentBlock = ({ data, title, theme }: Props) => {
  return (
    <>
      {data.length ? (
        <>
          <div className={styles.title}>{title}</div>
          <BlockList data={data} theme={theme} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EmploymentBlock;
