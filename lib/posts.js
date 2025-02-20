import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    console.error("⚠️ Warning: Posts directory not found!");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
