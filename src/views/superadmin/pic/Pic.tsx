import React from "react";

// components
import PicTable from './picComponent/PicTable'

export default function Pic() {
  return (
    <>
      <div className="w-full xl:w-full xl:mb-10 bg-white shadow-lg px-7 py-5 ">
        <div className="font-medium text-base mb-3">
          <h1>PIC</h1>
        </div>
        <PicTable />
      </div>
    </>
  );
}
