import React from "react";

// components
import NotifikasiCard from '../notifikasi/notifikasiComponent/NotifikasiCard'

export default function Notifikasi() {
  return (
    <>
        <div className="w-full xl:w-1/2 xl:h-1/6 xl:mb-0 bg-white shadow px-3 py-3 overflow-y-auto">
          <NotifikasiCard />
        </div>
    </>
  );
}
