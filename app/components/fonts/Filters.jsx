import React from "react";
import { ListFilter } from "lucide-react";
import Button_primary from "../Buttons/Button_primary";

const Filters = () => {
    return (
        <section className="my-4">
            <div className='bg-white duration-300 flex  sm:flex-row flex-col justify-start sm:justify-between sm:items-center items-start gap-4 px-4 py-4 rounded-2xl'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='flex gap-2 text-xl font-medium text-gray-800'>
                            <ListFilter strokeWidth={1.5} />
                            Filters
                        </h2>
                        <p className='text-sm text-gray-500 mt-1'>Filter by categories</p>
                    </div>
                </div>

                <div className='sm:w-fit w-full flex sm:flex-row flex-col gap-4 md:items-center items-start md:justify-between'>
                    <div className='w-full flex flex-col gap-1'>
                        <label for='font-size' className='text-sm text-gray-700'>
                            Font style
                        </label>
                        <select
                            id='font-size'
                            className='px-3 py-2 text-sm font-light text-gray-700 border border-gray-200 bg-gray-100 rounded-lg outline-none focus:border-gray-300 transition duration-300'
                        >
                            <option value='small'>Serif</option>
                            <option value='medium'>Serif Sans</option>
                            <option value='large'>Handwritten</option>
                        </select>
                    </div>

                    <div className='w-full flex flex-col gap-1'>
                        <label for='font-license' className='text-sm text-gray-700'>
                            Licence
                        </label>
                        <select
                            id='font-license'
                            className='px-3 py-2 text-sm font-light text-gray-700 border border-gray-200 bg-gray-100 rounded-lg outline-none focus:border-gray-300 transition duration-300'
                        >
                            <option value='free'>Free</option>
                            <option value='personal'>Personal Use</option>
                            <option value='commercial'>Commercial Use</option>
                            <option value='unknown'>Premium</option>
                        </select>
                    </div>

                    <div className='w-full flex flex-col gap-1'>
                        <label className='sm:block hidden text-sm text-gray-700 opacity-0'>Apply Filter</label>
                        <Button_primary>Apply</Button_primary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Filters;
