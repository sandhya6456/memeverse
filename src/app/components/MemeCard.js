"use client";
import { useState } from "react";

const MemeCard = ({ meme }) => {
  const [likes, setLikes] = useState(meme.likes || 0);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <img src={meme.image} alt="Meme" className="rounded-lg w-full" />
      <h2 className="text-lg font-bold mt-2">{meme.title}</h2>
      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-2 bg-blue-600 px-4 py-2 rounded"
      >
        👍 {likes} Likes
      </button>
    </div>
  );
};

export default MemeCard;
