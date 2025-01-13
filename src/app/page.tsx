import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}+${index}`} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
