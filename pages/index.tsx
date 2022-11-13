import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/jobs/1");
  });
  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      <div className={styles.main__container}>
        <h1 className={styles.main__header}></h1>
        <Link href={"/jobs/1"} className={styles.main__link}>
          Click here to redirect to the Jobs page.
        </Link>
      </div>
    </>
  );
};

export default Home;
