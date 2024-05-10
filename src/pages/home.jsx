import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CardContainer from "../components/Card/CardContainer";
import Table from "../components/Table";

const HomePage = () => {
  return (
    <>
      <main className='w-full min-h-screen bg-white text-black flex flex-col'>
        <Navbar />
        <Header
          title='CLINIK WITH BAHRI'
          date='Senin, 12 Februari 2024'
        />
        <CardContainer />
        <Table />
      </main>
    </>
  );
};

export default HomePage;
