"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Leaderboard() {
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    // Retrieve all liked memes from localStorage
    const storedMemes = Object.keys(localStorage)
      .filter((key) => key.startsWith("likes_")) // Only fetch likes
      .map((key) => {
        const memeId = key.replace("likes_", "");
        const imageUrl = localStorage.getItem(`meme_image_${memeId}`);
  
        console.log(`Meme ID: ${memeId}, Image URL:`, imageUrl); // Debugging log
  
        return {
          id: memeId,
          likes: parseInt(localStorage.getItem(key)) || 0,
          image: imageUrl || null, // Store image if saved
        };
      })
      .sort((a, b) => b.likes - a.likes); // Sort by likes (highest first)
  
    console.log("Final retrieved memes:", storedMemes); // Log final list
  
    setLikedMemes(storedMemes);
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
              <li key={meme.id} className="flex flex-col items-center gap-2">
                <span className="text-lg font-semibold">
                  #{index + 1} - {meme.likes} Likes
                </span>
                <div className="relative w-40 h-40">
                  {meme.image ? (
                    <Image
                      src={meme.image}
                      alt={`Meme ${index + 1}`}
                      width={160}
                      height={160}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <p className="text-red-500">Image not found</p>
                  )}
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
