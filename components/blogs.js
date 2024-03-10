import { Card } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import card from "../images/card.png";

export default function Blog() {
  return (
    // <div className="container mx-auto p-4">
    //   <div className="flex flex-col md:flex-row">
    //     <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
    //       <h2 className="text-2xl font-bold mb-4">اخبار و مقالات</h2>
    //       <p className="text-gray-700 mb-4">
    //         لورم ایپسوم متن ساختگی با تولید سادگی
    //       </p>
    //       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
    //         مشاهده بیشتر
    //       </button>
    //     </div>
    //     <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 bg-gray-100 rounded-lg shadow-md">
    //       <h2 className="text-2xl font-bold mb-4">
    //         دسته بندی بورس و اوراق بهادار
    //       </h2>
    //       <ul className="list-disc ml-4">
    //         <li className="text-gray-700 mb-2">
    //           دسته بندی بورس و اوراق بهادار
    //         </li>
    //         <li className="text-gray-700 mb-2">
    //           دسته بندی بورس و اوراق بهادار
    //         </li>
    //         <li className="text-gray-700 mb-2">
    //           دسته بندی بورس و اوراق بهادار
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="mt-8">
    //     <h2 className="text-2xl font-bold mb-4">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
    //     </h2>
    //     <p className="text-gray-700 mb-4">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم متن ساختگی با تولید
    //       سادگی نامفهوم متن ساختگی با تولید سادگی نامفهوم
    //     </p>
    //   </div>
    // </div>
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        {/* title */}
        <div className="py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t-2  border-[#232563]"></div>
            <p className="flex-shrink mx-12 text-4xl text-[#232563]">
              اخبار و مقالات{" "}
            </p>
            <div className="flex-grow border-t-2 border-gray-900"></div>
          </div>
          <p className="text-xl text-[#232563]">
            لورم ایپسوم متن ساختگی با تولید سادگی{" "}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 flex flex-row ">
        {Array.from({ length: 4 }).map((i) => (
          <div className="flex flex-col mx-2" key={i}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="relative flex h-36 w-full justify-center rounded-xl bg-white group-hover:opacity-75">
                <Image className="rounded-t-lg " src={card} alt="" />
                <div className=" absolute -bottom-5 flex h-auto w-auto items-center justify-center rounded-lg border-[2px] border-gray-100 bg-white shadow-lg">
                  <div className="h-full w-full rounded-full flex flex-row p-1 text-sm text-gray-700">
                    <p>دسته بندی : بورس اوراق بهادار</p>
                  </div>
                </div>
              </div>
              <div className="p-5 mt-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    لورم ایپسوم متن
                  </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2  font-medium text-center text-[#232563] text-2xl  rounded-lg hover: focus:ring-4 focus:outline-none "
                >
                  مشاهده بیشتر
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
