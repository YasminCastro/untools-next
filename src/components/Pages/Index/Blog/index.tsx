import Link from "next/link";
import Image from "next/image";

import { IPropsHome } from "../../../../pages/api/HomePage/getProps";
import { BlogContainer, Post, PostWrapper } from "./styles";
import { CMS_URL } from "../../../../config";

const Blog: React.FC<IPropsHome> = ({ posts }) => {
  return (
    <BlogContainer>
      {posts.map((post) => (
        <PostWrapper key={post.id}>
          <Link href={post.slug} passHref>
            <a>
              <Post>
                <Image
                  src={`${CMS_URL}/assets/${post.icon}`}
                  alt="Imagem de post"
                  quality={100}
                  height={90}
                  width={90}
                />
                <h2>{post.title}</h2>
                <span className={post.category.toLowerCase()}>
                  {post.category}
                </span>
                <p>{post.description}</p>
              </Post>
            </a>
          </Link>
        </PostWrapper>
      ))}
    </BlogContainer>
  );
};

export default Blog;
