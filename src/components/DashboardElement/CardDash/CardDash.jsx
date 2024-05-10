const CardDashboard = () => {
  return (
    <div className='flex flex-col w-full mt-5'>
      <h1 className=' text-black'>Categories</h1>

      {/* card categories */}
      <div className='flex justify-between w-full'>
        <figure className='w-[130px] h-[100px] justify-center py-3 mt-3 rounded-md items-center flex flex-col bg-dark-blue-100'>
          <img
            src='../images/service1.png'
            className='w-[50px] h-[50px] object-contain'
          />
          <span className='text-white pt-1'>Spesialis Gigi</span>
        </figure>

        {/* category 2 */}
        <figure className='w-[130px] h-[100px] justify-center py-3 mt-3 rounded-md items-center flex flex-col bg-dark-blue-100'>
          <img
            src='../images/Heart.png'
            className='w-[50px] h-[50px] object-contain'
          />
          <span className='text-white pt-1'>Spesialis Hati</span>
        </figure>

        {/* category 3 */}
        <figure className='w-[130px] h-[100px] justify-center py-3 mt-3 rounded-md items-center flex flex-col bg-dark-blue-100'>
          <img
            src='../images/brain.png'
            className='w-[50px] h-[50px] object-contain'
          />
          <span className='text-white pt-1'>Spesialis Otak</span>
        </figure>
      </div>
    </div>
  );
};

export default CardDashboard;
