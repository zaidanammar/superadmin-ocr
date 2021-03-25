import React from 'react';

export default function DetailPengeluaran() {
  return (
    <>
      <div className="bg-white px-5 py-3">
        <h1 className='font-medium text-base my-6'>
          Detail Pengeluaran Driver
        </h1>
        <div className='flex items-center ml-3 mb-10'>
          <div className='flex'>
            <img
              className='w-16 h-16 object-cover rounded-full'
              src='https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg'
              alt='foto profile'
            />
          </div>
          <div className='ml-5 w-1/6'>
            <div className='flex justify-between'>
              <h1 className='font-normal text-base'>Kode</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-normal text-base'>Name</h1>
            </div>
          </div>
          <div className='w-1/4'>
            <div className='flex justify-between'>
              <h1 className='font-normal text-base text-abuabu'>: 42142</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-normal text-base'>: Joko Susilo</h1>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-3 gap-6 my-3'>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-hijauTosca font-semibold text-2xl font-sans'>
              200
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Jumlah Driver
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-softPink font-semibold text-2xl font-sans'>
              40
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>Jumlah PIC</h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-hijauTosca font-semibold text-2xl font-sans'>
              20
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Jumlah Super PIC
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-hijauTosca font-semibold text-2xl font-sans'>
              50
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Jumlah Driver di Top Up
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-hijauTosca font-semibold text-2xl font-sans'>
              15
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Jumlah PIC di Handle
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-hijauTosca font-semibold text-2xl font-sans'>
              5
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Jumlah Super PIC di Handle
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl font-sans'>Rp.10.000.000</h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Top Up Bulan Ini
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl font-sans'>Rp.2.000.000</h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Extra Top Up Bulan Ini
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl font-sans'>Rp.2.000.000</h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Top Up Tanpa Handle
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-biru font-semibold text-2xl font-sans'>
              Rp.2.000.000
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Top Up Tanpa Handle
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-biru font-semibold text-2xl font-sans'>
              Rp.2.000.000
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Top Up Tanpa Handle
            </h1>
          </div>
          <div className='border-blue-100 border h-24 flex flex-col items-center justify-center'>
            <h1 className='text-biru font-semibold text-2xl font-sans'>
              Rp.2.000.000
            </h1>
            <h1 className='font-normal text-xs mt-2 font-sans'>
              Total Top Up Tanpa Handle
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
