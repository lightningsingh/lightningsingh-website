import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map(({ slug, title, date, description }) => (
            <li key={slug} className="mb-4">
              <Link href={`/blog/${slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {title}
              </Link>
              <p className="text-gray-500 text-sm">{date}</p>
              <p>{description}</p>
            </li>
          ))
        ) : (
          <p className="text-red-500">No posts found!</p>
        )}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: { posts },
  };
}
