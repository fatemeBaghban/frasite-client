import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Link from "next/link";

const QuickAccess = () => {
  const [data, setData] = useState(null);

  const postQuickAccess = () => {
    axios
      .post(onRun + "/quickaccess/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postQuickAccess, []);
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        {/* title */}
        <div className="py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t-2  border-[#232563] z-10" />
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              className="pl-5"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <p className="flex-shrink mx-12 text-4xl text-[#232563]">
              دسترسی سریع{" "}
            </p>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              className="pr-5"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <div className="flex-grow border-t-2 border-gray-900"></div>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto w-full max-w-7xl px-4 py-6 flex sm:flex-row flex-col md:flex-wrap  items-center justify-center ">
        {data ? (
          <>
            {data.map((i) => {
              return (
                <div
                  key={Math.floor(Math.random() * 10000)}
                  className="flex flex-col items-center sm:auto-rows-min  justify-center w-full max-w-sm mx-auto my-auto mt-5 sm:py-5"
                >
                  <div
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    style={{
                      backgroundImage: "url(" + i.Picture + ")",
                    }}
                  ></div>

                  <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
                      {i.Title}
                    </h3>

                    <Link
                      className="flex justify-center px-3 text-white py-2 bg-[#232563] hover:bg-indigo-700 "
                      href={i.Url}
                    >
                      {/* <Link href={i.Url} className="   text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700  focus:bg-gray-700  focus:outline-none">
                   
                      </Link> */}
                      ورود
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default QuickAccess;
