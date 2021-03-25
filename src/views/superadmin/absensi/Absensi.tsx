import React from "react";

// components

import AbsensiTable from './absensiComponent/AbsensiTable'

export default function Absensi() {
  return (
    <>
      <div className="w-4/5 xl:4/5 xl:mb-10 bg-white shadow-lg px-7 py-5 ">
        <div className="font-medium text-base mb-3 ">
          <h1>Absensi</h1>
        </div>
        <AbsensiTable />
      </div>
    </>
  );
}
