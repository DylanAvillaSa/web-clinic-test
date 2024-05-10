import Button from "../../Form/Button";
import { useNavigate } from "react-router-dom";

const ListDoctor = ({ id, img, name, description }) => {
  const navigate = useNavigate();
  const handleDataDoctor = () => {
    navigate(`/doktor/${id}`);
  };

  return (
    <div
      className='w-[200px] shadow-md rounded-md flex flex-col justify-center items-center gap-2'
      key={id}>
      <img
        src={img}
        className='w-full h-[150px] object-contain'
      />
      <h1 className='text-black font-semibold'>{name}</h1>
      <p className='text-[12px] text-center'>{description}</p>
      <Button
        type='submit'
        onClick={handleDataDoctor}
        className='p-2 bg-dark-blue-100 mb-3 text-white rounded'>
        Book Now
      </Button>
    </div>
  );
};

export default ListDoctor;
