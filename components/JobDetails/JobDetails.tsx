import React from "react";
import styles from "./JobDetails.module.scss";
import AttachedImages from "../AttachedImages/AttachedImages";
import ReturnButton from "../ReturnButton/ReturnButton";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Additional from "./components/Additional/Additional";
import { Job } from "../../store/reducers/jobsReducer";

type JobDetailsProps = {
  job: Job;
};

const JobDetails = ({ job }: JobDetailsProps) => {
  const {
    title,
    salary,
    description,
    benefits,
    employment_type,
    pictures,
    location,
  } = job;
  const { lat, long } = location;
  return (
    <div className={styles.job__container}>
      <article className={styles.job__article}>
        <Header />
        <button className={styles.job__apply}>APPLY NOW</button>
        <Title title={title} salary={salary} postedAgo={"Posted 2 days ago"} />
        <div className={styles.job__description}>{description}</div>
        <Additional benefits={benefits} employment_type={employment_type} />
        <AttachedImages title="Attached images" imagesSrc={pictures} />
        <ReturnButton />
      </article>
      <Map lat={lat} long={long} />
    </div>
  );
};

export default JobDetails;
