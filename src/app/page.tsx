"use client"; // Enable hooks in Next.js
import { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";


export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes.slice(0, 10))); // Limit to 10 memes
  }, []);

  return (
    <div>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <h1 className="text-center text-3xl font-bold mt-4">Trending Memes</h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div> */}
      </div>
      <Footer />
    </div>

  );
}
