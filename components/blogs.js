import Image from "next/image";
import React, { useEffect, useState } from "react";
import card from "../images/card.png";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Blog() {
  const [data, setData] = useState(null);
  const router = useRouter();

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
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            اخرین مقالات
          </h1>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data ? (
            <>
              {data.map((i) => {
                console.log(i)
                return(

                <div key={Math.floor(Math.random()*10000)}>
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src={i.Picture}
                    alt={i.Title}
                  />

                  <div className="mt-auto">
                    <span className="text-blue-500 uppercase">{i.TypeOfContent}</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                      {i.Title}
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {i.ShortDescription}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <a
                          href="#"
                          className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                        >
                          {i.Grouping}
                        </a>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {i.CreateAt}
                        </p>
                      </div>

                      <Link
                        href={'/blog/'+i.route}
                        className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      >
                        مطالعه
                      </Link>
                    </div>
                  </div>
                </div>
                )
              })}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
