import NavDashboard from "../components/Navbar/NavDash";
import HeaderDashboard from "../components/Header/HeaderDash";
import CardDashboard from "../components/DashboardElement/CardDash/CardDash";
import TableDashboar from "../components/DashboardElement/TableDash/TableDash";
import Card from "../components/Card";
import { dataDoctor } from "../data/dataDokter";
import ListDoctor from "../components/DashboardElement/DataDoctor/Doctor";
import { Link } from "react-router-dom";

const DoctorPage = () => {
  return (
    <section className='w-full min-h-screen bg-white  py-5'>
      <NavDashboard />

      <section className='w-full flex justify-evenly mt-20 px-7'>
        {/* row 1 */}
        <div className=' w-[70%]  flex flex-col items-start px-2 gap-5'>
          <h1 className='text-black font-semibold text-3xl'>Cari Dokter</h1>

          <ul className='flex flex-col gap-5'>
            <Link
              to='/beranda_user'
              className='active:text-black active:font-semibold'>
              Dashboard
            </Link>
          </ul>

          <p>SHOWING ALL {dataDoctor.length} RESULTS</p>

          {/* daftar dokter */}
          <div className='flex w-full flex-wrap gap-5'>
            {dataDoctor.map((doctor) => (
              <div
                key={doctor.id}
                className='flex'>
                <ListDoctor
                  id={doctor.id}
                  name={doctor.nama}
                  img={doctor.pict}
                  description={doctor.tentang}
                />
              </div>
            ))}
          </div>
        </div>

        {/* row 2 */}

        <div className='w-[20%]  mt-36 h-[180px] relative right-[120px] shadow-md  rounded-md p-2 '>
          <h1 className='text-xl font-semibold text-black'>KATEGORI DOKTER</h1>
          <ul className='mt-3 '>
            <li>- Dokter Bedah</li>
            <li>- Dokter Anak</li>
            <li>- Dokter Gigi</li>
            <li>- Dokter Otak</li>
            <li>- Dokter Hati</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default DoctorPage;
