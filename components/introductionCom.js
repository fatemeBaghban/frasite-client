import Image from "next/image";
import logo from "../images/logo.png";
import img from "../images/aa.png";
import img1 from "../images/bb.png";
import React from "react";

const compony = [
  {
    name: "نام شرکت:",
    role: "گروه مالی و سرمایه گذاری",
  },
  {
    name: "سال تاسیس:",
    role: "1384",
  },
  {
    name: "زمینه فعالیت:",
    role: "مالی و سرمایه گذاری",
  },

  {
    name: "مدیر عامل:",
    role: " سید علی حمد خبیری ",
  },
  {
    name: " سایت:",
    role: "مالی و سرمایه گذاری",
  },
  {
    name: " آدرس:",
    role: "یزد،بلوار جمهوری،ساختمان بورس",
    // 
  },
];

const IntroductionCom = () => {
  const GetData= async=>{

  }
  const [data, setData] = React.useState();
  const position = [51.505, -0.09];
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        {/* title */}
        <div className="py-3 text-center text-4xl font-bold text-[#232563]">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t-2  border-[#232563]"></div>
            <p className="flex-shrink mx-12 text-4xl text-[#232563]">
              معرفی شرکت{" "}
            </p>
            <div className="flex-grow border-t-2 border-gray-900"></div>
          </div>
          <p className="text-xl text-[#232563]">شرکت لورم ایپسوم متن ساختگی </p>
        </div>
        <div className="py-3 mt-2.5 flex w-full p-4 rounded-lg  h-fit shadow-md border border-gray-200 ">
          <div class="md:flex">
            <div class="md:shrink-0">
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm font-semibold h-20 pr-1.5  bg-[#9C209E] rounded-l-3xl shadow-lg rounded-r-2xl z-[100]">
                  <div className="uppercase tracking-wide text-sm font-semibold h-20 px-4  bg-[#F0FCFF] rounded-2xl z-[100]">
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                      <div className="row-span-2 col-span-1">
                        <Image
                          className="h-16 w-auto my-1 mr-1"
                          src={logo}
                          alt=""
                        />
                      </div>
                      <div className="row-span-1">
                        {" "}
                        <p className="text-xl pr-1 pt-2 border-spacing-x-3.5 text-[#02205F]">
                          {" "}
                          ایساتیس پویا
                        </p>
                      </div>
                      <div class="col-span-1">
                        {" "}
                        <p className="text-sm  text-[#9C209E]">
                          {" "}
                          گروه مالی و سرمایه گذاری
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul role="list" className="divide-y divide-gray-100 pt-2">
                  {compony.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between gap-x-6 py-4 bg-gray-50 my-1 rounded-lg px-3"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          {item.role}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="h-fit w-full"></div>
              </div>
            </div>
            <div class="p-2 pt-4">
              <div className="flex flex-row">
                <div class="grid gap-4">
                  <div>
                    <Image
                      className="h-auto max-w-full rounded-xl"
                      src={img}
                      alt=""
                    />
                  </div>

                  <div class="grid grid-cols-4 gap-4 pt-3">
                    {Array.from({ length: 4 }).map((i) => (
                      <div key={i}>
                        <Image
                          className="h-auto max-w-full rounded-xl"
                          src={img1}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionCom;