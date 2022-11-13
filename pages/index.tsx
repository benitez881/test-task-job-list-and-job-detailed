import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({ jobs, jobsLength, jobsPerPage }: any) => {
  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      <Link href={"/jobs/1"}>Jobs</Link>
    </>
  );
};

export default Home;
