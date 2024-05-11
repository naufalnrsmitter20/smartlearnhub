import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IEBook {
  title: string;
  image: string;
  description: string;
}

function EbookComponents() {
  const ebooks: IEBook[] = [
    {
      title: "Title Book",
      image: "/docs/images/blog/image-1.jpg",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Title Book",
      image: "/docs/images/blog/image-1.jpg",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Title Book",
      image: "/docs/images/blog/image-1.jpg",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Title Book",
      image: "/docs/images/blog/image-1.jpg",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-6 mr-6 gap-4 mx-auto sm:ml-72 sm:mr-6 lg:ml-72 lg:mr-6 xl:ml-72 xl:mr-8 my-10">
        {ebooks.map((e, i) => (
          <div key={i} className="bg-header border border-green-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
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
