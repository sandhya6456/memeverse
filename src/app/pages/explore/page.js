"use client";
import { useState, useEffect } from "react";
import MemeCard from "../../components/MemeCard";
import SearchBar from "@/app/components/SearchBar";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

export default function Explore() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
        setFilteredMemes(data.data.memes);
      });
  }, []);

  useEffect(() => {
    setFilteredMemes(memes.filter((m) => m.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, memes]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SearchBar setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
