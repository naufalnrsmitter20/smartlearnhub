import React from "react";
import Sidebars from "../components/Sidebar";
import Forms from "../components/Forms";
import Headers from "../components/Header";
import Footers from "../components/Footer";

export default function pengaduan_siswa() {
  return (
    <>
      <Headers
        title="Pengaduan"
        desc="Sampaikan keluhan, masalah, atau ketidakpuasan terhadap suatu hal kepada pihak yang berwenang atau yang bertanggung jawab untuk menangani permasalahan tersebut. untuk mencari solusi atau penyelesaian atas masalah yang dihadapi
          oleh pihak yang mengadukan."
      />
      <div className="flex justify-start">
        <Sidebars />
        <Forms />
      </div>
      <Footers />
    </>
  );
}
