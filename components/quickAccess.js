import Image from "next/image";
import card from "../images/card.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";


const QuickAccess = () => {
  const [data, setData] = useState([{Domain:"",Title:"",Url:""}]);

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
          <p className="text-xl text-[#232563]">
            لورم ایپسوم متن ساختگی با تولید سادگی{" "}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 flex flex-row ">
        {data.map((item) => (
          <div className="flex flex-col mx-2" key={item.Domain}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl ">
              <div className="relative flex h-36 w-full justify-center rounded-xl bg-white">
                <Image className="rounded-xl" src={card} alt="" />
                <div className=" absolute -bottom-5 flex h-auto w-auto items-center justify-center rounded-lg border-[2px] border-gray-100 bg-white shadow-lg">
                  <div className="h-full w-full rounded-full flex flex-row p-1 px-5 text-sm text-gray-700">
                    <p>{item.Title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuickAccess;
