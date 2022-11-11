import React from "react";
import LocationText from "../LocationText/LocationText";
import CircleImage from "../UI/CircleImage/CircleImage";
import StarsIcon from "../UI/StarsIcon/StarsIcon";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import styles from "./JobItem.module.scss";
import Link from "next/link";

type Props = {
  imageSrc: string;
  info: any;
};

const JobItem = ({ imageSrc, info }: Props) => {
  const { title, name, address, location, id } = info;
  const { lat, long } = location;

  return (
    <section className={styles.job__container}>
      <div className={styles.job__textimage}>
        <CircleImage imageSrc={imageSrc} />
        <div className={styles.job__text}>
          <Link href={id} style={{ textDecoration: "none" }}>
            <div className={styles.job__title}>{title}</div>
          </Link>
          <div className={styles.job__name_address}>
            <span className={styles.job__name}>{name} · </span>
            <span className={styles.job__address}>{address}</span>
          </div>
          <LocationText lat={lat} long={long} />
        </div>
      </div>
      <div className={styles.job__score}>
        <div className={styles.job__stars}>
          <StarsIcon />
        </div>
        <div className={styles.job__posted}>
          <BookmarkBorderRoundedIcon className={styles.job__posted_icon} />
          <span className={styles.job__posted_text}>Posted 2 days ago</span>
        </div>
      </div>
    </section>
  );
};

export default JobItem;
