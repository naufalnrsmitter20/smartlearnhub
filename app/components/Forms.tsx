"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";

interface siswa {
  nama: string;
  absen: number;
}

interface Ikelas {
  kelas: string;
}

const customForms: CustomFlowbiteTheme["textInput"] = {
  field: { input: { colors: { green: "border-green-3 border focus:ring-2 focus:ring-green-2 outline-none" } } },
};

function Forms() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbw3LgCmHfBb49-ZBjD8YQLZXo7nTKKv8s-qX8aAPgJkij3gpjNIC41jqET80XrKSrah/exec";

  const [kelas, setKelas] = useState("");
  const [nama, setNama] = useState("");
  const [absen, setAbsen] = useState("");
  const [laporan, setLaporan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [bukti, setbukti] = useState("");
  const [noHP, setNoHP] = useState("");
  const router = useRouter();

  //   state
  const [loading, setIsLoading] = useState(false);
  const [toasts, setToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success!", res);

      setIsLoading(false);
      router.refresh();
    } catch (error) {
      console.error("Error!", (error as Error).message);
      setIsLoading(false);
      router.refresh();
    }
  };

  const listSiswa: siswa[] = [
    {
      nama: "Aaron Cahyadi Kurniawan",
      absen: 1,
    },
    {
      nama: "Muhammad Zuhair Zubdi",
      absen: 2,
    },
    {
      nama: "Naufal Nabil Ramadhan",
      absen: 3,
    },
    {
      nama: "Raisya Ramadhani Achmad",
      absen: 4,
    },
    {
      nama: "Salma Afiyatul Awathif",
      absen: 5,
    },
    {
      nama: "Muhammad Syamil Muwahhid",
      absen: 6,
    },
    {
      nama: "Muhammad Zalmaladzi El-Shirazzi",
      absen: 7,
    },
    {
      nama: "Moh Abdul Aziz",
      absen: 8,
    },
    {
      nama: "Sakurajima Mai",
      absen: 9,
    },
    {
      nama: "Sangkuriang Ferdy Ardiansyah",
      absen: 10,
    },
    {
      nama: "Tumang Vito",
      absen: 11,
    },
    {
      nama: "Ryo",
      absen: 12,
    },
    {
      nama: "Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Ayuthaya Mahadilok Phop Noppharat Ratchathani Burirom Udomratchaniwet Mahasathan Amon Piman Awatan Sathit Sakkathattiya Witsanukam Prasit",
      absen: 13,
    },
    {
      nama: "Juandi",
      absen: 14,
    },
    {
      nama: "Budi Sigma",
      absen: 15,
    },
  ];

  const CKelas: Ikelas[] = [
    {
      kelas: "7A",
    },
    {
      kelas: "7B",
    },
  ];

  return (
    <React.Fragment>
      <main className="container ml-80">
        <form name="form-pengaduan" onSubmit={handleSubmit} className="grid grid-cols-2 max-w-7xl gap-4">
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="kelas" value="Kelas" />
            </div>
            <TextInput theme={customForms} value={kelas} onChange={(e) => setKelas(e.target.value)} color={"green"} id="kelas" type="text" name="kelas" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="nama" value="Nama" />
            </div>
            <TextInput theme={customForms} value={nama} onChange={(e) => setNama(e.target.value)} color={"green"} id="nama" type="text" name="nama" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="absen" value="No Absen" />
            </div>
            <TextInput theme={customForms} value={absen} onChange={(e) => setAbsen(e.target.value)} color={"green"} id="absen" type="text" name="absen" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="laporan" value="Nama Laporan" />
            </div>
            <TextInput theme={customForms} value={laporan} onChange={(e) => setLaporan(e.target.value)} color={"green"} id="laporan" type="text" name="laporan" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="bukti" value="Bukti" />
            </div>
            <TextInput theme={customForms} value={bukti} onChange={(e) => setbukti(e.target.value)} color={"green"} id="bukti" type="text" name="bukti" placeholder="name@flowbite.com" required={false} />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="keterangan" value="Keterangan" />
            </div>
            <TextInput theme={customForms} value={keterangan} onChange={(e) => setKeterangan(e.target.value)} color={"green"} id="keterangan" type="text" name="keterangan" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="noHP" value="No. Telepon " />
            </div>
            <TextInput theme={customForms} value={noHP} onChange={(e) => setNoHP(e.target.value)} color={"green"} id="noHP" type="text" name="noHP" placeholder="name@flowbite.com" required />
          </div>
          <div></div>
          <button type="submit" className="text-white bg-green-3 hover:bg-green-2 focus:ring-4 focus:ring-green-1 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
            Submit
          </button>
        </form>
      </main>
    </React.Fragment>
  );
}

export default Forms;
