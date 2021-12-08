import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/header";
import styles from "./contact.module.scss";
import { Icon } from "@iconify/react";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Devmarlon</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>
          Send me a message, <br /> anywhere you want.
        </h1>
        <p>I would like talk to you through</p>
        <div className={styles.containerButtons}>
          <a href="https://www.linkedin.com/in/devmarlonlencina/">
            <Icon icon="akar-icons:linkedin-fill" /> Linkedin
          </a>
          <a href="https://github.com/MarlonLencina">
            <Icon icon="akar-icons:github-fill" />
            GitHub
          </a>
          <a href="https://twitter.com/devmarlontech">
            <Icon icon="akar-icons:twitter-fill" />
            Twitter
          </a>
        </div>
      </main>
    </>
  );
};

export default Contact;
