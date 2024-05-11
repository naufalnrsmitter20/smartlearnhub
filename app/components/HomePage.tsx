import React from "react";

import pengaduan from "@/public/pengaduan.png";
import ebook from "@/public/ebook.png";
import Image from "next/image";

function HomePage() {
  return (
    <React.Fragment>
      <main className="md:ml-80 sm:ml-64 mb-10">
        <div className="p-10 max-w-7xl bg-green-base my-8">
          <h4 className="text-green-4 text-3xl font-bold font-sans">Penjelasan Singkat</h4>
          <p className="text-green-4 xl:pr-64 text-base font-normal mt-6 font-sans">
            Selamat datang di web pengaduan dan pengetahuan,di web ini kita bisa meng akses ebook atau pun pengaduann.Yang gunanya untuk memudahkan guru dalam mengajar dan membuat catatan BK di web ini...
          </p>
        </div>
        <div className="flex justify-between  max-w-7xl bg-green-base my-8">
          <div className="p-10 ">
            <h4 className="text-green-4 text-3xl font-bold font-sans">Pengaduan</h4>
            <p className="text-green-4 xl:pr-64 text-base font-normal mt-6 font-sans">
              Web Pengaduan ini digunakan untuk merekap apapun aduan dari guru maupun siswa dalam proses pembelajaran di sekolah ataupun kenakalan dan pelanggaran yan terjadi sehingga memudahkan para guru untuk merekap data data tersebut.
            </p>
          </div>
          <Image src={pengaduan} className="hidden lg:block" alt="Pengaduan" />
        </div>
        <div className="flex justify-between max-w-7xl bg-green-base my-8">
          <div className="p-10  ">
            <h4 className="text-green-4 text-3xl font-bold font-sans">E-Book</h4>
            <p className="text-green-4 xl:pr-64 text-base font-normal mt-6 font-sans">
              E-Book adalah buku yang berbentuk elektronik atau digital yang berisi informasi atau panduan, tutorial,layaknya buku pada umumnya. Di ebook ini bapak ibu guru bisa melihat informasi penggunaan teknologi IT dan AI untuk
              menunjang pembelajaran.
            </p>
          </div>
          <Image className="hidden lg:block" src={ebook} alt="ebook" />
        </div>
      </main>
    </React.Fragment>
  );
}

export default HomePage;
