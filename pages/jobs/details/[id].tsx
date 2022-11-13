import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import getJobs from "../../../service/getJobs";
import JobDetails from "../../../components/JobDetails/JobDetails";
import { Job, storeState } from "../../../store/reducers/jobsReducer";

type Data = {
  params: ParsedUrlQuery;
};
export const getServerSideProps = async ({ params }: Data) => {
  const jobs = await getJobs();
  const job = jobs.filter((item: Job) => item.id == params.id);

  return {
    props: { job: job[0] },
  };
};

type Props = {
  job: Job;
};
const JobPage = ({ job }: Props) => {
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
