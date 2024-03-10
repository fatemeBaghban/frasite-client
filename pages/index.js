import Image from "next/image";
import { Inter } from "next/font/google";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import backImg from "../images/background.png";

import logo from "../images/logo.png";
import IntroductionCom from "@/components/introductionCom";
import FrequentlyQuestion from "@/components/faq";
import Blog from "@/components/blogs";
import QuickAccess from "@/components/quickAccess";
import ContactUs from "@/components/contactUs";
import Header from "@/components/header";
import AboutUs from "@/components/aboutus";
import Branches from "@/components/branch";

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
      <div className="bg-white h-fit px-12 py-5">
        <AboutUs />
      </div>
      {/* </div> */}
    </>
  );
}
