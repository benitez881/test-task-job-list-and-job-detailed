import React from "react";
import Block, { BlockStyles } from "../UI/Block/Block";
import styles from "./BlockList.module.scss";

type Props = {
  data: string[];
  theme: BlockStyles;
};
const BlockList = ({ data, theme }: Props) => {
  return (
    <div className={styles.block__container}>
      {data.map((text, index) => (
        // use index as key, because the list is immutable
        <Block blockStyles={theme} key={index}>
          {text}
        </Block>
      ))}
    </div>
  );
};

export default BlockList;
