"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Leaderboard() {
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
      setLikedMemes(storedMemes);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-4">
        <h1 className="text-center text-3xl font-bold">Leaderboard</h1>
        {likedMemes.length === 0 ? (
          <p className="text-center mt-4">No liked memes yet.</p>
        ) : (
          <ul className="flex flex-col md:flex-row md:flex-wrap items-center justify-center mt-4 gap-6">
            {likedMemes.map((meme, index) => (
              <li key={index} className="flex flex-col items-center gap-2">
                <span className="text-lg font-semibold">#{index + 1}</span>
                <div className="relative w-40 h-40">
                  <Image
                    src={meme}
                    alt={`Liked meme ${index + 1}`}
                    width={160}
                    height={160}
                    className="rounded-lg object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}
