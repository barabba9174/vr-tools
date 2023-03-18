import Head from "next/head";
import GpuFinder from "../src/gpu-finder";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vr tools</title>
        <meta name="description" content="vr tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GpuFinder />
      </main>
    </div>
  );
}
