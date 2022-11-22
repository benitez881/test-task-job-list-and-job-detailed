import React from "react";
import { Job } from "../../store/reducers/jobsReducer";
import JobItem from "../JobItem/JobItem";
import styles from "./JobItemsList.module.scss";

type JobItemsListProps = {
  list: Job[];
  className?: string;
};

const JobItemsList = ({ list, className }: JobItemsListProps) => {
  return (
    <div className={[styles.job__items_list, className].join(" ")}>
      {list.map((job: Job, index: React.Key | null | undefined) => (
        // use index as key, because the list is immutable
        <JobItem
          job={job}
          key={index}
          imageSrc="https://picsum.photos/200/300"
        />
      ))}
    </div>
  );
};

export default JobItemsList;
