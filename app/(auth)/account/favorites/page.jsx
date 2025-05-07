import Container from "@/app/components/Container";
import Aside from "@/app/components/account/Aside";
import FontCard from "@/app/components/fonts/FontCard";
import Button_primary from "@/app/components/buttons/Button_primary";


const page = () => {
  return (
    <section className='relative py-4 px-2'>
      <Container>
        <div className='flex flex-col md:flex-row gap-4'>
         <Aside/>

          <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden'>
              <div className='bg-white sm:px-6 px-3 py-4 border-b border-gray-100'>
                <h2 className='text-xl font-bold text-gray-700'>My Favorites</h2>
                <small className='text-gray-500'>
                  Manage your saved font collections
                </small>
              </div>

              <div className='sm:px-6 px-3 sm:py-6 py-3'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                <FontCard/>
                
            </div>
            <div className='mt-10 flex justify-center'>
                <Button_primary>
                    Load More
                </Button_primary>
            </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
