"use client"; // Enable hooks in Next.js
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes.slice(0, 10))); // Limit to 10 memes
  }, []);

  return (
    <div>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <h1 className="text-center text-3xl font-bold mt-4">Trending Memes</h1>
        
      </div>
      <Footer />
    </div>

  );
}
