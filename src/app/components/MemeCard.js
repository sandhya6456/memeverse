"use client";

export default function MemeCard({ meme, onLike }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <img src={meme.url} alt={meme.name} className="w-full rounded-md" />
      <h3 className="text-lg font-bold mt-2">{meme.name}</h3>
      <p>Likes: {meme.likes}</p>
      <button
        onClick={() => onLike(meme.id)}
        className="bg-blue-500 px-3 py-1 rounded mt-2"
      >
        Like ❤️
      </button>
    </div>
  );
}

