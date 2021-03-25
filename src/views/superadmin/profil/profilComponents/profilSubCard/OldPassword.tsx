import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function OldPassword() {
  const history = useHistory();
  const [type, setType] = useState<string>('password');
  const [password, setPassword] = useState<string>('');

  const handleVisible = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  const checkPassword = () => {
    if (password.length > 5) {
      history.push(`/admin/profile/new-password`);
      setPassword('');
    } else {
      console.log('password salah');
    }
  };

  return (
    <div className='w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3'>
      <div className='relative w-full px-5 py-4 max-w-full'>
        <div>
          <h3 className='font-medium text-base font-sans'>Ubah Password</h3>
        </div>

        <div className='mt-5 flex items-center'>
          <div className='w-12 h-12 mr-6'>
            <svg
              width='52'
              height='52'
              viewBox='0 0 52 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='26' cy='26' r='26' fill='#0036A0' />
              <path
                d='M33.5 21H32.25V18.5C32.25 15.05 29.45 12.25 26 12.25C22.55 12.25 19.75 15.05 19.75 18.5V21H18.5C17.125 21 16 22.125 16 23.5V36C16 37.375 17.125 38.5 18.5 38.5H33.5C34.875 38.5 36 37.375 36 36V23.5C36 22.125 34.875 21 33.5 21ZM26 32.25C24.625 32.25 23.5 31.125 23.5 29.75C23.5 28.375 24.625 27.25 26 27.25C27.375 27.25 28.5 28.375 28.5 29.75C28.5 31.125 27.375 32.25 26 32.25ZM29.875 21H22.125V18.5C22.125 16.3625 23.8625 14.625 26 14.625C28.1375 14.625 29.875 16.3625 29.875 18.5V21Z'
                fill='white'
              />
            </svg>
          </div>
          <div>
            <div>
              <h1 className='font-medium text-base'>Masukkan Password Lama</h1>
            </div>
            <div>
              <h1 className='font-normal text-sm text-abuabu'>
                Untuk melindungi keamanan akun anda, masukkan password lama anda
              </h1>
            </div>
          </div>
        </div>

        <div className='mt-7 flex'>
          <input
            type={type}
            placeholder='Masukkan password lama'
            className='font-normal text-sm w-full italic'
            onChange={handleChange}
          />
          <button className='ml-4' onClick={handleVisible}>
            {type === 'password' ? (
              <svg
                width='22'
                height='16'
                viewBox='0 0 22 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.28132 8C8.28132 8.69619 8.55789 9.36387 9.05017 9.85616C9.54245 10.3484 10.2101 10.625 10.9063 10.625C11.6025 10.625 12.2702 10.3484 12.7625 9.85616C13.2548 9.36387 13.5313 8.69619 13.5313 8C13.5313 7.30381 13.2548 6.63613 12.7625 6.14384C12.2702 5.65156 11.6025 5.375 10.9063 5.375C10.2101 5.375 9.54245 5.65156 9.05017 6.14384C8.55789 6.63613 8.28132 7.30381 8.28132 8ZM21.0829 7.39531C18.861 2.71484 15.5024 0.359375 11.0001 0.359375C6.49539 0.359375 3.13914 2.71484 0.917262 7.39766C0.828142 7.58637 0.781921 7.79247 0.781921 8.00117C0.781921 8.20987 0.828142 8.41598 0.917262 8.60469C3.13914 13.2852 6.49773 15.6406 11.0001 15.6406C15.5048 15.6406 18.861 13.2852 21.0829 8.60234C21.2634 8.22266 21.2634 7.78203 21.0829 7.39531ZM10.9063 12.125C8.6282 12.125 6.78132 10.2781 6.78132 8C6.78132 5.72188 8.6282 3.875 10.9063 3.875C13.1844 3.875 15.0313 5.72188 15.0313 8C15.0313 10.2781 13.1844 12.125 10.9063 12.125Z'
                  fill='#D1D1D1'
                />
              </svg>
            ) : (
              'H'
            )}
          </button>
        </div>

        <div className='mt-12 mb-3 flex justify-end'>
          <button
            className='bg-biru text-white py-0.5 w-2/5 rounded'
            onClick={checkPassword}
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
