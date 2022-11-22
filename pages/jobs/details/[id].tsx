import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import getJobs from "../../../service/getJobs";
import JobDetails from "../../../components/JobDetails/JobDetails";
import { Job } from "../../../store/reducers/jobsReducer";

type Data = {
  params: ParsedUrlQuery;
};

export const getServerSideProps = async ({ params }: Data) => {
  const jobs = await getJobs();
  const job = jobs.find((item: Job) => item.id === params.id?.toString());

  return {
    props: { job },
  };
};

type JobPageProps = {
  job: Job;
};

const JobPage = ({ job }: JobPageProps) => {
  return (
    <>
      <Head>
        <title>Job - details</title>
      </Head>
      {job && <JobDetails job={job} />}
    </>
  );
};

export default JobPage;
