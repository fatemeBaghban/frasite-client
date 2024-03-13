import Image from "next/image";
import React, { useEffect, useState } from "react";
import card from "../images/card.png";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Blog() {
  const [data, setData] = useState([
    {
      Content: "",
      Domain: "",
      Grouping: "",
      KeyWord: "",
      Status: Boolean,
      TypeOfContent: "",
      ShortDescription: "",
      route: "",
    },
  ]);
const router=useRouter();
  const postBloges = () => {
    axios
      .post(onRun + "/news/getup", { Domain: domin  })
      .then((response) => {
        console.log("post data", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBlog = () => {
    axios
      .post(onRun + "/news/getup1", { Domain: domin  })
      .then((response) => {
        console.log("get data", response.data);
        setDataaa(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getBlog,[])
  useEffect(postBloges, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
const handleBlogClick=()=>{

router.push(`/blog/${data[0].route}`)
}
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        {/* title */}
        <div className="py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t-2  border-[#232563]" />{" "}
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
              اخبار و مقالات
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
          <p className="text-xl text-[#232563]">صنایع مفتول ایساتیس پویا</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 flex flex-row ">
        <div className="slider-container">
          {/* <Slider {...settings}> */}
          {data.map((i) => (
            <div className="flex flex-col mx-2" key={i}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <div className="relative flex h-36 w-full justify-center rounded-xl bg-white group-hover:opacity-75">
                  <Image className="rounded-t-lg " src={card} alt="" />
                  <div className=" absolute -bottom-5 flex h-auto w-auto items-center justify-center rounded-lg border-[2px] border-gray-100 bg-white shadow-lg">
                    <div className="h-full w-full rounded-full flex flex-row p-1 text-sm text-gray-700">
                      <p>دسته بندی :{i.Grouping}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 mt-5">
                  <Link href="/blog" target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {i.KeyWord}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-sm text-gray-700 ">
                    {i.ShortDescription}...
                  </p>
                  <Link
                    href={`/blog/${i.route}`}
                    target="_blank"
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
}
