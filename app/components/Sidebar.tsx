"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiViewBoards, HiChartPie } from "react-icons/hi";

function Sidebars() {
  return (
    <React.Fragment>
      <Sidebar aria-label="Sidebar with logo branding example" className="border-r-2 border-black h-full fixed">
        <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items className="mt-10">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/e-book" icon={HiViewBoards}>
              E-Book
            </Sidebar.Item>
            <Sidebar.Item href="/pengaduan_siswa" icon={HiUser}>
              Pengaduan Siswa
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </React.Fragment>
  );
}

export default Sidebars;
