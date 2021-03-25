import React from 'react'

//components

import RequestRevisiText from './RequestRevisiText'

export default function AdminRequestRevisi() {
    return (
        <div>
            <div className="my-3 ml-1 ">

                <div className="flex">

                    <div className="mr-7">
                        <select name="" id="" className="text-sm">
                            <option value="">Super PIC</option>
                            <option value="">Super PIC</option>
                            <option value="">Super PIC</option>
                            <option value="">Super PIC</option>
                        </select>
                    </div>

                    <div className="w-1/2">
                        <input type="text" placeholder="Cari kode driver atau nama driver" className="w-full text-xs" />
                    </div>

                </div>

                <div className="mt-6">
                    <h1 className="text-abuabu">Revisi</h1>
                </div>

                <div>

                    <div className="flex mt-4">

                        <div className="w-1/5 mr-5 flex items-center">
                            <div className="w-10 flex justify-center  bg-hijauTosca rounded p-0.5 mr-3">
                                <h1 className="text-xxs">+ Rp</h1>
                            </div>
                            <input type="text" placeholder="Masukkan Total Rupiah" className="w-full text-sm" />
                        </div>

                        <div className="w-1/5 mr-5 flex items-center">
                            <div className="w-10 flex justify-center  bg-softPink rounded p-0.5 mr-3">
                                <h1 className="text-xxs">- Rp</h1>
                            </div>
                            <input type="text" placeholder="Masukkan Total Rupiah" className="w-full text-sm" />
                        </div>
                    </div>
                    <div className="flex">
                        <hr className="mt-2 mb-6 mr-4 w-1/5" />
                        <hr className="mt-2 mb-6 w-1/5" />
                    </div>

                </div>

                <div>
                    <h1 className="text-abuabu">Alasan</h1>
                </div>
                <div className="w-2/3 my-3">
                    <input type="text" placeholder="Masukkan Alasan" className="w-full text-sm" />
                    <hr className="mb-6 w-1/3" />
                </div>

            </div>
            <RequestRevisiText />
        </div>
    )
}
