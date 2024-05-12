import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Modal from "../components/Modal";
import { useState } from "react";

const MedicPage = () => {
  const [response, setResponse] = useState([]);

  return (
    <div>
      <section className='bg-white w-full min-h-screen flex flex-col '>
        <Navbar />
        <Header
          title='Rekam Medis'
          date='Senin, 12 Februari 2024'
        />

        <div className='w-[50%] mx-auto flex gap-2 px-28'>
          <Input
            type='text'
            name='search'
            placeholder='Cari Data RM'
            className='h-[20px] px-2 py-5  bg-white border border-slate-400 rounded-md w-full'
          />
          <Button
            type='button'
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className='bg-dark-blue text-white w-[137px] h-[40px] rounded-md'>
            Tambah RM
          </Button>

          <Modal
            response={response}
            setResponse={setResponse}
          />
        </div>

        <div className='px-36 ml-20 mt-10 '>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Pasien</th>
                  <th>Tindakan Medis</th>
                  <th>Waktu Penanganan</th>
                  <th>Catatan Dokter</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {response.map((responseDoctor) => (
                  <tr key={responseDoctor.name}>
                    <th>{response.length}</th>
                    <td className='text-black'>
                      <b> {responseDoctor.name} </b>
                    </td>
                    <td>{responseDoctor.gender}</td>
                    <td>{responseDoctor.date}</td>
                    <td>{responseDoctor.keluh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicPage;
