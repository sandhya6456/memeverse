import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
