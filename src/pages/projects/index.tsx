import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/header";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { Icon } from "@iconify/react";
import styles from "./projects.module.scss";


interface projectProps {
  title: string;
  desc: string;
  image: string;
  github: string;
}

interface projectsProps {
  projects: projectProps[];
}

const Projects = ({ projects }: projectsProps) => {
  return (
    <>
      <Head>
        <title>Projects | Devmarlon</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>
          Some Projects I Have <br /> been working.
        </h1>
        <div className={styles.projectsContainer}>
          {projects.map((project) => {
            return (
              <div key={project.title} className={styles.project}>
                <img src={project.image} alt="" />
                <div>
                  <h1>{project.title}</h1>
                  <p>{project.desc}</p>
                  <div className={styles.buttonArea}>
                    <a href={project.github}>
                      <Icon icon="akar-icons:github-fill" />
                      Open in github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className={styles.project}>
          <section></section>
          <div>
            <h1>BriskNotes</h1>
            <p>Project created with React and Nodejs</p>
            <a href="">
              <Icon icon="akar-icons:github-fill" />
              Open in github
            </a>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const res = await prismic.query(
    Prismic.Predicates.at("document.type", "project"),
    {
      fetch: [
        "project.title",
        "project.text",
        "project.github",
        "project.image",
      ],
      pageSize: 100,
    }
  );

  // console.log(JSON.stringify(res, null, 2));

  const projects = res.results.map((project) => {
    return {
      title: RichText.asText(project.data.title),
      github: project.data.github.url,
      image: project.data.image.url,
      desc: project.data.image.alt,
    };
  });

  return {
    props: { projects },
  };
};
