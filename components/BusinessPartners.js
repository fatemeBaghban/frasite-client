import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "@/pages/api/config";
import Image from "next/image";
import Link from "next/link";

const BusinessPartners = () => {
  const [data, setData] = useState(null);
  const getup = () => {
    axios
      .post(onRun + "/businessPartners/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("dd");
      });
  };

  useEffect(getup, []);

  return (
    <section className="bg-white" id="businesscom">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          شرکای تجاری
        </h1>
        <p className="max-w-4xl mx-auto mt-2 text-center text-gray-500 ">
          شرکای تجاری ما با همکاری در تأمین مواد اولیه ، توسعه بازارهای جدید و
          سرمایه گذاری ، به رشد و بهبود عملکرد شرکت کمک کنند.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {data ? (
            <>
              {data.map((i) => {
                return (
                  <Link href={i.Link} key={Math.floor(Math.random() * 10000)}>
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#232563]">
                      <Image
                        width={50}
                        height={200}
                        className="object-none size-32 rounded-full ring-2 ring-gray-300 p-0.5 bg-white"
                        src={i.Logo}
                        alt=""
                      />
                      <h1 className="mt-4 text-2xl font-semibold text-center text-[#232563] capitalize group-hover:text-white">
                        {i.Name}
                      </h1>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
