import NavDashboard from "../components/Navbar/NavDash";
import { Link } from "react-router-dom";
import HeaderDashboard from "../components/Header/HeaderDash";
import CardDashboard from "../components/DashboardElement/CardDash/CardDash";
import Card from "../components/Card/index";
import TableDashboar from "../components/DashboardElement/TableDash/TableDash";

const Dashboard = () => {
  return (
    <section className='w-full min-h-screen bg-white  py-5'>
      <NavDashboard />

      {/* content */}
      <section className='w-full flex justify-between mt-20 px-7'>
        {/* row 1 */}
        <div className=' w-[25%] flex flex-col items-start px-2 gap-5'>
          <h1 className='text-black font-bold'>Menu</h1>

          <ul className='flex flex-col gap-5'>
            <Link
              to='/beranda_user'
              className='active:text-black active:font-semibold'>
              Dashboard
            </Link>
            <Link
              to='/daftar_doktor'
              className='active:text-black active:font-semibold'>
              Search Doctor
            </Link>
          </ul>
        </div>

        {/* row 2 */}
        <section className='w-[45%] flex flex-col  items-center'>
          <HeaderDashboard />
          <CardDashboard />
          <TableDashboar />
        </section>

        {/* row 3 */}
        <div className='w-[30%] flex flex-col  items-center overflow-hidden'>
          <div className='flex flex-col gap-14  mr-5'>
            <Card.CardHorizontal
              img='../images/doctor.png'
              title='Rentang waktu Tunggu Dokter'
              duration='10 hingga 15 menit'
            />
            <Card.CardHorizontal
              img='../images/patience.png'
              title='Rentang waktu Konsul'
              duration='10 hingga 15 menit'
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
