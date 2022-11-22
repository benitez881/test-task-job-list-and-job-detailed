import React from "react";
import styles from "./Block.module.scss";

type BlockProps = {
  blockStyles: BlockStyles;
  children: string;
};

export type BlockStyles = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

const Block = ({ blockStyles, children }: BlockProps) => {
  return (
    <div className={styles.block} style={blockStyles}>
      {children}
    </div>
  );
};

export default Block;
