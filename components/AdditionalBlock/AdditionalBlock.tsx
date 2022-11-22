import React from "react";
import BlockList from "../BlockList/BlockList";
import { BlockStyles } from "../UI/Block/Block";
import styles from "./AdditionalBlock.module.scss";

type AdditionalBlockProps = {
  data: string[];
  title: string;
  theme: BlockStyles;
};
type theme = "employment" | "benefits";
// BlockStyles
const AdditionalBlock = ({ data, title, theme }: AdditionalBlockProps) => {
  return (
    <>
      {data.length && (
        <>
          <div className={styles.title}>{title}</div>
          <BlockList data={data} theme={theme} />
        </>
      )}
    </>
  );
};

export default AdditionalBlock;
