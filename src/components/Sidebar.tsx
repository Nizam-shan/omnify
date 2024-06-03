"use client";

import Image from "next/image";
import {
  ArrowRight2,
  Calendar,
  Document,
  Element3,
  Folder2,
  Headphone,
  Profile2User,
  Setting2,
  Setting4,
  Star,
  Timer1,
  Triangle,
} from "iconsax-react";
import ProfileImage from "../components/assets/profile.png";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useCentralStore } from "@/Store";
import React, { useState } from "react";
import { Accordian } from "./waitlist/accordian";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`shrink-0 h-screen sticky top-0 overflow-hidden ${
        isCollapsed ? "w-20" : "w-60"
      }`}
    >
      <div className="w-full h-full  bg-[#F8FAFC] border-r">
        {/* logo */}
        <div className="p-4 md:p-6 flex cursor-pointer group items-center gap-2 justify-between">
          <div className="h-7 outline outline-black-300 w-7 flex items-center bg-black justify-center rounded-full from-black-500 to-black-400 text-black">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7627 10.9381C16.8596 10.9381 17.7488 10.047 17.7488 8.94791C17.7488 7.84878 16.8596 6.95776 15.7627 6.95776C14.6658 6.95776 13.7766 7.84878 13.7766 8.94791C13.7766 10.047 14.6658 10.9381 15.7627 10.9381Z"
                fill="white"
              />
              <path
                d="M2.17823 10.9578C3.27512 10.9578 4.16433 10.0668 4.16433 8.96769C4.16433 7.86856 3.27512 6.97754 2.17823 6.97754C1.08134 6.97754 0.192139 7.86856 0.192139 8.96769C0.192139 10.0668 1.08134 10.9578 2.17823 10.9578Z"
                fill="white"
              />
              <path
                d="M4.12525 6.10188C5.22214 6.10188 6.11135 5.21086 6.11135 4.11173C6.11135 3.0126 5.22214 2.12158 4.12525 2.12158C3.02836 2.12158 2.13916 3.0126 2.13916 4.11173C2.13916 5.21086 3.02836 6.10188 4.12525 6.10188Z"
                fill="white"
              />
              <path
                d="M8.96998 4.15157C10.0669 4.15157 10.9561 3.26055 10.9561 2.16142C10.9561 1.06229 10.0669 0.171265 8.96998 0.171265C7.87309 0.171265 6.98389 1.06229 6.98389 2.16142C6.98389 3.26055 7.87309 4.15157 8.96998 4.15157Z"
                fill="white"
              />
              <path
                d="M13.8165 6.10188C14.9134 6.10188 15.8026 5.21086 15.8026 4.11173C15.8026 3.0126 14.9134 2.12158 13.8165 2.12158C12.7196 2.12158 11.8304 3.0126 11.8304 4.11173C11.8304 5.21086 12.7196 6.10188 13.8165 6.10188Z"
                fill="white"
              />
              <path
                d="M13.8165 15.6546C14.9134 15.6546 15.8026 14.7636 15.8026 13.6645C15.8026 12.5653 14.9134 11.6743 13.8165 11.6743C12.7196 11.6743 11.8304 12.5653 11.8304 13.6645C11.8304 14.7636 12.7196 15.6546 13.8165 15.6546Z"
                fill="white"
              />
              <path
                d="M8.96998 17.7244C10.0669 17.7244 10.9561 16.8334 10.9561 15.7343C10.9561 14.6352 10.0669 13.7441 8.96998 13.7441C7.87309 13.7441 6.98389 14.6352 6.98389 15.7343C6.98389 16.8334 7.87309 17.7244 8.96998 17.7244Z"
                fill="white"
              />
              <path
                d="M4.12525 15.6546C5.22214 15.6546 6.11135 14.7636 6.11135 13.6645C6.11135 12.5653 5.22214 11.6743 4.12525 11.6743C3.02836 11.6743 2.13916 12.5653 2.13916 13.6645C2.13916 14.7636 3.02836 15.6546 4.12525 15.6546Z"
                fill="white"
              />
            </svg>
          </div>

          {!isCollapsed && (
            <>
              <h1
                className="text-sm font-bold text-gray-800"
                aria-label="Front Desk Header"
              >
                Front-Desk
              </h1>
              <div className="">
                {/* <h1 className="text-sm font-bold text-gray-800" aria-label="Front Desk Header">Front-Desk</h1> */}
                <p
                  role="button"
                  tabIndex={0}
                  aria-label="Collapse Section"
                  className="cursor-pointer text-blue-500"
                  onClick={toggleCollapse}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                      stroke="#64748B"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 2V14"
                      stroke="#64748B"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="8"
                      y="2"
                      width="6"
                      height="12"
                      rx="1"
                      fill="#64748B"
                    />
                  </svg>
                </p>
              </div>
            </>
          )}
        </div>

        {/* other section */}
        <div className="flex flex-col h-full justify-between">
          {/* top */}
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
            {isCollapsed && (
              <div
                className="px-6 py-2 items-center gap-2 opacity-60 cursor-pointer"
                onClick={() => setIsCollapsed(false)}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>
              </div>
            )}

            {!isCollapsed && (
              <div>
                <Accordian />
              </div>
            )}

            <NavLink href={""} pathname={pathname} isCollapsed={isCollapsed}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {!isCollapsed && "Orders"}
            </NavLink>

            <NavLink href={""} pathname={pathname} isCollapsed={isCollapsed}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_12388)">
                  <path
                    d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_12388">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {!isCollapsed && "Subscriptions"}
            </NavLink>

            <NavLink href={""} pathname={pathname} isCollapsed={isCollapsed}>
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>

              {!isCollapsed && "Calendar"}
            </NavLink>

            <NavLink
              href={"/app/waitlist"}
              pathname={pathname}
              isCollapsed={isCollapsed}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {!isCollapsed && "WaitList"}
            </NavLink>
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium md:px-2 flex justify-between py-4">
              <NavButton
                pathname={pathname}
                href={""}
                isCollapsed={isCollapsed}
              >
                {/* <Setting2 size={16} /> */}
                <Element3 size={16} />
                {!isCollapsed && "Dashboard"}
              </NavButton>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 2H14V6"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66663 9.33333L14 2"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* <hr className="bg-gray-400 mx-2 my-4" /> */}

            {/* bottom */}
            <div className="flex pb-3 justify-between px-4 p-5 md:px-6 items-center cursor-pointer hover:pr-5 duration-200 bg-white">
              <div className="flex items-center gap-2">
                <Image
                  src={ProfileImage}
                  alt="User"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                {!isCollapsed && (
                  <div className=" ">
                    <p className="text-sm font-semibold text-gray-800">
                      Admin name
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      admin@gmail.com
                    </p>
                  </div>
                )}
              </div>

              <button className="text-gray-500">
                <ArrowRight2 size={16} />
              </button>
            </div>
            {/*  */}
            <div className="flex pb-28 justify-between px-4 p-3 md:px-6 items-center cursor-pointer hover:pr-5 duration-200 ">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                {!isCollapsed && (
                  <div className=" ">
                    <p className="text-sm font-semibold text-gray-800">
                      Help center
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      @2024 omnify.Inc.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    pathname: string;
    isCollapsed: boolean;
    children: React.ReactNode;
    onClick?: () => void;
  }
>(({ href, pathname, isCollapsed, children, onClick }, ref) => {
  const isActive = pathname === href;
  return (
    <Link href={href} legacyBehavior>
      <a
        ref={ref}
        className={`flex ${
          isActive ? "text-primary" : ""
        } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
      >
        {children}
      </a>
    </Link>
  );
});
NavLink.displayName = "NavLink";

const NavButton: React.FC<{
  href: string;
  pathname: string;
  disabled?: boolean;
  isCollapsed: boolean;
  children: React.ReactNode;
}> = ({ href, pathname, disabled, isCollapsed, children }) => {
  const isActive = pathname === href;
  return (
    <button
      disabled={disabled}
      className={`flex ${
        isActive ? "text-primary" : "text-black"
      } hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Sidebar;
