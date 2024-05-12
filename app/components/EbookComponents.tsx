import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMGAI from "@/public/Ebook tentang AI_pages-to-jpg-0001.jpg";
import IMGClassroom from "@/public/EBook Tentang Google Classroom_pages-to-jpg-0001.jpg";
import IMGTrello from "@/public/EBook Tentang Trello_pages-to-jpg-0001.jpg";
import additional from "@/public/Ebook tentang AI_pages-to-jpg-0007.jpg";

interface IEBook {
  title: string;
  image: any;
  description: string;
  Link: string;
}

function EbookComponents() {
  const ebooks: IEBook[] = [
    {
      title: "E-Book Artificial Intelligence",
      image: IMGAI,
      description: "Penggunaan AI Untuk Penunjang Dalam Pembelajaran",
      Link: "https://drive.google.com/file/d/17kZG7_zUNB1HUb9bEffmLO83euGcxoKR/view?usp=drive_link",
    },
    {
      title: "E-Book Google Classroom",
      image: IMGClassroom,
      description: "Penggunaan Google Classroom Secara Efektif",
      Link: "https://drive.google.com/file/d/1x57l4bfQQV3EDBxIony_I_p7VcrnHAT-/view?usp=drive_link",
    },
    {
      title: "E-Book Trello Task",
      image: IMGTrello,
      description: "Penggunaan Trello Untuk Pembelajaran",
      Link: "https://drive.google.com/file/d/1tY4NnmXJn6y7qAQk-HkxkqnI0SWMjl8n/view?usp=drive_link",
    },
    {
      title: "More Books",
      image: additional,
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      Link: "#",
    },
  ];
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-6 mr-6 gap-4 mx-auto sm:ml-72 sm:mr-6 lg:ml-72 lg:mr-6 xl:ml-72 xl:mr-8 my-10">
        {ebooks.map((e, i) => (
          <div key={i} className="bg-header hover:ring-4 hover:ring-green-1 focus:ring-4 focus:ring-green-300 border border-green-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={e.Link} target="_blank">
              <Image className="rounded-t-lg" src={e.image} alt="Book" width={384} height={100} />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-3xl font-semibold text-white font-sans">{e.title}</h5>
              </Link>
              <p className="mb-3 text-base font-semibold text-white font-sans">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default EbookComponents;
