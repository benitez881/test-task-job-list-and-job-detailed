import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import BasicPagination from "../../components/BasicPagination/BasicPagination";
import JobItemsList from "../../components/JobItemsList/JobItemsList";
import getJobs from "../../service/getJobs";
import { Job } from "../../store/reducers/jobsReducer";
import styles from "../../styles/Home.module.scss";

type Data = {
  params: ParsedUrlQuery;
};

export const getServerSideProps = async ({ params }: Data) => {
  const jobsPerPageAmount = 6;
  const jobs = await getJobs();
  const pageNumber = Number(params.id);

  const jobsPagitated = jobs.filter((job: Job, index: number) => {
    const currentPageCount = pageNumber * jobsPerPageAmount;
    const prevPageCount = (pageNumber - 1) * jobsPerPageAmount;
    return index < currentPageCount && index + 1 > prevPageCount;
  });

  return {
    props: {
      jobsAmount: jobs.length,
      jobs: jobsPagitated,
      jobsPerPageAmount,
      pageNumber,
    },
  };
};

type JobsProps = {
  jobs: Job[];
  jobsAmount: number;
  jobsPerPageAmount: number;
  pageNumber: number;
};

const Jobs: NextPage<JobsProps> = ({
  jobs,
  jobsAmount,
  jobsPerPageAmount,
  pageNumber,
}) => {
  const router = useRouter();

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push(page.toString());
  };

  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      {jobsAmount && (
        <>
          <JobItemsList list={jobs} className={styles.list} />
          <BasicPagination
            className={styles.pagination}
            count={Math.ceil(jobsAmount / jobsPerPageAmount)}
            page={pageNumber}
            onChange={handlePagination}
          />
        </>
      )}
    </>
  );
};

export default Jobs;
