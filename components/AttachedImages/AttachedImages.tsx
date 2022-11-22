/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./AttachedImages.module.scss";

type Props = {
  title: string;
  imagesSrc: string[];
};
const AttachedImages = ({ title, imagesSrc }: Props) => {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.underline}></div>
      <div className={styles.img__container}>
        {imagesSrc.map((src, index) => (
          // use index as key, because the list is immutable
          <img src={src} key={index} alt="" className={styles.img}></img>
        ))}
      </div>
    </div>
  );
};

export default AttachedImages;
