import Image from "next/image";
import card from "../../images/card.png";
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
    setRoute(router.query["slug"]);
  };
  const postBloges = () => {
    if (route !== undefined) {
      axios
        .post(onRun + "/news/getup1", { Domain: domin, route: route })
        .then((response) => {
          console.log(response.data);
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
        <Header/>
        </div>

        <div className="pt-10 max-w-5xl mx-auto ">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                {data.KeyWord}{" "}
              </h2>
              <a
                href=""
                className="py-2 text-[#2c2e68] inline-flex items-center font-normal text-base justify-center mb-2"
              >
                دسته‌بندی: {data.Grouping}
              </a>
            </div>

            <Image
              alt=""
              src={card}
              className="w-full object-cover rounded-3xl p-5"
              style="height: 28em;"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-10 md:mx-auto mx-5">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-11/12">
              {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                Sportsman do offending supported extremity breakfast by
                listening. Decisively advantages nor expression unpleasing she
                led met. Estate was tended ten boy nearer seemed. As so seeing
                latter he should thirty whence. Steepest speaking up attended it
                as. Made neat an on be gave show snug tore.
              </div> */}

              <h2 className="text-3xl text-gray-800  font-bold  mb-4 ">
                {data.Title}
              </h2>

              <p className="pb-6 font-semibold leading-10 mb-10 my-auto">{data.Content}</p>
            </div>

            {/* <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <Image
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      Mike Sullivan{" "}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs">
                      {" "}
                      Editor{" "}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 py-3">
                  Mike writes about technology Yourself required no at thoughts
                  delicate landlord it be. Branched dashwood do is whatever it.
                </p>
                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  Follow
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* <!-- footer --> */}

        <Footer />
      </div>
    </>
  );
};
export default BlogDetails;
