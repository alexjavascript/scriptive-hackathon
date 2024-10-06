"use client";

import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";

const Hero = dynamic(() => import('@/ui/screens/hero'), {
  ssr: false,
})

const Home = () => {
  return (
    <div className={styles.page}>
      <header>

        <nav>
          <Link className={styles.x} href="/">
          <svg
    width={25}
    height={25}
    viewBox="0 0 85 85"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.467 0C19.01.018 0 19.04 0 42.5 0 65.972 19.028 85 42.5 85S85 65.972 85 42.5C85 19.04 65.99.018 42.533 0h-.066ZM25.538 53A101.117 101.117 0 0 1 25 42.5c0-3.266.152-6.446.439-9.5H5.18A38.577 38.577 0 0 0 4 42.5c0 3.64.505 7.162 1.45 10.5h20.088Zm4.023 0A96.846 96.846 0 0 1 29 42.5c0-3.286.16-6.467.457-9.5h26.086c.297 3.033.457 6.214.457 9.5 0 3.65-.197 7.169-.56 10.5H29.56Zm-3.516 4H6.824c4.736 11.641 15.005 20.442 27.541 23.14-3.833-4.897-6.826-13.145-8.32-23.14Zm4.046 0h24.817c-.843 5.38-2.135 10.15-3.732 14.029-1.466 3.56-3.11 6.176-4.73 7.84C44.837 80.523 43.506 81 42.5 81c-1.005 0-2.337-.478-3.946-2.13-1.62-1.665-3.264-4.282-4.73-7.841-1.597-3.879-2.889-8.65-3.732-14.029Zm28.864 0c-1.494 9.995-4.487 18.243-8.32 23.14C63.17 77.441 73.44 68.64 78.176 57h-19.22Zm20.596-4A38.53 38.53 0 0 0 81 42.5c0-3.279-.41-6.461-1.181-9.5H59.561c.287 3.054.439 6.234.439 9.5 0 3.624-.187 7.142-.538 10.5H79.55ZM33.824 13.971c-1.695 4.118-3.047 9.24-3.883 15.029h25.118c-.836-5.79-2.188-10.911-3.883-15.029-1.466-3.56-3.11-6.176-4.73-7.84C44.848 4.488 43.523 4.005 42.52 4h-.04c-1.003.005-2.328.488-3.926 2.13-1.62 1.664-3.264 4.28-4.73 7.84ZM59.1 29h19.468C74.022 16.864 63.527 7.634 50.635 4.861 54.595 9.92 57.659 18.556 59.099 29ZM6.433 29h19.468c1.44-10.444 4.504-19.08 8.464-24.139C21.472 7.634 10.978 16.864 6.433 29Z"
    />
  </svg>
            Scriptive
          </Link>

          <ul>
            <li>
            <Link className={styles.x} href="/">
          
          Projects
          </Link>
            </li>
            <li>
            <Link className={styles.x} href="/">
          
          About
          </Link>
            </li>
            <li>
            <Link className={styles.x} href="/">
          
          Contact
          </Link>
            </li>
          </ul>

          <Link className={styles.x} href="/">
            <svg
              width={32}
              height={10}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" d="M0 0h32v1.6H0zM0 7.467h32v1.6H0z" />
            </svg>

            Menu
          </Link>
        </nav>

      </header>
      <Hero />
      <footer>

      </footer>
    </div>
  );
}

export default Home;


{/* <Canvas></Canvas> */}

      {/* <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}