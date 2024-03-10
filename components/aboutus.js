import Image from "next/image";
import card from "../images/about.png";
import logo from "../images/logo.png";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
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
      <div className=" mx-auto bg-white overflow-hidden w-fit max-w-7xl  flex flex-row  mt-2.5  rounded-lg  h-fit  ">
        <div className="md:flex">
          <div className="p-8 border border-l-0 border-gray-200  rounded-r-lg">
            <div className="uppercase tracking-wide text-sm font-semibold h-20 px-4 bg-white rounded-2xl z-[100]">
              <div className="grid grid-rows-2 grid-flow-col gap-4 w-60 ">
                <div className="row-span-2 col-span-1">
                  <Image className="h-16 w-auto my-1 mr-1" src={logo} alt="" />
                </div>
                <div className="row-span-1">
                  {" "}
                  <p className="text-xl pr-1 border-spacing-x-3.5 text-[#02205F]">
                    {" "}
                    ایساتیس پویا
                  </p>
                </div>
                <div class="col-span-1">
                  {" "}
                  <p className="text-sm  text-[#9C209E]">
                    {" "}
                    گروه مالی و سرمایه گذاری
                  </p>
                  {/* </div> */}
                </div>
              </div>{" "}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1  text-xl font-bold">
                  اعضای هیئت مدیره :
                </div>
                <div className="py-1 text-sm mt-1 flex flex-row ">
                  اعضای هیئت مدیره{" "}
                </div>
                <div className="py-1 text-sm flex flex-row ">
                  اعضای هیئت مدیره{" "}
                </div>
                <div className="py-1 text-sm flex flex-row ">
                  اعضای هیئت مدیره
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium  text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1  text-xl font-bold">مدیر عامل :</div>
                <div className="py-1 text-sm mt-1 flex flex-row ">
                  آقای مدیر عامل
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  تاریخچه شرکت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  شرکت کارگزاری ایساتیس پویا در سال 1384 فعالیت خود را در زمینه
                  بورس و اوراق بهادار شروع نموده و با تکیه بر نیروهای متخصص و
                  ارائه خدمات منظم، تمام توان خود را در راستای تکریم مشتریان
                  بکار گرفته است
                </div>
              </div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-[#232563]">
              <div className="grid grid-flow-row p-2 pt-1 z-40 ">
                <div className="py-1 text-[3232563] text-xl font-bold">
                  زمینه فعالیت:
                </div>
                <div className="py-1 text-[#3232563] text-sm mt-1 flex flex-row ">
                  انواع فولادهای کربنی، عملیات حرارت پذیر، سخت شونده سطحی، میکرو
                  آلیاژها، فنر و ...  مجوز تولید میلگرد فولاد آلیاژی به شماره
                  24134 تاریــخ 86/6/25از اداره کل صنعت و معدن و تجارت و تمدید
                  آن به شماره 42549 تاریخ 1400/7/7  مساحت زمین: 54000 متر مربع
                  مساحت سولـــه ها 24000 متر مربع
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
