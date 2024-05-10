const TableDashboar = () => {
  return (
    <div className='w-full mt-8'>
      <div className='overflow-x-auto'>
        <h1 className='text-black font-semibold mb-2'>Jadwal saya</h1>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>No Antrian</th>
              <th>Nama Dokter</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Durasi</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Budi Santoso</td>
              <td>6/12/2024</td>
              <td>08:00</td>
              <td>30 Menit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboar;
