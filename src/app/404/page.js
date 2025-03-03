"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const [meme, setMeme] = useState({
    url: "/img1.jpg", // Fallback meme if API fails
    name: "Default Meme",
  });
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const randomMeme =
            data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
          setMeme(randomMeme);
        }
      })
      .catch((error) => console.error("Error fetching meme:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white text-center p-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-2">Oops! You took a wrong turn.</p>
      <img
        src={meme.url}
        alt={meme.name}
        className="w-96 h-auto rounded-lg mt-4 shadow-lg"
      />
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
      >
        Go Home
      </button>
    </div>
  );
}
