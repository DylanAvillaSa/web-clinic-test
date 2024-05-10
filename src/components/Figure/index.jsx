const Figure = () => {
  return (
    <>
      <img
        src='../images/mask image.png'
        className='h-[100vh]  absolute left-0'
      />

      {/* glass pict */}
      <figure className='w-[612px] left-[40px] h-[700px]   z-40 backdrop-blur-sm rounded-md relative py-9 px-5'>
        <h1 className='text-3xl'>
          Embark on efficiency with a single click, discover the seamless world
          of clinic management!
        </h1>
        <img
          src='../images/dokterku.png'
          className=' h-[596px] object-contain absolute bottom-0 right-0'
        />
      </figure>
    </>
  );
};

export default Figure;
