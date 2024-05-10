import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-[104px] min-h-screen bg-dark-blue flex flex-col gap-5 py-8 fixed left-0 top-0 items-center'>
      <ul className='flex flex-col items-center gap-10'>
        <Link to='/beranda'>
          <li className='active:p-2 active:bg-indigo-500 rounded-md'>
            <img
              src='../images/1.png'
              className='w-[40px] h-[40px] object-cover '
            />
          </li>
        </Link>
        <Link to='/rekam_medis'>
          <li className='active:p-2 active:bg-indigo-500 rounded-md'>
            <img
              src='../images/4.png'
              className='w-[40px] h-[40px] object-cover '
            />
          </li>
        </Link>
        <Link to='/'>
          <li className='active:p-2 active:bg-indigo-500 rounded-md'>
            <img
              src='../images/Logout.png'
              className='w-[40px] h-[40px] object-cover absolute bottom-[25px] right-[30px]'
            />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
