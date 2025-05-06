import Link from "next/link";
import Container from "../Container";
import { Search, ShoppingBag, Users, ArrowRight } from "lucide-react";

const Themes = () => {
  return (
    <div className='px-3'>
      <Container>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10'>
          <div className='px-8 py-10 bg-white rounded-xl'>
            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white'>
              <Search />
            </div>
            <h2 className='text-3xl font-bold mt-6'>Ai Font Analysis</h2>
            <p className='text-sm mt-3'>
              Get instant feedback on legibility, spacing, and stylistic
              consistency with our AI-powered review system.
            </p>
            <Link href={"/"}>
              <div className='flex gap-2 items-center text-xl mt-4 group text-primary'>
                Try Analyzer
                <div className='opacity-0 -translate-x-2 group-hover:-translate-x-0 group-hover:opacity-100 duration-300'>
                  <ArrowRight />
                </div>
              </div>
            </Link>
          </div>
          <div className='px-8 py-10 bg-white rounded-xl'>
            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white'>
              <ShoppingBag />
            </div>
            <h2 className='text-3xl font-bold mt-6'>Sell Your Fonts</h2>
            <p className='text-sm mt-3'>
              Join our marketplace with 85% revenue share and integrated license
              management.
            </p>
            <Link href={"/"}>
              <div className='flex gap-2 items-center text-xl mt-4 group text-primary'>
              Start Selling
                <div className='opacity-0 -translate-x-2 group-hover:-translate-x-0 group-hover:opacity-100 duration-300'>
                  <ArrowRight />
                </div>
              </div>
            </Link>
          </div>
          <div className='px-8 py-10 bg-white rounded-xl'>
            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white'>
              <Users />
            </div>
            <h2 className='text-3xl font-bold mt-6'>Designer Community</h2>
            <p className='text-sm mt-3'>
              Connect with 15K+ typographers for feedback, collaborations, and
              commissions.
            </p>
            <Link href={"/"}>
              <div className='flex gap-2 items-center text-xl mt-4 group text-primary'>
              Join Forum
                <div className='opacity-0 -translate-x-2 group-hover:-translate-x-0 group-hover:opacity-100 duration-300'>
                  <ArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <h1 className='text-4xl font-bold my-10 text-center'>Designers</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
          <Link href={"/"}>
            <div className='hover:bg-primary hover:text-white duration-300 bg-white py-2 px-4 rounded-xl'>
              Burundi
            </div>
          </Link>
        </div>
        <Link href={"/"}>
          <div className='bg-primary text-white rounded-xl py-2 px-4 mt-4'>
            Burundi
          </div>
          <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 mt-4'>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
            <ul className='flex flex-col gap-2'>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Comic</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>cartoon</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Groovy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Old school</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Curly</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Western</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Eroded</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Destroy</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Horror</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Ice</li>
              </Link>
              <Link className='hover:text-primary duration-300' href={"/"}>
                <li>Fire</li>
              </Link>
            </ul>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Themes;
