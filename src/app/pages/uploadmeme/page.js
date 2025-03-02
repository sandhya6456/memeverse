
import MemeUploader from "@/app/components/MemeUploader";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function UploadMeme() {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-4">
        <h1 className="text-center text-3xl">Upload a Meme</h1>
        <MemeUploader />
      </div>
      <Footer />
    </div>
  );
}
