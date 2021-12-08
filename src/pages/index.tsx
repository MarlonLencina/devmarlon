import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Devmarlon</title>
      </Head>
      <Header />
      <main className={styles.content}>
        <div className={styles.content__chat}>
          <img src="/images/fotodevmarlon.png" alt="" />
        </div>
        <h1>Full Stack developer.</h1>
        <p>
          My name is Marlon Lencina, i’m a 17 years old Full Stack developer,
          looking for job.
        </p>
        <span>And now... What you really need to know about me.</span>
        <div className={styles.box}>
          <ul>
            <li>1. I Really love tech and Learn</li>
            <li>2. I don't talk to much</li>
            <li>3. I wish live in several places</li>
          </ul>
        </div>
      </main>
      <article className={styles.about}>
        <div className={styles.aboutContainer}>
          <section className={styles.section}>
            <h2>A little about me</h2>
            <p>
              I have sort of 1/2 year experience in web development working in
              personal projects, I really love learn new things and Technology
              more than anything in this world, i would like shared my
              experiences with you if you send me a message on my socials. I
              actually live at Santa Catarina, Brazil and have exp erience
              working with design many years in the past.
            </p>
          </section>
          <section className={styles.section}>
            <h2>My Stack</h2>
            <p>
              I have experience working with Javascript stack on Backend and
              Frontend - ReactJS, React native and Node.js. I think this stack
              is amazing and would really like learn new techs in this scope.
            </p>
          </section>
        </div>
      </article>
      <footer className={styles.footerContainer}>
        <img src="/images/logodevmarlon.svg" alt="" />
        <p>All rights reserved to Marlon Lencina, 2022.</p>
      </footer>
    </>
  );
};

export default Home;
