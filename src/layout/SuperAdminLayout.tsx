import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// A.1 Profil
import Profil from "../views/superadmin/profil/Profil";
import ProfilEdit from "../views/superadmin/profil/profilComponents/profilSubCard/ProfilEdit"
import OldPassword from "../views/superadmin/profil/profilComponents/profilSubCard/OldPassword";
import NewPassword from "../views/superadmin/profil/profilComponents/profilSubCard/NewPassword";

// components
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from '../components/headers/HeaderStats'

// dashboard
import Dashboard from "../views/superadmin/dashboard/Dashboard";

// pengeluaran
import Pengeluaran from "../views/superadmin/pengeluaran/Pengeluaran";

// absensi
import Absensi from "../views/superadmin/absensi/Absensi";

// notifikasi
import Notifikasi from "../views/superadmin/notifikasi/Notifikasi";

// laporan
import Laporan from "../views/superadmin/laporan/Laporan";

// driver
import Driver from "../views/superadmin/driver/Driver";
import DriverText from '../views/superadmin/driver/driverComponent/driverTableComponent/DriverText'
import DriverMessage from '../views/superadmin/driver/driverComponent/driverTableComponent/DriverMessage'

// pic
import Pic from "../views/superadmin/pic/Pic";
import PicText from "../views/superadmin/pic/picComponent/picTableComponent/PicText";
import PicMessage from "../views/superadmin/pic/picComponent/picTableComponent/PicMessage";

// superpic
import Superpic from "../views/superadmin/superpic/Superpic";
import SuperpicText from "../views/superadmin/superpic/superpicComponent/superPicTableComponent/SuperPicText";
import SuperpicMessage from "../views/superadmin/superpic/superpicComponent/superPicTableComponent/SuperPicMessage";

// admin
import Admin from "../views/superadmin/admin/Admin";

// super admin
import SuperAdmin from "../views/superadmin/superAdmin/SuperAdmin";
import DetailPengeluaran from "../views/superadmin/pengeluaran/pengeluaranComponent/DetailPengeluaran";




export default function SuperAdminLayout() {

  return (
    <>
      <Sidebar />
      <div className="md:ml-64 h-full pb-10">
        {/* header */}
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full mt-6">
          <div className="flex items-center mb-5">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.776855 6.66667H6.08316V0H0.776855V6.66667ZM0.776855 12H6.08316V8H0.776855V12ZM7.40974 12H12.716V5.33333H7.40974V12ZM7.40974 0V4H12.716V0H7.40974Z" fill="#0036A0" />
            </svg>
            <h1 className="ml-3 text-blue-700 text-xs "> {(window.location.href.indexOf("/admin/dashboard") !== -1 ? "Dashboard" : "Dashboard / " + (window.location.href).split('/').slice(3)).split(',').join(' / ').toUpperCase()}</h1>
          </div>

          <Switch>
            <Route path="/superadmin/dashboard" exact component={Dashboard} />


            {/* pengeluaran */}
            <Route path="/superadmin/pengeluaran" exact component={Pengeluaran} />
            <Route path="/superadmin/pengeluaran/test" exact component={DetailPengeluaran} />

            <Route path="/superadmin/absensi" exact component={Absensi} />
            <Route path="/superadmin/notifikasi" exact component={Notifikasi} />
            <Route path="/superadmin/laporan" exact component={Laporan} />
            
            {/*route driver*/}
            <Route path="/superadmin/driver" exact component={Driver} />
            <Route path="/superadmin/driver/driver-text/:id" component={DriverText} />
            <Route path="/superadmin/driver/driver-message/:id" component={DriverMessage} />

            {/*route PIC*/}
            <Route path="/superadmin/pic" exact component={Pic} />
            <Route path="/superadmin/pic/pic-text/:id" exact component={PicText} />
            <Route path="/superadmin/pic/pic-message/:id" exact component={PicMessage} />
            

            {/*route super Pic*/}
            <Route path="/superadmin/superpic" exact component={Superpic} />
            <Route path="/superadmin/superpic/superpic-text/:id" exact component={SuperpicText} />
            <Route path="/superadmin/superpic/superpic-message/:id" exact component={SuperpicMessage} />
            
            <Route path="/superadmin/superadmin" exact component={Admin} />
            
            <Route path="/superadmin/supersuperadmin" exact component={SuperAdmin} />
            
            {/*route profil */}
            <Route path="/superadmin/profil" exact component={Profil} />
            {/* <Route path="/superadmin/profil/:id" exact component={DetailPengeluaran} /> */}
            <Route path="/superadmin/profil/ganti-password" exact component={OldPassword} />
            <Route path="/superadmin/profil/new-password" exact component={NewPassword} />
            <Route path="/superadmin/profil/edit" exact component={ProfilEdit} />
            <Redirect from="/superadmin" to="/superadmin/dashboard" />
          </Switch>

        </div>
      </div>
    </>
  );
}
