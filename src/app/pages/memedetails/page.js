"use client";


import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MemeDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");  
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    if (id) {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
          const foundMeme = data.data.memes.find((m) => m.id === id);
          setMeme(foundMeme);
        });
    }
  }, [id]);

  if (!meme) return <p className="text-center text-white">Loading...</p>;

  return (
    <div>
      <Navbar />

      <div className="bg-black text-white min-h-screen p-4">
        <h1 className="text-center text-3xl">{meme.name}</h1>
        <img src={meme.url} alt={meme.name} className="mx-auto mt-4 rounded-lg" />
      </div>
      <Footer />
    </div>
  );
}
