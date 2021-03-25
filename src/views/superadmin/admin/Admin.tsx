import React, { useState } from "react";

// components
import AdminRichText from './adminComponent/AdminRichText'
import AdminRequestRevisi from './adminComponent/requestRevisi/AdminRequestRevisi'


export default function Admin() {
  const [flag, setFlag] = useState<string>('sendText')

  const handlePengeluaran = () => {
    if (flag === 'sendText') {
      setFlag('requestRevisi')
    } else {
      setFlag('sendText')
    }
  }

  return (
    <div className="w-full xl:w-full xl:mb-3 bg-white shadow-lg px-3 py-3 mt-4">
      
      <div className="mb-5 ml-1 mt-2">
        <h1 className="text-base font-medium">Admin</h1>
      </div>

      <div className="mx-2.5 my-1">
        <div className="flex">
          <h1 className={
            "text-sm font-normal mr-7 " +
            (flag === 'sendText'
              ? "text-biru hover:text-blue-600 cursor-pointer"
              : "text-gray-800 hover:text-gray-600 cursor-pointer")
          } onClick={handlePengeluaran}>Kirim Pesan</h1>
          <h1 className={
            "text-sm font-normal " +
            (flag === 'requestRevisi'
              ? "text-biru hover:text-blue-600 cursor-pointer"
              : "text-gray-800 hover:text-gray-600 cursor-pointer")
          } onClick={handlePengeluaran}>Request Revisi Saldo</h1>
        </div>
        <hr className="mt-2 mb-6 md:min-w-full" />

        {flag === "sendText" ? (<AdminRichText />) : (<AdminRequestRevisi />)}
      </div>

    </div>

  );
}
