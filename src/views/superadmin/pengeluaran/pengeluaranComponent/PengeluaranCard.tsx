import React from 'react';

//components
import TablePengeluaran from './TablePengeluaran';
// import DetailPengeluaran from './DetailPengeluaran';
// import DetailTopUp from './DetailTopUp';
import PengeluaranFilter from './PengeluaranFilter';
// import DetailHeader from './DetailHeader';

export default function PengeluaranCard() {
  // const [flag, setFlag] = useState<string>('pengeluaran');

  // const handlePengeluaran = () => {
  //   if (flag === 'pengeluaran') {
  //     setFlag('topUp');
  //   } else {
  //     setFlag('pengeluaran');
  //   }
  // };
  return (
    <div className='py-3'>
			{/* {flag === 'pengeluaran' ? <PengeluaranFilter /> : <DetailHeader />} */}
			<PengeluaranFilter />
      <div className='bg-white'>
        <TablePengeluaran />
      </div>
      {/* <div className='w-full xl:w-full xl:mb-10 bg-white shadow-lg px-3 py-3 mt-4'>
        <div className='mx-2.5 my-1'>
          <div className='flex'>
            <h1
              className={
                'text-base font-normal mr-7 ' +
                (flag === 'pengeluaran'
                  ? 'text-biru hover:text-blue-600 cursor-pointer'
                  : 'text-gray-800 hover:text-gray-600 cursor-pointer')
              }
              onClick={handlePengeluaran}
            >
              Detail Pengeluaran
            </h1>
            <h1
              className={
                'text-base font-normal ' +
                (flag === 'topUp'
                  ? 'text-biru hover:text-blue-600 cursor-pointer'
                  : 'text-gray-800 hover:text-gray-600 cursor-pointer')
              }
              onClick={handlePengeluaran}
            >
              Top Up
            </h1>
          </div>
          <hr className='my-2 md:min-w-full' />
        </div>
      </div> */}
    </div>
  );
}
