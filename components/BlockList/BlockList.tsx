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
        <Block blockStyles={theme} key={index}>
          {text}
        </Block>
      ))}
    </div>
  );
};

export default BlockList;
