"use client";
import { Label, Spinner, Textarea, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import SpinnerProops from "../utilities/Spinner";
import Toaster from "../utilities/Toaster";
import { FaTelegramPlane } from "react-icons/fa";

interface siswa {
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
    setToast(false);
    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success!", res);

      setIsLoading(false);
      setToast(true);
      router.refresh();
    } catch (error) {
      console.error("Error!", (error as Error).message);
      setIsLoading(false);
      setToast(true);
      router.refresh();
    }
  };

  const listAbsen: siswa[] = [
    {
      absen: 1,
    },
    {
      absen: 2,
    },
    {
      absen: 3,
    },
    {
      absen: 4,
    },
    {
      absen: 5,
    },
    {
      absen: 6,
    },
    {
      absen: 7,
    },
    {
      absen: 8,
    },
    {
      absen: 9,
    },
    {
      absen: 10,
    },
    {
      absen: 11,
    },
    {
      absen: 12,
    },
    {
      absen: 13,
    },
    {
      absen: 14,
    },
    {
      absen: 15,
    },
    { absen: 16 },
    { absen: 17 },
    { absen: 18 },
    { absen: 19 },
    { absen: 20 },
    { absen: 21 },
    { absen: 22 },
    { absen: 23 },
    { absen: 24 },
    { absen: 25 },
    { absen: 26 },
    { absen: 27 },
    { absen: 28 },
    { absen: 29 },
    { absen: 30 },
    { absen: 31 },
    { absen: 32 },
    { absen: 33 },
  ];

  const CKelas: Ikelas[] = [
    {
      kelas: "7A",
    },
    {
      kelas: "7B",
    },
    { kelas: "7C" },
    { kelas: "7D" },
    { kelas: "7E" },
    { kelas: "7F" },
    { kelas: "7G" },
    { kelas: "7H" },
    { kelas: "7I" },
    { kelas: "7J" },
    { kelas: "7K" },
    { kelas: "7L" },
    { kelas: "7M" },
    { kelas: "7N" },
    { kelas: "8A" },
    { kelas: "8B" },
    { kelas: "8C" },
    { kelas: "8D" },
    { kelas: "8E" },
    { kelas: "8F" },
    { kelas: "8G" },
    { kelas: "8H" },
    { kelas: "8I" },
    { kelas: "8J" },
    { kelas: "8K" },
    { kelas: "8L" },
    { kelas: "8M" },
    { kelas: "8N" },
    { kelas: "9A" },
    { kelas: "9B" },
    { kelas: "9C" },
    { kelas: "9D" },
    { kelas: "9E" },
    { kelas: "9F" },
    { kelas: "9G" },
    { kelas: "9H" },
    { kelas: "9I" },
    { kelas: "9J" },
    { kelas: "9K" },
    { kelas: "9L" },
    { kelas: "9M" },
    { kelas: "9N" },
  ];

  return (
    <React.Fragment>
      <main className="container">
        <form name="form-pengaduan" onSubmit={handleSubmit} className="grid grid-cols-1 max-w-3xl mx-auto gap-4 mb-10 sm:ml-60">
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="kelas" className="font-sans font-semibold text-lg text-green-3" value="Kelas" />
            </div>
            <select className="w-full rounded-md border-green-3 border focus:ring-2 focus:ring-green-2 outline-none" value={kelas} onChange={(e) => setKelas(e.target.value)} id="kelas" name="kelas" required>
              <option value=""></option>
              {CKelas.map((kelas, i) => (
                <option className="font-medium tracking-wide" key={i} value={kelas.kelas}>
                  {kelas.kelas}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="nama" className="font-sans font-semibold text-lg text-green-3" value="Nama" />
            </div>
            <TextInput className="font-medium tracking-wide" theme={customForms} value={nama} onChange={(e) => setNama(e.target.value)} color={"green"} id="nama" type="text" name="nama" placeholder="Masukkan Nama Kamu" required />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="absen" className="font-sans font-semibold text-lg text-green-3" value="No Absen" />
            </div>
            <select value={absen} className="w-full rounded-md border-green-3 border focus:ring-2 focus:ring-green-2 outline-none" onChange={(e) => setAbsen(e.target.value)} id="absen" name="absen" required>
              <option value=""></option>
              {listAbsen.map((absen, i) => (
                <option className="font-medium tracking-wide" key={i} value={absen.absen}>
                  {absen.absen}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="laporan" className="font-sans font-semibold text-lg text-green-3" value="Nama Laporan" />
            </div>
            <TextInput
              className="font-medium tracking-wide"
              theme={customForms}
              value={laporan}
              onChange={(e) => setLaporan(e.target.value)}
              color={"green"}
              id="laporan"
              type="text"
              name="laporan"
              placeholder="Apa yang ingin kamu laporkan?"
              required
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="bukti" className="font-sans font-semibold text-lg text-green-3" value="Bukti" />
            </div>
            <TextInput
              className="font-medium tracking-wide"
              theme={customForms}
              value={bukti}
              onChange={(e) => setbukti(e.target.value)}
              color={"green"}
              id="bukti"
              type="text"
              name="bukti"
              placeholder="Bukti pelaporan (kirim berupa link)"
              required={false}
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="keterangan" className="font-sans font-semibold text-lg text-green-3" value="Keterangan" />
            </div>
            <Textarea
              className="font-medium tracking-wide w-full"
              theme={customForms}
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              color={"green"}
              id="keterangan"
              name="keterangan"
              placeholder="Keterangan Laporan"
              required
            ></Textarea>
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="noHP" className="font-sans font-semibold text-lg text-green-3" value="No. Telepon " />
            </div>
            <TextInput className="font-medium tracking-wide" theme={customForms} value={noHP} onChange={(e) => setNoHP(e.target.value)} color={"green"} id="noHP" type="text" name="noHP" placeholder="Nomor Hp Kamu" required />
          </div>
          <div></div>
          {!loading ? (
            <>
              {!toasts ? (
                <button type="submit" className="text-white bg-green-3 hover:bg-green-2 focus:ring-4 focus:ring-green-1 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
                  Submit
                </button>
              ) : (
                <button type="button" disabled={true} className="text-white bg-green-2  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
                  Terkirim
                </button>
              )}
            </>
          ) : (
            <button className="text-white justify-center bg-green-3 flex hover:bg-green-2 focus:ring-4 focus:ring-green-1 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
              <Spinner theme={SpinnerProops.spinner} color="white" />
              <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">Loading...</p>
            </button>
          )}
          {toasts && <Toaster type={<FaTelegramPlane className="h5 w-5" />} message="Pengaduanmu Berhasil Terkirim" />}
        </form>
      </main>
    </React.Fragment>
  );
}

export default Forms;
