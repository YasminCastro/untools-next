import { ManyItems } from "@directus/sdk";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import Blog from "../components/Pages/Index/Blog";
import HeroSection from "../components/Pages/Index/HeroSection";
import { Wrapper } from "../styles";
import DirectusInstance from "../utils/directus";
import { IPosts, IPropsHome } from "./api/HomePage/getProps";

const Home: NextPage<IPropsHome> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Untools</title>
        <meta name="description" content="Copying ultools" />
      </Head>

      <Header />
      <Wrapper>
        <HeroSection />
        <Blog posts={posts} />
      </Wrapper>
      <Footer />
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
