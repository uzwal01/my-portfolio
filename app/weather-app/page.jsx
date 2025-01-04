import Image from "next/image";
import React from "react";
import weatherImg from "/public/assets/projects/weather.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
// import Navbar from "@/components/Navbar";
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
              src={weatherImg}
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
              <h2>To-Do-List App</h2>
              <h3>React JS / OpenWeatherMap API</h3>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              A simple live weather application built using React.js that
              fetches real-time weather data for different places worldwide. The
              app leverages the OpenWeatherMap API to provide current weather
              information, including temperature, humidity, wind speed, and
              more.
            </p>
            <Link
              href="https://weather-app-react-taupe-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8 rounded-lg text-gray-100 hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]">
                Demo
              </button>
            </Link>
            <Link
              href="https://github.com/uzwal01/weather-app-react"
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
                  React Js
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  OpenWeatherMap API
                </p>
                <p className="text-gray-600 py-2 items-center flex">
                  <RiRadioButtonFill className="pr-1" />
                  Axios Package
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
