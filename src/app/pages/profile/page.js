"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Profile() {
  const [uploadedMemes, setUploadedMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    // ✅ Only access localStorage inside useEffect (client-side)
    const storedUploadedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    const storedLikedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];

    setUploadedMemes(storedUploadedMemes);
    setLikedMemes(storedLikedMemes);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="bg-black text-white min-h-screen p-4">
        <h1 className="text-center text-3xl">Your Profile</h1>

        {/* Uploaded Memes Section */}
        <h2 className="text-xl mt-4">Uploaded Memes</h2>
        <div className="grid grid-cols-2 gap-4">
          {uploadedMemes.map((meme, index) => (
            <Image
              key={index}
              src={meme}
              alt="Uploaded Meme"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Liked Memes Section */}
        <h2 className="text-xl mt-4">Liked Memes</h2>
        <div className="grid grid-cols-2 gap-4">
          {likedMemes.map((meme, index) => (
            <Image
              key={index}
              src={meme}
              alt="Liked Meme"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
