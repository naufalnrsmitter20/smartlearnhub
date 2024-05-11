"use client";
import React, { useState } from "react";

interface siswa {
  nama: string;
  kelas: string;
  absen: number;
}

function Forms() {
  const scriptURL = "";

  const [kelas, setKelas] = useState("");
  const [nama, setNama] = useState("");
  const [absen, setAbsen] = useState("");
  const [laporan, setLaporan] = useState("");
  const [keterangan, setKeteraangan] = useState("");
  const [bukti, setbukti] = useState("");
  const [noHP, setNoHP] = useState("");

  const listSiswa: siswa[] = [
    {
      nama: "",
      kelas: "9A",
      absen: 1,
    },
    {
      nama: "",
      kelas: "9A",
      absen: 2,
    },
  ];

  const handleSubmit = () => {};
  return <React.Fragment></React.Fragment>;
}

export default Forms;
