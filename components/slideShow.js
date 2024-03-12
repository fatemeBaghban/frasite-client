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
        // console.log("sliderrrrrrr", response.data);
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
    arrows:false,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i} className="flex flex-row w-fit h-fit">
              <Image
                src={i.Picture}
                className="w-screen h-fit "
                layout="fullWidth"
                width={1800}
                height={500}
                alt={i.Title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default SlideShow;
