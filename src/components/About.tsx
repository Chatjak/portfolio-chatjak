import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="text-white">
      <h1 className="text-white text-3xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-8">
        About me
      </h1>
      {/* <p className="text-white text-xl font-semibold mb-4">{`Hello, I'm Chatjak Boonthiang!`}</p> */}
      <p className="text-white  font-light text-lg mb-4">
        {` Welcome to my website. I'm a 23-year-old. I'm junior Fullstack
        Developer based in Nakhon Ratchasima, Thailand. With a Bachelor's degree
        in Computer Science from Nakhonratchasima Rajabhat University, I've
        honed my skills and knowledge to become a proficient developer ready to
        take on exciting challenges.`}
      </p>
      <p className="text-white text-xl font-semibold mb-4">{`My skill:`}</p>
      <ul className="mb-8">
        <li>
          <p>
            <span className="font-medium text-white mr-2 text-lg">
              ReactJS & Next.js:
            </span>
            <span className="text-white font-light text-lg">
              Proficient in creating dynamic and responsive user interfaces.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-white mr-2 text-lg">
              Node.js & Express:
            </span>
            <span className="text-white font-light text-lg">
              Skilled in developing backend solutions and RESTful APIs.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-white mr-2 text-lg">MongoDB:</span>
            <span className="text-white font-light text-lg">
              Experienced in database design, management, and integration.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-white mr-2  text-lg">Tailwind CSS:</span>
            <span className="text-white font-light text-lg">
              Well-versed in crafting sleek and modern UIs with efficient CSS
              frameworks.
            </span>
          </p>
        </li>
      </ul>
      <div className="mb-4 hover:-translate-y-2 duration-300  inline-block">
        <Link href={"/about"} className="readmore">
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}
