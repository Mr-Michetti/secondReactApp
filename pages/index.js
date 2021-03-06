import Head from 'next/head';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

const Home = () => {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Second Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Live.event
        </h1>

        <p className={styles.description}>
          La mia prima app che funge davvero :D
        </p>
        <button onClick={(e) => auth.signinWithGithub()}>SignIn</button>
        <div>{auth?.user?.email}</div>
        {auth.user &&
          (<button onClick={(e) => auth.signout()}>SignOut</button>)
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;