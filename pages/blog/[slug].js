import { getPostData, getSortedPostsData } from "../../lib/posts";
import { remark } from "remark";
import html from "remark-html";

export default function BlogPost({ post }) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="mt-6" />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  const processedContent = await remark().use(html).process(postData.content);
  
  return {
    props: {
      post: {
        ...postData,
        content: processedContent.toString(),
      },
    },
  };
}
