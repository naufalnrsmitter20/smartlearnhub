import Image from "next/image";
import Sidebars from "./components/Sidebar";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <>
      <Headers title="Home" desc="Sedikit penjelasan dari kami mengenai sesuatu tentang Pengaduan dan E-Book ." />
      <div className="flex justify-start">
        <Sidebars />
        <HomePage />
      </div>
      <Footers />
    </>
  );
}
