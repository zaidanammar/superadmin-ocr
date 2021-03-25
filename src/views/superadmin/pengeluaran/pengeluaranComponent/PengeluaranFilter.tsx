import React from 'react';

export default function PengeluaranCard() {
  return (
    <div className='w-full xl:w-full xl:mb-0 bg-white shadow-lg px-3 py-3'>
      <div className='my-3 ml-1'>
        <div className=''>
          <h1 className='font-medium text-base'>Pengeluaran</h1>
				</div>
				<div className="flex mt-4">
					<div className="font-light text-xs border-2 border-black border-opacity-50 rounded-full py-1 px-3 mx-1">
						Driver
					</div>
					<div className="font-light text-xs border-2 border-black border-opacity-50 rounded-full py-1 px-3 mx-1">
						Super PIC
					</div>
					<div className="font-light text-xs border-2 border-black border-opacity-50 rounded-full py-1 px-3 mx-1">
						Admin
					</div>
				</div>
				<div className='flex mt-4 justify-between'>
					<input
              type='text'
              placeholder='Cari kode driver atau nama driver'
              className='w-full text-sm ml-3 mr-3'
            />
					<hr />
          <div className='mr-7'>
            <button className='flex items-center bg-biru rounded py-1 px-5 text-white text-base'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5'
                  stroke='white'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.83398 8.3335L10.0007 12.5002L14.1673 8.3335'
                  stroke='white'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10 12.5V2.5'
                  stroke='white'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <h1 className='ml-3'>Download</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
