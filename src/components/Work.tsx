"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
export default function Work() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-900 text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
          Work
        </h1>
      </div>
      <p className="text-lg font-light">
        This is an example of my work. You can click to read more. To see other
        works
        <span className="mb-4 hover:-translate-y-1 duration-300  inline-block ml-2">
          <Link href={"/work"} className="readmore">
            Read more &rarr;
          </Link>
        </span>
      </p>
      <div className="work__box">
        <div className="">
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="py-4">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w1.jpg"}
                  width={200}
                  height={200}
                  alt="work-1"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w2.jpg"}
                  width={200}
                  height={200}
                  alt="work-2"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pb-4">
          <h3 className="text-lg font-semibold mb-4">
            Precision agriculture system in greenhouse with internet of things
          </h3>
          <p className="text-justify mb-4">{`Modern farming has a special way of growing plants called Precision Farming. This helps solve problems that farmers faced before. I use smart devices, like the Internet of Things (IoT), to take care of plants inside closed greenhouses. This new method makes farming easier and better.`}</p>
          <p className="font-semibold mb-2">Tools:</p>
          <ul>
            <li>
              <span className="font-medium mr-2">Flutter:</span>
              <span>Build application for control IoT</span>
            </li>
            <li>
              <span className="font-medium mr-2">IoT:</span>
              <span>Measure temperature, humidity, and soil moisture</span>
            </li>
            <li className="mt-4">
              <Link
                href="https://github.com/Chatjak/greenhouse"
                target="_blank"
                className="text-4xl hover:text-amber-500 duration-300"
              >
                <FaGithubSquare />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="work__box">
        <div className="">
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="py-4">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w4.jpg"}
                  width={200}
                  height={200}
                  alt="work-1"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w5.jpg"}
                  width={200}
                  height={200}
                  alt="work-2"
                  className="rounded-lg shadow-xl "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pb-4">
          <h3 className="text-lg font-semibold mb-4">
            Instagram clone fullstack
          </h3>
          <p className=" mb-4">{`I build instagram clone with backend REST API.it lets you login,make posts,give like,add comments,and fetch information from backend`}</p>
          <p className="font-semibold mb-2">Tools: Next js,express,mongodb </p>
          <Link
            href="https://github.com/Chatjak/greenhouse"
            target="_blank"
            className="text-4xl hover:text-amber-500 duration-300"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
      <div className="work__box mb-4">
        <div className="">
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w6.jpg"}
                  width={300}
                  height={300}
                  alt="work-1"
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex justify-center">
                <Image
                  src={"/assets/w7.jpg"}
                  width={300}
                  height={300}
                  alt="work-2"
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pb-4">
          <h3 className="text-lg font-semibold mb-4">
            American Presidential Estates Capitol Hill
          </h3>
          <p className=" mb-4">{`I build this project for practice front-end.`}</p>
          <p className="font-semibold mb-2">Tools: React.js </p>
          <Link
            href="https://resilient-griffin-775825.netlify.app/"
            target="_blank"
            className="text-4xl hover:text-amber-500 duration-300 inline-block"
          >
            <AiOutlineGlobal />
          </Link>
        </div>
      </div>
    </div>
  );
}
