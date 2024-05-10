import Button from "../Form/Button";
import { useNavigate } from "react-router-dom";
const HeaderDashboard = () => {
  const navigate = useNavigate();
  return (
    <section className='flex w-full rounded-md bg-dark-blue-100 py-4 px-10 relative'>
      <div className='flex flex-col gap-1 justify-evenly'>
        <h1 className='font-semibold text-2xl w-[320px]  text-white'>
          Looking for specialist doctor?
        </h1>
        <p className='text-slate-100'>You can book doctor by his own skills</p>
        <Button
          onClick={() => navigate("/daftar_doktor")}
          type='submit'
          className='bg-dark-blue-200 text-white w-[35%] p-2 rounded mt-2'>
          Book Now
        </Button>
      </div>
      <img
        src='../images/dokterku.png'
        className='w-[180px] h-[180px] object-cover absolute top-[-7px] right-[8px]'
      />
    </section>
  );
};

export default HeaderDashboard;
