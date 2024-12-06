"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const pathname = usePathname(); // Using `usePathname` instead of `router`

  // Update background and link color based on the current route
  useEffect(() => {
    if (pathname === "/todo" || pathname === "/my-portfolio") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [pathname]);

  // Toggle navigation menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Add shadow on scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <>
      {/* ........................NAVBAR......................... */}
      <div
        style={{ backgroundColor: navBg }}
        className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/assets/logo.png" // Corrected path
              alt="/"
              width={125}
              height={50}
            />
          </Link>

          {/* ...................MENU-LIST..................... */}
          <div>
            <ul style={{ color: linkColor }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">About</li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* ........................SIDE-MENU.......................... */}
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex justify-between items-center w-full">
                <Link href="/">
                  <Image src="/assets/logo.png" width={87} height={35} alt="/" />
                </Link>
                <div onClick={handleNav} className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Let's build something together</p>
              </div>
            </div>

            <div>
              <ul className="py-4 flex-col">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase hover:border-b">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase hover:border-b">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase hover:border-b">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase hover:border-b">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm uppercase hover:border-b">
                    Contact
                  </li>
                </Link>
              </ul>

              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#FF7043]">Let's Connect</p>

                <div className="flex justify-between items-center w-full my-4 sm:w-[80%]">
                <a href="https://www.linkedin.com/in/ujjwal-duwal" target='_blank' rel="noopener noreferrer" >
                    <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="text-[#FF7043]"/>
                    </div>
                  </a>
                  <a href="https://github.com/uzwal01" target='_blank' rel="noopener noreferrer" >
                  <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub className="text-[#FF7043]"/>
                </div>
                  </a>
                
                <a href="mailto:uzwalduwal07@gmail.com" target='_blank' rel="noopener noreferrer" >
                <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail className="text-[#FF7043]"/>
                </div>
                 </a>
                
                <a href="" target='_blank' rel="noopener noreferrer" >
                <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill className="text-[#FF7043]"/>
                </div> 
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
