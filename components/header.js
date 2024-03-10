import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../images/logo.png";
import { domin, onRun } from "@/pages/api/config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const navigation = [
  { name: "درباره ما", href: "#" },
  { name: " اخبار و مقالات", href: "#" },
  { name: "سوالات متداول ", href: "#" },
  { name: "تماس با ما", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data, setData] = useState();
  const [quickaccess, setQuickaccess] = useState();


  const postData = () => {
    axios
      .post(onRun + "/information/getup", { Domain: domin })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });



    axios.post(onRun + "/quickaccess/getup", { Domain: domin })
    .then(response=>{
      setQuickaccess(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  };
  useEffect(postData, []);

  return (
    <header className=" sticky bg-white inset-x-0 top-0 z-50 shadow-lg">
      <nav
        className="flex items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="uppercase tracking-wide text-sm font-semibold h-20  bg-white rounded-2xl z-[100]">
            <div className="grid grid-rows-2 grid-flow-col gap-4 w-60 ">
              <div className="row-span-2 col-span-1">
                {data ? (
                  <Image
                    className="h-20 w-auto my-1 mr-1"
                    src={data.Logo}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                ) : null}
              </div>
              <div className="row-span-1 bottom-0">
                <p className="text-xl border-spacing-x-3.5 text-[#02205F]">
                  {data?data.Name:""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-[#232563]"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {quickaccess?
          quickaccess.map(i=>{
            console.log(i)
            return(
              <Link key={i} href={i.Url} className="text-sm font-semibold bg-[#232563] leading-6 text-white px-2 py-2 rounded-2xl ml-2">
            
              {i.Title}
              </Link>
            )
          })

            :null
        }
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  افتتاح حساب
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  شعب ایساتیس
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    // </div>
  );
};
export default Header;
