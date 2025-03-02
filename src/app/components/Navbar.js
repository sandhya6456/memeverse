"use client";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="w-full p-4 bg-gray-900 text-white flex justify-between">
            <h1 className="text-2xl font-bold">MemeVerse</h1>
            <div className="space-x-4">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/pages/explore" className="hover:text-gray-300">Explore</Link>
                <Link href="/pages/uploadmeme" className="hover:text-gray-300">Upload</Link>
                <Link href="/pages/leaderb" className="hover:text-gray-300">Leaderboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
