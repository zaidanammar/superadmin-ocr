import React from "react";

export default function DashboardCard() {
    return (
        <div className="mx-2.5 my-1">
            <div className=" bg-gray-100">
                <img className="h-50 w-full mx-auto" src="https://cdn.discordapp.com/attachments/798894344962441267/813319536571973682/0001.jpg" alt="" />
            </div>

            <h1 className="text-2xl my-4 font-semibold">Informasi</h1>

            <div className="grid md:grid-cols-3 gap-6 my-3">
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">200</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah Driver</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">40</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah PIC</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">20</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah Super PIC</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">50</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah Driver di Top Up</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">15</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah PIC di Handle</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-biru font-semibold text-2xl font-sans">5</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Jumlah Super PIC di Handle</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-hijauTosca font-semibold text-2xl font-sans">Rp.10.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Total Top Up Bulan Ini</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-hijauTosca font-semibold text-2xl font-sans">Rp.2.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Total Extra Top Up Bulan Ini</h1>
                </div>
                <div className="border-blue-100 border h-24 flex flex-col items-center justify-center">
                    <h1 className="text-hijauTosca font-semibold text-2xl font-sans">Rp.2.000.000</h1>
                    <h1 className="font-normal text-xs mt-2 font-sans">Total Top Up Tanpa Handle</h1>
                </div>
                
            </div>
        </div>
    );
}
