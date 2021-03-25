import React from "react";

// components

import DashboardCard from "../dashboard/dashboardComponent/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <div className="w-full xl:w-full xl:mb-10 bg-white shadow-lg px-3 py-3">
        <DashboardCard />
      </div>
    </>
  );
}
