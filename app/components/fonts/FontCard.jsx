import React from "react";
import { HeartPlus, Library } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import fontImage from "@/public/font-bg.svg";

const FontCard = () => {
  return (
    <div className='relative bg-white rounded-2xl overflow-hidden border group'>
      <div className='absolute top-3 right-3 flex gap-2 z-10'>
        <div className='h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 text-primary bg-white'>
          <HeartPlus strokeWidth={1.5} />
        </div>
        <div className=' h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 text-primary bg-white'>
          <Library strokeWidth={1.5} />
        </div>
      </div>
      <div className='p-4 h-48 bg-primary flex items-center justify-center'>
        <p className='text-3xl text-white z-10'>Aa Bb Cc</p>
        <Image
          src={fontImage}
          width={2500}
          height={1000}
          className='absolute top-0 left-0 h-48 w-full object-cover z-0'
          alt="font-image"
        />
      </div>
      <div className='p-4'>
        <Link href={"/"}>
          <h3 className='font-bold text-lg'>Montserrat</h3>
        </Link>
        <p className='text-gray-600'>By Julieta Ulanovsky</p>
        <div className='mt-3 flex justify-between items-center'>
          <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
            Commercial Use
          </span>
          <span className='text-sm text-gray-500'>1,204 downloads</span>
        </div>
      </div>
    </div>
  );
};

export default FontCard;
