import Image from "next/image";
import nama1 from "../images/footer.png";
import nama2 from "../images/footer2.png";
import IntroductionCom from "@/components/introductionCom";
import FrequentlyQuestion from "@/components/faq";
import Blog from "@/components/blogs";
import QuickAccess from "@/components/quickAccess";
import ContactUs from "@/components/contactUs";
import Header from "@/components/header";
import AboutUs from "@/components/aboutus";
import Branches from "@/components/branch";
import SlideShow from "@/components/slideShow";

const navigation = [
  { name: "راهنمای معاملات", href: "#" },
  { name: "آموزش", href: "#" },
  { name: "درباره ما", href: "#" },
  { name: "تماس با ما", href: "#" },
];
export default function Home() {
  return (
    <>
      <div className="sticky bg-white inset-x-0 top-0 z-50 shadow-lg">
        <Header />
      </div>
      <div className="bg-white h-fit">{/* <SlideShow /> */}</div>
      <div className="bg-white h-fit">
        <IntroductionCom />
      </div>
      <div className="bg-white h-fit px-12 py-5">
        <Branches />
      </div>
      <div className="bg-white h-fit px-12 py-5">
        <FrequentlyQuestion />
      </div>
      <div className="bg-white h-fit px-12 py-5">
        <Blog />
      </div>
      <div className="bg-white h-fit px-12 py-5">
        <QuickAccess />
      </div>
      <div className="bg-white h-fit px-12 py-5">
        <ContactUs />
      </div>
      <div className="bg-white h-fit px-12 py-5 pb-10">
        <AboutUs />
      </div>
      <footer>
        <div className="bg-gradient-to-t from-[#212564] to-[#67308F] w-full  flex justify-center h-fit  py-8 ">
          <div className="grid  grid-cols-4 justify-items-center">
            <div className="flex flex-col border-l-2 border-white px-5 justify-center justify-items-center">
              <Image src={nama2} alt="enama" className="w-16 px-1 " />
            </div>
            <div className="flex flex-col border-l-2 border-white px-5  justify-items-center justify-self-stretch">
              <p>راهنما</p>
              <p>دستورالعمل</p>
              <p>سرمایه‌گذاری</p>
              <p>سرمایه‌پذیری</p>
              <p>درباره‌ما</p>
              <p>تماس‌با‌ما</p>
            </div>
            <div className="flex flex-col border-l-2 border-white px-5  justify-items-center justify-self-stretch">
              <p>قوانین و مقررات</p>
              <p>بیانیه ریسک </p>
              <p> سیاست محرمانگی</p>
              <p>قوانین سکو</p>
              <p> منشور تعارضع منافع</p>
              <p>بخشنامه معاف مالیاتی </p>
            </div>
            <div className="px-5 grid  grid-flow-row grid-cols-1  justify-items-center">
              <div className="flex flex-row ">
                <Image src={nama1} alt="enama" className="w-16  px-1 " />
              </div>
              <p className="h-fit"> شبکه های اجتماعی</p>
              <div className="flex flex-row">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-white mx-2"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
                </svg>
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-white mx-2"
                >
                  <path d="M22.265 2.428a2.048 2.048 0 00-2.078-.324L2.266 9.339a2.043 2.043 0 00.104 3.818l3.625 1.261 2.02 6.682a.998.998 0 00.119.252c.008.012.019.02.027.033a.988.988 0 00.211.215.972.972 0 00.07.05.986.986 0 00.31.136l.013.001.006.003a1.022 1.022 0 00.203.02l.018-.003a.993.993 0 00.301-.052c.023-.008.042-.02.064-.03a.993.993 0 00.205-.114 250.76 250.76 0 01.152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 001.241.427 2.054 2.054 0 002.008-1.633l3.263-16.017a2.03 2.03 0 00-.693-1.97zM9.37 14.736a.994.994 0 00-.272.506l-.31 1.504-.784-2.593 4.065-2.117zm8.302 5.304l-4.763-3.69a1.001 1.001 0 00-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 00-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4z" />
                </svg>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-white mx-2"
                >
                  <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>

                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-white mx-2"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM6 13H4V6h2v7zM5 5a1 1 0 110-2 1 1 0 110 2zm8 8h-2V9a1 1 0 10-2 0v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6 11.994 6 13 7.119 13 8.5V13z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
