import { useParams } from "react-router-dom";
import { dataDoctor } from "../data/dataDokter";
import { useEffect, useState } from "react";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const styleBox = "w-full bg-white min-h-screen flex justify-between";

const HeaderBooking = ({ data }) => {
  return (
    <figure className='w-[50%] flex justify-center items-center'>
      <img
        src={data.pict}
        alt={data.nama}
        className='w-[600px] h-[600px] object-contain'
      />
    </figure>
  );
};

const Speacialist = ({ data }) => {
  return (
    <div className='w-full flex flex-col gap-3 mt-3'>
      {/* card spesialisasi */}
      <h1 className='text-xl text-rose-300 font-semibold mt-3'>Spesialisasi</h1>
      <div className='flex gap-2'>
        {data.spesialis.map((skill) => (
          <div
            className='shadow-md rounded-md p-2 bg-slate-900 w-[120px]'
            key={skill}>
            <h1 className='text-md text-center text-white'>{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = ({ data }) => {
  return (
    <div className='w-full gap-3 flex flex-col mt-3'>
      <h1 className='text-xl text-rose-300 font-semibold'>Experience</h1>
      <p className=''>{data.pengalaman}</p>
    </div>
  );
};

const Contact = ({ data }) => {
  return (
    <div className='w-full gap-3 flex flex-col mt-3'>
      <h1 className='text-xl text-rose-300 font-semibold'>Contact</h1>
      <p className='tracking-wide text-md'> {data.kontak} </p>
    </div>
  );
};

const FormBooking = ({ handleBooking }) => {
  return (
    <form
      className='mt-3 flex flex-col w-[30%] gap-3'
      onSubmit={handleBooking}>
      <label htmlFor='jadwal'>Tanggal reservasi</label>
      <Input
        type='date'
        id='jadwal'
        name='tanggal'
      />

      <label htmlFor='jam'>Jam</label>
      <Input
        type='time'
        id='jam'
        name='waktu'
      />
      <Button
        type='submit'
        className='p-2 bg-rose-300 text-black rounded'>
        Booking Doctor
      </Button>
    </form>
  );
};

const Title = ({ data }) => {
  return (
    <>
      <h1 className='text-xl text-rose-300 font-semibold'>PROFILE</h1>
      <p className='text-md font-semibold text-white'>{data.nama}</p>
    </>
  );
};

const BoxAside = ({ children }) => {
  return (
    <div className='w-[50%] flex flex-col bg-slate-800 px-8 py-10 gap-3'>
      {children}
    </div>
  );
};

const DoctorBookingPage = () => {
  const { id } = useParams();
  const [profileDoctor, setProfileDoctor] = useState([]);

  useEffect(() => {
    dataDoctor.map((doctor) => {
      if (doctor.id === Number(id)) {
        setProfileDoctor([doctor]);
      } else {
        return "";
      }
    });
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const jadwal = e.target.tanggal.value;
    const waktu = e.target.waktu.value;

    e.target.reset();
  };

  return (
    <>
      {profileDoctor.map((doctor) => (
        <div
          key={doctor.id}
          className={styleBox}>
          <HeaderBooking data={doctor} />

          <BoxAside>
            <Title data={doctor} />
            <Speacialist data={doctor} />
            <Experience data={doctor} />
            <Contact data={doctor} />
            <FormBooking handleBooking={handleBooking} />
          </BoxAside>
        </div>
      ))}
    </>
  );
};

export default DoctorBookingPage;
