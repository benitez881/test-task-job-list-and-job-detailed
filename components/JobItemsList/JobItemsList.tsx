import { NodeNextRequest } from "next/dist/server/base-http/node";
import Link from "next/link";
import React from "react";
import JobItem from "../JobItem/JobItem";
import styles from "./JobItemsList.module.scss";

type Props = {
  list: any;
  className?: string;
};
const JobItemsList = ({ list, className }: Props) => {
  return (
    <div className={[styles.job__list, className].join(" ")}>
      {list.map((job: any, index: React.Key | null | undefined) => (
        <JobItem
          info={job}
          key={index}
          imageSrc="https://picsum.photos/200/300"
        />
      ))}
    </div>
  );
};

export default JobItemsList;
