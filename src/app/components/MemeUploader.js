"use client";
import { useState } from "react";

const MemeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);

      // Create a preview URL
      const fileURL = URL.createObjectURL(event.target.files[0]);
      setPreview(fileURL);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload!");
      return;
    }

    // Simulate upload (Replace this with actual API request)
    alert(`Uploading: ${selectedFile.name}`);

    // Reset after upload
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload a Meme</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {preview && (
        <div className="mb-4">
          <p className="text-sm">Preview:</p>
          <img src={preview} alt="Preview" className="w-full h-auto rounded-md" />
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload
      </button>
    </div>
  );
};

export default MemeUploader;
