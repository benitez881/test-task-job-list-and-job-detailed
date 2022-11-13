import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPagination from "../components/BasicPagination/BasicPagination";
import JobItemsList from "../components/JobItemsList/JobItemsList";
import getJobs from "../service/getJobs";
import setJobs from "../store/actionCreators/setJobs";
import setPage from "../store/actionCreators/setPage";
import { Job, storeState } from "../store/reducers/jobsReducer";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { jobs, page } = useSelector((state: storeState) => state);
  const [jobsPaginated, setJobsPaginated] = useState<Job[]>([]);
  const jobsPerPage = 6;
  useEffect(() => {
    if (!jobs.length) {
      (async function () {
        const jobs = await getJobs();

        setJobs(jobs)(dispatch);
      })();
    }
  });
  useEffect(() => {
    const jobsFiltered = jobs.filter((job: Job, index: number) => {
      return index < page * jobsPerPage && index + 1 > (page - 1) * jobsPerPage;
    });
    setJobsPaginated(jobsFiltered);
  }, [page, jobs]);

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page)(dispatch);
  };

  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      {!jobsPaginated.length ? (
        <></>
      ) : (
        <>
          <JobItemsList list={jobsPaginated} className={styles.list} />
          <BasicPagination
            className={styles.pagination}
            count={Math.ceil(jobs.length / jobsPerPage)}
            page={page}
            onChange={paginationHandler}
          />
        </>
      )}
    </>
  );
};

export default Home;
