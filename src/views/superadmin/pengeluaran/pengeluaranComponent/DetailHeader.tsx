import React from 'react';
import { useHistory } from 'react-router-dom'

export default function DetailHeader() {
    const history = useHistory()
  return (
    <div className='w-full xl:w-full xl:mb-0 bg-white shadow-lg px-3 py-3'>
      <div className='my-3 ml-1 flex'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15 18L9 12L15 6'
            stroke='#A8A8A8'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>

          <h1 className='font-medium text-base text-gray-400' onClick={() => {history.goBack()}}>Kembali</h1>
      </div>
    </div>
  );
}
