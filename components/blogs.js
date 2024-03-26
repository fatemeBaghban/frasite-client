import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Blog() {
  const [data, setData] = useState(null);

  const postBloges = () => {
    axios
      .post(onRun + "/news/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(postBloges, []);

  return (
    <section className="bg-white">
      <div className="container px-  py-10 mx-auto">
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
            <p className="flex-shrink mx-12 text-4xl text-[#232563]">
              اخرین مقالات
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
            <div className="flex-grow border-t-2 border-gray-900" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
          {data ? (
            <>
              {data.map((i) => {
                return (
                  <div key={Math.floor(Math.random() * 10000)}>
                    <Link href={"/blog/" + i.route} target="_blank">
                      <Image
                        width={1000}
                        height={1000}
                        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                        src={i.Picture}
                        alt={i.Title}
                      />
                    </Link>
                    <div className="my-auto pt-2">
                      <span className="text-indigo-600  uppercase">
                        {i.TypeOfContent}
                      </span>

                      <h1 className="mt-4 text-xl font-semibold text-gray-800">
                        {i.Title}
                      </h1>

                      <p className="mt-2 text-gray-500 ">
                        {i.ShortDescription}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <a
                            href="#"
                            className="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500"
                          >
                            {i.Grouping}
                          </a>

                          <p className="text-sm text-gray-500">{i.CreateAt}</p>
                        </div>

                        <Link
                          href={"/blog/" + i.route}
                          target="_blank"
                          className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#232563] rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        >
                          مطالعه
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
    </section>
  );
}
