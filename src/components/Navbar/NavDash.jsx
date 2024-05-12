import Input from "../Form/Input";
import { useNavigate } from "react-router-dom";

const NavDashboard = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    if (e.target.value === "logout") {
      navigate("/");
    }
  };

  return (
    <nav className='flex w-full  fixed top-0 left-0 right-0 px-8 py-4 border-b-2 bg-slate-50 text-black z-40'>
      <ul className='flex justify-between items-center gap-5 w-full'>
        <li
          className='text-dark-blue-100 text-xl font-semibold cursor-pointer'
          onClick={() => navigate("/beranda_user")}>
          CLINIK WITH BAHRAIN
        </li>
        <li className='flex items-center gap-2'>
          <img
            src='../images/man.png'
            className='w-[35px] h-[35px] rounded-full'
          />
          <span>Dylanavilla</span>
          <select
            className='bg-slate-50 text-black absolute bg-transparent right-[10px] bottom-[20px] active:outline-none outline-none'
            onClick={handleSelect}>
            <option value=''></option>
            <option value='logout'>Logout</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default NavDashboard;
