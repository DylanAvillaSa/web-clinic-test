import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../features/userSlice/userSlice";

import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import NavDashboard from "../components/Navbar/NavDash";
import Modal from "../components/Modal";

const Title = () => {
  return (
    <h1 className='text-2xl opacity-30 text-black font-semibold'>
      Isi formulir dibawah
    </h1>
  );
};

const UserBirthDate = () => {
  return (
    <div className='w-full relative'>
      <label
        htmlFor='kelahiran'
        className='text-left w-full text-black font-medium'>
        Tanggal lahir
      </label>
      <img
        src='../images/calender.png'
        className='absolute w-[20px] h-[20px] bottom-[10px] left-[5px] opacity-35'
      />
      <Input
        type='date'
        name='kelahiran'
        id='kelahiran'
        placeholder='Keluhan anda'
        className='bg-slate-50 p-2 flex  rounded-md w-full px-8 mt-2 shadow'
      />
    </div>
  );
};

const UserSelectGender = () => {
  return (
    <select
      className='p-2 w-full bg-slate-50 text-black'
      name='gender'>
      <option value=''>Jenis kelamin</option>
      <option value='Laki - laki'>Laki - laki</option>
      <option value='Perempuan'>Perempuan</option>
    </select>
  );
};

const FormReservation = ({ handleUserReservation }) => {
  return (
    <form
      className='flex flex-wrap flex-col w-full gap-3 items-center mx-auto justify-center'
      onSubmit={handleUserReservation}>
      <Input
        type='text'
        name='nama'
        id='firstName'
        placeholder='Nama anda'
        className='bg-slate-50 p-2 rounded-md w-full shadow'
      />
      <Input
        type='text'
        name='gejala'
        id='gejala'
        placeholder='Keluhan anda'
        className='bg-slate-50 h-[120px] flex pb-20 px-2 rounded-md w-full shadow'
      />
      <UserBirthDate />
      <UserSelectGender />
      <Button
        type='submit'
        className='w-full p-2 bg-dark-blue-100 text-white rounded-md'>
        Kirim
      </Button>
    </form>
  );
};

const UserReservation = ({ dataDoctor }) => {
  return (
    <>
      <h1 className='text-xl text-black font-semibold'>Reservasi anda</h1>
      <p className='font-medium text-black mt-3'>Dokter</p>

      <ul className='flex flex-col'>
        <li>Nama Dokter : {dataDoctor.name}</li>
        <li>Tanggal Reservasi : {dataDoctor.date}</li>
        <li>Jam Reservasi : {dataDoctor.time}</li>
      </ul>
    </>
  );
};

// page biodata
const BiodataPage = () => {
  const dispatch = useDispatch();
  const dataDoctor = useSelector((state) => state.biodata.data[0]);
  const [dataUser, setDataUser] = useState([]);

  const handleUserReservation = (e) => {
    e.preventDefault();
    const name = e.target.nama.value;
    const complaint = e.target.gejala.value;
    const birth = e.target.kelahiran.value;
    const gender = e.target.gender.value;

    dispatch(getUser({ name, complaint, birth, gender }));
    setDataUser([...dataUser, { name, complaint, birth, gender }]);

    e.target.reset();
  };

  return (
    <section className='w-full bg-white min-h-screen flex items-center gap-5 px-28  justify-center'>
      <div className='w-[30%] flex flex-col justify-center  items-center gap-5 ml-64'>
        <NavDashboard />
        <Title />
        <FormReservation handleUserReservation={handleUserReservation} />
        {dataUser.length > 0 && <Modal.ModalQueue dataUser={dataUser} />}
      </div>

      <div className='w-[20%] bg-white flex flex-col mb-[120px]  rounded-md shadow p-2'>
        <UserReservation dataDoctor={dataDoctor} />
      </div>
    </section>
  );
};

export default BiodataPage;
