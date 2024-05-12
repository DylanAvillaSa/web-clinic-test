import Card from ".";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <section className='flex'>
      <div className='flex flex-col'>
        <Card
          img='../images/card1.png'
          title='Pasien Baru Bulan ini'
          total={user.length == 0 ? 0 : user.length}
        />
        <Card
          img='../images/card2.png'
          title='Pasien Terdaftar di Klinik'
          total={user.length == 0 ? 0 : user.length}
        />
      </div>
      <Card.CardVertical />

      {/* long card */}
      <div className='flex flex-col gap-8'>
        <Card.CardHorizontal
          img='../images/doctor.png'
          title='Rentang waktu Tunggu Dokter'
          duration='10 hingga 15 menit'
        />
        <Card.CardHorizontal
          img='../images/patience.png'
          title='Rentang waktu Konsultasi '
          duration='10 hingga 15 menit'
        />
      </div>
    </section>
  );
};

export default CardContainer;
