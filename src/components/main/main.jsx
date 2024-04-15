// import React, { useState } from "react";
// import {  useGetTable1Query } from "../../redux";
// import { apiUrl } from "../../api";

// const TableCom = () => {
//   const [search, setSearch] = useState("");
//   const { data: datas } = useGetTable1Query();
//   const [data, setData] = useState(datas);

//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <div className="flex justify-between">
//         <div>
//           <input
//             onChange={(e) => setSearch(e.target.value)}
//             type="text"
//             id="first_name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Поиск пациентов"
//             required
//           />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default TableCom;

import React, { useState } from "react";
import { useGetTable1Query } from "../../redux";
import Calendarr from "../calendar/calendar";
import UserAddCom from "./add";
import UserAddComm from "./patience";

const TableCom = () => {
  const [search, setSearch] = useState("");
  const { data: datas } = useGetTable1Query();
  const [data, setData] = useState(datas);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // Perform search logic here
    // For simplicity, let's assume the search updates the data state directly
    const filteredData = datas.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <div className=" flex overflow-x-auto shadow-md sm:rounded-lg">
        <form className="max-w-md mx-auto flex rounded-l-lg bg-gray-200 ml-6 mt-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns=""
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Поиск пациентов"
              onChange={handleSearch}
              value={search}
              required
            />
            <button
              type="submit"
              className=" text-black absolute end-2.5 bottom-2.5 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 dark:bg-white dark:hover:bg-white dark:focus:ring-blue-800"
            >
              ctrl+F
            </button>
          </div>
        </form>
        <div className="flex gap-4 justify-end mr-2">
          <div className="relative justify-items-start max-w-sm">
            <button
              type="button"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-4 ps-5 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-#EFEFEF dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex items-center text-right"
              onClick={() => {
                // Handle button click logic here
              }}
            >
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
             <UserAddCom/>
            </button>
          </div>
          <div className="relative justify-items-start max-w-sm cursor-pointer">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <button
              type="button"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-4 ps-5 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
              onClick={() => {}}
            >
              <UserAddComm/>
            </button>
          </div>
        </div>
      </div>
      <div className=" justify-between grid grid-cols-2 gap-5 mt-6">
        <div>
          {" "}
          <h1 className=" text-4xl ml-4">Главная</h1>
          <div className=" flex gap-[500px] bg-#FCFCFC w-full shadow-lg mt-9 ml-20">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-4 h-8 bg-#FFBC99 rounded-tl-md mr-2 opacity-0">.</div>
                <p className=" text-lg text-black">Обзор</p>
              </div>
            </div>
            <button type="button" class="items-end text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Все время</button>
          </div>
        </div>
        <div className=" ml-96">
          <Calendarr />
        </div>
      </div>
    </div>
  );
};

export default TableCom;
