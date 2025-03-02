"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MemeCard({ meme }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the meme is already liked (stored in localStorage)
    const likedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
    setLiked(likedMemes.includes(meme.url));
  }, [meme.url]);

  const handleLike = () => {
    let likedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];

    if (liked) {
      // Unlike: Remove from localStorage
      likedMemes = likedMemes.filter((url) => url !== meme.url);
    } else {
      // Like: Add to localStorage
      likedMemes.push(meme.url);
    }

    localStorage.setItem("likedMemes", JSON.stringify(likedMemes));
    setLiked(!liked);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <Image 
        src={meme.url} 
        alt={meme.name}
        width={300} 
        height={300}
        className="rounded-lg w-full"
      />
      <h2 className="text-lg font-bold mt-2">{meme.name}</h2>
      
      {/* Like Button */}
      <button 
        onClick={handleLike} 
        className={`mt-2 px-4 py-2 rounded-md ${
          liked ? "bg-red-500" : "bg-gray-500"
        }`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}
