import Image from "next/image";
import card from "../images/about.png";
import logo from "../images/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { domin, onRun } from "@/pages/api/config";

const AboutUs = () => {
  const [data, setData] = useState({
    AboutUs: "",
    Admin: "",
    Address: "",
    Cataloge: "",
    Date: "",
    Description: null,
    Domain: "",
    FieldOfActivity: "",
    Keywords: null,
    Logo: "",
    Name: "",
    NationalID: "",
    Socialmedia: "",
    Telephone: "",
  });

  const postAboutus = () => {
    axios
      .post(onRun + "/information/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postAboutus, []);
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6" id="about">
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
              درباره ما{" "}
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
      <div className=" mg-12 lg:mx-auto bg-white overflow-hidden w-fit lg:max-w-7xl flex flex-row  mt-2.5 rounded-lg  h-fit  ">
        <div className="md:flex md:my-5">
          <div className="sm:p-8   p-2 border rounded-lg lg:border-l-0 border-gray-200  lg:rounded-r-lg">
            <div className="uppercase tracking-wide text-sm font-semibold h-20 px-4 bg-white rounded-2xl z-[100]">
              <div className="grid grid-rows-2 grid-flow-col gap-4 w-60 ">
                <div className="row-span-2 col-span-1 ">
                  <Image
                    className="h-16 w-auto my-1 mr-1 bg-[#232563] rounded-full p-0.5"
                    src={data.Logo}
                    width={50}
                    height={30}
                    alt=""
                  />
                </div>
                <div className="row-span-1">
                  {" "}
                  <p className="text-xl pr-1 border-spacing-x-3.5 py-2 text-[#02205F]">
                    {" "}
                    {data.Name}
                  </p>
                </div>
              </div>{" "}
            </div>

            <div className="block  text-lg leading-tight font-medium  mt-5 text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1  text-xl font-bold">مدیر عامل :</div>
                <div className="py-1 text-sm mt-1 flex flex-row ">
                  {data.Admin}
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium pt-5 text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  درباره شرکت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  {data.AboutUs}
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium pt-5 text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  زمینه فعالیت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  {data.FieldOfActivity}
                </div>
              </div>
            </div>
          </div>
          <div className="md:shrink-0">
            <Image
              className="hidden h-full w-[660px] object-cover lg:block"
              src={card}
              alt="Modern building architecture"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
