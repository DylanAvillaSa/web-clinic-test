import { useState } from "react";

const ListData = ({ responDoctor, data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p className='font-semibold mt-20'>Reservation Not Found!</p>
      ) : (
        <ul
          className='flex flex-col gap-4 w-full justify-center items-start mt-3 px-4'
          key={data[0].name}>
          <li className='flex gap-2 items-center justify-center'>
            No Antri : <p className='font-semibold'> {data.length} </p>
          </li>
          <li className='flex gap-2 items-center justify-center'>
            <img
              src='../images/id-card.png'
              className='w-[24px] h-[24px] object-contain'
            />
            <p>{data[0].name}</p>
          </li>
          <li className='flex gap-2 items-center justify-center'>
            <img
              src='../images/date.png'
              className='w-[24px] h-[24px] object-contain'
            />
            <p>{data[0].date}</p>
          </li>
          <li className='flex gap-2 items-center justify-center'>
            <img
              src='../images/clock.png'
              className='w-[24px] h-[24px] object-contain'
            />
            <p>{data[0].time} Am</p>
          </li>

          <li className='flex gap-2 items-center justify-center'>
            Respon :{" "}
            <p className='font-semibold'>
              {" "}
              {responDoctor ? "Diterima" : "Dalam proses"}
            </p>
          </li>
        </ul>
      )}
    </>
  );
};

const DetailBox = ({ responDoctor, data }) => {
  return (
    <section className='bg-white shadow-md w-[230px]  h-[300px] flex flex-col justify-start items-center fixed right-[85px] rounded-md bottom-[50px] gap-2 text-black py-5'>
      <h1 className='text-xl'>Detail Reservation</h1>
      <ListData
        responDoctor={responDoctor}
        data={data}
      />
    </section>
  );
};

const BoxResponse = ({ responDoctor, data }) => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <>
      <div className='fixed bottom-[10px] right-[10px] rounded-md text-white p-5 overflow-hidden'>
        <button
          className='relative'
          onClick={() => setIsTrue(!isTrue)}>
          <img
            src='../images/bell.png'
            className='w-[50px] h-[50px]'
          />
          <span className='text-xl absolute top-0 left-[12px] w-[20px] j-[20px] text-black p-2 rounded-full'>
            {data.length == 0 ? 0 : data.length}
          </span>
        </button>
      </div>

      {/* toggle box */}
      {isTrue && (
        <DetailBox
          responDoctor={responDoctor}
          data={data}
        />
      )}
    </>
  );
};

export default BoxResponse;
