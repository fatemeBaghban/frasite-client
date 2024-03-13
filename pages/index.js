import IntroductionCom from "@/components/introductionCom";
import FrequentlyQuestion from "@/components/faq";
import Blog from "@/components/blogs";
import QuickAccess from "@/components/quickAccess";
import ContactUs from "@/components/contactUs";
import Header from "@/components/header";
import AboutUs from "@/components/aboutus";
import Branches from "@/components/branch";
import SlideShow from "@/components/slideShow";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="inset-x-0 top-0 z-50 shadow-inner">
        <Header />
      </div>
      <div className="bg-white h-3/5">
        <SlideShow />
      </div>
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
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
