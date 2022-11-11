import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import BasicPagination from "../components/BasicPagination/BasicPagination";
import JobItemsList from "../components/JobItemsList/JobItemsList";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { jobs, page } = useSelector((state): any => (state as any).jobs);
  if (typeof jobs === "object" && !Array.isArray(jobs)) {
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
  const jobsPerPage = 6;
  if (typeof jobs === "object" && !Array.isArray(jobs)) return <></>;
  const jobs_paginated = jobs.filter((job: any, index: number) => {
    return index < page * jobsPerPage && index + 1 > (page - 1) * jobsPerPage;
  });
  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch({
      type: "set_page",
      payload: {
        page,
      },
    });
  };
  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      {typeof jobs_paginated === "object" && !Array.isArray(jobs) ? (
        <></>
      ) : (
        <>
          <JobItemsList list={jobs_paginated} className={styles.list} />
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
