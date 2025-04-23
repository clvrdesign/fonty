import React from "react";
import { HeartPlus, Library } from "lucide-react";
import Link from "next/link";

const FontCard = () => {
  return (
    <Link href={"/"}>
      <div className='relative bg-white rounded-2xl overflow-hidden border group'>
        <div className='absolute top-3 right-3 flex gap-2'>
          <div className='h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 text-primary bg-white'>
            <HeartPlus strokeWidth={1.5} />
          </div>
          <div className=' h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 text-primary bg-white'>
            <Library strokeWidth={1.5} />
          </div>
        </div>
        <div className='p-4 bg-primary h-48 flex items-center justify-center'>
          <p className='text-3xl text-white'>Aa Bb Cc</p>
        </div>
        <div className='p-4'>
          <h3 className='font-bold text-lg'>Montserrat</h3>
          <p className='text-gray-600'>By Julieta Ulanovsky</p>
          <div className='mt-3 flex justify-between items-center'>
            <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
              Commercial Use
            </span>
            <span className='text-sm text-gray-500'>1,204 downloads</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FontCard;
