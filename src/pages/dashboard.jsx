import NavDashboard from "../components/Navbar/NavDash";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavDashboard />
      <div className='hero min-h-screen bg-white relative'>
        <img
          src='../images/hero-doctor.png'
          className='w-[480px] h-[480px] object-contain  absolute md:left-[30px] md:bottom-[150px] md:z-30 top-[100px]'
        />
        <div className='hero-content text-center  md:bg-dark-blue rounded-xl w-full'>
          <div className='max-w-md'>
            <h1 className='mb-5 w-full text-5xl font-bold md:text-white text-dark-blue'>
              CLINIK WITH BAHRAIN
            </h1>
            <p className='mb-5 md:text-white text-black'>
              Meet your doctor Trusted And Professional. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Dicta illo, quasi deserunt
              culpa totam laudantium sapiente aliquam enim veritatis dolorum?
            </p>
            <button
              className='bg-dark-blue-100 btn text-white border-none hover:bg-dark-blue-200'
              onClick={() => navigate("/daftar_doktor")}>
              Search Doctor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
