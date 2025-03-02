"use client";

export default function MemeCard({ meme, onLike }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-sm mx-auto md:max-w-md">
      {/* Responsive Image */}
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-48 object-cover rounded-md"
      />
      
      <h3 className="text-lg font-bold mt-2 text-white">{meme.name}</h3>
      <p className="text-gray-300">Likes: {meme.likes}</p>
      
      {/* Like Button */}
      <button
        onClick={() => onLike(meme.id)}
        className="bg-blue-500 px-3 py-1 rounded mt-2 text-white w-full md:w-auto"
      >
        Like ❤️
      </button>
    </div>
  );
}
