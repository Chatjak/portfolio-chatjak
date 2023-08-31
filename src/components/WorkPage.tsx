import React from "react";
import Item from "./Item";
import { fullstack, frontend } from "../../data/data";
import Link from "next/link";
export default function WorkPage() {
  return (
    <div className="text-slate-950">
      <h1 className="text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
        Fullstack
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {fullstack.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            currentUrl={item.currentUrl}
            backendUrl={item.backendUrl}
            bg={item.bg}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
        Front-end
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {frontend.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            currentUrl={item.currentUrl}
            backendUrl={item.currentUrl}
            bg=""
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
        Other
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          href={`https://github.com/Chatjak`}
          target="_blank"
          className={`w-full  flex flex-col justify-center items-center px-4 py-8 bg-white shadow-md rounded-lg hover:bg-amber-200 mb-8`}
        >
          <span className="text-lg font-semibold">All my project</span>
          <div></div>
        </Link>
      </div>
    </div>
  );
}
