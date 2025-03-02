"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Leaderboard() {
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    // ✅ Check if window is defined before using localStorage
    if (typeof window !== "undefined") {
      const storedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
      setLikedMemes(storedMemes);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-4">
        <h1 className="text-center text-3xl">Leaderboard</h1>
        {likedMemes.length === 0 ? (
          <p className="text-center mt-4">No liked memes yet.</p>
        ) : (
          <ul>
            {likedMemes.map((meme, index) => (
              <li key={index} className="mt-2">
                {index + 1}. <img src={meme} className="w-40 rounded-lg" />
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}
