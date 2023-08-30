import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
export default function Main() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div className="w-full flex flex-col justify-center">
        <h1 className="mb-4">
          <span className="text-5xl text-center lg:text-left block text-bold mb-4">
            {`Hello,`}
            <span className="lg:block">{`I'm Chatjak`}</span>
          </span>
          <span className="text-2xl text-center  sm:tracking-wide font-light">{`I'm Junior fullstack developer in Thailand.`}</span>
        </h1>
        <ul className="flex justify-center lg:justify-normal my-4 ">
          <li className="mx-2 lg:ml-0">
            <Link
              href="https://github.com/Chatjak"
              target="_blank"
              className="text-4xl hover:text-amber-500 duration-300"
            >
              <FaGithubSquare />
            </Link>
          </li>
          <li className="mx-2 ">
            <Link
              href="https://www.instagram.com/nut.chatjak"
              target="_blank"
              className="text-4xl hover:text-amber-500 duration-300"
            >
              <FaInstagramSquare />
            </Link>
          </li>
        </ul>
      </div>
      <div className="main__picture overflow-hidden rounded-tl-[20%] rounded-br-[20%]">
        <Image
          src={"/chatjak.jpg"}
          width={300}
          height={300}
          alt="profile"
          className="heroImg"
        />
      </div>
    </div>
  );
}
