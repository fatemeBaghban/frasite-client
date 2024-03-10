export default function SearchTable() {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div>
          <div className=" relative overflow-auto  sm:rounded-lg">
            <div class=" p-5 text-lg font-semibold  text-gray-900 bg-white ">
              <form className="max-w-md mx-auto bg-white   ">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                ></label>
                <div className="relative shadow-lg bg-gray-50">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="جستجو..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 top-2  focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    <svg
                      className="w-4 h-4 text-gray-700 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700  rounded-lg  uppercase bg-[#F5F5F5] mb-6">
                <tr className="rounded-full py-8">
                  <th scope="col" className="px-6 py-3">
                    استان
                  </th>
                  <th scope="col" className="px-6 py-3">
                    شهر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    نوع
                  </th>
                  <th scope="col" className="px-6 py-3">
                    آدرس
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody  className="rounded-ful">
                {Array.from({ length: 8 }).map((index) => (
                  <tr
                    className="bg-[#FBFBFB] border-b border-white rounded-full border-8 shadow-md mt-2"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <p>تهران</p>
                    </th>
                    <td className="px-6 py-4">تهران </td>
                    <td className="px-6 py-4">شعبه</td>
                    <td className="px-6 py-4">
                      سعادت آباد،خیابان 31 شرقی، پلاک 21 ،طبقه همکف
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-row">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="2em"
                          width="2em"
                        >
                          <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
                          <path d="M11.42 21.814a.998.998 0 001.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" />
                        </svg>
                        <a
                          href="#"
                          className="font-medium text-gray-600 hover:underline"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                          >
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
