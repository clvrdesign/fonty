import Link from "next/link";
import Container from "../Container";
import { Search, ShoppingBag, Users } from "lucide-react";

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
              <div className='text-xl mt-4 text-primary'>Try Analyzer</div>
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
              <div className='text-xl mt-4 text-primary'>Start Selling</div>
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
              <div className='text-xl mt-4 text-primary'>Join Forum</div>
            </Link>
          </div>
        </div>
        <h1 className='text-4xl font-bold my-10 text-center'>Designers</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
          <Link href={"/"}>
            <div className='bg-white py-2 px-4 rounded-xl'>Fancy</div>
          </Link>
        </div>
        <Link href={"/"}>
          <div className='bg-primary text-white rounded-xl py-2 px-4 mt-4'>
            Fancy
          </div>
          <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 mt-4'>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
            <ul>
              <li>Comic</li>
              <li>cartoon</li>
              <li>Groovy</li>
              <li>Old school</li>
              <li>Curly</li>
              <li>Western</li>
              <li>Eroded</li>
              <li>Destroy</li>
              <li>Horror</li>
              <li>Ice</li>
              <li>Fire</li>
            </ul>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Themes;
