import React from "react";

interface content {
  title: string;
  desc: string;
}

function Headers({ title, desc }: content) {
  return (
    <React.Fragment>
      <div className="bg-header p-14 sm:pl-80 mb-10 ">
        <h1 className="text-4xl font-bold font-sans text-white">{title}</h1>
        <p className="text-base font-medium text-white mt-4">{desc}</p>
      </div>
    </React.Fragment>
  );
}

export default Headers;
