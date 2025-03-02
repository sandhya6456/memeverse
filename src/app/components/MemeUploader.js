"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const MemeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedMemes, setUploadedMemes] = useState([]);

  // Load uploaded memes from Local Storage on mount
  useEffect(() => {
    const storedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    setUploadedMemes(storedMemes);
  }, []);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=d6228a894a7f6fcb72351f5576d0f1d4`,
        { method: "POST", body: formData }
      );
      
      const data = await res.json();
      if (data.success) {
        const newMeme = data.data.url;
        const updatedMemes = [newMeme, ...uploadedMemes];
        setUploadedMemes(updatedMemes);
        localStorage.setItem("uploadedMemes", JSON.stringify(updatedMemes));
        alert("Upload successful!");
      } else {
        alert("Upload failed!");
      }
    } catch (error) {
      alert("An error occurred while uploading.");
    }

    setSelectedFile(null);
    setPreview(null);
    setIsUploading(false);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload a Meme</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      
      {preview && (
        <div className="mb-4">
          <p className="text-sm">Preview:</p>
          <Image src={preview} alt="Preview" width={300} height={300} className="rounded-md" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`px-4 py-2 rounded-md ${isUploading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>
      
      {uploadedMemes.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Uploaded Memes:</h3>
          <div className="grid grid-cols-2 gap-4">
            {uploadedMemes.map((url, index) => (
              <Image key={index} src={url} alt="Uploaded Meme" width={300} height={300} className="rounded-md" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeUploader;
