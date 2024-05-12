import { Children, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TableHead = () => {
  return (
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
  );
};

const TableBody = ({ user, isTrue, handleAction }) => {
  return (
    <>
      {user.map((item) => (
        <tr
          className='flex justify-between'
          key={item.id}>
          <td>{item.id}</td>
          <td>{item.nama}</td>
          <td>{item.gejala}</td>
          <td>
            {item.id === isTrue ? (
              <div key={item.id}>
                <img src='../images/Completed.png' />
              </div>
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
    </>
  );
};

const GrafImage = () => {
  return (
    <img
      src='../images/stat.png'
      className='ml-24'
    />
  );
};

const Table = () => {
  const [isTrue, setIsTrue] = useState(null);
  const dispatch = useDispatch();
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
    <main className='px-32 flex'>
      <section className='overflow-x-auto w-[60%]'>
        <table className='table'>
          <thead>
            <TableHead />
          </thead>

          <tbody>
            <TableBody
              user={user}
              handleAction={handleAction}
              isTrue={isTrue}
            />
          </tbody>
        </table>
      </section>
      <GrafImage />
    </main>
  );
};

export default Table;
