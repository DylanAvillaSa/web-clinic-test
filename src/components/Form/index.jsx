import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@admin" && password === "admin") {
      navigate("/beranda");
    }

    if (email === "dylan@gmail.com" && password === "dylan") {
      navigate("/beranda_user");
    }

    e.target.reset();
  };

  return (
    <>
      <div className='flex items-center justify-between w-[326px]'>
        <h1 className='text-2xl font-bold text-black'>Masuk</h1>
      </div>

      <form
        className='flex flex-col gap-4'
        onSubmit={handleLogin}>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Nomor Ponsel atau Email'
          className='p-2 border-2 rounded-md bg-white w-[326px]'
        />

        <div className='relative w-[326px]'>
          <Input
            type={`${isShow ? "text" : "password"}`}
            id='password'
            name='password'
            placeholder='Kata sandi'
            className='p-2 border-2 rounded-md bg-white w-full'
          />

          {/* toggle show password */}
          <img
            src={`../images/${isShow ? "show.png" : "hidden.png"}`}
            className='w-[24px] h-[24px] absolute top-[10px] right-[10px] opacity-30 cursor-pointer'
            onClick={() => setIsShow(!isShow)}
          />
        </div>

        <Button
          type='submit'
          className='p-2 w-[326px] bg-dark-blue text-white rounded-md '>
          Masuk
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
