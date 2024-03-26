import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { domin, onRun } from "../api/config";
import { useRouter } from "next/router";
import Header from "@/components/header";
import Footer from "@/components/footer";

const BlogDetails = () => {
  const [data, setData] = useState({
    KeyWord: "",
    Title: "",
    Content: "",
    Grouping: "",
  });
  const router = useRouter();
  const [route, setRoute] = useState();
  const handelSlug = () => {
    setRoute(router.query["slugPrd"]);
  };
  const postBloges = () => {
    if (route !== undefined) {
      axios
        .post(onRun + "/product/get1", { Domain: domin, route: route })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(postBloges, [route]);
  useEffect(handelSlug, [router.query]);
  return (
    <>
      <div className="w-full mx-auto  bg-white">
        {/* <!-- header --> */}
        <div className="h-28 bg-[#232563]">
          <Header />
        </div>

        <div className="pt-10 max-w-5xl mx-auto ">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                {data.Title}{" "}
              </h2>
            </div>

            <Image
              alt=""
              src={data.Picture}
              className="w-full object-cover rounded-3xl p-5"
              width={1000}
              height={350}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-10 md:mx-auto mx-5">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-11/12">
              <h2 className="text-3xl text-gray-800  font-bold  mb-4 ">
                {data.Title}
              </h2>

              <p className="pb-6 font-semibold leading-10 mb-10 my-auto">
                {data.Paragraph}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default BlogDetails;
