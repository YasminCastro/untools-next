import { ManyItems } from "@directus/sdk";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Global/Header";
import Blog from "../components/Pages/Index/Blog";
import HeroSection from "../components/Pages/Index/HeroSection";
import styles from "../styles/Home.module.css";
import DirectusInstance from "../utils/directus";
import { IPosts, IPropsHome } from "./api/HomePage/getProps";

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

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const directus = await DirectusInstance();

  const posts: ManyItems<IPosts> = await directus
    .items("untools_blog")
    .readByQuery({
      limit: -1,
      filter: { status: { _eq: "published" } },
      fields: ["id", "title", "category", "slug", "description", "icon"],
    });

  return { props: { posts: posts.data } };
};
