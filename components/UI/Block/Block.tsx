import React from "react";
import styles from "./Block.module.scss";

type Props = {
  children: string;
  blockStyles: BlockStyles;
};
export type BlockStyles = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

const Block = ({ children, blockStyles }: Props) => {
  return (
    <div className={styles.block} style={blockStyles}>
      {children}
    </div>
  );
};

export default Block;
