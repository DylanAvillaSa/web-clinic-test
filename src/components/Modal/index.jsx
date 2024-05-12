import { useEffect, useState } from "react";
import Input from "../Form/Input";
import { useNavigate } from "react-router-dom";
const ModalQueue = ({ isTrue, dataUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
    console.info(dataUser);
  }, []);
  return (
    <>
      {dataUser && (
        <div className='modal-action'>
          <dialog
            id='my_modal_3'
            className='modal'>
            <form
              method='dialog'
              className='modal-box  bg-white'>
              <div className=' text-black  rounded-full w-[303px] h-[183px] p-5  flex justify-center items-center mx-auto flex-col'>
                <p className='text-sm font-bold text-center'>
                  Terimakasih {dataUser[0].name}. Reservasi Anda sudah kami
                  terima
                </p>

                <div className='flex flex-col gap-2 mt-3'>
                  <p>
                    No antrian :{" "}
                    <b>{dataUser.length === 0 ? 1 : dataUser.length}</b>
                  </p>
                </div>
              </div>
              <button
                className='bg-dark-blue  text-white flex justify-center items-center mx-auto mt-5 w-[180px] h-[58px] rounded-md'
                onClick={() => navigate("/daftar_doktor")}>
                Submit
              </button>
            </form>
          </dialog>
        </div>
      )}
      <div className='modal-action'>
        <dialog
          id='my_modal_3'
          className='modal'>
          <form
            method='dialog'
            className='modal-box  bg-white'>
            <div className=' text-black  rounded-full w-[303px] h-[183px] p-5  flex justify-center items-center mx-auto flex-col'>
              <p className='text-xl font-bold text-center'>
                Respon berhasil terkirim
              </p>
            </div>
            <button className='bg-dark-blue  text-white flex justify-center items-center mx-auto mt-5 w-[180px] h-[58px] rounded-md'>
              Submit
            </button>
          </form>
        </dialog>
      </div>
    </>
  );
};

const Modal = ({ response, setResponse }) => {
  const [isTrue, setIsTrue] = useState(false);

  const handlePatient = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const gender = e.target.kelamin.value;
    const date = e.target.tanggal_lahir.value;
    const keluh = e.target.keluhan.value;

    setResponse([...response, { name, gender, date, keluh }]);
    setIsTrue(true);

    e.target.reset();
  };

  return (
    <div className='absolute'>
      {isTrue && <ModalQueue isTrue={isTrue} />}
      <dialog
        id='my_modal_4'
        className='modal'>
        <div className='modal-box w-11/12 max-w-5xl bg-white flex items-center justify-between'>
          {/* user input */}
          <form
            method='dialog'
            className='flex flex-col gap-4'
            onSubmit={handlePatient}>
            <p className='py-4'>Detail Pasien</p>
            <Input
              type='text'
              name='name'
              placeholder='Nama Pasien'
              className='bg-gray-100 p-2 w-[375px] rounded-md'
            />
            <Input
              type='text'
              name='kelamin'
              placeholder='tindakan medis'
              className='bg-gray-100 p-2 w-[375px] rounded-md'
            />

            {/* tanggal lahir */}
            <label
              htmlFor='tanggal_lahir'
              className='text-sm text-black'>
              Waktu penanganan
            </label>
            <div className='w-[375px] relative'>
              <img
                src='../images/Calendar.png'
                className='absolute left-[3px] top-[10px]'
              />
              <Input
                type='date'
                name='tanggal_lahir'
                id='tanggal_lahir'
                placeholder='tanggal respon'
                className='bg-gray-100 p-2 w-full rounded-md pl-9'
              />
            </div>

            <Input
              type='text'
              name='keluhan'
              placeholder='Catatan dokter'
              className='bg-gray-100 p-2 w-[375px] h-[124px] rounded-md placeholder:absolute placeholder:top-0'
            />
            <div className='modal-action'>
              <button className='absolute bottom-[23px] rounded-md right-[27px] bg-dark-blue text-white w-[175px] h-[58px]'>
                Create RM
              </button>
            </div>
          </form>

          {/* button interaction */}
          <section className='flex flex-col justify-between'>
            <p className='py-4'>Item</p>

            <div className='flex flex-col   items-center'>
              <select className='w-[375px] bg-gray-100 p-2 px-3'>
                <option value='pilih dokter'>Pilih Item</option>

                {/* item 1 */}
                <option value='Dr.Dewi Indah'>Obat Parasetamol</option>

                {/* item 2 */}
                <option value='Dr.Dian Purnama'>Sarung tangan medis</option>

                {/* item 3 */}
                <option value='Dr.Dian Purnama'>Sanmol</option>
              </select>

              <div className='flex flex-col items-center gap-10'>
                <img
                  src='../images/item.png'
                  className='object-cover w-[135px] h-[135px] mt-20'
                />
                <div className='flex flex-col items-center '>
                  <h2 className='font-semibold'>Add Items</h2>
                  <p>Add medications or diposable equipment</p>
                </div>
              </div>
            </div>

            <div className='modal-action'>
              <form
                method='dialog'
                className='flex gap-6'>
                <button className='border-2 w-[180px] h-[58px] rounded-md border-dark-blue text-xl'>
                  Cancel
                </button>

                {/* button create patience */}
                <button
                  className='border-2 w-[180px] h-[58px] rounded-md border-dark-blue text-xl bg-dark-blue text-white'
                  type='submit'>
                  Create RM
                </button>
              </form>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
};

Modal.ModalQueue = ModalQueue;

export default Modal;
