import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { domin, onRun } from "@/pages/api/config";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const navigation = [
  { name: "درباره ما", href: "/#about" },
  { name: "سوالات متداول ", href: "/#faq" },
  { name: "تماس با ما", href: "/#contact" },
  { name: "تاریخچه", href: "/history" },
  // { name: " اخبار و مقالات", href: "/#blogs" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data, setData] = useState();
  const [quickaccess, setQuickaccess] = useState();
  const [menu, setMenu] = useState([
    { Title: "", Status: Boolean, route: "" || null, Icone: "" || null },
  ]);

  const postData = () => {
    axios
      .post(onRun + "/information/getup", { Domain: domin })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(onRun + "/quickaccess/getup", { Domain: domin })
      .then((response) => {
        setQuickaccess(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(onRun + "/grouping/getup", {
        Domain: domin,
      })
      .then((response) => {
        console.log("mega menu ", response.data);
        setMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(postData, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-sm shadow-inner">
      <nav
        className="flex items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="uppercase tracking-wide text-sm font-semibold h-20  rounded-2xl z-[100]">
            <div className="grid grid-rows-2 grid-flow-col gap-4 w-60 ">
              <div className="row-span-2 col-span-1">
                {data ? (
                  <Link href="/">
                    <Image
                      className="h-20 w-auto my-1 mr-1"
                      src={data.Logo}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </Link>
                ) : null}
              </div>
              <div className="row-span-1 bottom-0 mt-4">
                <Link href="/">
                  <p className="text-xl border-spacing-x-3.5 text-gray-100">
                    {data ? data.Name : ""}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 scroll-smooth">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-bold leading-6 text-gray-100"
            >
              {item.name}
            </a>
          ))}
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-base font-bold leading-6 text-gray-100">
              <span>اخبار و مقالات</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-80 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg  ">
                  <div className="p-4">
                    {menu.map((item) => (
                      <div
                        key={item.Title}
                        className="group relative flex grow rounded-lg p-4  justify-items-start hover:bg-gray-50"
                      >
                        {item.Icone === null ? null : (
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <div
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            >
                              <Image alt="" src={item.Icone}  width={100} height={100}/>
                            </div>
                          </div>
                        )}
                        <div className="my-auto mx-2">
                          <a
                            href={item.route}
                            className="font-semibold text-black right-2 " 
                          >
                            {item.Title}
                            <span className="absolute inset-0" />
                          </a>
                          {/* <p className="mt-1 text-gray-600">
                            {item.Title}
                          </p> */}
                        </div>
                        {/* <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1.5em"
                          width="1.5em"
                          className="text-black "
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                          />
                        </svg> */}
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {quickaccess
            ? quickaccess.map((i) => {
                return (
                  <Link
                    key={i.Url}
                    target="_blank"
                    href={i.Url}
                    className="text-base font-bold  bg-leading-6 bg-white text-[#232563] px-4 py-2 rounded-xl ml-2"
                  >
                    {i.Title}
                  </Link>
                );
              })
            : null}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              {data ? (
                <Image
                  className="h-8 w-auto my-1 mr-1 bg-[#232563] rounded-full p-1"
                  src={data.Logo}
                  alt=""
                  width={1000}
                  height={1000}
                />
              ) : null}
              {/* <Image className="" src={data.Logo} width={100} height={100} alt="" /> */}
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        اخبار و مقالات
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {menu.map((item) => (
                          <Disclosure.Button
                            key={item.Title}
                            as="a"
                            href={item.route}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.Title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex flex-col">
                {quickaccess
                  ? quickaccess.map((i) => {
                      return (
                        <Link
                          key={i.Url}
                          href={i.Url}
                          target="_blank"
                          className="text-base font-bold  bg-leading-6 bg-white text-[#232563] px-4 py-2 rounded-xl ml-2"
                        >
                          {i.Title}
                        </Link>
                      );
                    })
                  : null}
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
