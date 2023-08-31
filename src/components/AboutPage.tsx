import React from "react";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-slate-950 text-2xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-4">
        {`Hello, I'm Chatjak Boonthiang!`}
      </h1>
      <p className="text-slate-950 font-light text-lg mb-4">
        {` Welcome to my website. I'm a 23-year-old. I'm junior Fullstack
        Developer based in Nakhon Ratchasima, Thailand. With a Bachelor's degree
        in Computer Science from Nakhonratchasima Rajabhat University, I've
        honed my skills and knowledge to become a proficient developer ready to
        take on exciting challenges.`}
      </p>
      <h1 className="text-slate-950 text-2xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-4">
        Education
      </h1>
      <p className="text-slate-950 font-light text-lg mb-4">
        {` I hold a Bachelor of Science in Computer Science from Nakhonratchasima Rajabhat University. My academic journey has provided me with a strong foundation in programming concepts and problem-solving skills.`}
      </p>
      <h1 className="text-slate-950 text-2xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-4">
        My Skill
      </h1>
      <ul className="mb-8">
        <li>
          <p>
            <span className="font-medium text-slate-950 mr-2 text-lg">
              ReactJS & Next.js:
            </span>
            <span className="text-slate-950 font-light text-lg">
              Proficient in creating dynamic and responsive user interfaces.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-slate-950 mr-2 text-lg">
              Node.js & Express:
            </span>
            <span className="text-slate-950 font-light text-lg">
              Skilled in developing backend solutions and RESTful APIs.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-slate-950 mr-2 text-lg">
              MongoDB:
            </span>
            <span className="text-slate-950 font-light text-lg">
              Experienced in database design, management, and integration.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span className="font-medium text-slate-950 mr-2  text-lg">
              Tailwind CSS:
            </span>
            <span className="text-slate-950 font-light text-lg">
              Well-versed in crafting sleek and modern UIs with efficient CSS
              frameworks.
            </span>
          </p>
        </li>
      </ul>
      <h1 className="text-slate-950 text-2xl font-bold inline-block pb-1 border-b-4 border-b-amber-400 mb-4">
        Open for Opportunities
      </h1>
      <p className="text-slate-950 font-light text-lg mb-4">
        {` I am actively seeking new opportunities as a Frontend Developer. If you're looking for someone who's not only technically adept but also creatively inclined, I'd love to connect with you!`}
      </p>
      <p className="text-slate-950 font-light text-lg mb-4">
        {`Thank you for visiting my web profile. If you'd like to discuss collaborations, job opportunities, or just want to connect, feel free to get in touch with me.`}
      </p>
    </div>
  );
}
