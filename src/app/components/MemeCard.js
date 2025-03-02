import Image from "next/image";

export default function MemeCard({ meme }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <Image 
        src={meme.url} // ✅ Use `meme.url` instead of `meme.image`
        alt={meme.name}
        width={300} // Add width and height to fix errors
        height={300}
        className="rounded-lg w-full"
      />
      <h2 className="text-lg font-bold mt-2">{meme.name}</h2>
    </div>
  );
}
