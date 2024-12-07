import Image from "next/image";
import React from "react";
import ContactImg from "../public/assets/contact.jpg";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <section id="contact" className=" w-full lg:h-screen">
        <div className="max-w-[1240px] px-2 py-[6rem] mx-auto w-full">
          <p className="uppercase text-xl tracking-widest text-[#FF7043]">
            Contact Me
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">Ujjwal Duwal</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am always available for you. Contact me and let's talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With me</p>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.instagram.com/_ujj_wal_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaInstagram className="text-[#FF7043]" />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/uzwal.duwal.1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaFacebook className="text-[#FF7043]" />
                      </div>
                    </a>

                    <a
                      href="mailto:uzwalduwal07@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail className="text-[#FF7043]" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/uzwal01"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadeo-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub className="text-[#FF7043]" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://formspree.io/f/xpwzezjl"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg border-gray-300"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 text-gray-100 mt-4 rounded-lg hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/#home">
              <div className="rounded-full shadow-lg shadeo-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#FFA726]"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
