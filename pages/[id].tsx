import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JobDetails from "../components/JobDetails/JobDetails";
import { Job, storeState } from "../store/reducers/jobsReducer";

const JobPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state: storeState) => state);

  if (!jobs.length) {
    (async function () {
      const response = await fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
      );
      const jobs = await response.json();
      dispatch({
        type: "set_jobs",
        payload: {
          jobs,
        },
      });
    })();
  }
  if (!Array.isArray(jobs)) return <></>;
  const job = jobs.filter((item: Job) => item.id == router.query.id)[0];

  return (
    <>
      <Head>
        <title>Job - details</title>
      </Head>
      {job ? <JobDetails info={job} /> : <></>}
    </>
  );
};

export default JobPage;
