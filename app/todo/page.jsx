import Image from "next/image";
import React from "react";
import todoImg from "/public/assets/projects/Todo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const Todo = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={todoImg}
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
              <h2>To-Do-List App</h2>
              <h3>React JS / Tailwind / Local Storage</h3>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              A responsive and user-friendly task management application built
              with React.js. It allows users to add, mark as complete, and
              delete tasks with data persistence using localStorage. The app
              features a clean and intuitive interface, making it perfect for
              organizing daily activities. Let me know if you'd like to add any
              unique features or a specific focus!
            </p>
            <Link
              href="https://to-do-list-app-five-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8 rounded-lg text-gray-100 hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]">
                Demo
              </button>
            </Link>
            <Link
              href="https://github.com/uzwal01/To-Do-List-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4 rounded-lg text-gray-100 hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]">
                Code
              </button>
            </Link>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  React
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwind
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  Local Storage
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Todo;
