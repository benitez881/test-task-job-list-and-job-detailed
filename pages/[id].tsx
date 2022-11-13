import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobDetails from "../components/JobDetails/JobDetails";
import getJobs from "../service/getJobs";
import setJobs from "../store/actionCreators/setJobs";
import { Job, storeState } from "../store/reducers/jobsReducer";

const JobPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state: storeState) => state);

  useEffect(() => {
    if (!jobs.length) {
      (async function () {
        const jobs = await getJobs();

        setJobs(jobs)(dispatch);
      })();
    }
  });
  const job = jobs.filter((item: Job) => item.id == router.query.id)[0];

  return (
    <>
      <Head>
        <title>Job - details</title>
      </Head>
      {job && <JobDetails info={job} />}
    </>
  );
};

export default JobPage;
