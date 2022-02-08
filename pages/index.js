import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engelse park - Groningen</title>
        <meta name="description" content="Engelse park - Groningen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Engelse Park
        </h1>
      </main>
    </div>
  )
}
