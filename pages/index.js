import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Jotto!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Ckomop0x study projects
      </footer>
    </div>
  )
}
