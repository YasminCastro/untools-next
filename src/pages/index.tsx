import { ManyItems } from "@directus/sdk";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Global/Header";
import Blog from "../components/Pages/Index/Blog";
import HeroSection from "../components/Pages/Index/HeroSection";
import styles from "../styles/Home.module.css";
import DirectusInstance from "../utils/directus";
import { IPropsHome } from "./api/HomePage/getProps";

const Home: NextPage<IPropsHome> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Untools</title>
        <meta name="description" content="Copying ultools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <Blog posts={posts} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const directus = await DirectusInstance.getInstance();

  const posts: ManyItems<any> = await directus
    .items("posts")
    .readByQuery({ limit: -1 });

  console.log(posts);

  return { props: { posts: "" } };
};
