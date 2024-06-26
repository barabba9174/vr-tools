import Head from "next/head";
import GpuFinder from "../src/gpu-finder-gflops";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gpu performance finder</title>
        <meta name="description" content="gpu vr performance finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GpuFinder />
      </main>
    </div>
  );
}
