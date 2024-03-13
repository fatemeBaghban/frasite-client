import { domin, onRun } from "@/pages/api/config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const [data, setData] = useState([{ Picture: "", Title: "" }]);
  const postData = () => {
    axios
      .post(onRun + "/slider/getup", { Domain: domin })
      .then((response) => {
        console.log("sliderrrrrrr", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postData, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i} className="flex flex-row w-fit h-3/5">
              <div className="relative justify-center rounded-xl bg-white">
                <Image
                  src={i.Picture}
                  className="w-screen h-3/5 "
                  layout="fullWidth"
                  width={1800}
                  height={500}
                  alt={i.Title}
                />
                <div className=" hidden absolute  lg:flex h-auto w-auto items-center justify-center rounded-lg border-[2px] right-32 bottom-32 shadow-lg border-gray-100 bg-white ">
                  <div className=" rounded-full flex flex-row p-1 px-5 text-4xl text-right bold text-gray-800 w-56 h-38">
                    <p>{i.Title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default SlideShow;
