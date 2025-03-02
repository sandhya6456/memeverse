"use client"; // Enable hooks in Next.js
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [memes, setMemes] = useState<{ id: string; name: string; url: string }[]>([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes.slice(0, 10))); // Limit to 10 memes
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <h1 className="text-center text-3xl font-bold mt-4">Trending Memes</h1>

      {/* ✅ Display the memes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {memes.map((meme) => (
          <div key={meme.id} className="p-2 border border-gray-700 rounded-lg">
            {/* Use Next.js Image component for optimization */}
            <img src={meme.url} alt={meme.name} className="rounded-md w-full" />
            <p className="text-center mt-2">{meme.name}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
