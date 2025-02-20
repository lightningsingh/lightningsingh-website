import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// Fetch all blog metadata
export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    console.error("⚠️ Warning: Posts directory not found!");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);
    return { slug, ...data };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Fetch full blog content
export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Error: Markdown file ${slug}.md not found!`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug, ...data, content };
}
