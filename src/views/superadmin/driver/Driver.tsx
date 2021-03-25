import React from "react";

// components

import DriverTable from './driverComponent/DriverTable'

export default function Driver() {
  return (
    <>
      <div className="w-full xl:w-full xl:mb-10 bg-white shadow-lg px-7 py-5 ">
        <div className="font-medium text-base mb-3">
          <h1>Driver</h1>
        </div>
        <DriverTable />
      </div>
    </>
  );
}
