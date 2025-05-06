import Container from "@/app/components/Container";

const Login = () => {
  return (
    <section class='py-10'>
      <Container>
        <div class='w-full min-h-[85vh] flex flex-col justify-center items-center gap-3 py-20'>
          <div class='w-full max-w-[350px] bg-white shadow-lg shadow-gray-200 rounded-3xl py-14 px-6'>
            <h2 class='text-3xl text-primary font-semibold'>Login</h2>
            <p className='text-gray-700 my-4'>
              Welcome back! Please enter your email and password to access your
              account.
            </p>
            <small class='block bg-rose-500/10 text-rose-700 border border-rose-200 p-4 rounded-xl font-light'>
              Please enter your details to create an account.
            </small>
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
      </Container>
    </section>
  );
};

export default Login;
