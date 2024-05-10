import { useState } from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const [isTrue, setIsTrue] = useState(null);
  const user = useSelector((state) => state.user.value);

  const handleAction = (id) => {
    const approve = confirm("Pasien meminta konfirmasi dari anda : ");

    if (approve) {
      setIsTrue(id);
    } else {
      setIsTrue(false);
    }
  };

  return (
    <div className='px-32 flex'>
      <div className='overflow-x-auto w-[60%]'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr className='flex justify-between items-center'>
              <th className='text-black text-xl'>#</th>
              <th>NAMA</th>
              <th>GEJALA</th>
              <th className='flex gap-2'>
                <img src='../images/info.png' />
                <p>STATUS</p>
              </th>
              <th className='flex gap-5'>
                <p>JADWAL</p>
                <img src='../images/info.png' />
              </th>

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr
                className='flex justify-between'
                key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.gejala}</td>
                <td>
                  {item.id === isTrue ? (
                    <img src='../images/Completed.png' />
                  ) : (
                    <img src='../images/Processing.png' />
                  )}
                </td>
                <td className='font-semibold'>{item.jadwal}</td>
                <td>
                  <img
                    src='../images/more.png'
                    className='cursor-pointer'
                    onClick={() => handleAction(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* grafik */}
      <img
        src='../images/stat.png'
        className='ml-24'
      />
    </div>
  );
};

export default Table;
