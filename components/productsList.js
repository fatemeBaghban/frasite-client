import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Image from "next/image";
import Link from "next/link";

const ProductsList = () => {
  const [data, setData] = useState(null);

  const getup = () => {
    axios
      .post(onRun + "/product/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getup, []);

  return (
    <div className="py-6">
      <div className="mx-auto w-full max-w-4xl  py-3 text-center text-4xl font-bold text-[#232563]">
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
          <p className="flex-shrink mx-12 text-4xl text-[#232563]">محصولات </p>
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
      <div className="px-24 pb-8 flex flex-wrap items-center justify-center">
        {data ? (
          <>
            {data.map((i) => {
              return (
                <div
                  key={Math.floor(Math.random() * 10000)}
                  className="flex-shrink-0 m-6 relative overflow-hidden bg-indigo-600 rounded-lg max-w-xs shadow-lg"
                >
                  <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: "scale(1.5)", opacity: 0.1 }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill="white"
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill="white"
                    />
                  </svg>
                  <div className="relative pt-3 px-2 flex items-center justify-center">
                    <div
                      className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{
                        background: "radial-gradient(black, transparent 60%)",
                        transform:
                          "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: 0.2,
                      }}
                    ></div>
                    <Link href={"/product/" + i.route} target="_blank">
                      <Image
                        width={800}
                        height={800}
                        className="relative w-110 rounded-xl"
                        src={i.Picture}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="relative text-white px-6 pb-6 mt-6">
                    {/* <span className="block opacity-75 -mb-1">محصول</span> */}
                    <div className="flex justify-between">
                      <span className="block font-semibold text-xl">
                        {i.Title}
                      </span>
                      <Link href={"/product/" + i.route} target="_blank">
                        <span className=" bg-white rounded-md text-indigo-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
                          مطالعه
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsList;
