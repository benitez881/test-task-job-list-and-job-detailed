import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPagination from "../../components/BasicPagination/BasicPagination";
import JobItemsList from "../../components/JobItemsList/JobItemsList";
import getJobs from "../../service/getJobs";
import setJobs from "../../store/actionCreators/setJobs";
import setPage from "../../store/actionCreators/setPage";
import { Job, storeState } from "../../store/reducers/jobsReducer";
import styles from "../../styles/Home.module.scss";

type Data = {
  params: ParsedUrlQuery;
};
export const getServerSideProps = async ({ params }: Data) => {
  const jobsPerPage = 6;
  const jobs = await getJobs();
  const page = Number(params.id);

  const jobsFiltered = jobs.filter((job: Job, index: number) => {
    return index < page * jobsPerPage && index + 1 > (page - 1) * jobsPerPage;
  });

  return {
    props: { jobsLength: jobs.length, jobs: jobsFiltered, jobsPerPage, page },
  };
};
type Props = {
  jobs: Job[];
};
const Jobs: NextPage = ({ jobs, jobsLength, jobsPerPage, page }: any) => {
  const router = useRouter();

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push(`${page}`);
  };

  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      {!jobs.length ? (
        <></>
      ) : (
        <>
          <JobItemsList list={jobs} className={styles.list} />
          <BasicPagination
            className={styles.pagination}
            count={Math.ceil(jobsLength / jobsPerPage)}
            page={page}
            onChange={paginationHandler}
          />
        </>
      )}
    </>
  );
};

export default Jobs;
