import NavDashboard from "../components/Navbar/NavDash";
import ListDoctor from "../components/DashboardElement/DataDoctor/Doctor";
import BoxResponse from "../components/DashboardElement/Box/BoxResponse";
import { useSelector } from "react-redux";
import { dataDoctor } from "../data/dataDokter";

const DoctorPage = () => {
  const responDoctor = useSelector((state) => state.user.value[0].actions);
  const data = useSelector((state) => state.biodata.data);
  return (
    <section className='w-full min-h-screen bg-white  py-5 flex justify-center items-center'>
      <NavDashboard />

      <section className='w-full flex justify-center items-center  mt-20 px-7 flex-col'>
        <h1 className='text-black font-semibold text-3xl mb-5'>Top Doctor</h1>
        {/* row 1 */}
        <div className=' w-[80%] justify-center items-center  flex flex-col   px-2 gap-5'>
          <p>SHOWING ALL {dataDoctor.length} RESULTS</p>

          {/* daftar dokter */}
          <div className='flex w-[80%]  flex-wrap gap-5 items-center justify-center'>
            {dataDoctor.map((doctor) => (
              <div
                key={doctor.id}
                className='flex  h-[310px]  justify-between'>
                <ListDoctor
                  id={doctor.id}
                  name={doctor.nama}
                  img={doctor.pict}
                  description={doctor.tentang}
                />
              </div>
            ))}

            {/* respon dari dokter */}
            {data && (
              <BoxResponse
                responDoctor={responDoctor}
                data={data}
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DoctorPage;
