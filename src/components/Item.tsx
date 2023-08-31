import Link from "next/link";
import React, { FC } from "react";

const Item: FC<{
  text: string;
  currentUrl: string;
  backendUrl: string;
  bg: String;
}> = ({ text, currentUrl, backendUrl, bg }) => {
  return (
    <>
      {bg === "" ? (
        <Link
          href={`${currentUrl}`} target="_blank"
          className={`w-full  flex flex-col justify-center items-center px-4 py-8 bg-white shadow-md rounded-lg hover:bg-amber-200 mb-8`}
        >
          <span className="text-lg font-semibold">{text}</span>
          <div></div>
        </Link>
      ) : (
        <div
          className={`w-full  flex flex-col justify-center items-center px-4 py-8 bg-white shadow-md rounded-lg hover:bg-amber-200 mb-8`}
        >
          <span className="text-lg font-semibold">{text}</span>
          <div>
            <Link
              href={currentUrl}
              className={`border-b-2 border-b-amber-400 mr-2 hover:font-semibold`}
            >
              Client
            </Link>
            <Link
              href={backendUrl}
              className={` border-b-2 border-b-amber-400 ml-2 hover:font-semibold `}
            >
              Backend
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
