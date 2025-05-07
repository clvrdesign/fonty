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

         <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden">
             
            <div className="bg-white sm:px-6 px-3 py-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-700">Account Settings</h2>
              <small className="text-gray-500">Manage your preferences</small>
            </div>

            <div className="md:p-6 p-3">
              <div className="space-y-8">
                 
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="accent-primary" checked/>
                      <span className="text-sm text-gray-700">New font upload notifications</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="accent-primary" checked/>
                      <span className="text-sm text-gray-700">Weekly featured fonts</span>
                    </label>
                  </div>
                </div>
                 
                <div className="border border-red-200 rounded-2xl p-5 bg-red-50">
                  <h3 className="text-lg font-medium text-red-800 mb-2">Danger Zone</h3>
                  <small className="text-red-600 block mb-4">
                    Once you delete an account, there is no going back. Please be
                    certain.
                  </small>
                  <button
                    className="text-sm text-white px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 duration-300">
                    <i className="fi fi-rr-trash inline-block translate-y-0.5"></i>
                    Delete My Account
                  </button>
                </div>
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
