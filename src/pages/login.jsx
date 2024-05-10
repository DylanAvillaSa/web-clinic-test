import LoginForm from "../components/Form";
import Figure from "../components/Figure";

const LoginPage = () => {
  return (
    <>
      <main className='bg-white min-h-screen w-full flex font-lato'>
        {/* leftbar */}
        <section className='w-1/2 flex justify-center items-center flex-col gap-4'>
          <LoginForm />
        </section>

        {/* rightbar */}
        <section className='bg-dark-blue w-1/2 flex justify-center items-center text-white relative overflow-hidden'>
          <Figure />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
