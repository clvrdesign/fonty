import React from "react";
import { Heart, Library, DownloadCloud, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Buttons/Button_secondary";
import fontImage from "@/public/font-bg.jpg";

const FontCard = () => {
  return (
    <div className='relative bg-white rounded-2xl overflow-hidden border group'>
      <div className='absolute top-3 left-3 bg-white/10 text-white px-4 rounded-full flex gap-2 z-10'>
        <small><Link className="hover:text-primary duration-300" href={'/'}>Script</Link> &gt; <Link className="hover:text-primary duration-300" href={'/'}>Various</Link></small>
      </div>
      <div className='absolute top-3 right-3 flex flex-col gap-2 z-10'>
        <div className='h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 cursor-pointer hover:bg-white hover:text-primary bg-white/10 text-white'>
          <Heart strokeWidth={1.5} size={18} />
        </div>
        <div className=' h-8 w-8 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-300 cursor-pointer hover:bg-white hover:text-primary bg-white/10 text-white'>
          <Library strokeWidth={1.5} size={18} />
        </div>
      </div>
      <div className='p-4 h-60 bg-primary/0 flex items-center justify-center'>
        <p className='text-[4rem] text-white z-10'>Aa</p>
        <Image
          src={fontImage}
          width={2500}
          height={1000}
          className='absolute top-0 left-0 h-60 w-full object-cover z-0'
          alt='font-image'
        />
      </div>
      <div className='flex justify-between items-end p-4'>
        <div>
          <Link href={"/"}>
            <h3 className='font-bold text-lg'>Montserrat</h3>
          </Link>
          <p className='text-gray-600'>By Julieta Ulanovsky</p>
          <div className='mt-3 flex justify-between items-center'>
            <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
              Commercial Use
            </span>
          </div>
        </div>
        <div className='flex flex-col items-end gap-3'>
            <span className='inline-flex text-sm text-gray-500'>1,2M <Download strokeWidth={1.5} size={18} /></span>
            <Button><DownloadCloud strokeWidth={1.5} /> Download</Button>
          </div>
      </div>
    </div>
  );
};

export default FontCard;
