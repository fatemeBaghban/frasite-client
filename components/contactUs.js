import { domin, onRun } from "@/pages/api/config";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";

const ContactUs = () => {
  const [data, setData] = useState([]);
  const [social, setsocial] = useState({});
  const postData = () => {
    axios
      .post(onRun + "/information/getup", { Domain: domin })
      .then((response) => {
        setsocial(response.data['Socialmedia'][0]);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postData, []);

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
              تماس با ما{" "}
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
      <div className=" mx-auto bg-white overflow-hidden w-fit max-w-5xl  flex flex-row  mt-2.5  rounded-lg  h-fit shadow-xl border border-gray-200    ">
        {/* md:max-w-2xl */}
        <div className="md:flex">
          <div className="md:shrink-0">
            <div className="h-48 w-full relative object-cover rounded-lg bg-[#232563] md:h-full md:w-64">
              <div className="grid grid-flow-row p-5 pt-5 z-40 ">
                <div className="py-3.5 text-white text-xl font-bold">
                  راه های ارتباطی با ما :
                </div>
                <div className="py-3.5 text-white text-sm mt-1 flex flex-row ">
                  <svg
                    viewBox="0 0 799.566 1000"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="text-white ml-2 mt-1"
                  >
                    <path d="M461.066 560c108-108 147.333-176.667 118-206l-8-8c-20-20-33.667-36-41-48-7.333-12-8.667-30-4-54s21-53.333 49-88c13.333-16 25.667-29 37-39 11.333-10 23-15.333 35-16 12-.667 22-1 30-1s17.667 4.333 29 13c11.333 8.667 19.333 14.667 24 18 4.667 3.333 13.333 11.667 26 25s19.667 20.667 21 22c32 32 30 96.667-6 194s-104 195.333-204 294c-100 100-198.333 168.333-295 205s-161 39-193 7c-1.333-1.333-9-8.667-23-22s-22.333-21.667-25-25c-2.667-3.333-8.667-11.333-18-24s-13.667-23-13-31c.667-8 1.333-18 2-30s5.667-23.667 15-35c9.333-11.333 22-23.667 38-37 28-22.667 51.333-38.333 70-47 18.667-8.667 36.667-9.333 54-2s29 13.333 35 18 19 17 39 37c29.333 29.333 98.667-10.667 208-120" />
                  </svg>
                  {data.Telephone}
                </div>
                <div className="py-3.5 text-white text-sm flex flex-row ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="text-white ml-2 mt-1"
                  >
                    <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                  </svg>
                  {"info@" + data.Domain}
                </div>
                <div className="py-3.5 text-white text-sm flex flex-row ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                    className="text-white ml-2 mt-1"
                  >
                    <path d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                  </svg>
                  {data.Address}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0  z-0 ">
                <div className=" bg-[#834C9E] h-36  rounded-tl-full w-36 relative">
                  <div className=" bg-[#83A3E0] h-24 w-24  rounded-full absolute left-0 top-0 opacity-80"></div>
                </div>
                {social ? (
                  <div className=" absolute bottom-0 left-0 flex  justify-items-center  m-2">
                    {social["twitter"] ? (
                    <Link href={data.Socialmedia[0]["twitter"]}>
                      <svg
                        //   tweeter
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 50 50"
                        data-name="Layer 1"
                        fill="currentColor"
                        className="text-white mx-1"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </Link>
                  ) : null}
                    {/* {data.Socialmedia[0]["linkedin"] ? (
                    <Link href={data.Socialmedia[0]["linkedin"]}>
                      <svg
                        // linkedin
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="text-white mx-1"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </Link>
                  ) : null} */}
                    {/* {data.Socialmedia[0]["telegram"] ? (
                      <Link href={data.Socialmedia[0]["telegram"]}>
                        <svg
                          // telegram
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          className="text-white mx-1"
                        >
                          <path d="M22.265 2.428a2.048 2.048 0 00-2.078-.324L2.266 9.339a2.043 2.043 0 00.104 3.818l3.625 1.261 2.02 6.682a.998.998 0 00.119.252c.008.012.019.02.027.033a.988.988 0 00.211.215.972.972 0 00.07.05.986.986 0 00.31.136l.013.001.006.003a1.022 1.022 0 00.203.02l.018-.003a.993.993 0 00.301-.052c.023-.008.042-.02.064-.03a.993.993 0 00.205-.114 250.76 250.76 0 01.152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 001.241.427 2.054 2.054 0 002.008-1.633l3.263-16.017a2.03 2.03 0 00-.693-1.97zM9.37 14.736a.994.994 0 00-.272.506l-.31 1.504-.784-2.593 4.065-2.117zm8.302 5.304l-4.763-3.69a1.001 1.001 0 00-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 00-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4z" />
                        </svg>
                      </Link>
                    ) : null} */}
                    {social["instagram"] ? (
                      <Link href={social["instagram"]}>
                        <svg
                          //   insta
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          className="text-white mx-1"
                        >
                          <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="p-8">
            <form action="#" method="POST" className="mx-auto mt-1  sm:mt-1">
              <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    نام و نام خانوادگی:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    ایمیل
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    شماره تماس
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    موضوع
                  </label>
                  <div className="mt-2">
                    <select
                      id="subject"
                      name="subject"
                      className="block w-full rounded-md border-0 px-3.5 py-1 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>امورسهام</option>
                      <option>فروش</option>
                      <option>دیگر</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    پیام
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      className="block w-full rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#232563] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
