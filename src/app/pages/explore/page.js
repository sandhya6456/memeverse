"use client";
import { useState, useEffect, useRef } from "react";
import MemeCard from "../../components/MemeCard";
import SearchBar from "@/app/components/SearchBar";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

const categories = ["Trending", "New", "Classic", "Random"];
const sortOptions = ["Likes", "Date", "Comments"];

export default function Explore() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Trending");
  const [sortBy, setSortBy] = useState("Likes");
  
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // ✅ Fetch memes from API
  useEffect(() => {
    setLoading(true);
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memesWithLikes = data.data.memes.map((meme) => ({
          ...meme,
          likes: getLikesFromStorage(meme.id), // Load likes from localStorage
        }));
        setMemes(memesWithLikes);
        setFilteredMemes(memesWithLikes);
        setLoading(false);
      });
  }, []);

  // ✅ Load likes from localStorage
  function getLikesFromStorage(memeId) {
    return parseInt(localStorage.getItem(`likes_${memeId}`)) || 0;
  }

  // ✅ Handle like button click
  function handleLike(memeId) {
    const newMemes = memes.map((meme) =>
      meme.id === memeId ? { ...meme, likes: meme.likes + 1 } : meme
    );
    setMemes(newMemes);
    setFilteredMemes(newMemes);
    localStorage.setItem(`likes_${memeId}`, newMemes.find(m => m.id === memeId).likes);
  }
  // function handleLike(memeId, memeUrl) {
  //   let storedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
  
  //   const existingMemeIndex = storedMemes.findIndex((meme) => meme.id === memeId);
  
  //   if (existingMemeIndex !== -1) {
  //     storedMemes[existingMemeIndex].likes += 1;
  //   } else {
  //     storedMemes.push({ id: memeId, url: memeUrl, likes: 1 });
  //   }
  
  //   localStorage.setItem("likedMemes", JSON.stringify(storedMemes));
  // }
  
  

  // ✅ Apply search, category filter, and sorting
  useEffect(() => {
    let filtered = memes.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    );

    // ✅ Apply category filtering
    if (category === "Trending") {
      filtered = filtered.sort((a, b) => b.likes - a.likes);
    } else if (category === "New") {
      filtered = filtered.filter((m) => m.date).sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (category === "Classic") {
      filtered = filtered.slice(0, 15);
    } else if (category === "Random") {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    // ✅ Apply sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "Likes") return b.likes - a.likes;
      if (sortBy === "Date") return (new Date(b.date || 0)) - (new Date(a.date || 0));
      if (sortBy === "Comments") return (b.comments || 0) - (a.comments || 0);
      return 0; // Default case to avoid the error
    });
    

    setFilteredMemes(filtered);
  }, [search, sortBy, category, memes]);

  // ✅ Infinite Scrolling
  useEffect(() => {
    if (!observer.current) return;
    const handleObserver = (entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    const observerInstance = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    observer.current && observerInstance.observe(observer.current);

    return () => observerInstance.disconnect();
  }, [loading]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SearchBar setSearch={setSearch} />

      {/* ✅ Categories */}
      <div className="flex justify-center gap-4 p-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${category === cat ? "bg-blue-500" : "bg-gray-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Sorting */}
      <div className="flex justify-center gap-4 p-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* ✅ Meme Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} onLike={handleLike} />
        ))}
      </div>

      {/* ✅ Infinite Scroll Loader */}
      <div ref={observer} className="h-10 mt-4 text-center">
        {loading && <p>Loading more memes...</p>}
      </div>

      <Footer />
    </div>
  );
}
