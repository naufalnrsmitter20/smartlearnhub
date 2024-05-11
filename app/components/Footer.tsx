import React from "react";

interface XRPL {
  nama: string;
}

function Footers() {
  const namaklsX: XRPL[] = [
    {
      nama: "Naufal Nabil Ramadhan X RPL 8",
    },
    { nama: "Mohammad Syamil Muwahhid X RPL 8" },
    { nama: "Muhammad Keefa Syawal X RPL 8" },
    { nama: "Muhammad Zalmaladzi El-Shirazzi X RPL 8" },
    { nama: "Hafidz Agil Abiyasa X RPL 8" },
    { nama: "Moh Abdul Aziz X RPL 8" },
  ];
  const namaklsXII: XRPL[] = [
    {
      nama: "Pranaya nayaka yumna Prasetya XII TKJ 4",
    },
    { nama: "Hafiizh Maulana Baksono XII TKJ 2" },
    { nama: "Alvin Dwi Putra Wibawa XII TKJ 1" },
    { nama: "Faris Elfata Aflah XII TKJ 6" },
  ];
  return (
    <React.Fragment>
      <div className="lg:ml-36 pl-10 px-4 block sm:pl-72 bg-header py-8 lg:pl-44 xl:px-0 xl:flex justify-evenly relative bottom-0 left-0">
        <div>
          <h1 className="text-4xl font-bold text-white font-sans">MAJU JAYA TEAM</h1>
        </div>
        <div>
          <h5 className="text-white text-xl font-sans font-bold text-start mb-8 mt-10 lg:mt-0">KELAS X</h5>
          {namaklsX.map((x, i) => (
            <p key={i} className="text-white font-semibold text-base my-1">
              {x.nama}
            </p>
          ))}
        </div>
        <div>
          <h5 className="text-white text-xl font-sans font-bold text-start mb-8 mt-10 lg:mt-0">KELAS XII</h5>
          {namaklsXII.map((x, i) => (
            <p key={i} className="text-white font-semibold text-base my-1">
              {x.nama}
            </p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footers;
