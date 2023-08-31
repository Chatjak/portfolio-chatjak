import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
export default function Contact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
      <div className="text-white text-center sm:text-left">
        <h1 className=" text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
          Contact
        </h1>
        <p className="font-light text-lg">
          You can contact me via this email.{" "}
        </p>
        <p className="font-bold text-lg">mr.chatjak@gmail.com</p>
      </div>
      <div className="text-white text-center sm:text-left">
        <h1 className=" text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
          Social
        </h1>
        <ul className="flex justify-center sm:justify-start">
          <li>
            <Link
              href="https://www.facebook.com/Chatjakk/"
              target="_blank"
              className="text-4xl hover:text-amber-500 duration-300"
            >
              <AiFillFacebook />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/NChatjak"
              target="_blank"
              className="text-4xl hover:text-amber-500 duration-300"
            >
              <AiFillTwitterSquare />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
