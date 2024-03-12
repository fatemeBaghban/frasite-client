import { domin, onRun } from "@/pages/api/config";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const SlideShow = () => {
  const [data, setData] = useState({});
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i} className="w-full h-fit">
              <Image src={()=>{}} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default SlideShow;
