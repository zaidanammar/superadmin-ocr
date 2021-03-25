import React from 'react';

export default function ProfilEdit() {
  const handleSubmit = () => {
    console.log('ok');
  };
  const cancel = () => {
    console.log('cancel');
  };
  return (
    <>
      <div className='w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3'>
        <div className='flex justify-between w-full px-4 py-4 max-w-full'>
          <h3 className='font-medium text-base text-gray-800 font-sans'>
            Profil
          </h3>
        </div>

        <form className='flex relative w-full px-4 max-w-full'>
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
            <div className='flex justify-between mb-5 h-32'>
              <div className=' w-1/3 h-full flex flex-col justify-between'>
                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Kode
                  </h1>
                  <input
                    type='number'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />

                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Nama
                  </h1>
                  <input
                    type='text'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />

                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Username
                  </h1>
                  <input
                    type='text'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />

              </div>

              <div className='w-1/3 mr-10 flex flex-col justify-between'>
                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Email
                  </h1>
                  <input
                    type='text'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />

                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Phone 1
                  </h1>
                  <input
                    type='number'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />

                <div className="my-1">
                  <h1 className='font-normal text-abuabu text-xs font-sans'>
                    Phone 2
                  </h1>
                  <input
                    type='number'
                    size={25}
                    className='font-normal text-sm font-sans'
                  />
                </div>
                <hr />
              </div>
            </div>

            <div className='flex mt-4 mb-1 justify-end'>
              <button
                className='w-28 h-36px text-center mr-3 px-3 py-2 rounded text-red-400'
                type='button'
                onClick={() => cancel}
              >
                Cancel
              </button>
              <button
                className='w-28 h-36px mr-3 px-3 py-2 rounded bg-blue-800 text-white content-center text-center'
                type='button'
                onClick={() => handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
