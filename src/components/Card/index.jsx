import { useState } from "react";
import { useSelector } from "react-redux";

const Card = ({ img, title, total }) => {
  return (
    <>
      <section className='px-32 py-3'>
        <div className='w-[305px] h-[150px] shadow-md rounded-md flex gap-5'>
          <div className='w-[86px] bg-dark-blue-100 flex justify-center items-center rounded-md'>
            <img src={img} />
          </div>

          <div className='flex flex-col justify-between py-2'>
            <h1 className='text-xl w-[176.84px]  font-semibold'>{title}</h1>

            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>{total}</p>
              <img
                src='../images/group1.png'
                className='w-[28px] h-[28px]'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CardHorizontal = ({ img, title, duration }) => {
  return (
    <div className='w-[409px] h-[150px] shadow-md rounded-md flex gap-5 ml-32'>
      <div className='w-[86px] bg-dark-blue-100 flex justify-center items-center rounded-md'>
        <img src={img} />
      </div>

      <div className='flex flex-col justify-between py-2'>
        <h1 className='text-xl w-[237px] text-black  font-semibold'>{title}</h1>

        <p className='font-semibold text-xl text-black'>{duration}</p>
      </div>
    </div>
  );
};

const CardVertical = () => {
  const totalPercent = useSelector((state) => state.user.value);
  return (
    <div className='w-[305px] h-[334px] shadow-md rounded-md flex flex-col items-center py-2 justify-between'>
      <h1>Total Pasien di Klinik</h1>
      <div
        className='radial-progress text-dark-blue-100 w-[194px] h-[194px] duration-300'
        style={{
          "--value": totalPercent.length == 0 ? 0 : totalPercent.length,
        }}
        role='progressbar'>
        <span className='bg-light-blue bg-dark-blue-100 text-white text-2xl w-[86px] h-[86px] rounded-full flex justify-center items-center'>
          {totalPercent.length == 0 ? 0 : totalPercent.length}
        </span>
      </div>

      {/* row 3 */}
      <div className='flex justify-between items-center gap-3'>
        <img src='../images/circle.png' />
        <p>Rawat jalan : 0 pasien</p>
      </div>
    </div>
  );
};

Card.CardHorizontal = CardHorizontal;
Card.CardVertical = CardVertical;

export default Card;
