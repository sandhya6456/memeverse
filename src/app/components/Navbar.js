"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full p-4 bg-gray-900 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">MemeVerse</h1>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden block focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/pages/explore" className="hover:text-gray-300">Explore</Link>
                <Link href="/pages/uploadmeme" className="hover:text-gray-300">Upload</Link>
                <Link href="/pages/leaderb" className="hover:text-gray-300">Leaderboard</Link>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 md:hidden">
                    <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/pages/explore" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Explore</Link>
                    <Link href="/pages/uploadmeme" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Upload</Link>
                    <Link href="/pages/leaderb" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Leaderboard</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
