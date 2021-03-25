import React from "react";

export default function DetailTopUp() {
    return (
        <>
            <div className="flex items-center ml-4 mt-7 mb-10">
                <div className="flex">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg" alt="foto profile" />
                </div>
                <div className="ml-5 w-1/6">
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base">Kode</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base">Name</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base">Siklus Tanggal</h1>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base text-abuabu">: 42142</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base">: Joko Susilo</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-normal text-base">: 20</h1>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-3">
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-hijauTosca font-semibold text-2xl font-sans">200</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Top Up</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-softPink font-semibold text-2xl font-sans">40</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Saldo Saat Ini</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-hijauTosca font-semibold text-2xl font-sans">20</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Saldo Minimum</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">50</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Top Up ke-bulan Ini</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">15</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Bank</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">5</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Nama Rekening</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">Rp.10.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">No. Rekening</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">Rp.2.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Tanggal Request</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-2xl font-sans">Rp.2.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jam Request</h1>
                </div>

            </div>

            <div className="flex justify-center">
                <button className="bg-biru py-0.5 px-7 w-44 rounded mt-10  mb-14 text-2xl font-semibold text-white uppercase">
                    Top Up
                </button>
            </div>
        </>
    );
}
