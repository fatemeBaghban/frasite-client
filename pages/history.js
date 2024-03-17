import { useEffect, useState } from "react";
import { domin, onRun } from "./api/config";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const HistoryTimeLine = () => {
  const [data, setData] = useState([
    {
      Date: "",
      Domain: domin,
      Paragraph: "" || null,
      Picture: "" || null,
      Status: Boolean,
      Title: "",
      Video: "" || null,
      icon:"" || null,
    },
  ]);
  const getHistory = () => {
    axios
      .post(onRun + "/history/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getHistory, []);
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="bg-[#232563] w-full h-28 ">
          <Header />
        </div>
        <div className="w-screen h-screen bg-white  overflow-y-hidden ">
          <div className="container bg-gray-200 mx-auto w-full h-screen my-8 rounded-lg ">
            <div className="relative wrap overflow p-10 h-fit">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
              {data.map((item) => (
                <div key={item}>
                  {/* <!-- right timeline --> */}
                  <div className="mb-8 flex justify-between items-center w-full right-timeline ">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#232563] shadow-xl w-12 h-12  rounded-full">
                      <h1 className="mx-auto  pt-1.5 font-semibold text-lg text-white">
                        {item.Date}
                      </h1>
                    </div>
                    <div className="order-1  bg-[#232563] rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <div className="flex flex-row w-full">
                        {/* <Image
                          alt=""
                          className="text-sm left-0 ml-2 font-medium leading-snug tracking-wide bg-white rounded-full my-auto  text-white text-opacity-100"
                          // src={item.Icon}
                          width={50}
                          height={50}
                        /> */}
                        <h3 className="mb-3 font-bold my-auto text-white text-xl">
                          {item.Title}
                        </h3>
                      </div>
                      <p className="text-sm leading-snug tracking-wide pt-2 text-gray-200 text-opacity-100">
                        {item.Paragraph}
                      </p>
                    </div>
                  </div>

                  {/* <!-- left timeline --> */}
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline px-6 py-4">
                    <div className="order-1 w-5/12"></div>
                    {/* <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                  <h1 className="mx-auto pt-1.5  text-white font-semibold text-lg">
                    1390
                  </h1>
                </div> */}
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12  flex justify-center px-auto">
                      {/* <h3 className="mb-3 font-bold text-white text-xl"></h3> */}
                      {item.Video !== null ? (
                        <video
                          className="w-full h-full rounded-lg shadow-lg"
                          controls
                          preload="none"
                          autoPlay="true"
                        >
                          <source src={item.Video} type="video/mp4" />

                          Your browser does not support the video tag.
                        </video>
                      ) : (item.Picture !==null ? (
                        <Image
                          alt=""
                          className=" w-fit h-28 flex"
                          src={item.Picture}
                          width={1000}
                          height={1000}
                        />
                      ) : (
                        item.Paragraph !==null?(
                        <div className="order-1  bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                          <div className="flex flex-row w-full">
                            {/* <Image
                              alt=""
                              className="text-sm left-0 ml-2 font-medium leading-snug tracking-wide bg-white rounded-full my-auto  text-white text-opacity-100"
                              src={item.Icon}
                              width={50}
                              height={50}
                            /> */}
                            <h3 className="mb-3 font-bold my-auto text-white text-xl">
                              {item.Title}
                            </h3>
                          </div>
                          <p className="text-sm leading-snug tracking-wide pt-2 text-gray-200 text-opacity-100">
                            {item.Paragraph}
                          </p>
                        </div>
                        ):null
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-y-hidden ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HistoryTimeLine;
