import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://s1bs8vas12.ufs.sh/f/UQAlPYWL9fuDvVT6YJHC8tLAhMkyd1FOfmNlWZgxYzqHeaDB",
  "https://s1bs8vas12.ufs.sh/f/UQAlPYWL9fuDUrgw0hWL9fuDN0bPpln6AECQ7dIv1Oz5tiSo",
  "https://s1bs8vas12.ufs.sh/f/UQAlPYWL9fuDseoBBqJGxrLonfNWBD0CwXYmgZUiekuMFS5y",
  "https://s1bs8vas12.ufs.sh/f/UQAlPYWL9fuDn3tZdmVbBoO6RvefWyiPN2gqYzQtA4haLVUm",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}+${index}`} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
