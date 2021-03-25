import React from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

export default function ProfileCard() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handlePassword = () => {
    history.push(`${url}/ganti-password`);
  };

  return (
    <>
      <div className='w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3'>
        <div className='flex justify-between w-full px-4 py-4 max-w-full'>
          <h3 className='font-medium text-base text-gray-800 font-sans'>
            Profil
          </h3>
          <div className='items-center '>
            <Link to='/superadmin/profil/edit' className="flex flex-row gap-3 items-center text-xs font-medium text-blue-700">
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 11.666H12.25'
                  stroke='#0036A0'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M9.625 2.04212C9.85706 1.81006 10.1718 1.67969 10.5 1.67969C10.6625 1.67969 10.8234 1.71169 10.9735 1.77388C11.1237 1.83607 11.2601 1.92722 11.375 2.04212C11.4899 2.15703 11.5811 2.29344 11.6432 2.44358C11.7054 2.59371 11.7374 2.75462 11.7374 2.91712C11.7374 3.07963 11.7054 3.24054 11.6432 3.39067C11.5811 3.5408 11.4899 3.67722 11.375 3.79212L4.08333 11.0838L1.75 11.6671L2.33333 9.33379L9.625 2.04212Z'
                  stroke='#0036A0'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Ubah Profil
            </Link>
          </div>
        </div>

        <div className='flex relative w-full px-4 max-w-full'>
          <div className='mr-8'>
            <div className='pt-1.5'>
              <img
                className='object-cover rounded-full w-28 h-28 '
                src='https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg'
                alt='foto profil'
              />
            </div>
          </div>

          <div className='flex flex-col w-3/4'>
            <div className='flex justify-between mb-5  h-32'>
              <div className=' w-1/3 h-full flex flex-col justify-between'>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Kode
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>41241</h1>
                </div>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Nama
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>
                    Ican Natawijaya
                  </h1>
                </div>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Username
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>Icanq</h1>
                </div>
              </div>

              <div className='w-1/3 mr-10 flex flex-col justify-between'>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Email
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>
                    icannatawijaya@mail.com
                  </h1>
                </div>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Phone 1
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>0821241113</h1>
                </div>
                <div>
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Phone 2
                  </h1>
                  <h1 className='font-normal text-sm font-sans'>0872112113</h1>
                </div>
              </div>
              <div className="w-1/6"/>
            </div>

            <hr className='md:min-w-full' />

            <div className='mt-4 mb-1'>
              <button
                className='flex items-center mr-3 px-3 py-2 rounded border-biru border'
                type='button'
                onClick={handlePassword}
              >
                <svg
                  width='10'
                  height='12'
                  viewBox='0 0 10 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.75 4H8.125V2.85714C8.125 1.28 6.725 0 5 0C3.275 0 1.875 1.28 1.875 2.85714V4H1.25C0.5625 4 0 4.51429 0 5.14286V10.8571C0 11.4857 0.5625 12 1.25 12H8.75C9.4375 12 10 11.4857 10 10.8571V5.14286C10 4.51429 9.4375 4 8.75 4ZM5 9.14286C4.3125 9.14286 3.75 8.62857 3.75 8C3.75 7.37143 4.3125 6.85714 5 6.85714C5.6875 6.85714 6.25 7.37143 6.25 8C6.25 8.62857 5.6875 9.14286 5 9.14286ZM6.9375 4H3.0625V2.85714C3.0625 1.88 3.93125 1.08571 5 1.08571C6.06875 1.08571 6.9375 1.88 6.9375 2.85714V4Z'
                    fill='#0036A0'
                  />
                </svg>
                <h1 className='text-biru text-xs font-normal ml-2'>
                  Ubah Password
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
