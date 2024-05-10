const Header = ({ title, date }) => {
  return (
    <header className='py-3 px-32'>
      <div className='flex flex-col'>
        <h1 className='text-dark-blue-100 text-2xl font-semibold'>{title}</h1>
        <p className='text-dark-blue-200 text-base'>{date}</p>
      </div>
    </header>
  );
};

export default Header;
