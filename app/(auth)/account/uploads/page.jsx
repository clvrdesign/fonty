import Container from "@/app/components/Container";
import Aside from "@/app/components/account/Aside";
import { CirclePlus } from "lucide-react";

const page = () => {
  return (
    <section className='relative py-4 px-2'>
      <Container>
        <div className='flex flex-col md:flex-row gap-4'>
          <Aside />

          <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden'>
            <div className="sm:px-6 px-3 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-700">My Uploads</h2>
                <small className="text-gray-500">Fonts you've contributed</small>
              </div>
              <a href="/account/uploads/new"
                className="min-w-fit bg-primary text-white px-4 py-2 rounded-lg flex gap-2 items-center text-sm hover:bg-primary/90">
                <CirclePlus size={18} /> Upload New
              </a>
            </div>

            <div className="md:px-6 sm:px-3 px-0">
              <div className="bg-white overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="sticky top-0">
                      <tr>
                        <th className="sm:px-6 px-3 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap">FONT
                          NAME</th>
                        <th className="sm:px-6 px-3 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                          THEME</th>
                        <th className="sm:px-6 px-3 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                          STYLE</th>
                        <th className="sm:px-6 px-3 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap">
                          DOWNLOADS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex romain</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>


                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>

                      <tr>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-500 text-sm">Roboto Flex</span>
                          </div>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Fancy</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">Comic</span>
                        </td>
                        <td className="sm:px-6 px-3 py-4 whitespace-nowrap text-sm text-gray-500">12,459</td>
                      </tr>
                    </tbody>
                    
                  </table>
                </div>
                <div className="bg-white sm:px-6 px-3 py-4 border-t border-gray-200">
                  <tr className="">
                    <td colspan="4" className="sm:px-6 px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Showing 1 to 8 of 8 entries</span>
                        <div className="flex items-center gap-2">
                        </div>
                      </div>
                    </td>
                  </tr>
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
