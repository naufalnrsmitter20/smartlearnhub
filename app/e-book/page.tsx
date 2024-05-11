import React from "react";
import Sidebars from "../components/Sidebar";
import Headers from "../components/Header";
import Footers from "../components/Footer";
import EbookComponents from "../components/EbookComponents";

export default function eBook() {
  return (
    <>
      <Headers
        title="E-Book"
        desc="Versi digital dari buku tradisional yang dapat diakses dan dibaca melalui perangkat elektronik, Keunggulan e-book termasuk kemudahan akses, portabilitas, dan kemampuan untuk menyimpan banyak buku dalam satu perangkat. E-book juga memungkinkan pembaca untuk melakukan pencarian cepat, penandaan, dan sering kali menawarkan fitur-fitur interaktif seperti hyperlink dan pencatatan."
      />
      <div className="flex justify-start">
        <Sidebars />
        <EbookComponents />
      </div>
      <Footers />
    </>
  );
}
