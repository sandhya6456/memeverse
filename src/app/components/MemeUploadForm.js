"use client";
import { useState } from "react";

const MemeUploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading Meme:", { title, file });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-800 text-white rounded-lg">
      <input
        type="text"
        placeholder="Meme Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 bg-gray-700 rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="p-2 bg-gray-700 rounded"
      />
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
        Upload Meme
      </button>
    </form>
  );
};

export default MemeUploadForm;
