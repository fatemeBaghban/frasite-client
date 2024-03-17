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
        console.log("e");
      });
  };

  useEffect(getup, []);

  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      {data ? (
        <>
          {data.map((i) => {
            return (
              <div key={Math.floor(Math.random()*10000)} className="flex-shrink-0 m-6 relative overflow-hidden bg-indigo-300 rounded-lg max-w-xs shadow-lg">
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
                <div className="relative pt-10 px-2 flex items-center justify-center">
                  <div
                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{
                      background: "radial-gradient(black, transparent 60%)",
                      transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                      opacity: 0.2,
                    }}
                  ></div>
                  <img
                    className="relative w-110 rounded-xl"
                    src={i.Picture}
                    alt=""
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">محصول</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                      {i.Title}
                    </span>
                    <Link href={i.route}>
                      <span className="block bg-white rounded-full text-indigo-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
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
  );
};

export default ProductsList;
