import React from "react";
import Image from "next/image";
import styles from "./CircleImage.module.scss";

type Props = {
  imageSrc: string;
  alt?: string;
};
const CircleImage = ({ imageSrc, alt = "" }: Props) => {
  return (
    <div>
      <picture>
        <img src={imageSrc} alt={alt} className={styles.image} />
      </picture>
    </div>
  );
};

export default CircleImage;
