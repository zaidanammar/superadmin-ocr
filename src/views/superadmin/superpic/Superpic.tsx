import React from "react";

// components
import SuperPicTable from './superpicComponent/SuperPicTable'

export default function Superpic() {
  return (
    <>
    <div className="w-full xl:w-full xl:mb-10 bg-white shadow-lg px-7 py-5 ">
      <div className="font-medium text-base mb-3">
        <h1>Super PIC</h1>
      </div>
      <SuperPicTable />
    </div>
  </>
  );
}
