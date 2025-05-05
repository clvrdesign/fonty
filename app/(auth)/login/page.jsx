
const Login = () => {
  return (
    <section class='h-screen py-10'>
      <div class='max-w-[1400px] w-full h-full m-auto px-3'>
        <div class='w-full h-full flex flex-col justify-center items-center gap-3'>
          <div class='w-full max-w-[350px] bg-white shadow-lg shadow-gray-200 rounded-3xl py-14 px-6'>
            <h2 class='text-3xl text-primary font-semibold'>Login</h2>
            <p className='text-gray-700 my-4'>
              Welcome back! Please enter your email and password to access your
              account.
            </p>

            <form action='' class='flex flex-col gap-2 mt-6'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                class='w-full h-10 outline-none bg-gray-100 px-4 text-gray-700 text-sm font-light rounded-xl border border-gray-200 focus:border-gray-400 duration-300'
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                class='w-full h-10 outline-none bg-gray-100 px-4 text-gray-700 text-sm font-light rounded-xl border border-gray-200 focus:border-gray-400 duration-300'
              />
              <button class='w-full h-10 outline-none bg-primary text-white px-4 text-md font-semibold rounded-xl duration-300'>
                Login
              </button>
            </form>
            <small class='block text-gray-500 text-center mt-4'>
              Don't have an account?{" "}
              <a href='/sign-up' class='text-primary font-semibold'>
                Sign Up
              </a>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
